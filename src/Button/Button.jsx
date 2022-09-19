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
    background: blue;
    color:#ffffff;
    opacity: 0.8;
    transition: .5s;

    &:active,
    &:hover,
    &:focus
    &:after{
        background:rgba(255, 255, 255, .7);
        color:rgba(0, 0, 0, 1);
        font-size:14px;
        opacity: 1;
        transition: .5s;
    }
`;

export default Button;