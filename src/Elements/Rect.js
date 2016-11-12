/**
* Line element
*/
class Rect extends BasicElement {
  constructor (canvas, elConfig, group) {
    super(canvas, group);
    this.config.type = 'rect';
    this.elConfig = elConfig;
    // Notify element added
    this.__notifyChange__();
  }
  /**
  * Function to describe how element will be drawn
  */
  __draw__ (context) {
    let i,
      rect = this,
      config = rect.elConfig;
    context.beginPath();
    context.rect(config.x, config.y, config.width, config.height);
    context.fillStyle = config.fill || libDefaults.fill;
    context.strokeStyle = config.stroke || libDefaults.stroke;
    context.stroke();
    context.fill();
  }
} // end Line
