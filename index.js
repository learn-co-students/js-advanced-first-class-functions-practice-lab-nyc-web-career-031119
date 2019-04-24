// Code your solution in this file!

function logDriverNames(arr) {
  arr.forEach(function (driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(arr, location) {
  arr.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(arr) {
  return arr.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(arr) {
  return arr.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(arr) {
  let total = 0
  for (const driver of arr) {
    total += driver.revenue;
  }
  return total;
}

function averageRevenue(arr) {
  let total = 0
  for (const driver of arr) {
    total += driver.revenue;
  }
  return total/arr.length;
}
