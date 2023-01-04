import React from "react";
import {
  ARTitle, IndusPartOut, IndusPart, IndusSub, Indusbody, IndusCardImg, IndusCardRight, IndusCardRightText, IndusCardRightTitle, IndusCard
} from "./allindustry.style";
const MainPage = () => {
  return (
    <IndusPartOut>
      <IndusPart>
        <ARTitle>ABOUT US</ARTitle>
        <IndusSub>Underwriting for all <span>industries</span></IndusSub>
        <Indusbody>
          <IndusCard box={true} border={false}>
            <IndusCardImg src='img/Icon.png' alt='' draggable={false} />
            <IndusCardRight>
              <IndusCardRightTitle>Property</IndusCardRightTitle>
              <IndusCardRightText>
                Lorem ipsum dolor sit amet, consectetur adipiscing élit. Ornare sed vitae pharetra.
              </IndusCardRightText>
            </IndusCardRight>
          </IndusCard>
          <IndusCard box={false} border={true}>
            <IndusCardImg src='img/Icon.png' alt='' draggable={false} />
            <IndusCardRight>
              <IndusCardRightTitle>Property</IndusCardRightTitle>
              <IndusCardRightText>
                Lorem ipsum dolor sit amet, consectetur adipiscing élit. Ornare sed vitae pharetra.
              </IndusCardRightText>
            </IndusCardRight>
          </IndusCard>
          <IndusCard box={true} border={false}>
            <IndusCardImg src='img/Icon.png' alt='' draggable={false} />
            <IndusCardRight>
              <IndusCardRightTitle>Property</IndusCardRightTitle>
              <IndusCardRightText>
                Lorem ipsum dolor sit amet, consectetur adipiscing élit. Ornare sed vitae pharetra.
              </IndusCardRightText>
            </IndusCardRight>
          </IndusCard>
          <IndusCard box={false} border={true}>
            <IndusCardImg src='img/Icon.png' alt='' draggable={false} />
            <IndusCardRight>
              <IndusCardRightTitle>Property</IndusCardRightTitle>
              <IndusCardRightText>
                Lorem ipsum dolor sit amet, consectetur adipiscing élit. Ornare sed vitae pharetra.
              </IndusCardRightText>
            </IndusCardRight>
          </IndusCard>
          <IndusCard box={true} border={false}>
            <IndusCardImg src='img/Icon.png' alt='' draggable={false} />
            <IndusCardRight>
              <IndusCardRightTitle>Property</IndusCardRightTitle>
              <IndusCardRightText>
                Lorem ipsum dolor sit amet, consectetur adipiscing élit. Ornare sed vitae pharetra.
              </IndusCardRightText>
            </IndusCardRight>
          </IndusCard>
          <IndusCard box={false} border={true}>
            <IndusCardImg src='img/Icon.png' alt='' draggable={false} />
            <IndusCardRight>
              <IndusCardRightTitle>Property</IndusCardRightTitle>
              <IndusCardRightText>
                Lorem ipsum dolor sit amet, consectetur adipiscing élit. Ornare sed vitae pharetra.
              </IndusCardRightText>
            </IndusCardRight>
          </IndusCard>
        </Indusbody>
      </IndusPart>
    </IndusPartOut>

  );
};
export default MainPage;
