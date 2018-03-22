import { Dino } from './js/dino.js'

$(document).ready(function() {
  $('#dino-ipsum').click(function() {

    let newDino = new Dino();

    let promise = newDino.getDinoAPI();

    promise.then(function(response) {
      let body = JSON.parse(response);
      body.forEach(function(body) {
        for (let i = 0; i < body.length; i++) {
        $('.show-dino-ipsum').append(" " + "<li>" + body[i] + "</li>");
      }
      });
    });
  });
});
