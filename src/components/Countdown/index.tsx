import { useCountdown } from '../../hooks/useCountdown'
import * as C from './styles'

export function Countdown(){

  const { minutes, seconds} = useCountdown()
  
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')
  
  return(
      <C.Container>
        <C.MinutesWrap>
          <C.Minute>{minuteLeft}</C.Minute>
          <C.Minute>{minuteRight}</C.Minute>
        </C.MinutesWrap>
        <C.Divisor>:</C.Divisor>
        <C.SecondsWrap>
          <C.Second>{secondLeft}</C.Second>
          <C.Second>{secondRight}</C.Second>
        </C.SecondsWrap>
      </C.Container>
  )
}