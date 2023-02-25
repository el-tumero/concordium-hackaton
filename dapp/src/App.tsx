import './App.css'

import { WalletConnectionProps, useConnection, useConnect, ConnectorType } from '@concordium/react-components'
import WalletConnectorButton from './WalletConnectorButton';
import { BROWSER_WALLET } from './config';

function App(props: WalletConnectionProps) {

  const { activeConnector, network, connectedAccounts, genesisHashes, activeConnectorType, } = props;
  const { connection, setConnection, account, genesisHash } = useConnection(connectedAccounts, genesisHashes);
  const { connect, isConnecting } = useConnect(activeConnector, setConnection);

  return (
    <div className="App">
     <WalletConnectorButton connection={connection} connectorType={BROWSER_WALLET} connectorName={"Browser Wallet"} {...props} />
    </div>
  )
}

export default App
