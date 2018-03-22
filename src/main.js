import { Dino } from './js/dino.js'

$(document).ready(function() {
  $('#dino-ipsum').click(function() {
    $('#dino-ipsum').hide();
    let newDino = new Dino();

    let promise = newDino.getDinoAPI();

    promise.then(function(response) {
      let body = JSON.parse(response);
      body.forEach(function(body) {
        for (let i = 0; i < body.length; i++) {
        $('.show-dino-ipsum').append(" " + "<li>" + body[i] + "</li>");
      }

    let promiseSecond = newDino.getGiphyAPI();

    promiseSecond.then(function(response) {
      let parsedBody = JSON.parse(response);
      let random = Math.floor(Math.random()* 4);
      let reply = parsedBody.data[random].images.original.url;
      $('.show-dino-giphy').html(`<img src=${reply}>`);
      });
    });
  });
});
});
