import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyLayout from "./layouts/VerifyLayout";
import Login from "./paginas/Login";
import Municipios from "./paginas/Municipios";

function App() {
	return (
		<>
			<div>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<VerifyLayout />}>
							<Route index element={<Login />} />
							<Route path="municipios" element={<Municipios />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
