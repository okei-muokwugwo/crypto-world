import type { Coin } from '@/app/types'


interface CoinProps {
    coin: Coin;
}


const CoinCard = ({ coin }: CoinProps) => {

    return (
        <div className='mx-auto my-4 flex max-w-sm gap-x-4 items-center rounded-xl p-6 bg-white shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10'>
            <div>
                <h2>{coin.name}</h2>
                <img src={coin.icon} alt={coin.name} />
            </div>
            <div className='px-2'>
                <p><strong>Market Capitalization:</strong> {coin.marketCap}</p>
                <p><strong>Volume: </strong>{coin.volume}</p>
                <p><strong>Price:</strong> {coin.price}</p>
                <p>{coin.websiteUrl}</p>
            </div>
        </div>
    )
}

export default CoinCard