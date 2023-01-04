import styled from "styled-components";

export const Top = styled.div`
    width: 100vw;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    position: relative;
    background: linear-gradient(98.28deg, #002140 0%, #24517C 100.25%, #FFFFFF 100.25%);
`;
export const TopBody = styled.div`
    max-width: 1200px;
    width: 95%;
    padding: 88px 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:1200px){
        flex-direction: column !important;
    }
`;
export const Topleft = styled.div`
    width: 600px;
    @media screen and (max-width:1200px){
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        order: 2;
        margin-top: 30px;
        text-align: center;
    }
`;
export const TopRight = styled.div``;

export const Toptitle = styled.h1`
    font-family: SansBold;
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
    color: #FFFFFF;
    span{
        color: #0085FF;
    }
    @media screen and (max-width:580px){
        font-size: 40px !important;
        line-height: 40px !important;
    }
`;
export const TopText = styled.div`
    font-family: Sans;
    font-weight: 400;
    color: rgba(255,255,255,.3);
    font-size: 16px;
    line-height: 30px;
    margin-top: 30px;
`;
export const TopBtn = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 40px;
`;
export const LearnBtn = styled.div`
    width: 146px;
    height: 46px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e5f2ff;
    cursor: pointer;
    color: #0085ff;
    font-family: Sans;
    font-weight: 600;
    font-size: 18px;
`;
export const BookBtn = styled.div`
    width: 161px;
    height: 46px;
    border-radius: 10px;
    background-color: #0085ff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Sans;
    font-size: 18px;
    font-weight: 18px;
    color: #fff;
`;
export const Toplines = styled.img`
    position: absolute;
    right: -80px;
    z-index: 1;
    top: 0;
`;
export const TRImg = styled.img`
    @media screen and (max-width:1200px){
        width: 400px !important;
    }
    @media screen and (max-width:450px){
        width: 300px !important;
    }
`;