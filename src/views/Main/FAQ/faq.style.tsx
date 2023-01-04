import styled from "styled-components";
export const FAQpart = styled.div`
    max-width: 1220px;
    width:95%;
`;
export const FAQpartout = styled.div`
    width: 100vw;
    display: flex;
    margin: 100px 0 80px 0;
    justify-content: center;
`;
export const Faqsub = styled.div`
    color: #0085ff;
    font-family: Sans;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.15em;
    @media screen and (max-width:640px){
        text-align: center !important;
        width: 100% !important;
    }
`;
export const Faqtitle = styled.div`
    color: #000;
    font-family: SansBold;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 40px;
    span{
        color: #0085ff;
    }
    @media screen and (max-width:640px){
        text-align: center !important;
        width: 100% !important;
        line-height: 40px !important;
        margin-top: 15px !important;
    }
`;
export const FAQCard = styled.div`
    border: 1px solid #E1E8EE;
    box-sizing: border-box;
    margin-top: 20px;
    width: 100%;
    position: relative;
    padding: 35px 40px;
    border-radius: 14px;
    @media screen and (max-width:430px){
        padding: 30px !important;
    }
`;
export const FAQLeft = styled.div`
    color: #2f2c4a;
    font-size: 24px;
    font-family: Inter;
    line-height: 30px;
    font-weight: 600;
    @media screen and (max-width:430px){
        font-size: 20px !important;
        line-height: 25px !important;
    }
`;
export const FAQRight = styled.div`
    min-width: 29px;
    min-height:29px;
    margin-left: 30px;
    height: 29px;
    background-color: #676767;
    border-radius: 2px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
`;
export const FAQText = styled.div`
    font-family: Inter;
    font-weight: 400;
    margin-top: 30px;
    color: #656464;
    font-size: 16px;
    top: 30px;
`;
export const FAQTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;