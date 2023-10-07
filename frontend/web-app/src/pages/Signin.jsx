import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseUrlContext } from "../context/BaseUrlContext";
import { IconLock, IconMailAi } from "@tabler/icons-react";
import { LockClosedIcon } from "@heroicons/react/24/solid";

const Signin = () => {
	const { base_url } = React.useContext(BaseUrlContext);
	const [UserName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(""); // Declare and initialize setError
	const navigate = useNavigate();
	const getResponses = async () => {
		const response = await axios
			.post(
				`${base_url}/query/login/`,
				{
					Username: UserName,
					Password: password,
				},
				{
					headers: {
						"Content-Type": "application/json", // Set the content type to JSON
					},
				}
			)
			.then((response) => {
				return response;
			})
			.catch((error) => {
				console.error(error);
				alert("server not running! a simulated response is being sent");
				const response = {
					data: {
						message: "simulation",
					},
				};
				return response;
			});
		if (response.data.message === "simulation") {
			alert("example. ");
		} else if (response.data.message === "success") {
			// setresponseAnswer(response.data.answer);
			// setresponseSections(response.data.sections);
			// setResponseReferences(response.data.references);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(""); // Use setError
		try {
			await getResponses();
			navigate("/");
		} catch (e) {
			setError(e.message);
			console.log(e.message);
		}
	};

	return (
		<div>
			<div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
				<h1 className="text-2xl font-bold">Sign In</h1>
				<form onSubmit={handleSubmit}>
					<div className="my-4">
						<label>UserName</label>
						<div className="my-2 w-full relative rounded-2xl shadow-xl">
							<input
								onChange={(e) => setUserName(e.target.value)}
								className="w-full p-2 bg-primary border border-input rounded-2xl"
								type="text"
							/>
							<IconMailAi className="absolute right-2 top-3 text-gray-400" />
						</div>
					</div>
					<div className="my-4">
						<label>Password</label>
						<div className="my-2 w-full relative rounded-2xl shadow-xl">
							<input
								onChange={(e) => setPassword(e.target.value)}
								className="w-full p-2 bg-primary border border-input rounded-2xl"
								type="password"
							/>
							<IconLock className="absolute right-2 top-3 text-gray-400" />
						</div>
					</div>
					<button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
						Sign in
					</button>
				</form>
				<p className="my-4">
					Don't have an account?{" "}
					<Link to="/signup" className="text-accent">
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Signin;
