import styled, { css } from "styled-components";

function  Button({nametag,children}){
    return (<StyledButton className={nametag}>{children}</StyledButton>);
}

const StyledButton = styled.button`
    margin: 12px;
    border: solid 0.5px #dddddd;
    cursor:pointer;
    font-size:12px;
    padding: 4px 6px;
    height: 36px;
    width: 36px;
    border-radius: 6px;
    background: #dddddd;
    color:#090909;

    &:active,
    &:hover,
    &:focus{
        background:#cccccc;
    }
`;

export default Button;