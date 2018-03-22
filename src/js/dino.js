export class Dino {
  getDinoAPI() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://dinoipsum.herokuapp.com/api/?format=json`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  getGiphyAPI() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.giphy.com/v1/gifs/search?q=dinosaur&api_key=${process.env.GIPHY_KEY}&limit=5`;
      console.log('url '+url);
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
