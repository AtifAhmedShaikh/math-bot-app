import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSchema } from "../schema/index.js";
import ErrorMessage from "../components/Error/ErrorMessage.jsx";
import TextInput from "../components/ui/TextInput.jsx";
import Button from "../components/ui/Button.jsx";
import { setUserInLocalStorage } from "../utils/index.js";

const HomePage = () => {
	const [name, setName] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const SubmitHandler = async (event) => {
		event.preventDefault();
		try {
			const validate = await userSchema.validate({ name });
			console.log(validate);
			// set the user name in local storage
			setUserInLocalStorage(name);
			setError("");
			navigate("/chat");
		} catch (error) {
			setError(error.message);
		}
	};
	return (
		<div className="flex flex-col items-center justify-center h-screen w-100">
			<h3 className="font-bold text-2xl">Welcome To Math Chatbot </h3>
			{error && <ErrorMessage message={error} />}
			<form className="mt-5 w-2/6 flex flex-col justify-start gap-2" onSubmit={SubmitHandler}>
				<TextInput
					type="text"
					value={name}
					error={error}
					placeholder="Enter your name..."
					onChange={(e) => setName(e.target.value)}
				/>
				<Button type="submit" name="submitBtn" className="w-fit">
					{"Let's Chat"}
				</Button>
			</form>
		</div>
	);
};

export default HomePage;
