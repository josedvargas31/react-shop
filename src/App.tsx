import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListShop from "./pages/ListShop";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ListShop />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;
