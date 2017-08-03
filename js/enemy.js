AFRAME.registerComponent('enemy', {
  schema: {
    health: {type: 'int', default: 20},
    alive: {type: 'boolean', default: true},
    id: {type: 'int', default: 0}
  },

  tick: function () {
    var entity = this.el;
    if (this.data.health <= 0) {
      entity.parentNode.removeChild(entity);
    }
  },

  randomDamage: function (min, max) {
           return Math.round(Math.random() * (max - min) + min);
           },

  attackPlayer: function (damage) {
    var player = document.querySelector('#player');
    console.log(player.components.player.getHealth());
    player.components.player.reduceHealth(damage);
    player.components.player.updateHealthText();
  },

   reduceHealth: function (damage) {
    this.el.components.sound.playSound();
    this.attackPlayer(this.randomDamage(1,3));
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
    document.querySelector('#text-health-'+this.data.id).setAttribute('text', 'value', 'HP ' + this.data.health);
   }
});