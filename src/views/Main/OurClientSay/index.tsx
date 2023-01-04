import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useMediaQuery } from 'beautiful-react-hooks';
import {
  TestOut, Test, Testsub, TestTitle, SwiperText, SwiperName, SwiperRole
} from "./clientsay.style";
const MainPage = () => {
  const isTabletMode = useMediaQuery('(max-width: 1070px)');
  return (
    <TestOut>
      <Test>
        <Testsub>TESTIMONIALS</Testsub>
        <TestTitle>What our Clients say</TestTitle>
        <Swiper
          slidesPerView={isTabletMode ? 1 : 2}
          spaceBetween={100}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SwiperText>
              Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest-hottest deals on the Internet.
            </SwiperText>
            <SwiperName>Rowhan Smith </SwiperName>
            <SwiperRole>CEO, Foreclosure </SwiperRole>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperText>
              Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest-hottest deals on the Internet.
            </SwiperText>
            <SwiperName>Rowhan Smith </SwiperName>
            <SwiperRole>CEO, Foreclosure </SwiperRole>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperText>
              Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest-hottest deals on the Internet.
            </SwiperText>
            <SwiperName>Rowhan Smith </SwiperName>
            <SwiperRole>CEO, Foreclosure </SwiperRole>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperText>
              Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest-hottest deals on the Internet.
            </SwiperText>
            <SwiperName>Rowhan Smith </SwiperName>
            <SwiperRole>CEO, Foreclosure </SwiperRole>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperText>
              Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest-hottest deals on the Internet.
            </SwiperText>
            <SwiperName>Rowhan Smith </SwiperName>
            <SwiperRole>CEO, Foreclosure </SwiperRole>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperText>
              Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest-hottest deals on the Internet.
            </SwiperText>
            <SwiperName>Rowhan Smith </SwiperName>
            <SwiperRole>CEO, Foreclosure </SwiperRole>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperText>
              Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest-hottest deals on the Internet.
            </SwiperText>
            <SwiperName>Rowhan Smith </SwiperName>
            <SwiperRole>CEO, Foreclosure </SwiperRole>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperText>
              Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest-hottest deals on the Internet.
            </SwiperText>
            <SwiperName>Rowhan Smith </SwiperName>
            <SwiperRole>CEO, Foreclosure </SwiperRole>
          </SwiperSlide>
        </Swiper>
      </Test>
    </TestOut>
  );
};
export default MainPage;
