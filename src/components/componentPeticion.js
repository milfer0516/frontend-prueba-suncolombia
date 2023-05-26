import axios from "axios";
import { urlDataBaseIE } from "../service/apiRest";

const dataBaseIE = async (state) => {
	const response = await axios.post(urlDataBaseIE);
	console.log(response);
	state(response);
};

export { dataBaseIE };
