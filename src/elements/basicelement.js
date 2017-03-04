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
  	constructor (canvasInstance, group, attrsDef) {
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
  }

	CanvasLite.registerComponent('BasicElement', BasicElement)
}