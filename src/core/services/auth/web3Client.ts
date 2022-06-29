import Web3 from 'web3';
import {AbiItem} from 'web3-utils'
import {Contract} from 'web3-eth-contract';

import * as NFTContractsBuild from './../../../NFT.json';
import {checkWeb3} from './checkWeb3';
import {getAddress} from './getAddress';
import {store} from '../../store/store';
import {setAddress, setAuth, setChainId} from '../../store/auth/auth.slice';
import {getChainId} from '../../utils/helpers/web3/getChainId';

console.log(NFTContractsBuild.abi);


const providerUrl = Web3.givenProvider || 'http://localhost:8546';
export const web3 = new Web3(providerUrl);

export const init = async () => {

    const isWeb3 = await checkWeb3();
    if (!isWeb3) return;

    const address = await getAddress();
    if (address) store.dispatch(setAddress(address));

    const networkId = await getChainId();
    if (networkId) store.dispatch(setChainId(networkId.toString()));

    console.log('networkId', networkId);

    if (address && networkId) store.dispatch(setAuth(true));
};

export const mintToken = (selectedAccount: string, chainId: string) => {
    const nftContract = new web3.eth.Contract(NFTContractsBuild.abi as AbiItem[], NFTContractsBuild.networks['1656502060566'].address as string);

    return nftContract.methods.mint(selectedAccount).send({from: selectedAccount});
}


