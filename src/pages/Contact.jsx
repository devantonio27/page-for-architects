import { useContext } from "react";
import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer.jsx/Footer";
import ContactForm from "../components/ContactForm/ContactForm";

// CONTEXT
import { AppContext } from "../contexts/AppContext";

function Contact() {
  const appContext = useContext(AppContext);
  return (
    <>
      <Header />
      <Banner
        title={appContext.languages[appContext.language].menu.contact}
        image="contact.jpg"
      />
      <div className="container">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
