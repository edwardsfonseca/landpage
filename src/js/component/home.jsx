import React from "react";
import Card from "./card.jsx"
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Foot from "./foot.jsx"
//include images into your bundle


//create your first component
const Home = () => {
	return (
		
		<div className="text-center"style={{"background":"#2583659c"}} >
			
			<Navbar titulo="Canada" link1="Homr" link2="Conocenos" link3="Estudia con Nosotros"/>
			
			<div className=" d-flex justify-content-center mt-5">
				<Jumbotron titulo="Bienvenue sur la page canadienne" mensaje="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolore eveniet modi ipsa ut incidunt unde beatae aliquam quaerat, sed, omnis iusto nam quasi rem corrupti? Id officiis soluta fugit?"/></div>
			
			<div className ="row d-flex justify-content-center mt-5">
				<Card titulo="Card title" img="https://i0.wp.com/www.mavipastor.com/wp-content/uploads/2012/03/quebec-provincia-de-canada.jpg?fit=699%2C466&ssl=1" mensaje="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab cum? Tenetur ex modi magnam beatae consectetur, voluptate eaque, a ratione architecto nesciunt, in ea? Quibusdam fuga eos praesentium illum." buttonLabel="Find Out More!"/>
				<Card titulo="Card title" img="https://cdn4.travelconline.com/unsafe/fit-in/0x450/filters:quality(75):format(webp)/https%3A%2F%2Ftravelc.azureedge.net%2Fimagenes%2Fnorthamerica%2Fcanada%2Fquebec%2Fpict1.jpg" mensaje="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab cum? Tenetur ex modi magnam beatae consectetur, voluptate eaque, a ratione architecto nesciunt, in ea? Quibusdam fuga eos praesentium illum." buttonLabel="Find Out More!"/>
				<Card titulo="Card title" img="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" mensaje="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab cum? Tenetur ex modi magnam beatae consectetur, voluptate eaque, a ratione architecto nesciunt, in ea? Quibusdam fuga eos praesentium illum." buttonLabel="Find Out More!"/>
				<Card titulo="Card title" img="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" mensaje="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab cum? Tenetur ex modi magnam beatae consectetur, voluptate eaque, a ratione architecto nesciunt, in ea? Quibusdam fuga eos praesentium illum." buttonLabel="Find Out More!"/>
				
				</div>

				<div className="mt-5"><Foot mensaje="Copyright @ Your Website 2022"/></div>
			
			
		</div>
	);
};

export default Home;
