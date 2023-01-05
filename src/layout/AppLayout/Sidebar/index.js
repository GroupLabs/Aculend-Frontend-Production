import React from "react";
import { MdDashboard, MdMessage } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import {
    MainOut, LogoImg, LogoPart, BorderLine, ManPart, ManImg, ManRight, MenuPart, Item, AccPart, Title, Sub, GoBtn, SetPart, ManTop, ManBottom, MainTop, MainBottom, LogoOut, ManOut, MenuOut, SetOut, AccOut
} from "./sidebar.style";
import { useRouter } from "next/router";
import { GET_PROFILE } from "actions/types";

const SidebarContainer = ({ selected, show }) => {
    const router = useRouter();

    return (
        <MainOut show={show}>
            <MainTop>
                {/* <LogoOut>
                    <LogoPart>
                        <LogoImg src='/img/logo.png' alt='' />
                        Underwiterfy
                    </LogoPart>
                </LogoOut>
                <BorderLine /> */}
                <ManOut>
                    <ManPart>
                        <ManImg src='/img/user.png' alt='' />
                        <ManRight>
                            <ManTop>{localStorage.getItem('username')}</ManTop>
                            <ManBottom>Pro Member</ManBottom>
                        </ManRight>
                    </ManPart>
                </ManOut>
                <BorderLine />
                <MenuOut>
                    <MenuPart>
                        <Item sel={selected === 1 && true} onClick={() => router.push('/dashboard')}>
                            <MdDashboard className="menuIcon" />Dashboard
                        </Item>
                        <Item sel={selected === 2 && true} onClick={() => router.push('/applications')}>
                            <MdMessage className="menuIcon" />Applications
                        </Item>
                        {/* <Item sel={selected === 3 && true} onClick={() => router.push('/deals')}>
                            <CgNotes className="menuIcon" />Deals
                        </Item>
                        <Item sel={selected === 4 && true} onClick={() => router.push('/clients')}>
                            <FaUserFriends className="menuIcon" />Clients
                        </Item> */}
                    </MenuPart>
                </MenuOut>
            </MainTop>
            <MainBottom>
                <AccOut>
                    <AccPart>
                        <Title>Premium Account</Title>
                        <Sub>Get access to all features by Pro account</Sub>
                        <GoBtn>
                            <a style={{"color":"white"}} href="/">Go Pro</a>
                        </GoBtn>
                    </AccPart>
                </AccOut>
                {/* <BorderLine />
                <SetOut>
                    <SetPart>
                        <IoMdSettings className="menuIcon" /> Main Settings
                    </SetPart>
                </SetOut> */}
            </MainBottom>
        </MainOut>
    );
};
export default SidebarContainer;
