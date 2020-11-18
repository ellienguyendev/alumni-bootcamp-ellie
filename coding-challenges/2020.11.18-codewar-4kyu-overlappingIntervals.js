// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.


function combine(first,second) {
    if (first[0] > second[1] || second[0] > first[1]) {
        return false;
    }
    return [ Math.min( first[0], second[0] ), Math.max( first[1], second[1]) ];
}

function sumIntervals(intervals){
    var index = 0;
    while (index < intervals.length) {
        var repeat = true;
        while (repeat) {
            repeat = false;
            for (var i = index + 1, len = intervals.length; i < len; i += 1) {
                var combined = combine( intervals[index], intervals[i] );
                if (combined) {
                    intervals[index] = combined;
                    intervals.splice(i,1);
                    repeat = true;
                    break;
                }
            }
        }
        index += 1;
    }
    return intervals.reduce(function (sum, interval) { return sum + interval[1] - interval[0];}, 0);
}

  sumIntervals([[1,5],[6,10]]) 