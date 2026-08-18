import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

const App = () => {
	return (
		<Routes>
			<Route path="/my-portfolio/" element={<Home />} />
			<Route path="/my-portfolio/blog" element={<Blog />}/>
		</Routes>
	)
};

export default App;