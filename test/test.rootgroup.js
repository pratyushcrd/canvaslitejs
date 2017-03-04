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
    it('should have draw method', function () {
      expect(canvas.root.draw).to.be.a('function')
    })
  })
}