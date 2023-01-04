import React from "react";
import {
  AboutPartOut, AboutPart, ALeft, ARight, ALLeft, AImg, ALRight, ARTitle, ARSubTitle, ARText
} from "./fullfinancial.style";
const MainPage = () => {
  return (
    <AboutPartOut>
      <AboutPart>
        <ALeft>
          <ALLeft>
            <AImg src="img/about1.png" alt='' draggable={false} />
            <AImg src="img/about2.png" alt='' draggable={false} />
          </ALLeft>
          <ALRight>
            <AImg src="img/about3.png" alt='' draggable={false} />
          </ALRight>
        </ALeft>
        <ARight>
          <ARTitle>ABOUT US</ARTitle>
          <ARSubTitle>The Full <span>Financial</span> Picture</ARSubTitle>
          <ARText>
            Credit checks miss 85% of data that property owners need to make informed decisions about prospective residents. Rentify links with bank data to create instant insight into the full picture of an applicant's financial health to reduce the risk of non-payments and evictions. Rentify breaks down their bank verified information into an easy to read report.
          </ARText>
        </ARight>
      </AboutPart>
    </AboutPartOut>
  );
};
export default MainPage;
