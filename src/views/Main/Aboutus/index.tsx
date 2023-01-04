import React from "react";
import {
  ARTitle, ARSubTitle, ARText, PicPartOut, PicPart, GreybackImg, PicPartLeft, PicPartRight, PicImg
} from "./about.style";
const MainPage = () => {

  return (
    <PicPartOut>
      <PicPart>
        <PicPartLeft>
          <ARTitle>ABOUT US</ARTitle>
          <ARSubTitle>The Full <span>Financial</span> Picture</ARSubTitle>
          <ARText>
            Credit checks miss 85% of data that property owners need to make informed decisions about prospective residents. Rentify links with bank data to create instant insight into the full picture of an applicant's financial health to reduce the risk of non-payments and evictions. Rentify breaks down their bank verified information into an easy to read report.
          </ARText>
        </PicPartLeft>
        <PicPartRight>
          <PicImg src='img/pic.png' alt='' />
        </PicPartRight>
      </PicPart>
      <GreybackImg src='img/greyback.png' alt='' />
    </PicPartOut>
  );
};
export default MainPage;
