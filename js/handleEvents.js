AFRAME.registerComponent('attack-button', {
  schema: {
    targetEntity: {type: 'string', default: '#Ghost01'}
  },
  init: function () {
    var el = this.el;
    var data = this.data;

    el.addEventListener('click', function () {
      var entity = document.querySelector(data.targetEntity);
      entity.components.enemy.reduceHealth(numAleatorio(1,5));
      console.log(entity.components.enemy.getHealth());
      entity.components.enemy.updateHealthText();
    });

    function numAleatorio(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
  }
});