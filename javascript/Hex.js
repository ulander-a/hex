point = (x, y) => {
  return { X: x, Y: y }
}

rectangle = (x, y, w, h) => {
  return {
    X: x,
    Y: y,
    Width: w,
    Height: h
  }
}

line = (x1, y1, x2, y2) => {
  return {
    X1: x1,
    Y1: y1,
    X2: x2,
    Y2: y2
  }
}

hexagon = (id, x, y) => {
  x1 = ''
  x2 = ''

  return {
    points: [
      point(x1 + x, y),
      point(x1 + HT.Hexagon.Static.SIDE + x, y),
      point(HT.Hexagon.Static.WIDTH + x, y1 + y),
      point(x1 + HT.Hexagon.Static.SIDE + x, HT.Hexagon.Static.HEIGHT + y),
      point(x1 + x, HT.Hexagon.Static.HEIGHT + y),
      point(x, y1 + y),
    ],
    Id: id,
    x: x,
    y: y,
    x1: x1,
    y1: y1,
    selected: false
  }
}