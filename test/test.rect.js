{
  let r1, r2, r3
  // Mocha tests
  describe('Rect', function(){

  	r1 = canvas.rect(canvas.root)
  		.attr({
  			x: 0,
  			y: 0,
  			w: 200,
  			h: 100,
  			stroke: '#4590dd',
  			fill:  '#ddaa99',
  			strokeWidth: 5
  		})

  	canvas.paint()

    it('should paint', function () {
      
    })
  })
}