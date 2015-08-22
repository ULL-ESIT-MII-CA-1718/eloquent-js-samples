function range(start, end, step) {
  // If no optional step, set step to 1.
  if (step == null) step = 1;

  // Initialize the array that will eventually be returned.
  var array = [];

  // If the range is increasing, continue pushing i to the
  // array and incrementing i by step until i is greater than
  // end, then stop.
  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  // If the range is decreasing, continue pushing i to the
  // array until i is less than end, then stop.
  // Remember i will get smaller because step is negative.
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  // Return the result
  return array;
}

function sum(array) {
  // Set total to start at 0.
  var total = 0;
  // Go through each item in the array and add it to result.
  for (var i = 0; i < array.length; i++)
    total += array[i];
  // Return result.
  return total;
}
