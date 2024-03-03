import ButtonLoader from "../Loaders/ButtonLoader";

const Button = ({ className, children, disabled = false, loading = false, ...props }) => {
	return (
		<button
			{...props}
			className={`px-2 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 disabled:bg-blue-300 shadow-md  focus:ring-blue-600 ring-1 focus-visible:ring-blue-600 ${className}`}
			disabled={disabled || loading}
		>
			{/* if loading true display button loader otherwise provided children */}
			{loading ? <ButtonLoader /> : children}
		</button>
	);
};

export default Button;
