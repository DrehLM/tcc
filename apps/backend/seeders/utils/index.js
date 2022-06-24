function initials(text) {
  return text.split(/\s+/).map(first);
}

function first(array) {
  return array[0];
}

module.exports = {
  initials,
  first,
};
