// Class to manage rendering of elements
class Painter {
  constructor (id, height, width, rootGroup) {
    let painter = this,
      canvas;
    painter.canvas = {
      rootEl: document.getElementById(id),
      canvasEl: document.createElement('canvas')
    };
    canvas = painter.canvas;
    canvas.rootEl.appendChild(canvas.canvasEl);
    // Setting height and width of canvas
    canvas.canvasEl.setAttribute('height', height || defaults.canvasHeight);
    canvas.canvasEl.setAttribute('height', width || defaults.canvasWidth);
    // Setting fallback
    canvas.canvasEl.innerHTML = 'Your browser doesn\'t support canvas!';
    // Getting context and root group
    canvas.context = canvas.canvasEl.getContext('2d');
    canvas.rootGroup = rootGroup;
  }
  /**
  * Clearing canvas with state saved
  */
  clearCanvas (dontSaveState) {
    let painter = this,
      context = painter.context,
      canvas = painter.canvas;
    // Store the current transformation matrix
    if (!dontSaveState) {
      context.save();
    }

    // Use the identity matrix while clearing the canvas
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Restore the transform
    if (!dontSaveState) {
      context.restore();
    }
  }
}
