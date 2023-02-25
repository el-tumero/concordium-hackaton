import { BrowserWalletConnector, ephemeralConnectorType } from "@concordium/react-components";

export const BROWSER_WALLET = ephemeralConnectorType(BrowserWalletConnector.create);