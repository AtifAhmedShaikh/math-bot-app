import React from "react";

const TextInput = React.forwardRef(function Form(props, ref) {
	return (
		<input
			{...props}
			className={`border-1 focus-visible:outline-none rounded-md px-2 py-2 text-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2 text-gray-500 shadow-lg ${
				props.error && "ring-red-500"
			} ${props.className}`}
			ref={ref}
		/>
	);
});

export default TextInput;
