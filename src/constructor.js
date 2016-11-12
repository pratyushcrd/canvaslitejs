/**
* Constructor function to initialize CanvasLite
*/
class CanvasLite {
  constructor (id) {
    this.rootGroup = new Group(this, null, true);
    this.brush = new Painter(id, this.rootGroup);
  }
  element () {
    return new BasicElement(this);
  }
  group () {
    return new Group(this);
  }
}
// Exposing CanvasLite to global space
window.CanvasLite = CanvasLite;
