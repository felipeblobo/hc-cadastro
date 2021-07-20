import styled from "styled-components";

export const Form = styled.form`
  width: 35rem;
`
export const DataForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`
export const Label = styled.label`
  font-size: 1.4rem;
  margin-bottom: .5rem;
  color: #055f89;
`
export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
  border-radius: 1rem;
  border: 1px solid #055f89;
  padding: .5rem 1rem;

  &:focus {
    outline: none;
  }
`;