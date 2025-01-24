import React from "react";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import GuideSection from "../components/GuideSection";
import PlanSection from "../components/PlanSection";
import TestimonialsSection from "../components/TestimonialsSection";
import AvoidFailureSection from "../components/AvoidFailureSection";
import SuccessSection from "../components/SuccessSection";
import FooterSection from "../components/FooterSection";
import Header from "../components/Header";
import CompanySliderSection from "../components/CompanySliderSection";


const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <CompanySliderSection />
            <ProblemSection />
            <SolutionSection />
            <GuideSection />
            <PlanSection />
            <TestimonialsSection />
            <AvoidFailureSection />
            <SuccessSection />
            <FooterSection />
        </div>
    );
};

export default HomePage;
