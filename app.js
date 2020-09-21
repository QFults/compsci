const Benchmark = require('benchmark')

const suite = new Benchmark.Suite()

const adder = (a, b) => {
  return a + b
}

suite
  .add('Adding Function', () => adder(5, 7))
  .on('start', () => console.log('Beginning benchmark...')) 
  .on('complete', function () {
    const benchmark = Benchmark.filter(this, 'successful')[0]
    console.log(benchmark.stats.mean)
  })
  .run()
