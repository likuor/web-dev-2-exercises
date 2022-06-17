$(() => {
  window.fishtank = new Fishtank('fishtank'); // making it global to make debugging 1% easier.  shhhh.
  window.fishtank.registerSpecies(SwitchFish, GoFish, BiteFish, Atsu);

  var starter = new Starter({
    tank: window.fishtank, // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(0, 0),
  });

  var plant = new Plant({
    tank: window.fishtank, // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(100, 600),
  });

  var plant = new Plant({
    tank: window.fishtank, // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(200, 300),
  });

  var plant = new Plant({
    tank: window.fishtank, // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(-200, 300),
  });

  var plant = new Plant({
    tank: window.fishtank, // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(-300, 500),
  });
});
