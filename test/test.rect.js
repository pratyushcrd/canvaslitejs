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
    r2 = canvas.rect(canvas.root)
      .attr({
        x: 300,
        y: 0,
        w: 100,
        h: 200,
        stroke: '#ff9911',
        fill:  '#22ddbb',
        strokeWidth: 2
      })
    r3 = canvas.rect(canvas.root)
      .attr({
        x: 50,
        y: 200,
        w: 300,
        h: 100,
        stroke: '#ff9911',
        fill:  '#22ddbb',
        strokeWidth: 0
      })

  	canvas.paint()

    it('should paint', function () {
      
    })
  })
}