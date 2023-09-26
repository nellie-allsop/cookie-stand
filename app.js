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

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Shop(
	shopName,
	minCust,
	maxCust,
	avgCookiesPerCust,
	customersPerHour,
	cookiesPerHour,
	totalCookieSold,
	calculateSales
) {
	this.shopName = shopName;
	this.minCust = minCust;
	this.maxCust = maxCust;
	this.avgCookiesPerCust = avgCookiesPerCust;
	this.customersPerHour = customersPerHour;
	this.cookiesPerHour = cookiesPerHour;
	this.totalCookieSold = totalCookieSold;
	this.calculateSales = calculateSales;
}

// Shop.calculateSales();

// 	location: "Seattle",
// 	minCust: 23,
// 	maxCust: 65,
// 	avgCookiesPerCust: 6.3,
// 	customersPerHour: [],
// 	cookiesPerHour: [],
// 	totalCookieSold: 0,
// 	calculateSales: function () {
// 		for (let i = 0; i < hours.length; i++) {
// 			const hourCustomers = randomNumber(this.minCust, this.maxCust);
// 			this.customersPerHour.push(hourCustomers);
// 			const hourCookiesSold = hourCustomers * this.avgCookiesPerCust;
// 			this.cookiesPerHour.push(Math.floor(hourCookiesSold));
// 			this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
// 		}
// 	},
// };

Shop.prototype.render = function () {
	const salesData = document.getElementById("salesData");

	const tr = document.createElement("tr");
	tr.textContent = this.shopName;
	salesData.appendChild(tr);

	// One of these for each time plus total = 15
	const td = document.createElement("th");
	td.textContent = this.minCust;
	tr.appendChild(td);

	const timeTr = document.createElement("tr");
	salesData.appendChild(timeTr);

	const timeTd = document.createElemen("td");
	timeTd.textContent = "test2";
	timeTr.appendChild(timeTd);
	//array of hours within table

	// want shop.cookiesPerHour within the table

	// tr with 'td's within it

	// const Ul = document.createElement("ul");
	// for (let i = 0; i < hours.length; i++) {
	// 	const li = document.createElement("li");
	// 	li.textContent = `${hours[i]}: ${Shop.cookiesPerHour[i]} cookies`;
	// 	Ul.appendChild(li);
};

// salesData.appendChild(Ul);

const seattle = new Shop("Seattle", 23, 65, 6.3, [], [], 0, function () {});

const tokyo = new Shop("Tokyo", 3, 24, 1.2, [], [], 0, function () {});

const dubai = new Shop("Dubai", 11, 38, 3.7, [], [], 0, function () {});

const paris = new Shop("Paris", 20, 38, 2.3, [], [], 0, function () {});

const lima = new Shop("Lima", 2, 16, 4.6, [], [], 0, function () {});

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
