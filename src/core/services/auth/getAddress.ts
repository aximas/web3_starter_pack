export const getAddress = async () => {
    const [address]: string[] = await window.ethereum.request({method: 'eth_requestAccounts'});
    return address;
}
