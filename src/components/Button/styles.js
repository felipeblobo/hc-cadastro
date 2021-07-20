import styled from 'styled-components';


export const StyledButton = styled.button`
    background-color:${(props) => props.backColor};
    width: 15rem;
    padding: 1rem 1rem;
    border: none;
    border-radius: 40px;
    margin-right: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    color: #e8e5e5;


    &:hover {
      filter: brightness(1.2)
    }
`;