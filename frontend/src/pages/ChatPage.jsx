import { useEffect, useState } from "react";
import ChatContainer from "../components/Chat/ChatContainer";
import ChatMessageForm from "../components/Chat/ChatMessageForm";
import { fetchUserChat } from "../api";
import Button from "../components/ui/Button.jsx";
import ErrorMessage from "../components/Error/ErrorMessage.jsx";
import { getUserFromLocalStorage, removeUserFromLocalStorage } from "../utils/index.js";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
	const [chatConversation, setChatConversation] = useState([]);
	const [error, setError] = useState("");
	const navigate = useNavigate();

	// remove user from local storage navigate to home page
	const handleCloseButton = () => {
		removeUserFromLocalStorage();
		navigate("/");
	};
	// fetch previous user chat conversation from server and display conversation in chat container
	useEffect(() => {
		(async () => {
			const name = getUserFromLocalStorage();
			const response = await fetchUserChat(name);
			if (!response?.success) return setError(response?.message);
			setChatConversation(response.data.chatConversation);
		})();
	}, []);

	return (
		<div className="h-screen flex flex-col items-center overflow-hidden bg-gray-100">
			<h1 className="text-3xl font-bold text-center">Math Chat Bot App</h1>
			{error && <ErrorMessage message={error} />}

			<p className="text-orange-600 font-bold font-mono mt-4">Bot chat with {getUserFromLocalStorage()}</p>
			<ChatContainer chatConversation={chatConversation} />
			<ChatMessageForm setChatConversation={setChatConversation} />
			<Button className="mt-5" onClick={handleCloseButton}>
				Close Chat
			</Button>
		</div>
	);
};

export default ChatPage;
