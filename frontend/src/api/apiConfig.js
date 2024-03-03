import axios from "axios";

// create an axios Instance for api calls
const apiInstance = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true,
	responseType: "json",
});

const responseInterceptor = (response) => {
	const message = response?.data?.message;
	return { ...response, message, success: true, data: response?.data };
};

const errorInterceptor = (error) => {
	const message = error?.response?.data?.message || "some thing went wrong";
	return { ...error?.response, message, success: false, data: null };
};

apiInstance.interceptors.response.use(responseInterceptor, errorInterceptor);

export default apiInstance;
