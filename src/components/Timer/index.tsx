import { FiPlay, FiX } from "react-icons/fi"
import { useCountdown } from "../../hooks/useCountdown";
import { Countdown } from "../Countdown";
import * as C from './styles';

export function Timer(){

  const { isActive, startCountdown, stopCountdown, hadBreak,  } = useCountdown()

  return(
    <C.Container>
          <C.TimerHeading>Timer</C.TimerHeading>
          {hadBreak && <C.BreakTitle>Take a break</C.BreakTitle>}
          <C.TimeWrapper>
            <C.ProgressBar isActive={isActive} hadBreak={hadBreak} />        
            <C.Countdown>
              <Countdown />
            </C.Countdown>
          </C.TimeWrapper>
        <C.BtnContainer>
            {isActive ? (
              <C.Button onClick={stopCountdown}  className={isActive ? 'active' : ''}>
                <FiX />
              </C.Button>
            ) : (
              <C.Button onClick={startCountdown} className={isActive ? 'active' : ''}>
                <FiPlay className='play-icon' />
              </C.Button>
            )}
        </C.BtnContainer>
      </C.Container>
  )
}