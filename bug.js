function foo(a, b) {
  if (a == null || b == null) {
    return a + b; // This line causes issues with null or undefined
  }
  return a + b; 
}