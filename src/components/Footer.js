import React from "react";
import styled from 'styled-components';


const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white",
				textAlign: "center",
                marginTop: '-100px',
				}}>
	</h1>
	<Container>
		<ImgCont>
			<MyImg src='' alt=''/>
		</ImgCont>

		<Row>
		<Column>
			<Heading>Entertainment</Heading>
			<FooterLink href="#">Marvel</FooterLink>
			<FooterLink href="#">Dc</FooterLink>
			<FooterLink href="#">Disney</FooterLink>
			<FooterLink href="#">Pixar</FooterLink>
		</Column>
		<Column>
			<Heading>Features</Heading>
			<FooterLink href="#">Search</FooterLink>
			<FooterLink href="#">Movies</FooterLink>
			<FooterLink href="#">Series</FooterLink>
			<FooterLink href="#">Services</FooterLink>
		</Column>
		<Column>
			<Heading>Characters</Heading>
			<FooterLink href="#">Ant-man</FooterLink>
			<FooterLink href="#">Batman</FooterLink>
			<FooterLink href="#">Spiderman</FooterLink>
			<FooterLink href="#">Panther</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;

const ImgCont =styled.div`
`
const MyImg = styled.div`

`


const Box = styled.div`
padding: 90px 100px;
/* background: url("/images/galaxy.jpg") center center / cover no-repeat fixed;         */
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1050%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(6%2c 24%2c 43%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c541.451C116.248%2c562.054%2c241.605%2c593.139%2c347.004%2c539.948C455.114%2c485.389%2c537.83%2c375.619%2c563.221%2c257.214C587.258%2c145.123%2c514.206%2c39.952%2c477.514%2c-68.656C447.751%2c-156.753%2c408.703%2c-235.443%2c368.461%2c-319.274C312.108%2c-436.668%2c314.209%2c-610.377%2c193.738%2c-659.811C76.532%2c-707.906%2c-35.763%2c-571.467%2c-157.067%2c-534.92C-277.198%2c-498.726%2c-419.897%2c-528.077%2c-515.025%2c-446.272C-613.577%2c-361.522%2c-674.419%2c-225.769%2c-667.501%2c-95.972C-660.859%2c28.641%2c-554.114%2c118.935%2c-479.565%2c219.01C-420.051%2c298.901%2c-358.712%2c373.94%2c-276.039%2c429.526C-191.939%2c486.072%2c-99.787%2c523.766%2c0%2c541.451' fill='%2304101c'%3e%3c/path%3e%3cpath d='M1440 1194.208C1560.55 1211.2060000000001 1684.835 1165.862 1783.784 1094.938 1880.249 1025.7939999999999 1948.376 921.087 1980.46 806.8199999999999 2010.062 701.393 1984.696 591.323 1954.767 485.988 1927.996 391.76800000000003 1879.487 308.738 1817.411 232.97199999999998 1753.815 155.35199999999998 1685.625 78.59300000000002 1591.809 42.985000000000014 1494.012 5.8659999999999854 1385.062 1.61099999999999 1284.596 30.740999999999985 1183.94 59.92599999999999 1099.008 125.86000000000001 1030.9940000000001 205.594 963.348 284.897 925.023 381.23400000000004 899.43 482.278 871.352 593.132 826.104 714.674 875.989 817.575 925.758 920.235 1058.467 942.685 1153.345 1006.043 1250.363 1070.829 1324.482 1177.9189999999999 1440 1194.208' fill='%2308203a'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1050'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
border: 1px solid darkorange;
border-bottom: none;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
    padding-top: 100px;
`

const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;


@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`

const FooterLink = styled.a`
color: #7F04C1;
margin-bottom: 20px;
font-size: 18px;
font-weight: bold;
text-decoration: none;

&:hover {
	color: #4F0378;
	transition: 200ms ease-in;
}
`

const Heading = styled.p`
font-size: 24px;
color: #BD0D7A;
margin-bottom: 40px;
font-weight: bold;
`



// import React from 'react'

// function Footer() {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer