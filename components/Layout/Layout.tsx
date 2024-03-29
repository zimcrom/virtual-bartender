import Header from "../Header";
import Footer from "../Footer";
import React from 'react'
import Head from "next/head";

function Layout({ children }: { children: React.ReactNode}) {
  return (
    <>
    <Head>
    <link rel="shortcut icon" type="image/png" href="favicon48.png" />
    </Head>
      <Header />
      <main id="main" className="relative mx-auto max-w-[1920px]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
