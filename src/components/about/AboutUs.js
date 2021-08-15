import React from "react";
import SectionTitle from "../common/SectionTitle";
import "./aboutUs.css";

export default function AboutUs() {
  return (
    <div id="about-us" className="about-us">
      <SectionTitle title="About Us" />
      <div className="about-us-all-content">
        <p className="about-us-content">
          Since 2014, Springnet Technology is one of the prominent IT firm of
          Indian provenance which intent to relinquish unique work ethics to
          clients over a coalition of merit, elegant frameworks and resource
          conveyance modernization based in Pondicherry. Springnet Technology is
          a team of developers and designers devoted to our commitments,
          providing results, and striving for the highest quality.
        </p>

        <p className="about-us-content">
          We work to unite a group of innovation, business, and social idealist.
          Our goal is to foster a habitat of Honesty and Integrity towards our
          customers, workers, merchants and society unbound. We focus on our
          clients, accomplices and have a crucifixion for innovation. We take on
          enormous difficulties, and highly esteem owning them. We are working
          to turn our passion into booming innovation. We also provide a
          complete scope of amenities by leveraging our domain and business
          expertise with leading technology providers.
        </p>
      </div>
    </div>
  );
}
