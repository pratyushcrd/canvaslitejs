const Constructor = CanvasLite
let cLite,
  canvas = new CanvasLite('canvas', 900, 300)
{
  // Mocha tests
  describe('Constructor', function(){
    it('should expose a function \'CanvasLite\'', function () {
      expect(Constructor).to.be.a('function')
    })
    // Element not found Error
    it('should throw error when id is not sent', function () {
      expect(function () {
        new Constructor()
      }).to.throwError();
    })
    // Element not found Error
    it('should throw error when not a canvas element', function () {
      expect(function () {
        new Constructor('mocha')
      }).to.throwError();
    })
    // Valid Constructor Now
    cLite = new Constructor('canvas-x', 1, 1)
    it('should be an instance of Constructor', function () {
      expect(cLite).to.be.a(Constructor)
    })
  })

  describe('Register component test', function(){
    let registerFn = function(){};
    it('should register function', function () {
      expect(function () {
        Constructor.registerComponent('Dummy', registerFn, 'dummy')
      }).to.not.throwException();
    })
    it('should not register duplicate component', function () {
      expect(function () {
        Constructor.registerComponent('Dummy', function(){}, 'whatever')
      }).to.throwException();
    })
    it('should not register duplicate instanceMethod', function () {
      expect(function () {
        Constructor.registerComponent('Dummy2', function(){}, 'dummy')
      }).to.throwException();
    })
    it('should not register anything other than function', function () {
      expect(function () {
        Constructor.registerComponent('AnotherDummy', 'Dummy String')
      }).to.throwException();
    })
    it('get registered component', function () {
      expect(Constructor.getComponent('Dummy')).to.be(registerFn);
      expect(Constructor.getComponent('AnotherDummy')).to.be(undefined);
    })
  })
}