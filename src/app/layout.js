import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Dragon News - Journalism Without Fear or Favour",
  description: "Latest breaking news, international headlines, sports, entertainment, and in-depth analysis from trusted journalists worldwide.",
  keywords: "news, breaking news, international news, sports, entertainment, dragon news",
  authors: [{ name: "Dragon News" }],
  openGraph: {
    title: "Dragon News",
    description: "Latest news and updates from around the world",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <div className="max-w-[1400px] mx-auto w-full flex-1">
          {children}
          <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        </div>
      </body>
    </html>
  );
}
