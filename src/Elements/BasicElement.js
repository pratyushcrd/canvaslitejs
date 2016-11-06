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
      this.group = group;
    } else {
      this.group = canvas.rootGroup;
    }
  }
  /**
  * Assign new group or
  * get the current assigned group
  */
  group (group) {
    // If group is provided assign, otherwise
    // return current group
    if (group) {
      this.group.remove(this);
      this.group = group;
      return this;
    } else {
      return this.group;
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
    this.__notifyChange__();
  }
  /**
  * Hide current element
  */
  hide () {
    if (this.config.visible) {
      this.config.visible = false;
      this.__notifyChange__();
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
  __notifyChange__ () {
    if (this.config.visible) {
      // Notify change only if visible
    }
  }
}
