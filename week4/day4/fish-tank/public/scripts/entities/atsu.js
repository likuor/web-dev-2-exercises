class Atsu extends Fish {
  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/atsu.jpeg'; // Set the image
  }

  onClick(event) {
    let targetId = document.getElementById(event.currentTarget.id);
    console.log(targetId);
    targetId.classList.add('item');
  }
}
