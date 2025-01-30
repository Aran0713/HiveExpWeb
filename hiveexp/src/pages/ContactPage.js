import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import InstagramSection from "../components/InstagramSection";
import SuccessSection from "../components/SuccessSection";
import FooterSection from "../components/FooterSection";

const ContactPage = () => {
    return (
        <div>
            <Header />
            <ContactForm />
            <InstagramSection />
            <SuccessSection />
            <FooterSection />
        </div>
    );
};

export default ContactPage;
