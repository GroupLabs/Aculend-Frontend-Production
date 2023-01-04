import styled from "styled-components";

export const MainOut = styled.div`
    width: 324px;
    position: fixed;
    top: 0;
    overflow-y: auto;
    left: 0;
    background: linear-gradient(83.98deg, #002140 -6.73%, #24517C 117.84%, #FFFFFF 117.84%);
    height: 100vh;
    transition: all .3s ease-in-out;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    @media screen and (max-width:1280px){
        left: ${(props) => props.show ? 0 : "-324px"};
    }
`;
export const MainTop = styled.div`
    /* width: 100%; */
`;
export const MainBottom = styled.div``;
export const LogoImg = styled.img`
    margin-right: 20px;
`;
export const LogoPart = styled.div`
    color: #fff;
    display: flex;
    font-family: Sans;
    font-weight: 700;
    align-items: center;
    font-size: 24px;
`;
export const BorderLine = styled.div`
    border: 1px solid rgba(226, 232, 240, 0.2);
`;
export const ManPart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ManImg = styled.img`
    border-radius: 10px;
    margin-right: 17px;
    width: 55px;
    height:55px;
`;
export const ManRight = styled.div`

`;
export const MenuPart = styled.div`

`;
export const Item = styled.div`
    background: ${(props) => props.sel && "rgba(255, 255, 255, 0.07)"};
    border-radius: 8px;
    color: ${(props) => props.sel ? "#00A3FF" : "rgba(255, 252, 254, 0.5)"};;
    letter-spacing: 0.1px;
    cursor: pointer;
    display: flex;
    font-family: Sans;
    /* justify-content: center; */
    padding: 15px 0 15px 29px;
    margin-bottom: 10px;
    align-items: center;
`;
export const AccPart = styled.div`
    background: rgba(255, 255, 255, 0.07);
    border-radius: 8px;
    padding: 33px 26px 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Title = styled.div`
    letter-spacing: 0.1px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 700;
    font-family: Roboto;
    font-size: 18px;
`;
export const Sub = styled.div`
    letter-spacing: 0.1px;
    color: rgba(255, 255, 255, 0.5);
    font-style: normal;
    font-weight: 400;
    width: 90%;
    margin-top: 20px;
    margin-bottom: 25px;
    font-family: Roboto;
    font-size: 14px;
`;
export const GoBtn = styled.div`
    background: #0085FF;
    border-radius: 10px;
    height: 46px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100%;
    font-size: 18px;
    font-family: Sans;
    font-weight: 600;
`;
export const SetPart = styled.div`
    letter-spacing: 0.1px;
    color: rgba(255, 252, 254, 0.5);
    font-style: normal;
    font-weight: 500;
    font-family: Roboto;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
`;
export const ManTop = styled.div`
    font-family: Roboto;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.1px;
    color: #fff;
`;
export const ManBottom = styled.div`
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    color: rgba(255,255,255,.5);
    margin-top: 12px;
`;
export const LogoOut = styled.div`
    padding: 39px 0 40px;
    display: flex;
    justify-content: center;
`;
export const ManOut = styled.div`
    padding: 33px 0 37px;
`;
export const MenuOut = styled.div`
    padding: 46px 36px 31px;
`;
export const SetOut = styled.div`
    padding: 57px 0 50px;
    display: flex;
    justify-content: center;
`;
export const AccOut = styled.div`
    padding: 0 36px 32px 31px;
`;