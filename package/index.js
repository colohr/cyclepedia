const fxy = require('fxy')
const dati = require('dati')
const list_folder = fxy.join(__dirname,'list')
//exports
module.exports = dati.Services(list_folder)