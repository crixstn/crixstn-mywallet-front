import styled from "styled-components";

export const HomeLayout = styled.div`
    display: flex;
    padding: 25px;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
`
export const Header = styled.header`
    display: flex;
    justify-content: space-between;

    h1{
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
    }

    ion-icon{
        font-size: 26px;
        color: #FFFFFF;
        cursor: pointer;
    }
`
export const RegisterScreen = styled.div`
    display: flex;
    width: 326px;
    height: 446px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 10px 15px;

    h2{
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
        margin: auto;
    }
`
export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;

    div{
        width: 155px;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        ion-icon{
            font-size: 25px;
            color: #FFFFFF; 
        }

        p{
            font-weight: 700;
            font-size: 17px;
            color: #FFFFFF; 
            text-align: start;
            line-height: 20px;
        }
    }
`