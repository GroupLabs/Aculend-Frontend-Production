import React, { useState, useEffect } from "react";
import SideBar from "layout/AppLayout/Sidebar";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import { useMediaQuery } from 'beautiful-react-hooks';
import { RiBarChartHorizontalFill } from "react-icons/ri";
import Chart from 'react-apexcharts'
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
  LoadingWrapper,
  NoResult,
  ChatPart, 
  ChartCircleTitle, 
  ChartLine, 
  ChartCircle, 
  CLeft, 
  CRight,
} from "./dash.style";
import axios from "axios";
import { SERVER_URL } from "actions/types";
const DashboardContainer = () => {
  const router = useRouter();
  const [sidebarshow, setsidebarshow] = useState(false);
  const [tbl_data, setTbl_data] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // NOTE: backend only returns users with information in the Inverite system
    axios
      .get(`${SERVER_URL}/bank/getusers`)
      .then((res) => {
        if (res) {
          // console.log(res);
          setTbl_data(res.data);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // --------------------------Circle Chart------------------------------
  const [options, setoptions] = useState(
    {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    }
  );

  const [donutSeries, setDonutSeries] = useState([44, 56]);
  // const [series, setSeries] = useState([44, 55, 41, 17, 15]);
  const [labels, setLabels] = useState({
    labels: ['Approved', 'Rejected'],
    dataLabels: {
      enabled: false
    },
  });
  // ---------------------------------Line Chart--------------------------------
  const [lineseries, setlineseries] = useState([{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }]);
  const isTabletMode = useMediaQuery('(max-width: 490px)');


  return (
    <MainOut>
      <SideBar selected={1} show={sidebarshow} />

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
              Dashboard
            </Title>
            <TiitleRight>
              {/* <SearchPart>
                <SearchInput type="text" placeholder="search here..." />
                <SearchBtn>
                  <BsSearch />
                </SearchBtn>
              </SearchPart> */}
              <Btns>
                {/* <ContactBtn>Contact us</ContactBtn> */}
                <NewAppBtn onClick={() => router.push("/newapp")}>
                  New Applications
                </NewAppBtn>
              </Btns>
            </TiitleRight>
          </TitlePart>
          <ChatPart>
            <ChartCircle>
                <ChartCircleTitle>
                    <CLeft>Approval Rate</CLeft>
                    {/* <CRight>Show: <span>This month</span></CRight> */}
                </ChartCircleTitle>
                {/* @ts-ignore */}
                <Chart options={labels} series={donutSeries} type="donut" width={isTabletMode ? "300px" : "400px"} />
            </ChartCircle>
            <ChartLine>
                <ChartCircleTitle>
                    <CLeft>Number of Applications</CLeft>
                    {/* <CRight>Show: <span>Monthly</span></CRight> */}
                </ChartCircleTitle>
                {/* @ts-ignore */}
                <Chart options={options} series={lineseries} type="line" width={isTabletMode ? "300px" : "400px"} />
            </ChartLine>
        </ChatPart>

          <MarkPart>
            <MarkItem>
              <MarkTop bg="#0085FF" />
              <MarkMiddle>
                <MarkTitle>5</MarkTitle>
                <MarkSub>No. of all Applicants</MarkSub>
              </MarkMiddle>
              <MarkBottom bg="#0085FF" />
            </MarkItem>
            <MarkItem>
              <MarkTop bg="#00C271" />
              <MarkMiddle>
                <MarkTitle>4</MarkTitle>
                <MarkSub>Successful Applicants</MarkSub>
              </MarkMiddle>
              <MarkBottom bg="#00C271" />
            </MarkItem>
            <MarkItem>
              <MarkTop bg="#FF0000" />
              <MarkMiddle>
                <MarkTitle>1</MarkTitle>
                <MarkSub>Denied Applicants</MarkSub>
              </MarkMiddle>
              <MarkBottom bg="#FF0000" />
            </MarkItem>
          </MarkPart>
          <TblOut>
            <TblPart>
              <Thead>
                <TheadGrp>
                  <TCheck type="checkbox" />
                  <TheadName width="232px">Name</TheadName>
                </TheadGrp>
                <TheadName width="210px">Email</TheadName>
                <TheadName width="120px">Bank</TheadName>
                <TheadName width="120px">Phone</TheadName>
                <TheadName width="130px">Applicant Status</TheadName>
              </Thead>
              {loading && (
                <LoadingWrapper>
                  <div />
                </LoadingWrapper>
              )}
              {!loading &&
                (tbl_data.length === 0 ? (
                  <NoResult>No Result</NoResult>
                ) : (
                  tbl_data.map((e: any, index) => (
                    <TRow key={`easy${index}`}>
                      <TheadGrp>
                        <TCheck type="checkbox" />
                        <TRowName width="232px">
                          {/* <TNameImg src="img/tblimg/img1.png" alt="" /> */}
                          <TNameOut>
                            {e.name ? e.name : `${e.firstname} ${e.lastname}`}
                          </TNameOut>
                        </TRowName>
                      </TheadGrp>
                      <TRowName width="210px">{e.email}</TRowName>
                      <TRowName width="120px">{e.bankname}</TRowName>
                      <TRowName width="120px">{e.phone}</TRowName>
                      <TRowName width="130px">
                        {e.score > 9 && e.score < 15 && e.status && (
                          <StatusItem bg={1}>Approved</StatusItem>
                        )}
                        {e.score > 14 && e.status && (
                          <StatusItem bg={2}>Approved</StatusItem>
                        )}
                        {e.score < 10 && e.status && (
                          <StatusItem bg={0}>Approved</StatusItem>
                        )}
                        {!e.status && (
                          <StatusItem bg={0}>Not Approved</StatusItem>
                        )}
                      </TRowName>
                    </TRow>
                  ))
                ))}
            </TblPart>
          </TblOut>
        </MainRight>
      </MainRightOut>
    </MainOut>
  );
};
export default DashboardContainer;
