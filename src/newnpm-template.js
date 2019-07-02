
  // class Tamagotchi(hunger, attention, sleep) {
  // let userDateString = new Date(year, month, day);

//Variables
  // pet.name = "Earl";

//Object
export class Tamagotchi {

constructor (name) {
    this.name = name;
    this.foodLevel = 11;
    this.attentionLevel = 11;
    this.sleepLevel = 11;
  }
  // let pet = new userTamagotchi ("Earl", 10, 10, 10);

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
      console.log(this.foodLevel)
    }, 1000);
  }

  setAttention() {
    setInterval(() => {
      this.attentionLevel--;
      // console.log(this.attentionLevel)
    }, 1000);
  }

  setSleep() {
    setInterval(() => {
      this.sleepLevel--;
      // console.log(this.sleepLevel)
    }, 1000);
  }

  didYouStarve() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  didYouLonely() {
    if (this.attentionLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  didYouNotSleep() {
    if (this.sleepLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

 feed() {
    this.foodLevel = 11;
  }

play() {
    this.attentionLevel = 11;
  }
sleep() {
    this.sleepLevel = 11;
  }
  // document.getElementById("visibleFeed").innerHTML = this.foodLevel;
}
