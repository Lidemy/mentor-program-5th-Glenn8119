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
  const n = Number(lines[0])
  for (let i = 1; i <= n; i++) {
    printStar(i)
  }
}

function printStar(n) {
  let star = ''
  for (let i = 1; i <= n; i++) {
    star += '*'
  }
  console.log(star)
}
