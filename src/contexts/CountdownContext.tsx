import { useEffect, useState, createContext, ReactNode } from "react"

interface CountdownProviderProps {
  children: ReactNode;
}

interface CountdownContextData {
  isActive: boolean;
  minutes: number;
  seconds: number;
  startCountdown: () => void;
}

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({children}: CountdownProviderProps){
  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)

  useEffect(()=>{
    if(isActive && time > 0){
      setTimeout(() =>{
        setTime(time - 1)
      }, 1000)
    }
  }, [isActive, time])
  
  function startCountdown(){
    setIsActive(true)
  }

  const minutes = Math.floor(time / 60)
  const seconds = time % 60


  return(
    <CountdownContext.Provider value={{ isActive, minutes, seconds, startCountdown }}>
      {children}
    </CountdownContext.Provider>
  )
} 


