import { useEffect, useState } from 'react'
import GameBanner from './components/GameBanner'
import CreateAdBanner from './components/CreateAdBanner'
import logo from './assets/logo.svg'
import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'
import Input from './components/Form/input'
import CreateAdModal from './components/CreateAdModal'

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then((res) => res.json())
      .then((data) => setGames(data))
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-gradient bg-clip-text">duo</span>{' '}
        está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((e) => (
          <GameBanner
            key={e.id}
            title={e.title}
            bannerUrl={e.bannerUrl}
            adsCount={e._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
