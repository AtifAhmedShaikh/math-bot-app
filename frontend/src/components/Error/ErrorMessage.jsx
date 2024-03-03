
const ErrorMessage = ({ message = "Something went wrong" }) => {
	return <p className="text-lg text-red-600 ">{message} </p>;
};

export default ErrorMessage;
