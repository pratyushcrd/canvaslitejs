/**
* Basic Element class
* Groups and other Elements inherits this
* contains basic methods and properties required by all groups or elements.
*/
class BasicElement {
  /**
  * BasiElement constructor
  * assign the group, store canvas
  * set type initially to 'basicEl'
  */
  constructor (canvas, group) {
    if (!canvas) {
      throw Error('canvas not provided');
    }
    this.canvas = canvas;
    this.config = {
      type: 'basicEl',
      visible: true
    };
    // Initially assign root group if
    // group not provided
    if (group) {
      if (!(group instanceof Group)) {
        throw Error('Not a proper Group');
      }
      group.add(this);
    } else {
      if (canvas.rootGroup) {
        canvas.rootGroup.add(this);
      } else {
        this.isRoot = true;
      }
    }
  }
  is (type) {
    type += '';
    return this.config.type.toLowerCase() === type.toLowerCase();
  }
  /**
  * Assign new group or
  * get the current assigned group
  */
  group (group) {
    // If group is provided assign, otherwise
    // return current group
    var res;
    if (group) {
      this.group().remove(this);
      group.add(this);
      // Notify group changed
      this.__notifyChange__();
      return res;
    } else {
      return this.__group__;
    }
  }
  /**
  * Erase current element
  */
  erase () {
    var key;
    this.group.remove(this);
    // delete every property of element
    for (key in this) {
      if (this.hasOwnProperty(key)) {
        delete this[key];
      }
    }
    // Notify element erased
    this.__notifyChange__();
  }
  /**
  * Hide current element
  */
  hide () {
    if (this.config.visible) {
      this.config.visible = false;
      this.__notifyChange__(true);
    }
    return this;
  }
  /**
  * Show current element
  */
  show () {
    if (!this.config.visible) {
      this.config.visible = true;
      this.__notifyChange__();
    }
    return this;
  }
  /**
  * Toggle current element's visibility
  */
  toggle () {
    this.config.visible = !this.config.visible;
    this.__notifyChange__();
    return this;
  }
  /**
  * Behave when property of element is changed
  */
  __notifyChange__ (forceNotify) {
    if (this.config && this.config.visible || forceNotify) {
      // Notify change only if visible
      // and if element exists
      if (!this.isRoot) {
        this.group().__notifyChange__();
      } else if (this.canvas.brush) {
        this.canvas.brush.paintAll();
      }
    }
  }
  draw (context) {
    // check if context is proper
    if (!context && !(context instanceof window.CanvasRenderingContext2D)) {
      throw Error('Incorrect context');
    }
    // do not draw if invisible
    if (!this.config.visible) {
      return;
    } else {
      this.__draw__(context);
    }
  }
  /**
  * @private
  * Abstract draw method
  */
  __draw__ (context) {
    // Draw method to be overridden by every element
  }
}
