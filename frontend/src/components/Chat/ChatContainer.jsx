import BotReply from "./BotReply";
import UserMessage from "./UserMessage";

const ChatContainer = ({ chatConversation }) => {
	return (
		<div className="inline-block h-2/3 w-1/2 mt-5 py-5 border-2 rounded-lg shadow-lg overflow-y-scroll px-4 chat-box">
			{!chatConversation?.length && (
				<p className="text-xs text-center text-gray-500">Perform any Arithmetic operation </p>
			)}
			{chatConversation.map((message) => {
				return (
					<div key={message._id} className="my-2">
						<BotReply message={message.evaluatedResult} time={message.createdAt} />
						<div className="clear-both"></div>
						<UserMessage message={message.arithmeticExpression} />
						<div className="clear-both"></div>
					</div>
				);
			})}
		</div>
	);
};

export default ChatContainer;
