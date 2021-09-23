const request = require("request");

const nextISSTimesForMyLocation = function(callback) {

  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }
    fetchCoordsByIP(ip, (error, loc) => {
      if (error) {
        return callback(error, null);
      }

      fetchFlyoverTimesForISS(loc, (error, nextPasses) => {
        if (error) {
          return callback(error, null);
        }
        callback(error, nextPasses)
  })
})
})
}

const fetchMyIP = function (callback) {
  const site = "https://api.ipify.org?format=json";

  request(site, (error, response, body) => {
    if (error) {
      callback("Connection Error: " + error, null);
      return;
    }
    if (response.statusCode >= 400) {
      callback(
        "HTTP Error: " + response.statusCode + " when fetching IP",
        null
      );
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback("Sorry IP not found");
      return;
    }
    callback(null, data.ip);

    
  });
};



const fetchCoordsByIP = function (ip, callback) {

  const site = "https://freegeoip.app/json/" + ip;

  request(site, (error, response, body) => {
    if (error) {
      callback("Connection Error: " + error, null);
      return;
    }
    if (response.statusCode >= 400) {
      callback(
        "HTTP Error: " + response.statusCode + " when fetching Coordinates",
        null
      );
      return;
    }

    const data = JSON.parse(body);
    // console.log(data.latitude, data.longitude)
    if (data.length === 0) {
      callback("Sorry GPS Coords not found");
      return;
    }
    const obj = { latitude: data.latitude, longitude: data.longitude };
    callback(null, obj);


  });
};


const fetchFlyoverTimesForISS = function (Coords, callback) {

  const site = "https://iss-pass.herokuapp.com/json/?lat=" + Coords.latitude+ "&lon=" + Coords.longitude;
 
  request(site, (error, response, body) => {
    if (error) {
      callback("Connection Error: " + error, null);
      return;
    }
    if (response.statusCode >= 400) {
      callback(
        "HTTP Error: " + response.statusCode + " when fetching Coordinates",
        null
      );
      return;
    }

    const data = JSON.parse(body);
    //  console.log(data)
    if (data.length === 0) {
      callback("Sorry GPS Coords not found");
      return;
    }
    const obj = data.response;
   
    callback(null, obj);

  });
  
};


module.exports = { nextISSTimesForMyLocation };
