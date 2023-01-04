import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import {
  HeaderOut,
  HeaderMain,
  HeaderLeft,
  HeaderRight,
  HeaderLogo,
  HeaderMiddle,
  Item,
  LoginBtn,
  SignUpBtn,
  ResHeader,
  HeaderItem,
} from "./Header.style";
const HeaderContainer = () => {
  const router = useRouter();
  const [selectedItem, setItem] = useState(1);
  const [resmenu, setmenu] = useState(false);

  const Changeselect = (e) => {
    setItem(e);
    setmenu(false);
  };
  return (
    <HeaderOut>
      <HeaderMain>
        <HeaderLeft
          onClick={() => {
            Changeselect(1);
            router.push("/");
          }}
          style={{fontFamily: 'K2D'}}
        >
          <style> @import url('https://fonts.googleapis.com/css2?family=K2D:wght@700&family=Poppins&display=swap'); </style>
          {/* <HeaderLogo src="img/logo.png" draggable={false} alt="" /> */}
          ACULEND
        </HeaderLeft>
        <HeaderMiddle>
          <Item
            col={selectedItem === 1 && true}
            onClick={() => {
              Changeselect(1);
              router.push("/");
            }}
          >
            Home
          </Item>
          <Item
            col={selectedItem === 2 && true}
            onClick={() => {
              Changeselect(2);
              router.push("/about");
            }}
          >
            About us
          </Item>
          <Item
            col={selectedItem === 3 && true}
            onClick={() => {
              Changeselect(3);
              router.push("/pricing");
            }}
          >
            Pricing
          </Item>
          <Item
            col={selectedItem === 4 && true}
            onClick={() => {
              Changeselect(4);
              router.push("/faq");
            }}
          >
            FAQs
          </Item>
        </HeaderMiddle>
        <FaBars className="resbarIcon" onClick={() => setmenu(!resmenu)} />
        <HeaderRight>
          <LoginBtn
            onClick={() => {
                router.push("/login");
              }}>
                Login
          </LoginBtn>
          <SignUpBtn
            onClick={() => {
              router.push("/register");
            }}
          >
            Sign Up
          </SignUpBtn>
        </HeaderRight>
        {resmenu && (
          <ResHeader>
            <HeaderItem
              onClick={() => {
                Changeselect(1);
                router.push("/");
              }}
            >
              Home
            </HeaderItem>
            <HeaderItem
              onClick={() => {
                Changeselect(2);
                router.push("/about");
              }}
            >
              About us
            </HeaderItem>
            <HeaderItem
              onClick={() => {
                Changeselect(3);
                router.push("/pricing");
              }}
            >
              Pricing
            </HeaderItem>
            <HeaderItem
              onClick={() => {
                Changeselect(4);
                router.push("/faq");
              }}
            >
              FAQs
            </HeaderItem>
            <LoginBtn
              onClick={() => {
                  router.push("/login");
                }}>
                  Login
            </LoginBtn>
            <SignUpBtn
              onClick={() => {
                router.push("/register");
              }}
            >
              Sign Up
            </SignUpBtn>
          </ResHeader>
        )}
      </HeaderMain>
    </HeaderOut>
  );
};
export default HeaderContainer;
