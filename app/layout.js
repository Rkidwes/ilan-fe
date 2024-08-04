import { GoogleTagManager } from '@next/third-parties/google'

import { Mulish } from "next/font/google";
import "./globals.scss";

import Feature from './ui/feature/feature.jsx'
import Footer from './ui/footer/footer.jsx'
import Header from './ui/header/header.jsx'
import { sanityFetch } from "./sanity/client";

const MD_QUERY = `*[_type == "homePage"]{hpMetaDesc}`;

const muli = Mulish({ 
  subsets: ["latin"],
  weight: ['400', '500'],
  variable: '--font-muli',
});

const metaTitle = 'Ilan Bluestone - World class electronic music producer'
const metaURL = 'https://www.ilanbluestone.com/'
const twitterHandle = '@iBluestone'

export async function generateMetadata() {
  // Fetch the data
  const content = await sanityFetch({
    query: MD_QUERY,
    tags: ["homePage"]
  });
  
  const { hpMetaDesc } = content[0];

  return {
    title: {
      template: 'Ilan Bluestone - %s',
      default: metaTitle,
    },
    description: hpMetaDesc,
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
      description: hpMetaDesc,
      siteName: 'Ilan Bluestone Official Site',
      locale: 'en_GB',
      images: [
        {
          url: '/ilan-bluestone-preview.webp',
          width: 1200,
          height: 630,
          alt: 'Preview image for the official website of Ilan Bluestone',
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
      description: hpMetaDesc,
      images: {
        url: '/ilan-bluestone-preview.webp',
        alt: 'Preview image for the official website of Ilan Bluestone',
      }
    },
  };
}

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
