import styled, { css } from "styled-components";

function  Button({children}){
    return <StyledButton >{children}</StyledButton>
}

const StyledButton = styled.button`
    margin: 0;
    border: solid 0.5px;
    cursor:pointer;
    font-size:12px;
    padding: 2px 4px;
    border-radius: 6px;
    background: #0d6efd;
    color:#ffffff;

    &:active,
    &:hover,
    &:focus{
        background:#025ce2;
    }
`;

export default Button;