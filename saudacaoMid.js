function saudacao(nome) {
  console.log(`Seja bem vindo, ${nome}`)
  return function (req, res, next) {
    next()
  }
}
  
module.exports = saudacao




