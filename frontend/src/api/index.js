import apiInstance from "./apiConfig";

const calculateArithmeticOperation = async (data) => {
	try {
		const response = await apiInstance.post("/api/arithmetic-operations/evaluate", data);
		return response;
	} catch (error) {
		return error?.response;
	}
};

const fetchUserChat = async (name) => {
	try {
		const response = await apiInstance.get(`/api/arithmetic-operations/chat/${name}`);
		return response;
	} catch (error) {
		return error?.response;
	}
};

export { calculateArithmeticOperation, fetchUserChat };
