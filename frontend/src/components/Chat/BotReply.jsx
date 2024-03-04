import { timeAgo } from "../../utils/timestamp";

const BotReply = ({ message, time }) => {
	return (
		<div className="mb-4 mt-2 p-2 bg-pink-500 text-white rounded-3xl min-w-20 float-left relative">
			<span className="absolute text-xs right-0 top-[-20px] text-black">{timeAgo(time)}</span>
			<p>{message}</p>
		</div>
	);
};

export default BotReply;
