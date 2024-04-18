import { Mulish } from "next/font/google";
import "./globals.scss";

import Feature from './ui/feature/feature.jsx'
import Footer from './ui/footer/footer.jsx'
import Header from './ui/header/header.jsx'

const muli = Mulish({ 
  subsets: ["latin"],
  weight: ['400', '500'],
  variable: '--font-muli',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${muli.variable}`}>
      <body className="content-grid">
        <Header />
        {children}
        <Feature />
        <Footer />
      </body>
    </html>
  );
}
