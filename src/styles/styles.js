import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    background: #DEC9E9;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    scroll-behavior: smooth ;
    
    ::-webkit-scrollbar {
    display: none;
}

`
export const Header = styled.div`
    width: 100vw;
    height: 113px;
    position: absolute;
    top: 0;
    z-index: 2;

    background: #7251B5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`


export const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction || "column"};
    justify-content: ${(props) => props.justify || "center"};
    align-items: ${(props) => props.align || "center"};
    gap: ${(props) => props.gap || "0px"};
`

export const ButtonMenu = styled.button`
    position: absolute;
    right: 93%;
    top: 30%;

    font-size: 35px;

    background: transparent;
    color: #DAC3E8;
    border: none;

    transition: ease-in 0.1s;

    &:hover {
        filter:drop-shadow(0px 0px 5px #f1faee);
        cursor: pointer;
        transform: scale(1.2);
    }

    &:active {
        transform: scale(1.1);
    }
`

export const SearchBar = styled.input`
    width: 646px;
    height: 44px;

    padding: 0px 25px;
    position: absolute;
    top: 30%;
    right: 25%;

    font-family: 'Gorditas', cursive;
    font-size: 20px;
    line-height: 24px;
    color: #7251B5;

    
    background: #DAC3E8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border-style: none;

    ::placeholder{
        color: #7251B5;
    }
`

export const ButtonSearch = styled.button`
    position: absolute;
    left: 72.8%;
    top: 39%;
    font-size: 20px;
    background: transparent;
    color: #7D7D7D;
    border: none;
    
    transition: ease-in 0.1s;

    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }

    &:active {
        transform: scale(1.1);
    }
`
export const ButtonUser = styled.button`
    position: absolute;
    left: 90%;
    top: 30%;

    font-size: 35px;

    background: transparent;
    color: #42258F;;
    border: none;

    transition: ease-in 0.1s;

    &:hover {
        filter:drop-shadow(0px 0px 5px #f1faee);
        cursor: pointer;
        transform: scale(1.2);
    }

    &:active {
        transform: scale(1.1);
    }
`

export const ButtonCart = styled.button`
    position: absolute;
    top: 30%;
    left: 94%;

    font-size: 35px;

    background: transparent;
    color: #42258F;
    border: none;

    transition: ease-in 0.1s;

    &:hover {
        filter:drop-shadow(0px 0px 5px #f1faee);
        cursor: pointer;
        transform: scale(1.2);
    }

    &:active {
        transform: scale(1.1);
    }
`
export const ButtonConheca = styled.button`
    display: block;
    z-index: 0;
    margin-left: 78%;
    margin-top: -12%;
    width: 281px;
    height: 90px;

    background: #A06CD5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    border: none;

    font-family: 'Gorditas';
    font-size: 25px;
    line-height: 30px;
    text-align: center;

    color: #DAC3E8;

    transition: ease-in 0.15s;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        animation: none;
    }
    
    &:active {
        transform: scale(1.02);
    }
`

export const Best = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 7%;
    
    font-family: 'Gorditas';
    font-size: 50px;
    color: #A06CD5;
`

export const Item = styled.div`
    display: flex;
    background-color: #FFF1E6;
    height: 340px;
    width: 220px;
    flex: none;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    
    img {
        max-width: 80%;
        margin: auto;
        border-radius: 15px;
        
    }

    span {
        font-family: 'Gorditas';
        font-size: 16px;
        color: #42258F;
        display: flex;
        justify-content:center;
    }

    .price {
        opacity: 0;
        transition: ease-in 0.3s;
        background-color: #815AC0;
        border-radius: 10px;
        width: 150px;
        padding: 3px;
        color: #e1e1e1;
    }

    &:hover{

        .price {
            opacity: 100;
        }
    }

    border-radius: 30px;
    margin: 25px;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Footer = styled.div`
    width: 100vw;
    height: 113px;
    bottom:0;
    margin-top: 1.5%;

    background: #7251B5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const EmailBar = styled.input`
    width: 484px;
    height: 44px;

    margin-left: 1%;
    padding: 0px 25px;
    /* right: 25%; */

    font-family: 'Gorditas', cursive;
    font-size: 20px;
    line-height: 24px;
    color: #7251B5;

    
    background: #DAC3E8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border-style: none;

    ::placeholder{
        color: #7251B5;
    }
`

export const ButtonSocial = styled.button`
    font-size: 35px;
    padding: 0.5%;

    background: transparent;
    color: #42258F;
    border: none;

    transition: ease-in 0.1s;

    &:hover{
        cursor: pointer;
        transform: scale(1.2);
        filter:drop-shadow(0px 0px 10px #f1faee)
    }

    &:active {
        transform: scale(1.1);
    }

    &:hover .tiktok{
        color: black
    }

    &:hover .facebook {
        color: #023e8a
    }

    &:hover .whatsapp {
        color: #25D366;
    }

    &:hover .twitter {
        color: #1DA1F2;
    }
`

export const ButtonCheck = styled.button`
    font-size: 25px;

    position: relative;
    right: 2.5%;

    background: transparent;
    color: #7D7D7D;
    border: none;
    
    transition: all 0.1s ease-in;

    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }

    &:active {
        transform: scale(1.1);
    }
`

export const ButtonAddFavorite = styled.button`
    color: #815AC0;
    background: transparent;
    margin-bottom: 10px;

    border: none;
    font-size: 30px;
    
    transition: all 0.1s ease-in;
    padding: 0px 4px;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.15);
        color: #c1121f;
    }

    &:active {
        transform: scale(1.08);
    }
`

export const ButtonShare = styled.button`
    color: #815AC0;
    background: transparent;
    margin-bottom: 10px;

    border: none;
    font-size: 30px;
    transition: all 0.1s ease-in;
    padding: 0px 4px;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.15);
        color: #4361ee;
    }

    &:active {
        transform: scale(1.08);
    }
`

export const ButtonAddCart = styled.button`
    color: #815AC0;
    background: transparent;
    margin-bottom: 10px;

    border: none;
    font-size: 30px;
    transition: all 0.1s ease-in;
    padding: 0px 4px;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.15);
        color: #29bf12;
    }

    &:active {
        transform: scale(1.08);
    }
`
export const Pulse = keyframes`
    0% {
    @include transform(scale(.9));
  }
  70% {
    @include transform(scale(1));
  }
    100% {
    @include transform(scale(.9));
  }
`


export const ButtonDirec = styled.button`
    border: none;
    background: transparent;
    font-size: 35px;
    position: relative;
    bottom: 180px;
    cursor: pointer;
    animation: beat 1.5s infinite;
    transition: all 0.1s ease-in;
    color: #7251B5;
    
    &:hover {
        filter:drop-shadow(0px 0px 2px #7251B5);
        transform: scale(1.15);
        animation: none;
    }

    &:active {
        transform: scale(1.08);
    }
`