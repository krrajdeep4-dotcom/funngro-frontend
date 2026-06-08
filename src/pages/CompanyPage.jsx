import React from "react";
import { Helmet } from "react-helmet-async";
import "./CompanyPage.css";
import InquiryForm from "../components/InquiryForm";

function CompanyPage() {
  return (
    <div className="company-page">
   
      <Helmet>
        <title>Funngro for Business | Hire Smart Gen-Z Talent</title>
        <meta
          name="description"
          content="Empower your business by hiring smart, energetic, and cost-effective teen talent for your projects."
        />
        <meta
          name="keywords"
          content="hire teens, freelance talent, gen-z workforce, business growth, Funngro"
        />
        <meta name="author" content="Rajdeep Kumar Ram" />
      </Helmet>

      <section className="company-hero">
        <div className="hero-content">
          <h1 className="seo-h1">
            Smart Talent for <br />
            Smart Businesses.
          </h1>
          <p>
            Tap into the power of Gen-Z. Get your projects done faster, with
            fresh perspectives and highly cost-effective solutions.
          </p>
          <button className="cta-button-company">Post a Project</button>
        </div>
        <div className="hero-image">
          <div className="image-box">💼</div>
        </div>
      </section>


      <section className="benefits-section">
        <h2 className="seo-h2">Why Hire Through Funngro?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="icon">💡</div>
            <h3>Fresh Ideas</h3>
            <p>
              Gen-Z brings innovative thinking and the latest digital trends to
              your projects.
            </p>
          </div>
          <div className="benefit-card">
            <div className="icon">⚡</div>
            <h3>Fast Turnaround</h3>
            <p>
              Highly motivated teens deliver quality work within your strict
              deadlines.
            </p>
          </div>
          <div className="benefit-card">
            <div className="icon">💰</div>
            <h3>Cost Effective</h3>
            <p>
              Get high-quality outputs without the heavy overhead costs of
              traditional agencies.
            </p>
          </div>
        </div>
      </section>

      <section className="form-section">
        <InquiryForm role="Company" />
      </section>
    </div>
  );
}

export default CompanyPage;
