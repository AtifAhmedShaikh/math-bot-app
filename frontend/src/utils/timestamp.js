export const timeAgo = (timestamp) => {
	const currentDate = new Date();
	const inputDate = new Date(timestamp);
	const timeDifference = currentDate - inputDate;
	// Define time intervals in milliseconds
	const intervals = {
		year: 31536000000, // 1 year
		month: 2592000000, // 1 month (average)
		week: 604800000, // 7 days
		day: 86400000, // 24 hours
		hour: 3600000, // 60 minutes
		minute: 60000, // 60 seconds
		second: 1000, // 1 second
	};
	for (const interval in intervals) {
		const numberOfIntervals = Math.floor(timeDifference / intervals[interval]);
		if (numberOfIntervals > 0) {
			return numberOfIntervals === 1 ? `${numberOfIntervals} ${interval} ago` : `${numberOfIntervals} ${interval}s ago`;
		}
	}
	return "Just now";
};
