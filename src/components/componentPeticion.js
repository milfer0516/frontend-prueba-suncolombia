import axios from "axios";
import { urlDataBaseIE } from "../service/apiRest";

const dataBaseIE = async () => {
	const response = await axios.get(urlDataBaseIE);
	console.log(response);
};

export { dataBaseIE };
