{
	const Constructor = CanvasLite
	let basicEl = Constructor.getComponent('BasicElement')

	// Mocha tests
	describe('BasicElement test', function(){
		it('Constructor should have BasicElement registered', function () {
			expect(basicEl).to.be.a('function')
		})
	})
}
