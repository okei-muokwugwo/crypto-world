import CoinList from '@/features/coin/CoinList'
import '@/App.css'


export const App = () => {
  return(
    <div>
      <h1>Welcome! <span className='italic text-teal-500'>Crypto World</span></h1>
      <CoinList />
    </div>
  )
}