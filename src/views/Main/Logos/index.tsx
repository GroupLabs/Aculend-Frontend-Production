import React from "react";
import {
  LogosLine, LogoItem, LogoTitle, LogoItemOut, LogosPart, LogoPartout
} from "./logos.style";
const MainPage = () => {

  return (
    <LogoPartout>
      <LogosPart>
        <LogoTitle>SOME OF OUR TRUSTED CLIENTS</LogoTitle>
        <LogosLine>
          <LogoItemOut>
            <LogoItem src='img/logo1.png' alt='' />
          </LogoItemOut>
          <LogoItemOut>
            <LogoItem src='img/logo2.png' alt='' />
          </LogoItemOut>
          <LogoItemOut>
            <LogoItem src='img/logo3.png' alt='' />
          </LogoItemOut>
          <LogoItemOut>
            <LogoItem src='img/logo4.png' alt='' />
          </LogoItemOut>
          <LogoItemOut>
            <LogoItem src='img/logo5.png' alt='' />
          </LogoItemOut>
          <LogoItemOut>
            <LogoItem src='img/logo6.png' alt='' />
          </LogoItemOut>
        </LogosLine>
      </LogosPart>
    </LogoPartout>
  );
};
export default MainPage;
