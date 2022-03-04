import abi from '../abi/ScumbugsNFT';

class EnvUtils {
    constructor() {
        this.env = process.env;
    }

    getNetwork() {
        return this.env.VUE_APP_NETWORK;
    }

    getProviderApiUrl() {
        return `https://${this.env.VUE_APP_NETWORK}.infura.io/v3/${this.env.VUE_APP_INFURA_ID}`;
    }

    getABI() {
        return abi;
    }

    getContractAddress() {
        const network = this.getNetwork();
        if (network === "mainnet") {
            return this.env.VUE_APP_MAINNET_CONTRACT_ADDRESS;
        } else if (network === "rinkeby") {
            return this.env.VUE_APP_RINKEBY_CONTRACT_ADDRESS;
        }
    }

    getInfuraId() {
        return this.env.VUE_APP_INFURA_ID;
    }
    
}

export default new EnvUtils();