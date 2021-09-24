const request = require('request-promise-native');


const nextISSTimesForMyLocation = function() {

  return fetchMyIP()
    .then(ip => {
      return fetchCoordsByIP(ip)
    })
    .then(coords => {
      console.log(coords)
       return fetchISSFlyOverTimes(coords)
    })
    .then((times) => {
      const { response } = JSON.parse(times);
      return response      
    })
    .then((response) => {
      return response      
    })
    .then((response) => {
      return response      
    })
    .then((response) => {
      return response      
    })
        
    };
        

      module.exports = { nextISSTimesForMyLocation };


const fetchMyIP = function() {
  const ipPromise = request('https://api.ipify.org?format=json');
  return ipPromise
};

const fetchCoordsByIP = function(body) {
  const data = JSON.parse(body).ip;
  return request('https://freegeoip.app/json/' + data)
};

const fetchISSFlyOverTimes = function(body) {
  // const { latitude, longitude } = JSON.parse(body);
  const coordinates = JSON.parse(body);
  const latitude = coordinates.latitude
  const longitude = coordinates.longitude
  return request("https://iss-pass.herokuapp.com/json/?lat=" + latitude + "&lon=" + longitude)
};

