{
  const Constructor = CanvasLite
  let BasicElement = Constructor.getComponent('BasicElement'),
    basicEl = new BasicElement(canvas, null, {
      x: 'number',
      qw: 'notanumber',
      h: 'number'
    }, {
      x: 12,
      h: 31
    })

  // Mocha tests
  describe('BasicElement', () => {
    
    it('should be registered in Constructor', () => {
      expect(BasicElement).to.be.a('function')
    })

    it('should be instance of BasicElement', () => {
      expect(basicEl).to.be.a(BasicElement)
    })

    it('should throw error on invalid canvas instance', () => {
      expect(() => {
        new BasicElement  
      }).to.throwError() 
    })

    it('should have config object', () => {
      expect(basicEl.config).to.be.a(Object)
    })

    it('should have attrs object', () => {
      expect(basicEl.attrs).to.be.a(Object)
    })

    it('should have default attributes', () => {
      expect(basicEl.attrs.x).to.be(12)
      expect(basicEl.attrs.h).to.be(31)
    })

    it('should register only valid attribute', () => {
      expect(basicEl.config.attrs.qw).to.be(undefined)
      expect(basicEl.config.attrs.x).to.be('number')
    })

    it('should set attr for only registered values', () => {
      basicEl.attr({
        x: 99,
        qw: 45
      })
      expect(basicEl.attr('qw')).to.be(undefined)
      expect(basicEl.attr('x')).to.be(99)
    })

    it('should have attr function returning \'this\' reference in set mode', () => {
      expect(basicEl.attr({x: 9})).to.be(basicEl)
    })

    it('should return proper attr', () => {
      expect(basicEl.attr({x: 1291}).attr('x')).to.be(1291)
    })

  })
}
