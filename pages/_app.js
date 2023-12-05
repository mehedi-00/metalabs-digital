import Layout from "@/src/component/core/layout/Layout";
import "@/styles/globals.css";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { ThemeProvider } from '@mui/material/styles';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
