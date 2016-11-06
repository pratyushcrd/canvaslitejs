let doc = document;
/**
* Constructor function to initialize CanvasLite
*/
class CanvasLite {
  constructor (id) {
    this.rootEl = doc.getElementById(id);
    this.canvasEl = doc.createElement('canvas');
    this.rootEl.appendChild(this.canvasEl);
    this.context = this.canvasEl.getContext('2d');
  }
  element () {
    return new Element(this);
  }
  group () {
    return new Group(this);
  }
}
