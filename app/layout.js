import { GoogleTagManager } from '@next/third-parties/google'

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

const metaTitle = 'Ilan Bluestone - World class electronic music producer'
const metaDescription = 'Ilan Bluestone is a pioneer at the forefront of the international dance music scene with his world class talent in progressive house and melodic trance.'
const metaURL = 'https://www.ilanbluestone.com/'
const twitterHandle = '@iBluestone'

export const metadata = {
  title: {
    template: 'Ilan Bluestone - %s',
    default: metaTitle,
  },
  description: metaDescription,
  metadataBase: new URL(metaURL),

  robots: {
    index: true,
    follow: true
  },
  httpEquiv: {
    'X-UA-Compatible': 'IE=edge,chrome=1', // Compatibility for older browsers
  },
  applicationName: 'Velocity Drive',
  formatDetection: {
    telephone: false, // Disables automatic telephone number linking
  },

  // Adding a canonical link
  canonical: `${metaURL}`, // Canonical link for the base URL

  // Open Graph Metadata
  openGraph: {
    type: 'website', // or 'article', 'profile', etc.
    url: metaURL,
    title: {
      template: 'Ilan Bluestone - %s',
      default: metaTitle,
    },
    description: metaDescription,
    siteName: 'Ilan Bluestone Official Site',
    locale: 'en_GB',
    images: [
      {
        url: '/og-image.jpg', // URL to the image
        width: 1200,
        height: 630,
        alt: 'Ilan Bluestone',
      },
    ],
  },

  // Twitter Card Metadata
  twitter: {
    card: 'summary', // or 'summary', 'app', etc.
    site: twitterHandle, // Your Twitter handle
    creator: twitterHandle, // Your Twitter handle
    title: {
      template: 'Ilan Bluestone - %s',
      default: metaTitle,
    },
    description: metaDescription,
    images: {
      url: 'https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png',
      alt: 'Preview image for the official website of Ilan Bluestone',
    }
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${muli.variable}`}>
      <body className="content-grid" id="body">
        <GoogleTagManager gtmId="GTM-KN2ZSS" />
        <Header />
        {children}
        <Feature />
        <Footer />
      </body>
    </html>
    
  );
}
