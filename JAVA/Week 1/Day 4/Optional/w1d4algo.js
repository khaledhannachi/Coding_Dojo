class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SLL {
    constructor() {
      this.head = null;
    }
    // return true or false if this.head is null
    isEmpty() {
      return this.head == null;
    }
  
    // add given node to the head, if it exists. return void
    addToFront(someNode) {
      if (this.head === null) {
        this.head = someNode;
      } else {
        someNode.next = this.head;
        this.head = someNode;
      }
    }
  
    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it
  
    // create a new node with given data, add it to the head. return void
    addDataToFront(data) {
      // 10
      var newNode = new Node(data); // create a new node with the data
      newNode.next = this.head; // set the new node's next to the head
      this.head = newNode; // move the head to the new node
      return this; // return back the instance so we can chain methods
    }
  
    // ---------------------------------
    // console log (print) the value of every node in the current list
    // traversal
  
    // mycoolList.read()
    read() {
      var runner = this.head;
      // var count = 0;
      while (runner != null) {
        console.log(runner.data);
        //   count++;
        // move the runner
        runner = runner.next;
      }
    }
  
    // find: return true / false if current list contains a data equal to value
    contains(value) {
      var runner = this.head;
      while (runner) {
        if (runner.data === value) {
          return true;
        }
        runner = runner.next;
      }
      return false;
    }
  
    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
      if (this.isEmpty()) return null; // nothing to remove
  
      var removed = this.head; // save the head in a temp vairable
      this.head = this.head.next;
      removed.next = null; // make removed no longer reference the list
      return removed.data;
    }

insertToBack(newNode){
    if (this.isEmpty()) {
        this.head = node;
        return this;
      }

        var runner = this.head;
        while (runner.next !== null) {
            runner = runner.next;
}
runner.next = newNode
return this;
}
removeFromBack(){
    if (this.isEmpty()) {
        return null; }
if(this.head.next === null){
this.head=null;
return this; 
}
var runner = this.head
while(runner.next.next !== null){
    runner = runner.next;
}
runner.next=null;
return this
}



}

removeNthToLast(){

}





  }
  
  // ⚠ 1. don't forget to instantiate the Singly Linked List
  var myCoolList = new SLL();
  myCoolList.addDataToFront(33);
  myCoolList.addDataToFront(11);
  myCoolList.addDataToFront(100);
  console.log(myCoolList);
  myCoolList.read();
  // // ⚠ 2. add a few nodes
  // myCoolList.addDataToFront(44).addDataToFront(33).addDataToFront(22).addDataToFront(11);
  // // this.head -> 11 -> 22 -> 33 -> 44
  // // ⚠ 2. write test cases
  // myCoolList.read();
  console.log(myCoolList.contains(33)); // true
  console.log(myCoolList.contains(55)); // false
  // myCoolList.contains(7777); // false
  myCoolList.removeFromFront(); // this.head -> 22 -> 33 -> 44
  console.log(myCoolList);
  myCoolList.read();
  
  // var myList = {
  //     value: 11,
  //     next: {
  //         value: 22,
  //         next: {
  //             value: 33,
  //             next: {
  //                 value: 1337,
  //                 next: {
  //                     value: 9001,
  //                     next: null
  //                 }
  //             }
  //         }
  //     }
  // }
  // console.log(myList.next.next.next.next);
  
  // var runner = this.head;