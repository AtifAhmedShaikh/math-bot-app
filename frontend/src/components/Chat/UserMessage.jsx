const UserMessage = ({ message }) => {
	return (
		<div className="my-2 p-2 bg-blue-500 text-white rounded-3xl min-w-20 float-right relative">
			<p>{message}</p>
		</div>
	);
};

export default UserMessage;
