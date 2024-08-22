import { useMediaQuery } from 'react-responsive';
import FooterDesktop from "./footerDesktop";
import FooterMobile from "./footerMobile";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 }); // menggunakan 768px sebagai breakpoint mobile

  return (
    <>
      {isMobile ? (
        <FooterMobile />
      ) : (
        <FooterDesktop />
      )}
    </>
  );
};

export default Footer;