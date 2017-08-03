AFRAME.registerComponent('player', {
  schema: {
    health: {type: 'int', default: 200},
    alive: {type: 'boolean', default: true},
  },
  init: function () {
    var el = this.el;
    el.components.sound.playSound();
  },

   tick: function () {
    var entity = this.el;
    if (this.data.health <= 0) {
      entity.parentNode.removeChild(entity);
    }
  },

   reduceHealth: function (damage) {
    if(this.data.health > 0)
      this.data.health -= damage;
    if(this.data.health <= 0) {
      this.data.alive = false;
      this.data.health = 0;
    }
   },

   getHealth: function () {
    return this.data.health;
   },

   isDead: function () {
    return !this.data.alive;
   },

   updateHealthText: function () {
    document.querySelector('#text-health-player').setAttribute('text', 'value', 'HP ' + this.data.health);
   }
});