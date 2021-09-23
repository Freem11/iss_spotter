// const { fetchMyIP, fetchCoordsByIP, fetchFlyoverTimesForISS} = require("./iss");

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// const IP = '24.86.177.134'

// fetchCoordsByIP(IP, (error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned Coordinates:' , coords);
// });

// const Coords = { latitude: '49.245', longitude: '-123.1337' }

// fetchFlyoverTimesForISS(Coords, (error, results) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned Info:' , results);
// });
