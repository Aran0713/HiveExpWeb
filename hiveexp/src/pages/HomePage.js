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

const HomePage = () => {
    return (
        <div>
            <HeroSection />
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
