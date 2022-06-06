import { useEffect, useState, createContext, ReactNode } from "react"

interface CountdownProviderProps {
  children: ReactNode;
}

interface CountdownContextData {
  isActive: boolean;
  hadBreak: boolean;
  minutes: number;
  seconds: number;
  startCountdown: () => void;
  stopCountdown: () => void;
}

let countdownTimeout: NodeJS.Timeout

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({children}: CountdownProviderProps){
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const [hadBreak, setHadBreak] = useState(false)

  useEffect(()=>{
    if(isActive && time > 0){
      countdownTimeout = setTimeout(() =>{
        setTime(time - 1)
      }, 1000)
    }else if(isActive && time === 0){
      setHasFinished(true)
      setIsActive(false)
      new Audio('/notification.mp3').play()
    }
  }, [isActive, time])

  useEffect(() =>{
    if(hasFinished && !hadBreak){
      setTime(5 * 60)
      setIsActive(true)
      setHasFinished(false)
      setHadBreak(true)
      const delay = new Date().getTime() + 2000
      while(parseInt(new Date().toString()) < delay){}
    }else if(hasFinished && time === 0){
      setTime(25 * 60)
      setHasFinished(false)
      setHadBreak(false)
    }
  }, [hasFinished])
  
  function startCountdown(){
    setIsActive(true)
  }

  function stopCountdown(){
    clearTimeout(countdownTimeout)
    setTime(25 * 60)
    setIsActive(false)
    setHasFinished(false)
    setHadBreak(false)
  }

  const minutes = Math.floor(time / 60)
  const seconds = time % 60


  return(
    <CountdownContext.Provider value={{
      isActive,
      hadBreak,
      minutes, 
      seconds, 
      startCountdown, 
      stopCountdown 
    }}>
      {children}
    </CountdownContext.Provider>
  )
} 


