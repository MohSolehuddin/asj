function fibonacci(value) {
  if (value <= 1) {
    return 1;
  } else {
    return value = value + fibonacci(value -1 );
  }
}
console.log(fibonacci(5));