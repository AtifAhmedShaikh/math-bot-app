const setUserInLocalStorage = (name) => {
	localStorage.setItem("user", JSON.stringify(name));
};

const getUserFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("user"));
};

const removeUserFromLocalStorage = () => {
	localStorage.removeItem("user");
};

export { setUserInLocalStorage, getUserFromLocalStorage ,removeUserFromLocalStorage};
