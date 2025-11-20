function createLookup(pairs) {
  if (!Array.isArray(pairs)) {
    throw new Error("Input must be an array of pairs");
  }

  return Object.fromEntries(pairs);
}

module.exports = createLookup;
