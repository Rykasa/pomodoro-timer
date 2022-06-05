import { useContext } from 'react'
import { CountdownContext } from '../contexts/countdownContext'

export function useCountdown(){
  const context = useContext(CountdownContext)
  
  return context
}