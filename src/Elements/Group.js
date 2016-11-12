/**
* Manage groups that elements belong to
* extends BasicElement
*/
class Group extends BasicElement {
  constructor (canvas, group, isRoot) {
    super(canvas, group, isRoot);
    // Set type to group
    this.config.type = 'group';
    this.__members__ = [];
    // Notify element added
    this.__notifyChange__();
  }
  /**
  * Check if is proper element or group
  */
  __checkEl__ (element) {
    if (!(element instanceof BasicElement)) {
      throw Error('Only elements or groups can be added');
    }
  }
  /**
  * Check if is proper group
  */
  __checkGroup__ (element) {
    if (!(element instanceof Group)) {
      throw Error('Group expected');
    }
  }
  /**
  * Add new elements or groups
  * to current group
  */
  add (element) {
    let i = 0;
    // If Array add all elements
    if (!isNaN(element.length)) {
      for (i = element.length; i--;) {
        this.add(element[i]);
      }
      return this;
    }
    this.__checkEl__(element);
    // Remove previous group;
    if (element.group()) {
      element.group().remove(element);
    }
    // asssign new group
    element.__group__ = this;
    this.__members__.push(element);
    return this;
  }
  /**
  * Add new elements or groups
  * to current group from different group
  */
  addAllFrom (group) {
    let arr,
      i = 0;
    this.__checkGroup__(group);
    arr = group.__members__;
    for (i = arr.length; i--;) {

    }
  }
  /**
  * Remove element is member of current group
  */
  remove (element) {
    let members = this.__members__,
      i = 0,
      ii = members.length,
      j = 0;
    this.__checkEl__(element);
    for (; i < ii; ++i) {
      if (members[i] === element) {
        break;
      }
    }
    if (i === ii) { // Element not found
      throw Error('Element not in current group');
    } else { // Remove the element
      for (j = i + 1; j < ii; ++j) {
        members[j - 1] = members[j];
      }
      members.pop();
      delete element.group;
    }
    return this;
  }
  /**
  * Remove all elements
  */
  removeAll () {
    let members = this.__members__,
      i = members.length;
    for (; i--;) {
      delete members[i].group;
    }
    // Remove references of all elements
    this.__members__ = [];
    return this;
  }
  /**
  * Overriding method
  * Erase current group and all its children
  */
  erase () {
    let members = this.__members__,
      i = members.length;
    // remove all children
    for (; i--;) {
      members[i].erase();
    }
    // Remove self
    super.erase();
  }
  /**
  * Function to command all group element to draw itself;
  */
  __draw__ (context) {
    let members = this.__members__,
      i = 0,
      ii = members.length;
    // Iterating over each member;
    // commanding to draw
    for (; i < ii; ++i) {
      members[i].draw(context);
    }
  }
}
