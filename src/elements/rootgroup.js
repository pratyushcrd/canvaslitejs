// Exporting the RootGroup element
// Will require CanvasLite constructor
// reference to get Group
module.exports = function (CanvasLite) {
  // Getting BasicElement
  let Group = CanvasLite.getComponent('Group');
  /**
  * A simple class that extends Group
  * to command draw of all elements
  **/
  class RootGroup extends Group {
  }
  
  // Registering component and instance method  
  CanvasLite.registerComponent('RootGroup', RootGroup);
}