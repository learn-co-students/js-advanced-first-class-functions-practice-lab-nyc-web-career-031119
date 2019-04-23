// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, location) {
  const newDrivers = drivers.filter(function(driver) {
    return driver.hometown === location;
  });
  logDriverNames(newDrivers);
}

// FUNCTIONS WORK BUT CAUSE WEIRD BEHAVIOR FROM TESTS

function driversByRevenue(drivers) {
  let newDrivers = [];
  newDrivers.push(...drivers);
  return newDrivers.sort(function(num1, num2) {
    return num1.revenue - num2.revenue;
  });
}

function driversByName(drivers) {
  let newDrivers = [];
  newDrivers.push(...drivers);
  return newDrivers.sort(function(a,b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  const reduceDriverRevenues = function(agg, el, i, arr) {
    return agg + el.revenue;
  }
  return drivers.reduce(reduceDriverRevenues, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
