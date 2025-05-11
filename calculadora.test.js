const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
   const calculadora = new Calculadora() //instanciou a classe
    
   expect(calculadora.soma(2, 5)).toBe(7) // cada it é um teste TDD
    
  })

  it('Deverá retornar a subtração de dois números', () => {
    const calculadora = new Calculadora() //instanciou a classe
    
    expect(calculadora.subtracao(10, 5)).toBe(5) // cada it é um teste TDD
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
   const calculadora = new Calculadora() //instanciou a classe
    
    expect(calculadora.multiplicacao(10, 2)).toBe(20) // cada it é um teste TDD
  })

  it('Deverá retornar a divisao entre dois números', () => {
   const calculadora = new Calculadora() //instanciou a classe
    
    expect(calculadora.divisao(10, 2)).toBe(5) // cada it é um teste TDD
  })   
})
