import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { fetchCoins } from '@/features/coin/coinsSlice'
import CoinCard from './CoinCard'


const CoinList = () => {
    const coins = useAppSelector(state => state.coins.coins)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCoins())
    }, [dispatch])

    
    return(
        <div className='grid grid-flow-col grid-rows-6 gap-4'>
            
            { coins.map(coin => (
                <CoinCard key={coin.id} coin={coin} />
            ))}

        </div>
    )
}


export default CoinList;