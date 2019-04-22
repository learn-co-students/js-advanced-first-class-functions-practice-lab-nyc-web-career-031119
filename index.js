// Code your solution in this file!
const logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

const logDriversByHometown = function(driver, location){
  driver.forEach(function(driver){
    if(driver.hometown === location)
      console.log(driver.name);
  })
}

const driversByRevenue = function(driver, revenue){
  return driver.sort(function(a,b){
    return a.revenue-b.revenue;
  });
}

const driversByName = function(drivers){
  return drivers.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  })
}

const totalRevenue = function(drivers){
  let totalPrice = 0;
  drivers.forEach(function(driver){
    totalPrice += driver.revenue;
  })
  return totalPrice;
}

const averageRevenue = function(drivers) {
  drivers.forEach(function(driver){
    average = totalRevenue(drivers)/drivers.length
  })
  return average
}
