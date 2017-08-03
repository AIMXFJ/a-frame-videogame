AFRAME.registerComponent('static-movement', {
    schema: {default: ''},
       init: function () {
         var el = this.el;
         el.addEventListener('click', function () {
         	el.components.sound.playSound();
            document.querySelector('#player').setAttribute('position', el.getAttribute('position'));
            console.log("click");
         });
       }
     });