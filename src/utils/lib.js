let has = 'hasOwnProperty',
	match = function match (el, type) {
      if (typeof type === 'function') {
        return el instanceof type
      }
    	type = type.toLowerCase()
    	switch (el) {
    		case 'array': return Array.isArray(el)
    		case 'null': return el === null
    		
    	}
    	return typeof el === type;
	};
// Exporting library
module.exports = {
    applyAttr: function (el, ob) {
        let key;
        for (key in ob) {
            if (ob[has](key)) {
                el.setAttribute(key, ob[key]);
            }
        }
        return el
    },
    is: function (el, type) {
			if (type !== undefined) {
				return match(e, type)
			}
			return {
				a: match.bind(null, el),
				an: match.bind(null, el)
			}
    }
}