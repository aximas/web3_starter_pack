export const checkWeb3 = async () => {
    if ('undefined' !== window.ethereum) {
        const addresses: string[] = await window.ethereum.request({method: 'eth_requestAccounts'});
        if (addresses.length) return true;
        else console.log('Please unlock your metamask');
    } else {
        console.log('Please install web3 or web3 wallet like a metamask')
    }
}