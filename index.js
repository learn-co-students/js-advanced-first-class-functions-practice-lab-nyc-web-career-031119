// Code your solution in this file!
function logDriverNames(array) {
  array.forEach(function(driver) {
    console.log(driver.name);
  });
};

function logDriversByHometown(array, location) {
  array.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
};

function driversByRevenue(array) {
  const array2 = [...array];
  return array2.sort(function (a,b) {
    return a.revenue > b.revenue ? 1 : -1;
  });
};

function driversByName(array) {
  const array2 = [...array];
  return array2.sort(function (a,b) {
    return a.name.localeCompare(b.name);
  });
};

function totalRevenue(array) {
  let sum = 0;
  array.forEach(function (driver) {
    sum += driver.revenue;
  });
  return sum;
};

function averageRevenue(array) {
  return (totalRevenue(array) / array.length);
};
