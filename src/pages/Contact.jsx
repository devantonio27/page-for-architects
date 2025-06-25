import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer.jsx/Footer";
import ContactForm from "../components/ContactForm/ContactForm";

function Contact() {
  return (
    <>
      <Header />
      <Banner title="Contact" image="contact.jpg" />
      <div className="container">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
