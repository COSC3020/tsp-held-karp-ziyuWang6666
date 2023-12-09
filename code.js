function tsp_hk(dm) {
  let cities = dm.map((item, index) => index);
  cities.sort();

  if (cities.length === 1) return 0;

  let cache = new Map();
  let sumDist = Infinity;

  for (let start of cities) {
    sumDist = tsp(cities, start, dm, cache);
    // let result = tsp(cities, start, dm, cache);
    // sumDist = Math.min(sumDist, result);
  }

  return sumDist;
}

function tsp(cities, start, dm, cache) {
  if (cities.length === 1) {
    return dm[start][cities[0]];
  } else {
    
    let key = JSON.stringify(cities) + start;

    if(cache.has(key)) {
      return cache.get(key);
    }
    let minDist = Infinity;

    for (let i = 0; i < cities.length; i++) {
      let nextStart = cities[i];
      let newCities = cities.filter((city) => city !== start);
      minDist = Math.min(minDist, dm[start][nextStart] + tsp(newCities, nextStart, dm, cache));
    }

    cache.set(key, minDist);
    return minDist;
  }
}
// get help from TA
