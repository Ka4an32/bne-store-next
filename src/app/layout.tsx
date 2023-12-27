import "../assets/styles/nullable.css";
import "../assets/styles/index.scss";
import localFont from "next/font/local";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";


const Montserrat = localFont({
  src: [
    {
      path: "../assets/fonts/Montserrat/Semibold/Montserrat.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat/Medium/Montserrat.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat/Regular/Montserrat.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  preload: true,
  display: "swap",
});

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html className={Montserrat.className} lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/icon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout