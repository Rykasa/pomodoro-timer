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