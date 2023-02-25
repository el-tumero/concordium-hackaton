import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useConnect, useConnection, WalletConnectionProps } from '@concordium/react-components'
import { WalletConnectorButton } from './WalletConnectorButton'
import { BROWSER_WALLET } from './config'
import { Contract } from './Contract'

function App(props:WalletConnectionProps) {

  const { activeConnector, network, connectedAccounts, genesisHashes } = props;
  const { connection, setConnection, account, genesisHash } = useConnection(connectedAccounts, genesisHashes);
  const { connect, isConnecting } = useConnect(activeConnector, setConnection);
  const [started, setStarted] = useState<boolean>(false)

  useEffect(() => {
    if(activeConnector){
      connect()
      setStarted(true)
    }
  }, [activeConnector])


  return (
    <div className="App">
      <WalletConnectorButton {...props} connection={connection} connectorType={BROWSER_WALLET} connectorName={"Browser Wallet"} />
      { started &&
        <Contract network={network} connection={connection} connectedAccount={account}></Contract>
      }
      
    </div>
  )
}

export default App
