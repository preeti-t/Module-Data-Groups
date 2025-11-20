function parseQueryString(query) {
  const result = {};
  if (!query) return result;

  if (query.startsWith("?")) query = query.slice(1);
  if (!query) return result;

  query.split("&").forEach(pair => {
    if (!pair) return;

    const [key, value = ""] = pair.split("=");
    const k = key.replace(/\+/g, " ");
    const v = value.replace(/\+/g, " ");

    if (result[k]) {
      result[k] = [].concat(result[k], v);
    } else {
      result[k] = v;
    }
  });

  return result;
}

module.exports = parseQueryString;


  return result;
}

module.exports = parseQueryString;
