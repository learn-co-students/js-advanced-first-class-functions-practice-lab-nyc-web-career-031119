// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function(el, i, arr) {console.log(el.name)})
};

function logDriversByHometown(drivers, location) {
  return drivers.forEach(function(el, i, arr) {
    if (el.hometown === location) {
      console.log(el.name)
    }
  })
};

function driversByRevenue(drivers) {
  const moneyDrivers = [...drivers]
  return moneyDrivers.sort(function (a, b) {
    return a.revenue - b.revenue
  });
};

function driversByName(drivers){
  const nameDrivers = [...drivers]
  return nameDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  });
};

const sumRevenue = function(agg, el, i, arr) {
  return agg + el.revenue
}

function totalRevenue(drivers) {
  return drivers.reduce(sumRevenue, 0);
};

function averageRevenue(drivers) {
  const sum = totalRevenue(drivers)
  return sum/(drivers.length)
};
