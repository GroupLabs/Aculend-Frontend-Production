import styled from "styled-components";

export const FooterOut = styled.div`
    width: 100%;
    background-color: #11102E;
    display: flex;
    justify-content: center;
    `;
export const Footer = styled.div`
    padding: 100px 150px 50px 150px;
    max-width: 1440px;
    width: 95%;
    @media screen and (max-width:1270px){
        padding: 100px 50px 50px 50px !important;
    }
`;
export const FooterTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width:768px){
        flex-direction: column !important;
        align-items: center !important;
    }
`;
export const FooterBottom = styled.div`
    display: flex;
    font-family: Sans;
    margin-top: 80px;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:650px){
        flex-direction: column !important;
    }
    @media screen and (max-width:450px){
        margin-top: 40px !important;
    }

`;
export const FBLeft = styled.div`
    display: flex;
    color: #fff;
    @media screen and (max-width:650px){
        gap: 30px !important;
    }
    @media screen and (max-width:450px){
        display: flex !important;
        flex-direction: column !important;
        gap: 10px !important;
        width: 100% !important;
        align-items: flex-start !important;
    }
`;
export const FBRight = styled.div`
    @media screen and (max-width:650px){
        margin-top: 50px !important;
    }
`;
export const FBLItem = styled.div`
    margin-right: 38px;
    font-size: 18px;
    @media screen and (max-width:650px){
        margin-right: 0 !important;
        text-align: center !important;
    }
`;
export const FTLeft = styled.div`
    
`;
export const FTRight = styled.div`
    font-family: Inter;
    min-width: 115px;
    margin-left: 100px;
    @media screen and (max-width:768px){
        width: 100% !important;
        margin-left: 0 !important; 
        margin-top: 50px !important;
    }
`;
export const FTRTitle = styled.div`
    color: #0085ff;
    font-size: 17px;
`;
export const FTRItem = styled.div`
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    margin-top: 21px;
`;
export const LeftTitle = styled.div`
    color: #fff;
    font-family: Inter;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: -0.44px;
    @media screen and (max-width:450px){
        font-size: 25px !important;
    }
`;
export const LeftText = styled.div`
    margin-top: 20px;
    font-family: Inter;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.231;
    color: rgba(255,255,255,0.3);
`;
export const GetBtn = styled.div`
    color: #fff;
    background-color: #0085ff;
    border-radius: 10px;
    width: 148px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 18px;
    margin-top: 50px;
`;