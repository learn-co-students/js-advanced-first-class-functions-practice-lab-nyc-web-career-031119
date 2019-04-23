function logDriverNames(drivers) {
  drivers.forEach(function(element) {
    console.log(element.name);
  })
};

function logDriversByHometown(drivers, location) {
  let newArray = drivers.filter(driver => driver.hometown === location)
  return newArray.forEach(function(element) {
    console.log(element.name);
  });
};

function sortDrivers(obj1, obj2) {
  return obj1.revenue - obj2.revenue;
}

function sortDriversNames (a, b) {
  return a.name.localeCompare(b.name);
}

function driversByRevenue(drivers) {
  const newArray = drivers.slice(0);
  return newArray.sort(sortDrivers);
};

function driversByName(drivers) {
  const newArray = drivers.slice(0);
return newArray.sort(sortDriversNames);
}

const revenueAvgReducer = function(agg, el, i, arr) {
  let totalRevenue = 0;
  el.revenue += totalRevenue;

  return totalRevenue;
};

function totalRevenue(drivers) {
  return drivers.reduce(function(sumSoFar, driver){
    return driver.revenue + sumSoFar
  }, 0)
};

function averageRevenue(drivers){
  let totalRev =  drivers.reduce(function(acc, driver) {
    return driver.revenue + acc;
  }, 0);
  return totalRev / drivers.length;
}
