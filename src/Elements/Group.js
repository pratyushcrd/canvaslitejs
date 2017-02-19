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
  __checkIfEl__ (element) {
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
    this.__checkIfEl__(element);
    // Remove previous group;
    if (element.group()) {
      element.group().remove(element);
    }
    // asssign new group
    element.__group__ = this;
    this.__members__.push(element);
    this.__notifyChange__();
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
    this.__checkIfEl__(element);
    i = members.indexOf(element);
    if (!~i) { // Element not found
      throw Error('Element not in current group');
    } else { // Remove the element
      members.splice(i, 1);
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
      members[i].pop();
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
    this.__notifyChange__();
    // Remove self
    super.erase();
  }
  /**
  * Function to command all group element to draw itself;
  */
  __draw__ (context) {
    let members = this.__members__,
      i = 0,
      // If group is not drawn completely; members check
      // If not case ; when group is initialized its BasicEl
      // constructor is called which adds it toroot group and calls
      // for __notify__ which then commands all group to draw
      // but then this group would not have its member as its initialization
      // is not complete thus will cause error
      ii = members && members.length || 0;
    // Iterating over each member;
    // commanding to draw
    for (; i < ii; ++i) {
      members[i].__draw__(context);
    }
  }
  /**
  * Push element to last in the group
  */
  __sendToBack__ (el) {
    let members = this.__members__,
      i = 0,
      pos = -1;
    this.__checkIfEl__(el);
    pos = members.indexOf(el);
    if (pos !== -1) {
      for (i = pos - 1; i >= 0; --i) {
        members[i + 1] = members[i];
      }
      members[0] = el;
    }
  }
  /**
  * Push element to last in the group
  */
  __sendToFront__ (el) {
    let members = this.__members__,
      i = 0,
      ii = members.length,
      pos = -1;
    this.__checkIfEl__(el);
    pos = members.indexOf(el);
    if (pos !== -1) {
      for (i = pos + 1; i < ii; ++i) {
        members[i - 1] = members[i];
      }
      members[ii - 1] = el;
    }
  }
}
