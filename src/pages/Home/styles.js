import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-top: 4rem;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  
`;

export const Title = styled.h1`
  font-size: 4rem;

  @media(max-width: 720px) {
    text-align: center; }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  max-width: 30rem;
  margin: 2rem;
  line-height: 1.8rem;
`;

export const ButtonContainer = styled.div`
  @media(max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    Button {
      margin-bottom: 2rem;
    }

  }
`;