import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  height: 2.5rem;
  font-family: "Nunito", sans-serif;
  font-size: 1.2rem;
  border-radius: 1rem;
  border: 1px solid #055f89;
  padding: 0.5rem 1rem;

  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  font-family: "Nunito", sans-serif;
  font-size: 1.2rem;
  border-radius: 1rem;
  border: 1px solid #055f89;
  padding: 0.5rem 1rem;
  resize:vertical;

  &:focus {
    outline: none;
  }
`;

export const Success = styled.h3`
    margin: 1rem 0;
    background-color: #18ca8b;
    padding: .7rem;
    border-radius: 10px;
`
