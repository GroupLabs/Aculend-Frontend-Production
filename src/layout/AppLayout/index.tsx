import React, { ReactNode, useEffect } from "react";
// layout
import Header from "./Header";
import Footer from "./Footer";
// styled components
import { LayoutWrapper } from "./AppLayout.style";
import { useRouter } from "next/router";
// -----------------------------------------------------------

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  return (
    <LayoutWrapper>
      {(router.asPath === '/' || router.asPath === '/about' || router.asPath === '/pricing' || router.asPath === '/faq') && <Header />}
      {children}
      {(router.asPath === '/' || router.asPath === '/about' || router.asPath === '/pricing' || router.asPath === '/faq') && <Footer />}
    </LayoutWrapper>
  );
};

export default Layout;
