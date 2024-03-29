import "./globals.css";
import MainFooter from "../components/MainFooter";
import CTA from "../components/CTA.jsx";
import Nav from "../components/Nav.jsx";





export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">

      <body>
        <Nav/>
        {children}
        <footer>     
          <CTA/>
          <MainFooter/>
        </footer>
      </body>

    </html>
  );
}
