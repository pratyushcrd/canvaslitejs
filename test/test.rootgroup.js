{
  let RootGroup = Constructor.getComponent('RootGroup'),
    BasicElement = Constructor.getComponent('BasicElement'),
    bEl,
    rootgroup = canvas.group
  // Mocha tests
  describe('RootGroup', function(){
    it('should be in canvas instance as root', function () {
      expect(canvas.root).to.be.a(RootGroup)
    })
    it('should have paint method', function () {
      expect(canvas.root.__paint).to.be.a('function')
    })
  })
}