const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  const arr = []
  for (let i = 1; i < lines.length; i++) {
    arr.push(Number(lines[i]))
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(isPrime(arr[i]) ? 'Prime' : 'Composite')
  }
}

function isPrime(n) {
  if (n === 1) return false
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
