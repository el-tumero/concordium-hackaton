import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Network, WalletConnectionProps, WithWalletConnector } from '@concordium/react-components';

const testnet: Network = {
    name: 'testnet',
    genesisHash: '4221332d34e1694168c2a0c0b3fd0f273809612cb13d000d5c2e00e85f50f796',
    jsonRpcUrl: 'https://json-rpc.testnet.concordium.com',
    ccdScanBaseUrl: 'https://testnet.ccdscan.io',
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WithWalletConnector network={testnet}>
      {(props) => <App {...props} />}
    </WithWalletConnector>
  </React.StrictMode>,
)
