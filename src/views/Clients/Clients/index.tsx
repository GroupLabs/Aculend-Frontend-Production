import React, { useState } from "react";
import SideBar from "layout/AppLayout/Sidebar";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import {
  MainOut,
  MainRightOut,
  MainRight,
  TblOut,
  TitlePart,
  Btns,
  Title,
  TiitleRight,
  ResBack,
  SearchBtn,
  SearchInput,
  SearchPart,
  ContactBtn,
  NewAppBtn,
  TblPart,
  Thead,
  TCheck,
  TheadName,
  TheadGrp,
  TRow,
  TNameImg,
  StatusItem,
  TRowName,
  TNameOut,
  MarkPart,
  MarkItem,
  MarkTop,
  MarkMiddle,
  MarkBottom,
  MarkSub,
  MarkTitle,
} from "./clients.style";
const DashboardContainer = () => {
  const router = useRouter();
  const [sidebarshow, setsidebarshow] = useState(false);
  return (
    <MainOut>
      <SideBar selected={4} show={sidebarshow} />

      {sidebarshow && (
        <ResBack onClick={() => setsidebarshow(false)} opa={sidebarshow} />
      )}
      <MainRightOut>
        <MainRight>
          <TitlePart>
            <Title>
              <RiBarChartHorizontalFill
                className="dashresIcon"
                onClick={() => setsidebarshow(!sidebarshow)}
              />
              Clients
            </Title>
            <TiitleRight>
              <SearchPart>
                <SearchInput type="text" placeholder="search here..." />
                <SearchBtn>
                  <BsSearch />
                </SearchBtn>
              </SearchPart>
              <Btns>
                <ContactBtn>Contact us</ContactBtn>
                <NewAppBtn onClick={() => router.push("/newapp")}>
                  New Applications
                </NewAppBtn>
              </Btns>
            </TiitleRight>
          </TitlePart>
          <TblOut>
            <TblPart>
              <Thead>
                <TheadGrp>
                  <TCheck type="checkbox" />
                  <TheadName width="232px">Name</TheadName>
                </TheadGrp>
                <TheadName width="210px">Email</TheadName>
                <TheadName width="120px">Company name</TheadName>
                <TheadName width="120px">Role</TheadName>
                <TheadName width="130px">Applicant Status</TheadName>
              </Thead>
              <TRow>
                <TheadGrp>
                  <TCheck type="checkbox" />
                  <TRowName width="232px">
                    <TNameImg src="img/tblimg/img1.png" alt="" />
                    <TNameOut>Lindsey Stroud</TNameOut>
                  </TRowName>
                </TheadGrp>
                <TRowName width="210px">lindsey.stroud@gmail.com</TRowName>
                <TRowName width="120px">Hatchbuck</TRowName>
                <TRowName width="120px">Manager</TRowName>
                <TRowName width="130px">
                  <StatusItem>Not Approved</StatusItem>
                </TRowName>
              </TRow>
              <TRow>
                <TheadGrp>
                  <TCheck type="checkbox" />
                  <TRowName width="232px">
                    <TNameImg src="img/tblimg/img2.png" alt="" />
                    <TNameOut>Nicci Troiani</TNameOut>
                  </TRowName>
                </TheadGrp>
                <TRowName width="210px">nicci.troiani@gmail.com</TRowName>
                <TRowName width="120px">Slack</TRowName>
                <TRowName width="120px">Manager</TRowName>
                <TRowName width="130px">
                  <StatusItem bg="true">Approved</StatusItem>
                </TRowName>
              </TRow>
              <TRow>
                <TheadGrp>
                  <TCheck type="checkbox" />
                  <TRowName width="232px">
                    <TNameImg src="img/tblimg/img3.png" alt="" />
                    <TNameOut>George Fields</TNameOut>
                  </TRowName>
                </TheadGrp>
                <TRowName width="210px">george.fields@gmail.com</TRowName>
                <TRowName width="120px">Clockify</TRowName>
                <TRowName width="120px">CEO</TRowName>
                <TRowName width="130px">
                  <StatusItem>Not Approved</StatusItem>
                </TRowName>
              </TRow>
              <TRow>
                <TheadGrp>
                  <TCheck type="checkbox" />
                  <TRowName width="232px">
                    <TNameImg src="img/tblimg/img4.png" alt="" />
                    <TNameOut>Rebecca Moore</TNameOut>
                  </TRowName>
                </TheadGrp>
                <TRowName width="210px">rebecca.moore@gmail.com</TRowName>
                <TRowName width="120px">Upwork</TRowName>
                <TRowName width="120px">Manager</TRowName>
                <TRowName width="130px">
                  <StatusItem bg="true">Approved</StatusItem>
                </TRowName>
              </TRow>
              <TRow>
                <TheadGrp>
                  <TCheck type="checkbox" />
                  <TRowName width="232px">
                    <TNameImg src="img/tblimg/img5.png" alt="" />
                    <TNameOut>Jane Doe</TNameOut>
                  </TRowName>
                </TheadGrp>
                <TRowName width="210px">jane.doe@gmail.com</TRowName>
                <TRowName width="120px">Trello</TRowName>
                <TRowName width="120px">Engineer</TRowName>
                <TRowName width="130px">
                  <StatusItem>Not Approved</StatusItem>
                </TRowName>
              </TRow>
              <TRow>
                <TheadGrp>
                  <TCheck type="checkbox" />
                  <TRowName width="232px">
                    <TNameImg src="img/tblimg/img6.png" alt="" />
                    <TNameOut>Jones Dermot</TNameOut>
                  </TRowName>
                </TheadGrp>
                <TRowName width="210px">dermot.jones@gmail.com</TRowName>
                <TRowName width="120px">Slack</TRowName>
                <TRowName width="120px">Developer</TRowName>
                <TRowName width="130px">
                  <StatusItem bg="true">Approved</StatusItem>
                </TRowName>
              </TRow>
              <TRow>
                <TheadGrp>
                  <TCheck type="checkbox" />
                  <TRowName width="232px">
                    <TNameImg src="img/tblimg/img7.png" alt="" />
                    <TNameOut>Martin Merces</TNameOut>
                  </TRowName>
                </TheadGrp>
                <TRowName width="210px">martin.merces@gmail.com</TRowName>
                <TRowName width="120px">Google</TRowName>
                <TRowName width="120px">Manager</TRowName>
                <TRowName width="130px">
                  <StatusItem>Not Approved</StatusItem>
                </TRowName>
              </TRow>
              <TRow>
                <TheadGrp>
                  <TCheck type="checkbox" />
                  <TRowName width="232px">
                    <TNameImg src="img/tblimg/img8.png" alt="" />
                    <TNameOut>Franz Ferdinand</TNameOut>
                  </TRowName>
                </TheadGrp>
                <TRowName width="210px">franz.ferdiand@gmail.com</TRowName>
                <TRowName width="120px">Facebook</TRowName>
                <TRowName width="120px">Manager</TRowName>
                <TRowName width="130px">
                  <StatusItem bg="true">Approved</StatusItem>
                </TRowName>
              </TRow>
              <TRow>
                <TheadGrp>
                  <TCheck type="checkbox" />
                  <TRowName width="232px">
                    <TNameImg src="img/tblimg/img9.png" alt="" />
                    <TNameOut>John Smith</TNameOut>
                  </TRowName>
                </TheadGrp>
                <TRowName width="210px">john.smith@gmail.com</TRowName>
                <TRowName width="120px">Skype</TRowName>
                <TRowName width="120px">CEO</TRowName>
                <TRowName width="130px">
                  <StatusItem>Not Approved</StatusItem>
                </TRowName>
              </TRow>
            </TblPart>
          </TblOut>
        </MainRight>
      </MainRightOut>
    </MainOut>
  );
};
export default DashboardContainer;
