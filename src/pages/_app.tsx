import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
// layout
import AppLayout from "layout/AppLayout";

// ------------------------------------------------

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    return (
      <AppLayout>
        <ToastContainer />
        <Component {...pageProps} />
      </AppLayout>
    );
  }

  return null;

}

export default MyApp;
