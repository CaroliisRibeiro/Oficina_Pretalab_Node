class Queue {
  elements
  constructor(){
    this.elements = []
  }
  size(){
    return this.elements.length

  }
  add(item){
    this.elements.push(item)
  } 
  peek(){
    return this.elements[0]
  }
  dequeue(){
    return this.elements.shift()
  }
}
  // Implementar aqui entra no final e retira no primeiro da fila
// existem metodos printos para fazer as manipulações da fila


module.exports = Queue