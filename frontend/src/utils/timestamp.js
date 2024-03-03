export const getRelativeTimeStamp = (timestamp) => {
	const currentTime = new Date();
	const targetTime = new Date(timestamp);
	const timeDifference = currentTime - targetTime;
	const seconds = Math.floor(timeDifference / 1000);

	// Define time intervals in seconds
	const intervals = {
		year: 31536000,
		month: 2592000,
		day: 86400,
		hour: 3600,
		minute: 60,
	};

	for (const [unit, secondsInUnit] of Object.entries(intervals)) {
		const interval = Math.floor(seconds / secondsInUnit);
		if (interval >= 1) {
			return `${interval} ${unit}${interval === 1 ? "" : "s"} ago`;
		}
	}
	return "Just now";
};
