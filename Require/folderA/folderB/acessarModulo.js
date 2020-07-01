const moduloA = require('../../../modulos/moduloA')
const moduloB = require('../../../modulos/moduloB')

console.log(moduloA.bomDia)
console.log(moduloB.ateLogo)

const http = require('http')

http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()

}).listen(8000)