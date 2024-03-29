/////

document.addEventListener('keydown', (event) => {
  var keyName = event.key;

  if (event.ctrlKey) {
    console.log(`keydown:Ctrl + ${keyName}`);
  } else if (event.shiftKey) {
    console.log(`keydown:Shift + ${keyName}`);
  } else {
    console.log(`keydown:${keyName}`);
  }
});

document.addEventListener('keypress', (event) => {
  var keyName = event.key;

  if (event.ctrlKey) {
    console.log(`keypress:Ctrl + ${keyName}`);
  } else if (event.shiftKey) {
    console.log(`keypress:Shift + ${keyName}`);
  } else {
    console.log(`keypress:${keyName}`);
  }
});
