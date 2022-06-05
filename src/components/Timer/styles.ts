import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

export const TimerHeading = styled.h2`
  color: #fff;
  letter-spacing: .1rem;
  text-transform: capitalize;
  font-size: 1.75rem;
  margin-top: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 800px){
    font-size: 1.5rem;
  }
`;

export const BreakTitle = styled.span`
  color: #fff;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6rem;

  @media (max-width: 800px){
    margin: 5rem;
  }
`;

export const ProgressBar = styled.div<{isActive: boolean, hadBreak: boolean}>`
  background-color: transparent;
  border: 2px solid #ccc;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  position: absolute;

  @media (max-width: 800px){
    width: 150px;
    height: 150px;
  }

  :before{
    content: '';
    position: absolute;
    width: 130%;
    height: 130%;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid #fff;
    
    transform: translate(-50%, -12%) scale(0);
    animation: ${({isActive, hadBreak}) => isActive && !hadBreak ? 'pulse 2s ease-in-out infinite' : 'none'};

    @keyframes pulse{
      0%{
        transform: translate(-50%, -12%) scale(1);
      }
      100%{
        transform: translate(-50%, -12%) scale(.8);
      }
    }
  }

`;

export const Countdown = styled.span`
  color: #fff;
`;

export const BtnContainer = styled.div`
  margin-top: 2rem;

  @media (max-width: 800px){
    margin-top: 1rem;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  padding: .8rem;
  border-radius: 50%;
  border: 2px solid transparent;
  width: 70px;
  height: 70px;  
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  transition: all .3s ease-in-out;
  
  .play-icon{
    margin-left: .28rem;
    opacity: 0.9;
  }

  &:hover,
  &.active{
    border-color: #fff;

    .play-icon{
      opacity: 1;
    }
  }
`;