import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {
  FAQpart, FAQpartout, Faqsub, Faqtitle, FAQCard, FAQLeft, FAQRight, FAQText, FAQTop
} from "./faq.style";
const MainPage = () => {
  const [cardflag, setCardflag] = useState(1);
  const [showtext, setShowtextflag] = useState(true);
  const Changeflag = (e) => {
    if (cardflag === e) {
      setShowtextflag(!showtext);
    } else {
      setCardflag(e);
      setShowtextflag(true);
    }
  }
  return (
    <FAQpartout>
      <FAQpart>
        <Faqsub>FAQs</Faqsub>
        <Faqtitle>Frequently asked <span>Questions</span></Faqtitle>
        <FAQCard>
          <FAQTop>
            <FAQLeft>Why should I use Underwriting services?</FAQLeft>
            <FAQRight onClick={() => Changeflag(1)}>{(cardflag === 1 && showtext) ? <FaAngleDown className="cardarrowIcon" /> : <FaAngleUp className="cardarrowIcon" />}</FAQRight>
          </FAQTop>
          {(cardflag === 1 && showtext) && <FAQText>
            Lorem ipsum dolor sit amet, consectetur adipiscing élit. Est purus ultrices donec vestibulum convallis sed dui consequat elementum. Vitae morbi cursus nulla sed sit. Volutpat cursus tortor integer scelerisque areu facilisi viverra diam diam. Quam élit sagittis amet egestas leo.
          </FAQText>}
        </FAQCard>
        <FAQCard>
          <FAQTop>
            <FAQLeft>Why should I use Underwriting services?</FAQLeft>
            <FAQRight onClick={() => Changeflag(2)}>{(cardflag === 2 && showtext) ? <FaAngleDown className="cardarrowIcon" /> : <FaAngleUp className="cardarrowIcon" />}</FAQRight>
          </FAQTop>
          {(cardflag === 2 && showtext) && <FAQText>
            Lorem ipsum dolor sit amet, consectetur adipiscing élit. Est purus ultrices donec vestibulum convallis sed dui consequat elementum. Vitae morbi cursus nulla sed sit. Volutpat cursus tortor integer scelerisque areu facilisi viverra diam diam. Quam élit sagittis amet egestas leo.
          </FAQText>}
        </FAQCard>
        <FAQCard>
          <FAQTop>
            <FAQLeft>Why should I use Underwriting services?</FAQLeft>
            <FAQRight onClick={() => Changeflag(3)}>{(cardflag === 3 && showtext) ? <FaAngleDown className="cardarrowIcon" /> : <FaAngleUp className="cardarrowIcon" />}</FAQRight>
          </FAQTop>
          {(cardflag === 3 && showtext) && <FAQText>
            Lorem ipsum dolor sit amet, consectetur adipiscing élit. Est purus ultrices donec vestibulum convallis sed dui consequat elementum. Vitae morbi cursus nulla sed sit. Volutpat cursus tortor integer scelerisque areu facilisi viverra diam diam. Quam élit sagittis amet egestas leo.
          </FAQText>}
        </FAQCard>
        <FAQCard>
          <FAQTop>
            <FAQLeft>Why should I use Underwriting services?</FAQLeft>
            <FAQRight onClick={() => Changeflag(4)}>{(cardflag === 4 && showtext) ? <FaAngleDown className="cardarrowIcon" /> : <FaAngleUp className="cardarrowIcon" />}</FAQRight>
          </FAQTop>
          {(cardflag === 4 && showtext) && <FAQText>
            Lorem ipsum dolor sit amet, consectetur adipiscing élit. Est purus ultrices donec vestibulum convallis sed dui consequat elementum. Vitae morbi cursus nulla sed sit. Volutpat cursus tortor integer scelerisque areu facilisi viverra diam diam. Quam élit sagittis amet egestas leo.
          </FAQText>}
        </FAQCard>
        <FAQCard>
          <FAQTop>
            <FAQLeft>Why should I use Underwriting services?</FAQLeft>
            <FAQRight onClick={() => Changeflag(5)}>{(cardflag === 5 && showtext) ? <FaAngleDown className="cardarrowIcon" /> : <FaAngleUp className="cardarrowIcon" />}</FAQRight>
          </FAQTop>
          {(cardflag === 5 && showtext) && <FAQText>
            Lorem ipsum dolor sit amet, consectetur adipiscing élit. Est purus ultrices donec vestibulum convallis sed dui consequat elementum. Vitae morbi cursus nulla sed sit. Volutpat cursus tortor integer scelerisque areu facilisi viverra diam diam. Quam élit sagittis amet egestas leo.
          </FAQText>}
        </FAQCard>
        <FAQCard>
          <FAQTop>
            <FAQLeft>Why should I use Underwriting services?</FAQLeft>
            <FAQRight onClick={() => Changeflag(6)}>{(cardflag === 6 && showtext) ? <FaAngleDown className="cardarrowIcon" /> : <FaAngleUp className="cardarrowIcon" />}</FAQRight>
          </FAQTop>
          {(cardflag === 6 && showtext) && <FAQText>
            Lorem ipsum dolor sit amet, consectetur adipiscing élit. Est purus ultrices donec vestibulum convallis sed dui consequat elementum. Vitae morbi cursus nulla sed sit. Volutpat cursus tortor integer scelerisque areu facilisi viverra diam diam. Quam élit sagittis amet egestas leo.
          </FAQText>}
        </FAQCard>
      </FAQpart>
    </FAQpartout>
  );
};
export default MainPage;
