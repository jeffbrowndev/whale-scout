import DesktopNavigation from "./desktopNavigation";
import MobileNavigation from "./mobileNavigation";
import Links from "./links";
import Header from "./head";
import Footer from "./footer";

const Layout = props => (
  <div>
    <Header />
    <DesktopNavigation />
    <Links />
    <MobileNavigation />
    {props.children}
    <Footer credits={props.credits} color={props.color} />
  </div>
);

export default Layout;