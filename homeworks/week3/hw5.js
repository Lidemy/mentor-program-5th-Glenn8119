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
  for (let i = 1; i < lines.length; i++) {
    const compareArr = lines[i].split(' ')
    const A = BigInt(compareArr[0])
    const B = BigInt(compareArr[1])
    const C = Number(compareArr[2])
    if (C === 1) {
      if (A > B) console.log('A')
      if (A < B) console.log('B')
      if (A === B) console.log('DRAW')
    }
    if (C === -1) {
      if (A > B) console.log('B')
      if (A < B) console.log('A')
      if (A === B) console.log('DRAW')
    }
  }
}
