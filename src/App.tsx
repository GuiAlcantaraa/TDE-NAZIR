import './styles/main.css'
import { GameBanner } from './components/GameBanner'
import * as Dialog from '@radix-ui/react-dialog'
import logo from './assets/Logo-nlw-esports.svg'
import { CreateAdBanner } from './components/CreateAdBanner'
import { CreateAdModal } from './components/CreateAdModal'

import primeiro from '../src/assets/game-1.png'
import segundo from '../src/assets/game-2.png'
import terceiro from '../src/assets/game-3.png'
import quarto from '../src/assets/game-4.png'
import quinto from '../src/assets/game-5.png'
import sexto from '../src/assets/game-6.png'



function App() {
  return (
    <div className='max-w-[980px] mx-auto flex flex-col items-center my-20'>
      <img
        className='max-w-sm'
        src={logo}
        alt=""
      />

      <h1 className='text-5xl text-white font-black mt-20'>
        Tudo sobre seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>jogo</span> favorito está aqui.
      </h1>


      <div className='grid grid-cols-6 gap-6 mt-4'>

        <GameBanner
          bannerUrl={primeiro}
          title='League of Legends'
          adsCount={35}
        />
        <GameBanner
          bannerUrl={segundo}
          title='Dota 2'
          adsCount={20}
        />
        <GameBanner
          bannerUrl={terceiro}
          title='CSGO'
          adsCount={55}
        />
        <GameBanner
          bannerUrl={quarto}
          title='Apex legends'
          adsCount={13}
        />
        <GameBanner
          bannerUrl={quinto}
          title='Fortnite'
          adsCount={43}
        />
        <GameBanner
          bannerUrl={sexto}
          title='World WarCraft'
          adsCount={15}
        />

      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>

  )
}

export default App
