const hours = [
	"6am",
	"7am",
	"8am",
	"9am",
	"10am",
	"11am",
	"12pm",
	"1pm",
	"2pm",
	"3pm",
	"4pm",
	"5pm",
	"6pm",
	"7pm",
];

const table = document.getElementById("salesData");

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Shop(shopName, minCust, maxCust, average) {
	this.shopName = shopName;
	this.minCust = minCust;
	this.maxCust = maxCust;
	this.avgCookiesPerCust = average;
	this.customersPerHour = [];
	this.cookiesPerHour = [];
	this.totalCookieSold = 0;
}

Shop.prototype.calculateSales = function () {
	for (let i = 0; i < hours.length; i++) {
		const hourCustomers = randomNumber(this.minCust, this.maxCust);
		this.customersPerHour.push(hourCustomers);
		const hourCookiesSold = hourCustomers * this.avgCookiesPerCust;
		this.cookiesPerHour.push(Math.floor(hourCookiesSold));
		this.totalCookieSold = Math.floor(this.totalCookieSold) + hourCookiesSold;
	}
};

Shop.prototype.render = function () {
	this.calculateSales();

	const tr = document.createElement("tr");

	const th = document.createElement("th");
	th.textContent = this.shopName;
	tr.appendChild(th);

	for (let i = 0; i < this.cookiesPerHour.length; i++) {
		const td = document.createElement("td");
		td.textContent = this.cookiesPerHour[i];
		tr.appendChild(td);
	}

	const totalTd = document.createElement("td");
	totalTd.textContent = this.totalCookieSold;
	tr.appendChild(totalTd);

	table.appendChild(tr);
};

//Constructor function
// Put these in an array
const stores = [
	new Shop("Seattle", 23, 65, 6.3),

	new Shop("Tokyo", 3, 24, 1.2),

	new Shop("Dubai", 11, 38, 3.7),

	new Shop("Paris", 20, 38, 2.3),

	new Shop("Lima", 2, 16, 4.6),
];

const headerRow = document.createElement("tr");
const blankTd = document.createElement("td");
headerRow.appendChild(blankTd);

for (let i = 0; i < hours.length; i++) {
	const th = document.createElement("th");
	th.textContent = hours[i];
	headerRow.appendChild(th);
}

const totalHeading = document.createElement("th");
totalHeading.textContent = "Total";
headerRow.appendChild(totalHeading);

table.appendChild(headerRow);

for (let i = 0; i < stores.length; i++) {
	stores[i].render();
}

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();

const form = document.getElementById("shopForm");

// function infoRequired() {
// 	let x = event.shopName.value
// 	if (x == "") {
// 		alert("Please provide a shop name!");
// 		return false;
// 	}
// }

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const shopName = event.target.shopName.value;
	const minCust = event.target.minCust.value;
	const maxCust = event.target.maxCust.value;
	const avgCookies = event.target.average.value;

	const newShop = new Shop(shopName, +minCust, +maxCust, +avgCookies);

	newShop.render();
	renderTotalRow();
});

function renderTotalRow() {
	const oldTr = document.getElementById("totalrow");
	oldTr?.remove();

	const tr = document.createElement("tr");
	tr.setAttribute("id", "totalrow");

	const th = document.createElement("th");
	th.textContent = "Hourly total";
	tr.appendChild(th);

	for (let i = 0; i < hours.length; i++) {
		let hourlyTotal = 0;
		for (let k = 0; k < stores.length; k++) {
			hourlyTotal += stores[k].cookiesPerHour[i];
		}

		const td = document.createElement("td");
		td.textContent = hourlyTotal;
		tr.appendChild(td);
	}

	table.appendChild(tr);
}

renderTotalRow();
