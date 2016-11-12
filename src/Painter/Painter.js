// Class to manage rendering of elements
class Painter {
  constructor (id, rootGroup) {
    this.rootEl = document.getElementById(id);
    this.canvasEl = document.createElement('canvas');
    this.rootEl.appendChild(this.canvasEl);
    this.context = this.canvasEl.getContext('2d');
    this.rootGroup = rootGroup;
  }
}
