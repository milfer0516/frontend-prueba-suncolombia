/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react";
import axios from "axios";
import { urlDataBaseIE } from "../service/apiRest";
//import { dataBaseIE } from "../components/componentPeticion";

function Municipios() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(urlDataBaseIE, {
					withCredentials: true,
					headers: {
						"Content-Type": "application/json",
						xsrfCookieName: "XSRF-TOKEN",
						xsrfHeaderName: "X-XSRF-TOKEN",
					},
				});
				setData(response.data);
				console.table(response.data);
			} catch (error) {
				console.error("Error al obtener los datos:", error);
			}
		};

		fetchData();
	}, []);
	return (
		<>
			{data.map((item) => (
				<div key={item.id}>
					<h3>{item.id} </h3>
					<h3>{item.nombre} </h3>
					<h3>{item.dane} </h3>
				</div>
			))}
		</>
	);
}

export default Municipios;
