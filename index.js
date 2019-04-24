// Code your solution in this file!

const logDriverNames = function(drivers){
  drivers.forEach(function (driver){
    console.log(driver.name)
  })
}

const logDriversByHometown = function (drivers, searchedHometown){
  drivers.forEach(function (driver){
    if (driver.hometown === searchedHometown){
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function(drivers){
  return drivers.slice().sort(function(firstDriver, secondDriver){
    return firstDriver.revenue - secondDriver.revenue
  })
}

const driversByName = function(drivers){
  return drivers.slice().sort(function(firstDriver, secondDriver){
    return firstDriver.name.localeCompare(secondDriver.name)
  })
}

const totalRevenue = function(drivers){
  return drivers.reduce(function(agg, currentDriver){
    return currentDriver.revenue + agg
  },0)
}

const averageRevenue = function(drivers){
  return totalRevenue(drivers) / drivers.length
}
