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

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const shopName = event.target.shopName.value;
	const minCust = event.target.minCust.value;
	const maxCust = event.target.maxCust.value;

	const salesData = document.getElementById("salesData");

	const p = document.createElement("p");
	p.textContent = `${shopName} ${minCust} ${maxCust} `;
	salesData.appendChild(p);
});
