function isEven(n){
  // Base case 1, n is even
  if(n == 0)
    return true;
  // Base case 2, n is old
  else if (n == 1)
    return false;
  // Handle negative numbers by making them positive
  else if (n < 0)
    return isEven(-n);
  // recursive case
  else
    return isEven(n - 2);
}
