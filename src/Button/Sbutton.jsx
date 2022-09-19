import styled, { css } from "styled-components";

function Sbutton({ children }){
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
    background: #070707;
    color:#ffffff;
    opacity: 0.8;
    transition: .5s;

    &:active,
    &:hover,
    &:focus{
        background:#eeeeee;
        color:#070707;
        opacity: 1;
        transition: .5s;
        border-color:black;
        border-width: 1px;
    }
`;

export default Sbutton;