import { ConnectorType, useWalletConnectorSelector, WalletConnection, WalletConnectionProps } from '@concordium/react-components';

interface Props extends WalletConnectionProps {
    connection: WalletConnection | undefined
    connectorType: ConnectorType
    connectorName: string
}

export function WalletConnectorButton(props: Props) {
    const { connection, connectorType, connectorName } = props
    const { isSelected, isConnected, isDisabled, select } = useWalletConnectorSelector(connectorType, connection, props)

    if(isConnected) return(
        <button onClick={select}>Disconnect</button>
    )

    return(
        <button onClick={select}>Connect</button> 
    )

    // return (<></>)
}