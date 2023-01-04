import React from "react";
import {
  Top, TopBody, Topleft, TopRight, Toptitle, TopText, TRImg, TopBtn, LearnBtn, BookBtn, Toplines
} from "./income.style";
const MainPage = () => {
  return (
    <Top>
      <TopBody>
        <Topleft>
          <Toptitle>
            Instantly <span>verify income and past rent</span> payments
          </Toptitle>
          <TopText>
            The Rentify bank check can reduce your risk and Instantly verify renter's income, payroll, past rent payments, NSF & overdraft in one report to avoid non-payments and evictions. Only $9.99 per report.
          </TopText>
          <TopBtn>
            <LearnBtn>Learn more</LearnBtn>
            <BookBtn>Booka a Demo</BookBtn>
          </TopBtn>
        </Topleft>
        <TopRight>
          <TRImg src="img/dollarimg.png" alt='' draggable={false} />
        </TopRight>
      </TopBody>
      <Toplines src="img/lines.png" alt='' draggable={false} />
    </Top>
  );
};
export default MainPage;
