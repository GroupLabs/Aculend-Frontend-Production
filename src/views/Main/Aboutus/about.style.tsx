import styled from "styled-components";
export const ARTitle = styled.div`
    color: #0085FF;
    letter-spacing: 0.15em;
    font-family: Sans;
    font-weight: 400;
    font-size: 20px;
    line-height: 50px;
    @media screen and (max-width:1180px){
        text-align: center !important;
    }
`;
export const ARSubTitle = styled.div`
    font-family: SansBold;
    font-weight: 700;
    color: #000;
    font-size: 40px;
    line-height: 50px;
    span{
        color: #0085FF;
    }
`;
export const ARText = styled.div`
    font-family: Sans;
    color: #676767;
    font-weight: 400;
    font-size: 16px;
    margin-top: 40px;
    line-height: 30px;
`;
export const PicPartOut = styled.div`
    width: 100vw;
    display: flex;
    position: relative;
    justify-content: center;
    margin-top: 140px;
`;
export const PicPart = styled.div`
    width: 95%;
    max-width: 1220px;
    display: flex;
    z-index: 2;
    height: 539px;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:1180px){
        height: auto;
        flex-direction: column !important;
    }
`;
export const GreybackImg = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    @media screen and (max-width:1300px){
        height: 100% !important;
    }
`;
export const PicPartLeft = styled.div`
    width: 500px;
    @media screen and (max-width:1180px){
        text-align: center !important;
        width: 100% !important;
    }
`;
export const PicPartRight = styled.div`
    @media screen and (max-width:1180px){
        margin-top: 30px !important;
    }
`;
export const PicImg = styled.img`
    @media screen and (max-width:700px){
        width: 500px !important;
    }
    @media screen and (max-width:550px){
        width: 400px !important;
    }
    @media screen and (max-width:450px){
        width: 300px !important;
    }
`;