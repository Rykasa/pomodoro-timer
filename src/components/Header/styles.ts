import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  background-color: var(--color-1);
  width: 100%;
  color: tomato;
  height: 100px;
  font-size: 1.9rem;

  @media (max-width: 800px){
    font-size: 1.5rem;
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: .1rem;

  @media (max-width: 800px){
    font-size: 1.5rem;
  }
`;