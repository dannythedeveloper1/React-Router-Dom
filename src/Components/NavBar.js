import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../Styles/Styles";

const NavBar = () => {
	return (
		<Container height="10vh" bgColor="black" jsCnt="space-around">
			<Link to="/">Home</Link>
			<Link to="/contact">Contact Us</Link>
			<Link to="/about">About Us</Link>
		</Container>
	);
};

export default NavBar;
