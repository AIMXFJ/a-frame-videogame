AFRAME.registerComponent('handle-events', {
   init: function () {
     var el = this.el;  //
     el.addEventListener('mouseenter', function () {
       el.setAttribute('color', 'red');
       console.log("mouseenter");
     });
     el.addEventListener('mouseleave', function () {
       el.setAttribute('color', 'grey');
         console.log("mouseleave");
     });
     el.addEventListener('click', function () {
       el.setAttribute('position', {x: numAleatorio(1,5), y: numAleatorio(1,3), z: numAleatorio(1,3)});
         console.log("click");
     });

     function numAleatorio(min, max) {
       return Math.round(Math.random() * (max - min) + min);
       }
    }
 });

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