// Code your solution in this file!
const logDriverNames = function(drivers) {
	drivers.forEach(function(el, i, arr){ console.log(el.name)});
};

function logDriversByHometown(drivers, location){
	drivers.forEach(function(driver, i, arr){
		if (driver.hometown === location){
			console.log(driver.name);
		}
	});
};

const revenueSorter = function(drive1, drive2) {return drive1.revenue - drive2.revenue;};


function driversByRevenue(drivers){
	debugger;
	return drivers.slice().sort(revenueSorter);
};

function driversByName(drivers) {
	return drivers.slice().sort(function (a, b) {return a.name.localeCompare(b.name)});
};

function totalRevenue(drivers){
	return drivers.reduce((agg, el, i, arr) => (agg + el.revenue),0);
};

function averageRevenue(drivers) {
	return totalRevenue(drivers)/drivers.length;
};
