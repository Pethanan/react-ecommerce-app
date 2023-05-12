import React from "react";
import { Container } from "react-bootstrap";
import aboutImg from "../../Assests/BandMembers.png";

const About = () => {
  return (
    <Container style={{ backgroundColor: "#d5f7f5", borderRadius: "10px" }}>
      <h1 style={{ margin: "60px 0", paddingTop: "40px" }}>About Us</h1>
      <Container>
        <img
          src={aboutImg}
          alt="band members"
          style={{ width: "20%", height: "auto", borderRadius: "20px" }}
        />
      </Container>

      <Container style={{ marginTop: "50px", paddingBottom: "40px" }}>
        About Lorem ipsum carrots enhanced rebates. Excellent sayings of a man
        of sorrows, hates no prosecutors will unfold in the enduring of which
        were born in it? Often leads smallest mistake some pain main
        responsibilities are to stand for the right builder of pleasure,
        accepted explain up to now. , The things we are accusing of these in the
        explication of the truth receives from the flattery of her will never be
        the trouble and they are refused to the pleasures and the pleasures of
        the pain, explain the treatment of excepturi of the blessed sufferings.
        I never said will unfold in him receives at another time he may please
        the one that those works, we are less than they, this refused to the
        pleasures of deleniti? Those are! Will unfold in times of pleasure, this
        pain will be a right enjoyed by corrupt, are accusing him of all
        pleasures, and seek his own, or, to the needs of the agony of the
        choice. We hate the fellow. Lorem ipsum dolor, sit amet consectetur
        rebates. The distinction, that arise from or to. The greater, therefore,
        an obstacle to the duties of the debts receives the very great
        importance to us that these are consequent to that question is answered,
        which was selected for the fault, it is often one of us, however, have
        any! Moreover, this is often not at once take the hardships of the life
        of harsh condemn, we are accusing him? Him whom something large
        cisterns.
      </Container>
    </Container>
  );
};

export default About;
