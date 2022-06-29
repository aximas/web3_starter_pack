import React, {useEffect, useState} from 'react';
import Web3 from 'web3';
import './App.css';
import {init, mintToken} from './core/services/auth/web3Client';
import {useAppDispatch, useAppSelector} from './core/utils/hooks/reduxHooks';
import {setAddress} from './core/store/auth/auth.slice';
import {getOwnBalance} from './core/utils/helpers/web3/getOwnBalance';


function App() {
    const dispatch = useAppDispatch();
    const [address, chainId, isAuth] = useAppSelector(({auth}) => [auth.address, auth.chainId, auth.isAuth]);
    const [minted, setMinted] = useState<boolean>(false);
    const [balance, setBalance] = useState<string>('0');


    useEffect(() => {
        (async () => {
            await init();
        })();
    }, [])

    useEffect(() => {
        window.ethereum.on('accountsChanged', async ([account]: string[]) => {
            if (account) dispatch(setAddress(account));
            console.log(`Your account changed to ${account}`);
        });
    }, [address]);

    const mint = () => {
        if (isAuth) {
            mintToken(address, chainId).then((tx: any) => {
                console.log('minted', tx);
                setMinted(true);
            }).catch((err: any) => {
                console.log('err', err);
            })
        }
    }

    const fetchBalance = async (address: string) => {
        const value = await getOwnBalance(address);
        if (value) setBalance(value);
    }

    return (
        <div className="App">
            {minted ? <p>Token minted</p> : <button onClick={() => mint()}>Mint token</button>}
            <p>
                Your balance {balance}
            </p>
            <button onClick={() => {
                fetchBalance(address);
            }}>Refresh balance
            </button>
        </div>
    );
}

export default App;