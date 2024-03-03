import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const NotFoundPage = () => {
	const navigate = useNavigate();

    const handleButtonClick = () => {
		navigate("/");
	};
	return (
		<div className="text-center">
			<h2 className="text-2xl my-10">Page not found</h2>
			<Button onClick={handleButtonClick}>Go Back To Home</Button>
		</div>
	);
};

export default NotFoundPage;
