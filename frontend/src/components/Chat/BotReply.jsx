import { getRelativeTimeStamp } from "../../utils/timestamp";

const BotReply = ({ message }) => {
	return (
		<div className="mb-4 mt-2 p-2 bg-blue-500 text-white rounded-3xl min-w-20 float-right relative">
			<span className="absolute text-xs right-0 top-[-20px] text-black">{getRelativeTimeStamp(message.createdAt)}</span>
			<p>{message}</p>
		</div>
	);
};

export default BotReply;
