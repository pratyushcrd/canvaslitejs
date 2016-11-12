// Class to manage rendering of elements
class Painter {
  constructor (id, height, width, rootGroup) {
    let painter = this,
      canvas;
    painter.canvas = {
      rootEl: document.getElementById(id),
      canvasEl: document.createElement('canvas'),
      height: height || libDefaults.canvasHeight,
      width: width || libDefaults.canvasWidth
    };
    canvas = painter.canvas;
    canvas.rootEl.appendChild(canvas.canvasEl);
    // Setting height and width of canvas
    canvas.canvasEl.setAttribute('width', canvas.width);
    canvas.canvasEl.setAttribute('height', canvas.height);
    // Setting fallback
    canvas.canvasEl.innerHTML = 'Your browser doesn\'t support canvas!';
    // Getting context and root group
    canvas.context = canvas.canvasEl.getContext('2d');
    canvas.rootGroup = rootGroup;
    this.clearCanvas();
  }
  /**
  * Clearing canvas with state saved
  */
  clearCanvas (saveState) {
    let painter = this,
      canvas = painter.canvas,
      context = canvas.context;
    // Store the current transformation matrix
    if (saveState) {
      context.save();
    }
    context.beginPath();
    context.fillStyle = 'white';
    context.strokeStyle = 'white';
    context.rect(0, 0, canvas.width, canvas.height);
    context.stroke();
    context.fill();
    // Restore the transform
    if (saveState) {
      context.restore();
    }
  }
  // Paint all visible items;
  paintAll () {
    this.clearCanvas();
    this.canvas.rootGroup.__draw__(this.canvas.context);
  }
}
