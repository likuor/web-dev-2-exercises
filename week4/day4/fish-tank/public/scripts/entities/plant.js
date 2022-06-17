class Plant extends Denizen {
  constructor(options) {
    super(options);
    this.imageUri = '/images/plant.jpeg';
    this.position.y += this.height;
  }

  update(t) {
    // no physics for Starter
  }
}
