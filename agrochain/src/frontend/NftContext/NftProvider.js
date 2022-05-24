import React, { useReducer } from "react";
import { createContext } from "react";

export const NftContext = createContext();

const NftProvider = ({ children }) => {
    const initialState = {
        marketplace: {},
        nft: {},
        account: '',
        balance: 0,
        isLoading: false
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_ACCOUNT':
                return { ...state, account: action.payload };
            case 'SET_MARKETPLACE':
                return { ...state, marketplace: action.payload };
            case 'SET_NFT':
                return { ...state, nft: action.payload };
            case 'SET_BALANCE':
                return { ...state, balance: action.payload };
                case 'SET_LOADING':
                    return { ...state, isLoading: action.payload };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const setAccount = (account) => {
        dispatch({ type: 'SET_ACCOUNT', payload: account })
    }
    const setMarketplace = (account) => {
        dispatch({ type: 'SET_MARKETPLACE', payload: account })
    }
    const setNFT = (account) => {
        dispatch({ type: 'SET_NFT', payload: account })
    }
    const setBalance = (account) => {
        dispatch({ type: 'SET_BALANCE', payload: account })
    }
    const setIsLoading = (account) => {
        dispatch({ type: 'SET_LOADING', payload: account })
    }
    return (
        <NftContext.Provider value={{
            account: state.account,
            marketplace: state.marketplace,
            nft: state.nft,
            balance: state.balance,
            isLoading: state.isLoading,
            setAccount,
            setMarketplace,
            setNFT,
            setBalance,
            setIsLoading
        }}>
            {children}
        </NftContext.Provider>
    )
};

export default NftProvider;
