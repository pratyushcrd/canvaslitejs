'use strict';
var paper = new CanvasLite('canvas', 900, 900),
  rootGroup = paper.rootGroup,
  r0 = paper.rect(0, 0, 100, 100, '#E97592', '#FFAC8B'),
  r1 = paper.rect(66, 55, 100, 100, '#B7AC54', '#95B830'),
  r2 = paper.rect(114, 126, 100, 100, '#BEC4A1', '#0ADAA5'),
  r3 = paper.rect(194, 148, 100, 100, '#035C69', '#8A8BF3'),
  r4 = paper.rect(255, 182, 100, 100, '#4F1168', '#A87E21'),
  r5 = paper.rect(275, 259, 100, 100, '#91E400', '#3AB78E'),
  r6 = paper.rect(350, 310, 100, 100, '#73F1E6', '#CAAC6C'),
  r7 = paper.rect(351, 375, 100, 100, '#D3009C', '#FF4494'),
  r8 = paper.rect(395, 376, 100, 100, '#97BD77', '#9ECD89'),
  r9 = paper.rect(488, 462, 100, 100, '#2D1385', '#DBB16A'),
  r10 = paper.rect(497, 523, 100, 100, '#888447', '#0716CB'),
  r11 = paper.rect(561, 600, 100, 100, '#E2B1FA', '#CD4031'),
  r12 = paper.rect(593, 648, 100, 100, '#712C35', '#C097EB'),
  r13 = paper.rect(612, 695, 100, 100, '#8D5D7E', '#3B250F'),
  r14 = paper.rect(689, 696, 100, 100, '#2A8C5A', '#DCADBB'),
  g = paper.group(),
  error = console.error.bind(console),
  x = 0,
  y = 0,
  h = 0,
  w = 0,
  t = 0;

if (rootGroup.__members__.length !== 16) {
  error('Members length not correct');
}

g.add([r1, r3, r5]);
g.hide();

if (rootGroup.__members__.length !== 13) {
  error('Members length not correct after appending items in group');
}

if (g.config.visible) {
  error('Element not hidden');
}

g.show();

if (!g.config.visible) {
  error('Element not shown');
}

g.erase();

if (g.__proto__) {
  error('Group not erased');
}
if (r1.__proto__) {
  error('Group member not erased');
}
if (r3.__proto__) {
  error('Group member not erased');
}
if (r5.__proto__) {
  error('Group member not erased');
}

r1 = paper.rect(66, 55, 100, 100, '#B7AC54', '#95B830');
r3 = paper.rect(194, 148, 100, 100, '#035C69', '#8A8BF3');
r5 = paper.rect(275, 259, 100, 100, '#91E400', '#3AB78E');
g = paper.group();
g.add([r1, r3, r5]);

if (rootGroup.__members__.length !== 13) {
  error('Members length not correct');
}

if (g.__members__.length !== 3) {
  error('Members length not correct');
}