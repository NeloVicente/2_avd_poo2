import styled from 'styled-components';


const ButtonStyles = styled.button`
color : #000000;
font-weight:600;
:hover{
    background-color: ${(props) => (props.background ? props.background : '#008000')};
  }

`;
export default ButtonStyles;