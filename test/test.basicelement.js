{
	const Constructor = CanvasLite
	let cLite

	// Mocha tests
	describe('BasicElement test', function(){
		it('Constructor should have BasicElement registered', function () {
			expect(CanvasLite.getComponent('BasicElement')).to.be.a('function')
		})
	})
}
