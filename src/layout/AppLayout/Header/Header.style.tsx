import styled from "styled-components";

export const HeaderOut = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
`;
export const HeaderMain = styled.div`
    top: 0;
    left: 0;
    position: relative;
    z-index: 100;
    background-color: #fff;
    max-width: 1200px;
    width: 95%;
    align-items: center;
    height: 50px;
    display: flex;
    justify-content: space-between;
`;
export const HeaderLeft = styled.div`
    font-family: 'Sans';
    font-style: normal;
    font-weight: 100;
    cursor: pointer;
    font-size: 24px;
    display: flex;
    align-items: center;
    line-height: 29px;
    color: #000000;
`;
export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width:1040px){
        display:none !important;   
    }
`;
export const HeaderLogo = styled.img`
        margin-right: 8px;
`;
export const HeaderMiddle = styled.div`
    display: flex;
    @media screen and (max-width:1040px){
        display:none !important;   
    }
`;
export const Item = styled.div<{ col?: boolean }>`
    font-family: Sans;
    font-weight: 100;
    margin: 23px;
    font-size: 17px;
    cursor: pointer;
    color: ${(props) => props.col ? "#0085ff" : "#000"};
    :hover{
        color: #0085ff;
    }
`;
export const LoginBtn = styled.div`
    border-radius: 10px;
    border: 2px solid #11102F;
    width: 150px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #11102F;
    cursor: pointer;
    font-size: 18px;
    font-weight: 100;
    font-family: Sans;
    line-height: 40px;
`;
export const SignUpBtn = styled.div`
    margin-left: 15px;
    background-color: #11102F;
    border-radius: 10px;
    width: 150px;
    height: 35px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    font-family: Sans;
    font-weight: 100;
    color: #fff;
    font-size: 18px;
    @media screen and (max-width:1040px){
        margin-left: 0 !important;
        margin-top: 10px !important;
        width: 100%;
    }
`;
export const ResHeader = styled.div`
    position: absolute;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    right: 0;
    top: 65px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width:1040px){
        display: none !important;
    }
`;
export const HeaderItem = styled.div`
    color: #fff;
    font-family: Inter;
    cursor: pointer;
    font-size: 22px;
    margin-bottom: 15px;
`;