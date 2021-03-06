const consts = require('../utils/constants'),
    errors = require('../utils/error'),
    availableTypes = consts.availableTypes,
    has = consts.has,
    libName = consts.name

let addAttrToConfig = function (configOb, attrsOb) {
      let key,
        val
      if (typeof configOb !== 'object') {
        return
      }
      // validating availableAttrs types and putting
      // then on the config's available attrs
      for (key in attrsOb) {
        val = attrsOb[key]
        if (attrsOb[has](key) && availableTypes[val]) {
          configOb[key] = attrsOb[key];
        }
      }
    },
    setAttr = function (ob, attrs, defAttrs) {
      let key,
        value
      if (!ob) {
        return
      }
      for (key in ob) {
        value = ob[key];
        if (ob[has](key) && defAttrs[key]) {
          attrs[key] = value
        }
      }
    }
// Exporting a function so that basicelement
// can be registered to constructor
module.exports = function (CanvasLite) {

  let sanityCheck = function (canvas, group) {
      if (!(canvas instanceof CanvasLite)) {
        errors.notAnInstance('canvas', libName)
      }
    }

  class BasicElement {
  	constructor (canvasInstance, group, attrsDef, defValues) {
      let config,
        key = '',
        availableAttrs
      sanityCheck(canvasInstance, group)
      // Defining a configuration on the instance
      config = this.config = {}
      // Defining available attrs list
      availableAttrs = config.attrs = {}
      addAttrToConfig(availableAttrs, attrsDef)
      // Saving instance of canvas
      config.canvas = canvasInstance
      // saving blank attrs to object
      this.attrs = {}
      // If group provide add this element to group
      group && group.addChild(this)
      // Applying default values
      this.attr(defValues);
  	}
    attr (ob) {
      let element = this,
        key = '',
        value,
        attrs = element.attrs,
        config = element.config,
        defAttrs = config.attrs
      // this function will behave both
      // as getter and setter
      if (typeof ob === 'string') {
        return attrs[ob]
      }

      setAttr(ob, attrs, defAttrs)
      return element
    }
    // Internal function
    // Set a parent
    __setParent (group) {
      let config = this.config
      // Remove self from previous parent
      config.parent && config.parent.removeChild(this)
      config.parent = group;
      return this
    }
    // Ask parent group to bring this
    // element to front
    bringToFront () {
      let parent = this.config.parent
      parent && parent.__bringToFront(this)
      return this
    }
    // Ask parent group to bring this
    // element to front
    sendToBack () {
      let parent = this.config.parent
      parent && parent.__sendToBack(this)
      return this 
    }
    // inner paint function to be extended by
    // other elements to draw itself
    __paint (ctx) {
    }
  }

	CanvasLite.registerComponent('BasicElement', BasicElement)
}