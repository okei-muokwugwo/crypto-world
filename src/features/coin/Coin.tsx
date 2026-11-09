import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchCoins } from './coinsSlice'

const Coin = () => {

    const coins = useAppSelector(state => state.coins)

    console.log('Coinlist:', coins)
    const dispatch = useAppDispatch()

    useEffect(()=> {
       dispatch(fetchCoins())
    }, [])


    return(
        <div>
            <h2>Coin Lists: </h2>
        </div>
    )
}

export default Coin