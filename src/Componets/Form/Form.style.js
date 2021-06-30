import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

export const Input = styled.input`
  margin:5px 5px;
  border-bottom: 1px solid black;
  width: 29%;

  ::placeholder {
  color: mediumseagreen;
  font-size: 16px;
}
  `;

export const Button = styled.button`
  margin: 5px auto;
  display: block;
  padding: 0px 12%;
  :hover{
    background-color: #008000	;
  }
`;
export const Edit = styled.p`
  color: #008000	;
`;
export const Cadas = styled.p`
color: #044554;
`;