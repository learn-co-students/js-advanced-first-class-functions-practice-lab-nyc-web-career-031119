

function logDriverNames(driver) {
  driver.forEach(function(element) {
    console.log(element.name);
  })
}

const logDriversByHometown = function(drivers, loc) {
  drivers.forEach(function(ele) {
    if (ele.hometown === loc) {
      console.log(ele.name);
    }
  });
}

const driversByRevenue = function(drivers) {
  let newArr = [...drivers]
  return newArr.sort((a, b) => a.revenue - b.revenue);
}

const driversByName = function(drivers) {
  let newArr = [...drivers]
  return newArr.sort((a, b) => a.name.localeCompare(b.name))
}

const revenueArr = function(drivers) {
  let newArr = []
  drivers.forEach(function(d) {
    newArr.push(d.revenue);
  })
  return newArr;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const totalRevenue = function(drivers) {
  let arr = [...revenueArr(drivers)];
  return arr.reduce(reducer);
}

const averageRevenue = function(drivers) {
  let arr = totalRevenue(drivers);
  return arr / drivers.length;
}


// const drivers = [
//   { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
//   { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
//   { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
//   { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
//   { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
// ];
