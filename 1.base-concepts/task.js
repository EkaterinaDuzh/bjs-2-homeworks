"use strict"

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthPercent = percent / 100 / 12;
	let contribution;
	let amount;
	let countMonths;
	let totalAmount;
	let month;
	let bodyCredit;
	if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount)) {
		const bodyCredit = amount - contribution;
		const month = bodyCredit * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
		const totalAmount = parseFloat((month * countMonths).toFixed(2));
		return totalAmount;
	}
	return false;
}