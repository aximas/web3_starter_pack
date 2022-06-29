import {erc20} from './erc20';
import {web3} from '../../../services/auth/web3Client';

export const getOwnBalance = (address: string) => {
    return erc20().methods.balanceOf(address).call().then((balance: string) => {
        return web3.utils.fromWei(balance)
    });
}
