import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2rem;

  @media (max-width: 800px){
    font-size: 1.875rem;
  }
`;

export const MinutesWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Minute = styled.span``;

export const Divisor = styled.span`
  margin: 0 .1rem;
`;

export const SecondsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Second = styled.span``;