import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: { address: string, isAuth: boolean, chainId: string } = {
    address: '',
    isAuth: false,
    chainId: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAddress: (state, action: PayloadAction<string>) => {
            return {...state, address: action.payload}
        },
        setAuth: (state, action: PayloadAction<boolean>) => {
            return {...state, isAuth: action.payload}
        },
        setChainId: (state, action: PayloadAction<string>) => {
            return {...state, chainId: action.payload}
        }
    }
})

export const {actions: {setAddress, setChainId, setAuth}, reducer: authReducer} = authSlice;