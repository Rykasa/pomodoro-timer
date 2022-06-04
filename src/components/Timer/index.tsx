import { FiPlay, FiX } from "react-icons/fi"
import * as C from './styles';

export function Timer(){
  return(
    <C.Container>
          <C.TimerHeading>Timer</C.TimerHeading>
          <C.TimeWrapper>
            <C.ProgressBar />
            <C.Countdown>26:04</C.Countdown>
          </C.TimeWrapper>
        <C.BtnContainer>
          <C.Button>
            <FiX />
          </C.Button>
          <C.Button>
            <FiPlay />
          </C.Button>
        </C.BtnContainer>
      </C.Container>
  )
}