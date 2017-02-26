const Constructor = CanvasLite
let cLite

// Mocha tests
describe('Constructor test', function(){
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
	cLite = new Constructor('canvas')
	it('should be an instance of Constructor', function () {
		expect(cLite).to.be.a(Constructor)
	})
})