import {web3} from '../../../services/auth/web3Client';

export const getChainId = async () => {
    return await web3.eth.net.getId()
}