class Rope {
  constructor(bodyA, pointB) {
    var options={
      bodyA:bodyA,
      pointB:pointB,
      stiffness:1,
      length:200,
    }
    this.pointB=pointB
    this.rope= Constraint.create(options);
    World.add(world, this.rope);
  }
  attach(body) {
    this.rope.bodyA = body;
  }

  fly() {
    this.rope.bodyA = null;
  }

  display() {
    var pointA= this.rope.bodyA.position;
    var pointB = this.pointB;
    push();
    stroke(12)
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    pop();
  }
}
