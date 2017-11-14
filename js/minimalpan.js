var customPan = (function() {
  //custompan module
  //manage event pan and return simply x and y => document;
  
  var funcCallBack;
  
  var panStart = function(e) {
    ['mousemove', 'touchmove'].forEach(function(event) {
        document.addEventListener(event, panMoving);
    });
    
    //when panMove end
    ['mouseup', 'touchend'].forEach(function(event) {
        document.addEventListener(event, panEnd);
    });
  };
  
  var panEnd = function(e) {
    ['mousemove', 'touchmove'].forEach(function(event) {
        document.removeEventListener(event, panMoving);
    });
  };
  
  var panMoving = function(e) {
    var x = e.clientX || e.changedTouches[0].clientX;
    var y = e.clientY || e.changedTouches[0].clientY;
    
    funcCallBack(x,y);
  };
  
  
  return {
    init: function(elem, func) {
      funcCallBack = func;
      
      ['mousedown', 'touchstart'].forEach(function(event) {
        elem.addEventListener(event, panStart);
      });
    }
  }
})();
