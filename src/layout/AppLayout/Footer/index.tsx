import React from "react";
import {
    FooterOut, Footer, LeftTitle, FooterTop, GetBtn, LeftText, FooterBottom, FBLeft, FBRight, FBLItem, FTLeft, FTRight, FTRTitle, FTRItem,
} from "./Footer.style";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const FooterContainer = () => {
    return (
        <FooterOut>
            <Footer>
                <FooterTop>
                    <FTLeft>
                        <style> @import url('https://fonts.googleapis.com/css2?family=K2D:wght@700&family=Poppins&display=swap'); </style>
                        <LeftTitle style={{fontFamily: 'K2D'}}>Ready to get started?</LeftTitle>
                        {/* <LeftText>Lorem ipsum dolor sit amet, consectetur adipiscing élit, sed do eiusmod tempor incididun</LeftText> */}
                        <GetBtn>Get Stared</GetBtn>
                    </FTLeft>
                    <FTRight>
                        <FTRTitle>Navigation</FTRTitle>
                        <FTRItem>Email Marketing</FTRItem>
                        <FTRItem>Campaigns</FTRItem>
                        <FTRItem>Branding</FTRItem>
                        <FTRItem>Offline</FTRItem>
                    </FTRight>
                </FooterTop>
                <FooterBottom>
                    <FBLeft>
                        <FBLItem>Terms & Conditions</FBLItem>
                        <FBLItem>Privacy Policy</FBLItem>
                    </FBLeft>
                    <FBRight>
                        <FaFacebookF className="facebookIcon" />
                        <FaTwitter className="facebookIcon" />
                        <FaInstagram className="facebookIcon" />
                    </FBRight>
                </FooterBottom>
            </Footer>
        </FooterOut>
    )

}
export default FooterContainer;