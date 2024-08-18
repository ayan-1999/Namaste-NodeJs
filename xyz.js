function asyncTask() {
    console.log('Task 1');
    setTimeout(() => {
      console.log('Task 2');
    }, 1000); // Asynchronous operation
    console.log('Task 3');
  }
  
  asyncTask();