import Web3 from "web3";
import EnvUtils from '../utils/env.utils.js';

class ContractService {

    constructor() {
        const providerApiUrl = EnvUtils.getProviderApiUrl();
        this.web3 = new Web3(providerApiUrl);
        const contractAddress = EnvUtils.getContractAddress();
        const abi = EnvUtils.getABI();
        this.contract =  new this.web3.eth.Contract(abi, contractAddress);
    }

    weiToEth(wei) {
        return Web3.utils.fromWei(wei, 'ether');
    }

    async getUnitPrice() {
        return await this.contract.methods.unitPrice().call();
    }

    async getNftsRemaining() {
        const supply = await this.getSupply();
        const currentTokenId = await this.getCurrentTokenId();
        return supply - currentTokenId - 1;
    }

    async getSupply() {
        return await this.contract.methods.supply().call();
    }

    async getMaxAmount() {
        return await this.contract.methods.maxAmount().call();
    }

    async getCurrentTokenId() {
        return await this.contract.methods.currentTokenId().call();
    }

    async getTokenURI(tokenId) {
        try {
            return await this.contract.methods.tokenURI(tokenId).call();
        } catch(e) {
            return "tokenURI not Found";
        }
    }
    
}

export default new ContractService();