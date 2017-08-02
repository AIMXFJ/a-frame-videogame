AFRAME.registerComponent('static-movement', {
    schema: {default: ''},
       init: function () {
         var el = this.el;
         el.addEventListener('click', function () {
            document.querySelector('#player').setAttribute('position', el.getAttribute('position'));
            console.log("click");
         });
       }
     });