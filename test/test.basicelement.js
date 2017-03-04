{
  const Constructor = CanvasLite
  let BasicElement = Constructor.getComponent('BasicElement'),
    canvas = new CanvasLite('canvas'),
    basicEl = new BasicElement(canvas, null, {
      x: 'number',
      qw: 'notanumber'
    })

  // Mocha tests
  describe('BasicElement test', () => {
    
    it('Constructor should have BasicElement registered', () => {
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

    it('should be have config object', () => {
      expect(basicEl.config).to.be.a(Object)
    })

    it('should be have attrs object', () => {
      expect(basicEl.attrs).to.be.a(Object)
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

    it('attr function should return \'this\' reference when in set mode', () => {
      expect(basicEl.attr({x: 9})).to.be(basicEl)
    })

  })
}
