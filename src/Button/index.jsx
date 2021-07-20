import React from 'react';
import { StyledButton } from './styles';

export default function Button({backColor, children}) {
  return (
   <StyledButton backColor={backColor}>
     {children}
   </StyledButton>
  )
}
