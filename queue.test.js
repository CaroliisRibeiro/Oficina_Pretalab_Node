const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()

    expect(queue.size()).toEqual(0)

  })

  it('Deve ser capaz de adicionar um item na fila', () => {
  const queue = new Queue()
  queue.add(1) // Adiciona um item na fila
  expect(queue.elements[0]).toBe(1)
  })

  it('Deve escolher o primeiro item da fila', () => {
  const queue = new Queue() 
  queue.add(1) // Adiciona um item na fila
  queue.add(2) // Adiciona um item na fila  

  const primeiroItem = queue.peek()
  expect(primeiroItem).toBe(1) // Verifica se o primeiro item é o esperado
})

  it('Deve remover o primeiro item da fila', () => {
  const queue = new Queue()
  queue.add(1) // Adiciona um item na fila
  queue.add(2) // Adiciona um item na fila
  const removeItem = queue.dequeue()   
  expect (removeItem).toBe(1) // Verifica se o primeiro item é o esperado
  expect(queue.elements[0]).toBe(2) // Verifica se o primeiro item foi removido

  })

})