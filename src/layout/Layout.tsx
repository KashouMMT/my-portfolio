import type { ReactNode } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../assets/css/common.css";

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
