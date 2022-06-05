import { FiClock, FiX, FiPlay, FiPause } from 'react-icons/fi'
import { Countdown } from './components/Countdown'
import { Header } from './components/Header'
import { Timer } from './components/Timer'
import { CountdownProvider } from './contexts/countdownContext'

export function App() {
  return(
    <CountdownProvider>
      <Header />
      <Timer />
    </CountdownProvider>
  )
}