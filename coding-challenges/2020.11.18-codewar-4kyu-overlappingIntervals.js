// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.


function sumIntervals(intervals){
    var numbers = [];
    intervals.forEach( function(interval) {
      for (var i = interval[0] ; i < interval[1] ; i++) {
        if (numbers.indexOf(i) == -1) numbers.push(i);
      }
    });
    return numbers.length;
  }

  sumIntervals([[1,5],[6,10]]) 