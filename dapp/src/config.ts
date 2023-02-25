import { BrowserWalletConnector, ephemeralConnectorType } from "@concordium/react-components";

export const BROWSER_WALLET = ephemeralConnectorType(BrowserWalletConnector.create);
export const MAX_CONTRACT_EXECUTION_ENERGY = BigInt(30000);

