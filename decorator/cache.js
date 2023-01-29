function cacheFunctionCall(fn) {
  const cache = {}

  return function() {
    const key = JSON.stringify(arguments)

    if (key in cache) {
      console.log(`Retrieving result from cache for key: ${key}`)
      return cache[key]
    }

    console.log(`Performing function call and caching result for key: ${key}`);
    const result = fn.apply(this, arguments);
    cache[key] = result;
    return result;
  }
}

function measurePerformance(website) {
  console.log(`Performing a time-consuming measurement on ${website}`)
  
}

const measure = cacheFunctionCall(measurePerformance)
measure('https://anhdo95.github.io/')
