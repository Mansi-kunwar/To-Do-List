//jshint esverrsion:6

module.exports.getDate = getDate;

function getDate() {
	const today = new Date();

	const options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	};

	return today.toLocaleDateString("en-US", options);


}

module.exports.getDay = getDay; //we can also write just exports rather than module.exports as it means the same


function getDay() {
	const today = new Date();

	const options = {
		weekday: "long"
	};

	return today.toLocaleDateString("en-US", options);


}



