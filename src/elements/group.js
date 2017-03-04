const consts = require('../utils/constants'),
  errors = require('../utils/error'),
  defaults = require('../utils/defaults'),
  lib = require('../utils/lib'),
  isEl = function (el) {
    return lib.is(el).a(BasicElement)
  }

let BasicElement;
// Exporting the Group element
// Will require CanvasLite constructor
// reference to get BasicElement
module.exports = function (CanvasLite) {
  // Getting BasicElement
  BasicElement = CanvasLite.getComponent('BasicElement');

  class Group extends BasicElement {
    constructor (canvas, group) {
      super(canvas, group)
      // Defining members as an array
      this.members = []
    }
    /**
    * Function to add elements to Group
    **/
    add (el) {
      if (isEl(el)) {
        this.members.push(el)
        el.__setParent(this)
      }
      return this
    }
    /**
    * Function to remove elements to Group
    **/
    remove (el) {
      let index = this.members.indexOf(el)
      // If element is found, remove it
      if (~index) {
        this.members.splice(index, 1)
      }
      return this
    }
    /**
    * Function to check if group has the element
    **/
    has (el) {
      return !!~this.members.indexOf(el)
    }
    // Bring Child to Front
    __bringToFront (child) {
      let members = this.members,
        index = members.indexOf(child)
      ~index && members.splice(index, 1) && members.unshift(child)
      return this
    }
    // Send Child to Last
    __sendToBack (child) {
      let members = this.members,
        index = members.indexOf(child)
      ~index && members.splice(index, 1) && members.push(child)
      return this 
    }
  }
  
  // Registering component and instance method  
  CanvasLite.registerComponent('Group', Group, 'group');
}