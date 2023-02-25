import React, { useEffect, useState } from 'react';
import { Info, Network, useContractSelector, WalletConnection, withJsonRpcClient } from '@concordium/react-components';
import { AccountAddress, CcdAmount, ContractContext, InvokeContractResult, ModuleReference, AccountTransaction, signTransaction, AccountTransactionType } from '@concordium/web-sdk';
import { Buffer } from 'buffer';
import { MAX_CONTRACT_EXECUTION_ENERGY } from './config';


type InvokeContractResultReturnValue = InvokeContractResult & { returnValue: string }

interface Props {
    network: Network;
    connection: WalletConnection | undefined;
    connectedAccount: string | undefined;
}

export function Contract({ connection, connectedAccount }: Props) {
    const {selected, isLoading}= useContractSelector(connection?.getJsonRpcClient(), "3432");

    const [message, setMessage] = useState<string>()
    const [typedMessage, setTypedMessage] = useState<string>()

    
    useEffect(() => {
        if(selected && connection){
            withJsonRpcClient(connection, async rpc => {                
                const ctx:ContractContext = {
                    contract: {index: BigInt("3432"), subindex: 0n},
                    method: "test.view",
                    amount: new CcdAmount(0n)
                }

                const response:unknown = await rpc.invokeContract(ctx)
                const resultHex = response as InvokeContractResultReturnValue
                const result = Buffer.from(resultHex.returnValue, 'hex')
                setMessage(result.toString())
            })
        }
    }, [selected])

    function contractUpdatePayload(amount: CcdAmount, contract: Info, method: string) {
        return {
            amount,
            address: {
                index: contract.index,
                subindex: BigInt(0),
            },
            receiveName: `${contract.name}.${method}`,
            maxContractExecutionEnergy: MAX_CONTRACT_EXECUTION_ENERGY,
        };
    }




    async function changeMessage(){
        if(connection && connectedAccount && selected){

            const moduleRef = selected.moduleRef
            const rawModuleSchema = "//8DAQAAAAQAAAB0ZXN0AQAUAAEAAAAHAAAAbWVzc2FnZRYCAgAAAAYAAABjaGFuZ2UEFAABAAAABwAAAG1lc3NhZ2UWAhUBAAAAEAAAAFBhcnNlUGFyYW1zRXJyb3ICBAAAAHZpZXcBFAABAAAABwAAAG1lc3NhZ2UWAgA"

            const result = await connection.signAndSendTransaction(
                connectedAccount,
                AccountTransactionType.Update,
                contractUpdatePayload(new CcdAmount(BigInt(0)), selected, 'change'),
                {"message": typedMessage},
                rawModuleSchema
            );

            console.log(result)
        }
    }
  
    return (
       

        <div>
            <p>Message on chain:</p>
            {message}
            <br />
            <br />
            <input type="text" onChange={(e) => setTypedMessage(e.target.value)} />
            <br />
            <button onClick={changeMessage}>Set new message</button>
            {/* {selected?.name} */}
            {/* {selected?.methods} */}
        </div>
    )
}


