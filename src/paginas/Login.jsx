/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { urlDataBaseIE } from "../service/apiRest";
import { Alerta } from "../components/Alerta";

const Login = () => {
	const history = useNavigate();
	const [datos, setDatos] = useState({
		User: "",
		Password: "",
		option: "",
	});
	const [mensaje, setMensaje] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			datos.User != "etraining" ||
			datos.Password != "explorandoando2020%" ||
			datos.option != "municipios"
		) {
			setMensaje({
				msg: "Inicio de sesión fallido. Verifica tus credenciales ",
				error: true,
			});
			return;
		} else {
			history("municipios");
		}
		setMensaje({});
		try {
			const response = await axios.post(
				urlDataBaseIE,
				{
					User: datos.User,
					Password: datos.Password,
					option: datos.option,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			console.log(response.data);
			return response;
		} catch (error) {
			console.log(error);
		}
	};
	// eslint-disable-next-line no-unused-vars
	const { msg } = mensaje;

	const handleChange = (e) => {
		const newDatos = { ...datos };
		newDatos[e.target.id] = e.target.value;
		setDatos(newDatos);
	};

	return (
		<>
			<h1 className="text-center mt-10 text-sky-600 font-black text-5xl capitalize">
				Información Municipios
			</h1>
			{msg && <Alerta alerta={mensaje} />}
			<form
				className="my-10 bd-white shadow rounded-lg px-7 py-4"
				onSubmit={(e) => handleSubmit(e)}
			>
				<div className="my-3">
					<label
						className="text-gray-600 uppercase block text-xl font-bold"
						htmlFor="User"
					>
						user
					</label>
					<input
						type="text"
						id="User"
						value={datos.User}
						onChange={(e) => handleChange(e)}
						placeholder="Ingrese usuario"
						autoComplete="off"
						className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
					/>
				</div>
				<div className="my-3">
					<label
						className="text-gray-600 uppercase block text-xl font-bold"
						htmlFor="Password"
					>
						password
					</label>
					<input
						type="text"
						id="Password"
						onChange={(e) => handleChange(e)}
						value={datos.Password}
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
					Ver información
				</button>
			</form>
		</>
	);
};

export default Login;
