// Code your solution in this file!
function logDriverNames(driver){
  driver.forEach(function(driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(driver, location){
  driver.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
    }
  });
}

function driversByRevenue(driver){
  return driver.slice().sort(function(a, b){
    return a.revenue - b.revenue;
  });
}

function driversByName(driver){
  return driver.slice().sort(function(a,b){
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(driver){
  return driver.reduce(function(acc, curr){
    return acc + curr.revenue;
  },0)
}

function averageRevenue(driver){
  return totalRevenue(driver)/driver.length
}
