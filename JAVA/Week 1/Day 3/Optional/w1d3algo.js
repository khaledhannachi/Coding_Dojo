// Singly Linked List

// Blueprint of a node
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  // Blueprint of a singly linked list
  class SLL {
    constructor() {
      this.head = null;
    }
  
    isEmpty() {
      return this.head === null;
    }
    addToFront(node) {
        node.next = this.head;
        this.head = node;
        // or use the if condition
        // if isEmpty(){
        //     this.head = node
        // }else{
        //     node.next = this.head
        //     this.head = node
     }
 
read(){

  var runner = this.head
  // var count =0
  while( runner != null){
    console.log(runner.data);
runner= runner.next;}
}

contains (value) {
  var runner = this.head
  // var count =0
  while( runner){
    if (runner.data === value){
      return true
    }
    runner= runner.next;
  
  }
  
return false;
}

removeFromFront(){
  if(this.isEmpty()) return null;
  var removed = this.head;
  this.head = this.head.next;
  removed.next =null; 
  return removed;
}
}
  
  // instantiate a singly linked list
  var myFirstSLL = new SLL();
  // console.log(myFirstSLL);
  
  // instantiate nodes
  var n1 = new Node(11);
  var n2 = new Node(22);
  var n3 = new Node(33);
  
  console.log(myFirstSLL.isEmpty());
