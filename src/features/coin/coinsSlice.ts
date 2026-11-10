import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { Coin } from '../../app/types'

// Create a thunk to fetch coins from Api
const ApiUrl = import.meta.env.VITE_COINSTATS_API_URL
const ApiKey = import.meta.env.VITE_COINSTATS_API_KEY

export const fetchCoins = createAsyncThunk(
    'coins/fetchCoins',
    async () => {
        const response = await fetch(ApiUrl, {
            headers: {
                'X-API-KEY': ApiKey,
            }
        });
        const data = await response.json();
        console.log('Coins from the API: ', data)
        return data.result
    }
);

//Create Coins Slice

interface CoinState {
    coins: Coin[];
    loading: "idle" | "pending" | "fulfilled" | "rejected"
}


const initialState: CoinState = {
    coins: [],
    loading: "idle"
}


const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
coinDisplay: (state, action) => {
    const coin = state.coins.find(
        coin => coin.symbol === action.payload
    )
    if(coin) {
        coin.display = true;
    }
}
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCoins.pending, (state) => {
            state.loading = "pending"
        })
        .addCase(fetchCoins.fulfilled, (state, action) => {
            state.coins = action.payload;
            state.loading = "fulfilled"
        })
        .addCase(fetchCoins.rejected, (state) => {
            state.loading = "rejected"
        })
    }

})

export const { coinDisplay } = coinsSlice.actions
export default coinsSlice.reducer