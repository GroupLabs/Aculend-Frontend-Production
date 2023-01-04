import styled from "styled-components";

export const LogosPart = styled.div`
    text-align: center;
    margin-top: 58px;
    max-width: 1200px;
    width: 95%;
`;
export const LogoTitle = styled.div`
    color:#B2B7BE;
    font-family: Sans;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`;
export const LogosLine = styled.div`
    width: 100%;
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:950px){
        flex-wrap: wrap !important;
        justify-content: center !important;
    }
`;
export const LogoItemOut = styled.div`
    @media screen and (max-width:950px){
        width: 200px !important;
        padding: 0 0 20px 0 !important;
    }
`;
export const LogoItem = styled.img``;
export const LogoPartout = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;