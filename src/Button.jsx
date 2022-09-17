import styled, { css } from "styled-components";

function Button({ children }){
    return (
    <StyledButton>{children}</StyledButton>
    );
}

let StyledButton = styled.button`
    margin: 12px;
    border: solid 0.5px #dddddd;
    cursor:pointer;
    font-size:12px;
    padding: 4px 6px;
    height: 36px;
    width: 36px;
    border-radius: 6px;
    background: #eeeeee;
    color:#090909;
    opacity: 0.5;
    transition: .5s;

    &:active,
    &:hover,
    &:focus
    &:after{
        background:rgba(255, 80, 105, .5);
        opacity: 1;
        transition: .5s;
    }
`;

export default Button;