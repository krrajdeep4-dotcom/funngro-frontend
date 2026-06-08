import React from "react";
import { Helmet } from "react-helmet-async";
import "./TeenPage.css"; 
import InquiryForm from "../components/InquiryForm";

function TeenPage() {
  return (
    <div className="teen-page">
     
      <Helmet>
        <title>Funngro for Teens | Learn, Earn & Grow</title>
        <meta
          name="description"
          content="Join Funngro to work on real company projects, earn money, and build your portfolio while studying."
        />
        <meta
          name="keywords"
          content="teens, earn money online, internships for students, freelance for teens, Funngro"
        />
      </Helmet>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="seo-h1">
            Real Projects. Real Money.
            <br />
            Real Growth.
          </h1>
          <p>
            Join thousands of smart teens working with top companies. Build your
            portfolio and achieve financial independence before you even
            graduate.
          </p>
          <button className="cta-button">Start Earning Now</button>
        </div>
        <div className="hero-image">
          <div className="image-circle">🚀</div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="seo-h2">How It Works?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="step-number">1</div>
            <h3>Create Profile</h3>
            <p>Sign up and showcase your skills to amazing companies.</p>
          </div>
          <div className="feature-card">
            <div className="step-number">2</div>
            <h3>Complete Projects</h3>
            <p>Work on real-world tasks that match your talent and passion.</p>
          </div>
          <div className="feature-card">
            <div className="step-number">3</div>
            <h3>Earn & Grow</h3>
            <p>
              Get paid for your hard work and build a strong professional
              resume.
            </p>
          </div>
        </div>
      </section>

      <section className="form-section">
        <InquiryForm role="Teen" />
      </section>
    </div>
  );
}

export default TeenPage;
