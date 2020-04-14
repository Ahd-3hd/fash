import React from "react";
import { Wrapper, TopFooter, BottomFooter } from "./index.style";
import hangedImage from "../../../img/hanged.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faPinterestSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Wrapper>
      <TopFooter></TopFooter>
      <BottomFooter bg={hangedImage}></BottomFooter>
    </Wrapper>
  );
};

export default Footer;
