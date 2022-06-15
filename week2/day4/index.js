async function getData() {
  try {
    const response = await fetch(
      'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues'
    );
    const myJson = await response.json();
    console.log(myJson);
  } catch (err) {
    console.log('error', err);
  }
}
// getData();

fetch('https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues')
  .then(function (response) {
    if (response.status !== 200) {
      return console.log('something', response.status);
    }

    response.json().then((data) => {
      console.log(data);
    });
  })
  .catch(function (err) {
    console.log('Catch err', err);
  });
