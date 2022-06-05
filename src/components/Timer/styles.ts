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
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

export const TimeWrapper = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6rem;
`;

export const ProgressBar = styled.div`
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  position: absolute;
`;

export const Countdown = styled.span`
  color: #fff;
  z-index: 10;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2.5rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
`;