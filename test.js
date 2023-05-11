function fibonacci(n, prev = 0, next = 1) {
    if (n === 0) {
      return prev;
    } else if (n === 1) {
      return next;
    } else {
      return fibonacci(n - 1, next, prev + next) % (1e9 + 7);
    }
  }
  

console.log(fibonacci(81, 0, 1))