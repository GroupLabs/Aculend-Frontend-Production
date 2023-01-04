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
export const IndusPartOut = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 140px;
`;
export const IndusPart = styled.div`
    width: 95%;
    max-width: 1220px;
`;
export const IndusSub = styled.div`
    font-family: SansBold;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: #000000;
    margin-bottom: 20px;
    span{
        color: #0085FF;
    }
    @media screen and (max-width:1180px){
        text-align: center !important;
    }
`;
export const Indusbody = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width:800px){
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
    }
`;
export const IndusCardImg = styled.img`
    margin-right: 38px;
    @media screen and (max-width:530px){
        margin-right: 0 !important;
    }
`;
export const IndusCardRight = styled.div`
    @media screen and (max-width:530px){
        margin-top: 20px !important;
    }
`;
export const IndusCardRightText = styled.div`
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    color: #646464;
    margin-top: 10px;
`;
export const IndusCardRightTitle = styled.div`
    color: #2f2c4a;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    font-size: 24px;
`;
export const IndusCard = styled.div<{ box?: boolean, border?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 566px;
    max-height: 182px;
    padding: 40px 43px;
    background-color: #fff;
    border: ${(props) => props.border && "1px solid #E1E8EE"};
    border-radius: 14px;
    box-shadow: ${(props) => props.box && "14px 22px 52px -12px rgba(127, 127, 127, 0.13)"};
    @media screen and (max-width:1250px){
        width: auto !important;
        height: auto !important;
    }
    @media screen and (max-width:1100px){
        padding: 30px !important;
    }
    @media screen and (max-width:530px){
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
    }
`;