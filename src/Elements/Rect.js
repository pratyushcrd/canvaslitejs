/**
* Line element
*/
class Rect extends BasicElement {
  constructor (canvas, elConfig, group) {
    super(canvas, group);
    this.config.type = 'rect';
    this.elConfig = elConfig;
  }
  /**
  * Function to describe how element will be drawn
  */
  __draw__ (context) {
    let i,
      rect = this,
      config = rect.elConfig;
    // If no context dont draw
    super.__draw__(context);
    context.rect(config.x, config.y, config.width, config.height);
    context.fill = config.fill;
    console.log(config);
    context.stroke();
  }
} // end Line
