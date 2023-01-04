import React, { useState, useEffect } from "react";
import SideBar from "layout/AppLayout/Sidebar";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import { SERVER_URL } from "actions/types";
import axios from "axios";
import { createApplicant, getAvailaleBankList } from "actions/authActions";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import {
  MainOut,
  MainRightOut,
  MainRight,
  TitlePart,
  Title,
  TiitleRight,
  ResBack,
  NewAppBtn,
  ContentPart,
  CtitleLeft,
  Ctitle,
  Csub,
  CtitleRight,
  CEmail,
  CMobile,
  TopPart,
  BorderLine,
  InputPart,
  InputLabel,
  SelectItem,
  InputItem,
  InputOne,
  ApplicantPart,
  ContactPart,
  LongText,
  IncomePart,
  CheckPart,
  CheckItem,
  CusCheckbox,
  ConsentPart,
  ContinumBtn,
  IComePart,
} from "./applicant.style";

const DashboardContainer = () => {
  const provinceData = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland",
    "Nova Scotia",
    "Ontario",
    "PEI",
    "Quebec",
    "Saskatchewan",
    "Northwest Territories",
    "Nunavut",
    "Yukon",
  ];
  const router = useRouter();
  const [sidebarshow, setsidebarshow] = useState(false);
  const [bankData, setBankdata] = useState<any>([]);
  const [selectflag, setSelctflag] = useState(2);
  // send information list
  const [email, setEmail] = useState();
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [phonenumber, setphonenumber] = useState();
  const [ip, setip] = useState();
  const [password, setpassword] = useState();
  const [refID, setrefID] = useState();
  const [province, setprovince] = useState();
  const [bank, setbank] = useState();
  const [site, setsite] = useState();
  const [gender, setgender] = useState();
  const [birthday, setbirthday] = useState();
  const [marrial, setmarrial] = useState();
  const [yearslived, setyearslived] = useState();
  const [monthlived, setmonthlived] = useState();
  const [income, setIncome] = useState(0);
  const [otherincome, setotherIncome] = useState(0);
  const [btnDisable, setBtnDisable] = useState(true);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/bank/getbanklist`)
      .then((banklist) => {
        setBankdata(banklist.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = () => {
    const data = {
      firstName,
      lastName,
      birthday,
      gender: gender === 0 ? "Male" : "Female",
      marrial: marrial === 0 ? "Single" : "Married",
      ip,
      phonenumber,
      email,
      bank,
      bankname: bankData.filter((e: any, index) => e.bankID == bank)[0]?.name,
      site: "Aculend.com",
      yearslived,
      monthlived,
      income:
        income === 0 ? "Employed" : income === 1 ? "Self Employed" : "Other",
      otherincome:
        otherincome === 0
          ? "Weekly Income"
          : otherincome === 1
          ? "Monthly Income"
          : "Annual Income",
      refID,
    };
    createApplicant(data, router);
  };
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
              <NewAppBtn
                onClick={() => submit()}
                disable={
                  firstName &&
                  lastName &&
                  ip &&
                  phonenumber &&
                  email &&
                  bank &&
                  refID
                    ? false
                    : true
                }
              >
                Save Applications
              </NewAppBtn>
            </TiitleRight>
          </TitlePart>
          <ContentPart>
            <TopPart>
              <CtitleLeft>
                <Ctitle>Preferred Contact method</Ctitle>
                <Csub>How would the applicant prefers to be contacted</Csub>
              </CtitleLeft>
              <CtitleRight>
                <CEmail onClick={() => setSelctflag(1)} sel={selectflag}>
                  Email
                </CEmail>
                <CMobile onClick={() => setSelctflag(2)} sel={selectflag}>
                  Mobile
                </CMobile>
              </CtitleRight>
            </TopPart>
            <BorderLine />
            <Ctitle>Personal Information</Ctitle>
            <InputPart>
              <InputOne>
                <InputLabel>
                  First Name<span>*</span>
                </InputLabel>
                <InputItem
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e: any) => setfirstName(e.target.value)}
                />
              </InputOne>
              <InputOne>
                <InputLabel>
                  Last Name<span>*</span>
                </InputLabel>
                <InputItem
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e: any) => setlastName(e.target.value)}
                />
              </InputOne>
              <InputOne>
                <InputLabel>Birthdate</InputLabel>
                <InputItem
                  type="text"
                  placeholder="e.g : 03-23-1991"
                  value={birthday}
                  onChange={(e: any) => setbirthday(e.target.value)}
                />
              </InputOne>
              <InputOne>
                <InputLabel>Gender</InputLabel>
                <SelectItem
                  value={gender}
                  onChange={(e: any) => setgender(e.target.value)}
                >
                  <option value={0}>Male</option>
                  <option value={1}>Female</option>
                </SelectItem>
              </InputOne>
              <InputOne>
                <InputLabel>Martial Status</InputLabel>
                <SelectItem
                  value={marrial}
                  onChange={(e: any) => setmarrial(e.target.value)}
                >
                  <option value={0}>Single</option>
                  <option value={1}>Married</option>
                </SelectItem>
              </InputOne>
              <InputOne>
                <InputLabel>
                  IP<span>*</span>
                </InputLabel>
                <InputItem
                  type="text"
                  placeholder="e.g : 123.123.123.123"
                  value={ip}
                  onChange={(e: any) => setip(e.target.value)}
                />
              </InputOne>
            </InputPart>
            <ApplicantPart>
              <InputLabel>Applicant Detail</InputLabel>
              <SelectItem>
                <option>Primary vihicle or trade - in unit</option>
              </SelectItem>
            </ApplicantPart>
            <Ctitle>Contact Information</Ctitle>
            <ContactPart>
              <InputOne>
                <InputLabel>
                  Mobile Number<span>*</span>
                </InputLabel>
                <InputItem
                  type="number"
                  placeholder="Ex : 6045551313"
                  value={phonenumber}
                  onChange={(e: any) => setphonenumber(e.target.value)}
                />
              </InputOne>
              <InputOne>
                <InputLabel>
                  Email Address<span>*</span>
                </InputLabel>
                <InputItem
                  type="text"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </InputOne>
            </ContactPart>
            <ContactPart>
              <InputOne>
                <InputLabel>
                  Bank<span>*</span>
                </InputLabel>
                <SelectItem
                  value={bank}
                  onChange={(e: any) => setbank(e.target.value)}
                >
                  <option>Please Select..</option>
                  {bankData.map((e: any, index: number) => (
                    <option value={e.bankID} key={`gr432${index}`}>
                      {e.name}
                    </option>
                  ))}
                </SelectItem>
              </InputOne>
              <InputOne>
                <InputLabel>Site</InputLabel>
                <SelectItem
                  value={bank}
                  onChange={(e: any) => setbank(e.target.value)}
                >
                  <option value={0}>Aculend.com</option>
                </SelectItem>
              </InputOne>
            </ContactPart>
            <LongText>How long has the applicant lived there?</LongText>
            <ContactPart>
              <InputOne>
                <InputLabel>Years</InputLabel>
                <InputItem
                  type="text"
                  placeholder="Enter years lived"
                  value={yearslived}
                  onChange={(e: any) => setyearslived(e.target.value)}
                />
              </InputOne>
              <InputOne>
                <InputLabel>Months</InputLabel>
                <InputItem
                  type="text"
                  placeholder="Enter months lived"
                  value={monthlived}
                  onChange={(e: any) => setmonthlived(e.target.value)}
                />
              </InputOne>
            </ContactPart>
            <IncomePart>Select Income type</IncomePart>
            <IComePart>
              <InputOne>
                <InputLabel>Income type</InputLabel>
                <CheckPart>
                  <CheckItem>
                    <CusCheckbox
                      type="radio"
                      name="incomeTypeCheckbox"
                      checked={income === 0 && true}
                      onChange={(e: any) => setIncome(0)}
                    />
                    Employed
                  </CheckItem>
                  <CheckItem>
                    <CusCheckbox
                      type="radio"
                      name="incomeTypeCheckbox"
                      checked={income === 1 && true}
                      onChange={(e: any) => setIncome(1)}
                    />
                    Self Employed
                  </CheckItem>
                  <CheckItem>
                    <CusCheckbox
                      type="radio"
                      name="incomeTypeCheckbox"
                      checked={income === 2 && true}
                      onChange={(e: any) => setIncome(2)}
                    />
                    Other
                  </CheckItem>
                </CheckPart>
              </InputOne>
              <InputOne>
                <InputLabel>
                  Reference ID<span>*</span>
                </InputLabel>
                <InputItem
                  type="number"
                  placeholder="e.g : 123456"
                  value={refID}
                  onChange={(e: any) => setrefID(e.target.value)}
                />
              </InputOne>
            </IComePart>
            <ApplicantPart>
              <InputLabel>Other income</InputLabel>
              <SelectItem
                value={otherincome}
                onChange={(e: any) => setotherIncome(e.target.value)}
              >
                <option>Select Income Type</option>
                <option value={0}>Weekly Income</option>
                <option value={1}>Monthly Income</option>
                <option value={2}>Annual Income</option>
              </SelectItem>
            </ApplicantPart>
            <BorderLine />
            <ConsentPart>
              <CusCheckbox type="checkbox" />
              The applicant has consented to recieving text and email messages
              regarding a potential loan application with Quanfiti.
            </ConsentPart>
            <ContinumBtn
              onClick={() => submit()}
              disable={
                firstName &&
                lastName &&
                ip &&
                phonenumber &&
                email &&
                bank &&
                refID
                  ? false
                  : true
              }
            >
              Save Applicant and Continue
            </ContinumBtn>
          </ContentPart>
        </MainRight>
      </MainRightOut>
    </MainOut>
  );
};

export default DashboardContainer;
