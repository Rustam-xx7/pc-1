import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin of Instagram ",
  description: "Instagram Teri bap ka ma ka bhosra ! ",
};

export default function AdminLayout({ children }) {
  return (
    <>
        <span>Admin Nav bar .</span>
        {children}
    </>
  );
}
