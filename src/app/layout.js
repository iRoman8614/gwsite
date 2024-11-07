import localFont from "next/font/local";
import "./globals.scss";

const pricedown = localFont({
  src: "./fonts/pricedown.ttf",
  variable: "--font-pricedown",
  weight: "400",
});

export const metadata = {
  title: "Gang wars",
  description: "Gang Wars telegram web app game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pricedown.variable}`}>
        {children}
      </body>
    </html>
  );
}
