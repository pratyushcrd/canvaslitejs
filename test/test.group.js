{
  let Group = Constructor.getComponent('Group'),
    BasicElement = Constructor.getComponent('BasicElement'),
    bEl,
    group = new Group(canvas),
    group2 = new Group(canvas)
  // Mocha tests
  describe('Group', function(){
    it('should be returned in canvas instance function \'group\'', function () {
      expect(canvas.group()).to.be.a(Group)
    })
    it('should add elements if group present in constructor', function () {
      bEl = new BasicElement(canvas, group)
      expect(~group.members.indexOf(bEl)).to.be.ok()
    })
    it('should add Element', function () {
      bEl = new BasicElement(canvas)
      group.addChild(bEl)
      expect(~group.members.indexOf(bEl)).to.be.ok()
    })
    it('should remove Element', function () {
      bEl = new BasicElement(canvas)
      group.addChild(bEl)
      group.removeChild(bEl)
      expect(!~group.members.indexOf(bEl)).to.be.ok()
    })
    it('should bring elements to front', function () {
      bEl = new BasicElement(canvas)
      group.addChild(bEl)
      bEl.bringToFront()
      expect(group.members.indexOf(bEl)).to.be(0)
    })
    it('should send elements to back', function () {
      bEl.sendToBack()
      expect(group.members.indexOf(bEl)).to.be(group.members.length - 1)
    })
    it('should tell if element is present in group', function () {
      expect(group.has(bEl)).to.be.ok()
      group.removeChild(bEl)
      expect(group.has(bEl)).to.not.be.ok()
    })
    it('should remove element from other group before adding to self', function () {
      bEl = new BasicElement(canvas, group)
      group2.addChild(bEl)
      expect(~group.members.indexOf(bEl)).to.not.be.ok()
    })
  })
}