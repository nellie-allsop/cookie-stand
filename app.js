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
		this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
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
// One of these for each time plus total = 15
// const td = document.createElement("th");
// td.textContent = this.average;
// tr.appendChild(td);

// const timeTr = document.createElement("tr");
// salesData.appendChild(timeTr);

// const timeTd = document.createElemen("td");
// timeTd.textContent = hours;
// timeTr.appendChild(timeTd);
//array of hours within table

// want shop.cookiesPerHour within the table

// tr with 'td's within it

// const Ul = document.createElement("ul");

// salesData.appendChild(Ul);

const seattle = new Shop("Seattle", 23, 65, 6.3);

const tokyo = new Shop("Tokyo", 3, 24, 1.2);

const dubai = new Shop("Dubai", 11, 38, 3.7);

const paris = new Shop("Paris", 20, 38, 2.3);

const lima = new Shop("Lima", 2, 16, 4.6);

const headerRow = document.createElement("tr");
const blankTd = document.createElement("td");
headerRow.appendChild(blankTd);

for (let i = 0; i < hours.length; i++) {
	const th = document.createElement("th");
	th.textContent = hours[i];
	headerRow.appendChild(th);
}

const totalHeading = document.createElement("th");
totalHeading;

table.appendChild(headerRow);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// Each location should have times, cookies per hour and totals

// copied and pasted from above

// const tokyoH2 = document.createElement("h2");
// tokyoH2.textContent = tokyo.location;
// salesData.appendChild(tokyoH2);

// const tokyoUl = document.createElement("ul");
// for (let i = 0; i < hours.length; i++) {
// 	const li = document.createElement("li");
// 	li.textContent = `${hours[i]}: ${tokyo.cookiesPerHour[i]} cookies`;
// 	tokyoUl.appendChild(li);
// }

// salesData.appendChild(tokyoUl);

// function Shop(times, cookies-per-hour, totals)
// this.
