function tsp_hk(dm) {
    let cities = dm.map((item,index) => index)
    //use built-in sort method
    cities.sort();

    if (cities.length == 1) return 0;

    let cache = {}
    let sumDist = null;
    for (let start in cities) {
        // remove start = parseInt(start) because right now items are integer.
        // no need compare Infinity to sumDist since already compared in tsp function
        // just return value
        sumDist = tsp(cities, start, dm, cache)
    }
    return sumDist;
  }
  
  function tsp(cities, start, dm, cache) 
  {
      if (cities.length === 1) 
      {
          return dm[start][cities[0]];
      }
      else
      {
          let key = JSON.stringify(cities) + start
  
          if (cache[key] === undefined) cache[key] = {}
      
          if (cache[key][start] !== undefined) return cache[key][start];
      
          let minDist = Infinity;
      
          for (let i = 0; i < cities.length; i++) 
          {
              var nextStart = cities[i]
              let newCities = cities.filter(city => city !== start)
              minDist = Math.min(minDist, dm[start][nextStart] + tsp(newCities, nextStart, dm, cache));
          }
  
          cache[key][start] = minDist;
          return minDist;
      }
}
// get source from tsp-held-karp-rzafft1 and revised a little bit
