import Header from "../Header";
import Footer from "../Footer";
import React from 'react'

function Layout({ children }: { children: React.ReactNode}) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
