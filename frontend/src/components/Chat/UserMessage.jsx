const UserMessage = ({ message }) => {
	return (
		<div className="my-2 p-2 bg-pink-500 text-white rounded-3xl min-w-20 float-left relative">
			<p>{message}</p>
		</div>
	);
};

export default UserMessage;
