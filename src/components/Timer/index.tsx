import { FiPlay, FiX } from "react-icons/fi"
import { Countdown } from "../Countdown";
import * as C from './styles';

export function Timer(){
  return(
    <C.Container>
          <C.TimerHeading>Timer</C.TimerHeading>
          <C.TimeWrapper>
            <C.ProgressBar />
            <C.Countdown>
              <Countdown />
            </C.Countdown>
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