s0.initCam();

src(s0).diff(osc(20, 0.1, 0.8).rotate(1.4)).pixelate(100, 500).out();
src(s0)
  .diff(
    osc(30, 0.01, 0.1)
      .mult(
        osc(20, -0.1, 0.1)
          .modulate(noise(3, 1))
          .rotate(0.7)
      )
//       .posterize([3, 10, 2].fast(0.5).smooth(1))
  )
//   .posterize([3, 10, 2].fast(0.5).smooth(1))
      .modulateRotate(o0, () => mouse.x * 0.0003)
  .out(o1);

//
src(s0)
  .saturate(2.2)
  .contrast(1.5)
  .layer(
    src(o0)
      .mask(
        shape(4, 2).rotate(0, 1).scale(0.4, 0.5).scrollX(0.5)
      )
      .scrollX(0.001)
  )
  // .layer(
  //   src(o0)
  //     .mask(
  //       shape(4, 2).rotate(0, 1).scale(0.1, 0.5).scrollX(0)
  //     )
  //     .scrollX(0.001)
  // )
//   .modulate(o0, 0.0001)
  .out(o0);

  render(o1);
