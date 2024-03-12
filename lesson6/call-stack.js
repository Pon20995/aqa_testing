function hi() {
  console.log('hi');
  // eslint-disable-next-line no-use-before-define
  by();
}

function by() {
  console.log('by');
}
hi();
