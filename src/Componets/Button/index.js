import React from 'react';
import ButtonStyle from './Button.styles';

const Button = (props) => {
    const { children } = props;
    return (
        <ButtonStyle className='Button' {...props}>
            {children}
        </ButtonStyle>
    );
}

export default Button;