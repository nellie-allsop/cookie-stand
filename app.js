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

const seattle = {
	location: "seattle",
	minCust: 23,
	maxCust: 65,
	avgCookiesPerCust: 6.3,
	customersPerHour: [],
	cookiesPerHour: [],
	totalCookieSold: 0,
	calculateSales: function () {
		for (let i = 0; i < hours.length; i++) {
			const randNum = randomNumber(this.minCust, this.maxCust);
			this.customersPerHour.push(randNum);
			this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
		}
	},
};

seattle.calculateSales();
console.log(seattle);

const dailyCookies = document.getElementById("dailyCookies");

const article = document.createElement("article");

const h2 = document.createElement("h2");
h2.textContent = seattle.location;
article.appendChild(h2);

const ul = document.createElement("ul");
for (let i = 0; i < seattle.cookiesPerHour.length; i++) {
	const li = document.createElement("li");
	li.textContent = seattle.cookiesPerHour[i];
	ul.appendChild(li);
}
article.appendChild(ul);

const ul = document.createElement("ul");
for 






// const p1 = document.createElement("p");
// p1.textContent = seattle.minCust;
// article.appendChild(p1);

// const p2 = document.createElement("p");
// p2.textContent = seattle.maxCust;
// article.appendChild(p2);

// const p3 = document.createElement("p");
// p3.textContent = seattle.avgCookiesPerCust;
// article.appendChild(p3);

dailyCookies.appendChild(article);
