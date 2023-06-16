import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Starting at $32,740 After Federal Tax Credit"
        backgroundImg="model-3.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section 
         title="Model Y"
        description="Starting at $40,240
        After Federal Tax Credit"
        backgroundImg="model-y.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"/>
      <Section 
         title="Model S"
        // description="Starting at $32,740 After Federal Tax Credit"
        backgroundImg="model-s.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
        />
      <Section 
         title="Model X"
        // description="Starting at $32,740 After Federal Tax Credit"
        backgroundImg="model-x.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
        />
      <Section 
         title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        />
      <Section 
         title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        />
      <Section 
         title="Accessories"
        // description="Starting at $32,740 After Federal Tax Credit"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
        // rightBtnText="Demo Drive"
        />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
