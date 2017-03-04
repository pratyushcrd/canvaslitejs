{
  let Group = Constructor.getComponent('Group'),
    BasicElement = Constructor.getComponent('BasicElement'),
    bEl,
    group = new Group(canvas)
  // Mocha tests
  describe('Group test', function(){
    it('should be returned in canvas instance function \'group\'', function () {
      expect(canvas.group()).to.be.a(Group)
    })
    it('should add elements if group present in constructor', function () {
      bEl = new BasicElement(canvas, group)
      expect(~group.members.indexOf(bEl)).to.be.ok()
    })
    it('should add Element', function () {
      bEl = new BasicElement(canvas)
      group.add(bEl)
      expect(~group.members.indexOf(bEl)).to.be.ok()
    })
    it('should remove Element', function () {
      bEl = new BasicElement(canvas)
      group.add(bEl)
      group.remove(bEl)
      expect(!~group.members.indexOf(bEl)).to.be.ok()
    })
    it('should bring elements to front', function () {
      bEl = new BasicElement(canvas)
      group.add(bEl)
      bEl.bringToFront()
      expect(group.members.indexOf(bEl)).to.be(0)
    })
    it('should send elements to back', function () {
      bEl.sendToBack()
      expect(group.members.indexOf(bEl)).to.be(group.members.length - 1)
    })
    it('should tell if element is present in group', function () {
      expect(group.has(bEl)).to.be.ok()
      group.remove(bEl)
      expect(group.has(bEl)).to.not.be.ok()
    })
  })
}