/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { urlDataBaseIE } from "../service/apiRest";

const Login = () => {
	//const history = useNavigate();
	const [datos, setDatos] = useState({
		user: "",
		password: "",
		option: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(urlDataBaseIE, {
				user: datos.user,
				password: datos.password,
				option: datos.option,
			});
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		const newDatos = { ...datos };
		newDatos[e.target.id] = e.target.value;
		setDatos(newDatos);
		console.log(newDatos);
	};

	return (
		<>
			<h1 className="text-center mt-10 text-sky-600 font-black text-5xl capitalize">
				Iniciar sesión
			</h1>

			<form
				className="my-10 bd-white shadow rounded-lg px-7 py-4"
				onSubmit={(e) => handleSubmit(e)}
			>
				<div className="my-3">
					<label
						className="text-gray-600 uppercase block text-xl font-bold"
						htmlFor="user"
					>
						user
					</label>
					<input
						type="text"
						id="user"
						value={datos.user}
						onChange={(e) => handleChange(e)}
						placeholder="Ingrese usuario"
						autoComplete="off"
						className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
					/>
				</div>
				<div className="my-3">
					<label
						className="text-gray-600 uppercase block text-xl font-bold"
						htmlFor="password"
					>
						password
					</label>
					<input
						type="text"
						id="password"
						onChange={(e) => handleChange(e)}
						value={datos.password}
						placeholder="Ingrese password"
						className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
					/>
				</div>
				<div className="my-3">
					<label
						className="text-gray-600 uppercase block text-xl font-bold"
						htmlFor="option"
					>
						option
					</label>
					<input
						type="text"
						id="option"
						onChange={(e) => handleChange(e)}
						value={datos.option}
						placeholder="Ingrese la option"
						className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
					/>
				</div>
				<button className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors">
					Enviar
				</button>
			</form>
		</>
	);
};

export default Login;
