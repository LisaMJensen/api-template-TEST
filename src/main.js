// Front end logic.
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tamagotchi } from './Tamagotchi.js';



let pet = new Tamagotchi("Earl");

pet.setHunger();
pet.setAttention();
pet.setSleep();
//front-end
$(document).ready(function() {
// event.preventDefault();


console.log(pet.didYouStarve());

console.log(pet);
console.log(pet.name)
console.log(pet.foodLevel)


  var displayFoodLevel = setInterval(function () {
      document.getElementById("visibleFeed").innerHTML = pet.foodLevel;
      if (pet.foodLevel === 0) {
          clearInterval(displayFoodLevel);
      }
      }, 1000);

  var displayAttentionLevel = setInterval(function () {
      document.getElementById("visibleAttention").innerHTML = pet.attentionLevel;
      if (pet.attentionLevel === 0) {
          clearInterval(displayAttentionLevel);
      }
      }, 1000);

  var displaySleepLevel = setInterval(function () {
      document.getElementById("visibleSleep").innerHTML = pet.sleepLevel;
      if (pet.sleepLevel === 0) {
          clearInterval(displaySleepLevel);
      }
      }, 1000);

// document.getElementById("visibleFeed").innerHTML = pet.foodLevel

    $("#feed").click(function() {
      // event.preventDefault();
      pet.feed();
    });
    $("#attention").click(function() {
      // event.preventDefault();
      pet.play();
    });
    $("#sleep").click(function() {
      // event.preventDefault();
      pet.sleep();
    //
    //


  });
});
// setInterval(function) {
// document.getElementById("visibleFeed").innerHTML = (pet.foodLevel)}, 1000);
