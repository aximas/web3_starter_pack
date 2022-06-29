import {web3} from '../../../services/auth/web3Client';
import {AbiItem} from 'web3-utils';

const erc20Abi: AbiItem[] = [
    {
        'constant': true,
        'inputs': [
            {
                'name': '_owner',
                'type': 'address'
            }
        ],
        'name': 'balanceOf',
        'outputs': [
            {
                'name': 'balance',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    }
]

export const erc20 = () => {
    return new web3.eth.Contract(erc20Abi, '0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02')
}

