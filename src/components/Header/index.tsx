import { FiClock } from 'react-icons/fi'
import * as C from './styles'

export function Header(){
  return(
    <div>
      <C.Header>
        <C.Title>Pomodoro</C.Title>
        <FiClock />
      </C.Header>
    </div>
  )
}