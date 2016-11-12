/**
* Storing all defaults value
* that is used in Library
*/
let libDefaults = {
    canvasHeight: 300,
    canvasWidth: 500,
    fill: '#fff',
    stroke: '#000',
    strokeWidth: 4
  },
  userDefaults = {
  };
/**
* Constructor function to initialize CanvasLite
*/
class CanvasLite {
  constructor (id, height, width) {
    this.rootGroup = new Group(this, null, true);
    this.brush = new Painter(id, height, width, this.rootGroup);
  }

  /**
  * Create a new rect with configurations
  * Config Ex: {
  *   x : 0,
  *   y : 0,
  *   height: 100,
  *   width : 100,
  *   fill : '#345',
  *   stroke : '#987'
  * }
  */
  rect (config, group) {
    let _config = {};
    if (typeof config !== 'object') {
      _config.x = arguments[0];
      _config.y = arguments[1];
      _config.width = arguments[2];
      _config.height = arguments[3];
      if (arguments[4] instanceof Group || !arguments[4]) {
        return new Rect(this, _config, arguments[4]);
      }
      _config.fill = arguments[4];
      if (arguments[5] instanceof Group || !arguments[5]) {
        return new Rect(this, _config, arguments[5]);
      }
      _config.stroke = arguments[5];
      return new Rect(this, _config, arguments[6]);
    }
    return new Rect(this, config, group);
  }
  /**
  * Create a new element
  */
  element () {
    return new BasicElement(this);
  }
  /**
  * Create a new group
  */
  group () {
    return new Group(this);
  }
  /**
  * clearing canvas
  */
  clear () {
    this.brush.clearCanvas();
  }
}
// Exposing CanvasLite to global space
window.CanvasLite = CanvasLite;

// Getting accurate requestAnimationFrame
(function getAccurateRequestAnimationFrame () {
  var lastTime = 0,
    vendors = ['ms', 'moz', 'webkit', 'o'],
    x = 0,
    xx = vendors.length,
    currTime = 0,
    timeToCall = 0,
    id = 0;
  for (; x < xx && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
    window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      currTime = new Date().getTime();
      timeToCall = Math.max(0, 16 - (currTime - lastTime));
      id = window.setTimeout(function () { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
}());
