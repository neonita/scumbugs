import Web3 from "web3";
import Web3Modal from "web3modal";
import EnvUtils from "../utils/env.utils";
import ContractService from "../services/contract.service";

// Custom providers
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";

class WalletService {
    constructor() {
        this.networks = {
            "rinkeby": 4,
            "mainnet": 1
        };
        this.selectedNetwork = EnvUtils.getNetwork();
        this.selectedNetworkId = this.networks[this.selectedNetwork];
        const providerOptions = {
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    infuraId: EnvUtils.getInfuraId()
                }
            },
            walletlink: {
                package: WalletLink,
                options: {
                    appName: "Scumbugs Webapp",
                    infuraId: EnvUtils.getInfuraId(),
                    chainId: this.selectedNetworkId,
                }
            }
        };
        this.web3Modal = new Web3Modal({
            network: this.selectedNetwork,
            providerOptions
        });
    }

    isConnected() {
        return Boolean(this.web3);
    }

    async connect() {
        const provider = await this.web3Modal.connect();
        this.web3 = new Web3(provider);
    }

    async getNetwork() {
        if (!this.isConnected()) {
            return null;
        } else {
            const networkId = await this.web3.eth.net.getId();
            return Object.keys(this.networks).find(key => this.networks[key] === networkId);
        }
    }

    async mint(amount) {
        if (this.isConnected()) {
            const abi = EnvUtils.getABI();
            const from = this.web3.currentProvider.selectedAddress;
            const nonce = await this.web3.eth.getTransactionCount(from, 'latest');
            const weiValue = await ContractService.getUnitPrice();
            const to = EnvUtils.getContractAddress();
            const contract = new this.web3.eth.Contract(abi, to);
            const tx = {
                'from': from,
                'to': to,
                'nonce': nonce,
                'value': weiValue * amount,
                'data': contract.methods.mintNFT(amount).encodeABI()
            };
            await this.web3.eth.sendTransaction(tx);
        } else {
            console.log("Not connected! Cant mint!");
        }
    }

}

export default new WalletService();