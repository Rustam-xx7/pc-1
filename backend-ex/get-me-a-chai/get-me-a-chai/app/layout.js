import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";

const inter = Inter({ subsets: ['latin'] });

// const roboto = Roboto({ subsets: ['latin'] });


export const metadata = {
  title: "Get Me a Chai ",
  description: "Crowd funding website for creators .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
        <SessionWrapper>
          <Navbar />

          <div className="min-h-[80vh] text-white">
            <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
