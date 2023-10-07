import { createContext, useState } from "react";

export const BaseUrlContext = createContext();

export const BaseUrlProvider = ({ children }) => {
	const [baseUrl, setBaseUrl] = useState(
		"https://vq9tc4j9-8000.inc1.devtunnels.ms/"
		// "http://localhost:3000"
	);

	return (
		<BaseUrlContext.Provider value={{ baseUrl, setBaseUrl }}>
			{children}
		</BaseUrlContext.Provider>
	);
};
