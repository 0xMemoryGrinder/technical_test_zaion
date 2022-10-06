# OptimizedService documentation

This service computes in an optimized way the surface where water can is retained by one building on each side.

## Inputs

This service takes as input a list of buildings heights. The unit does not matter, but it must be the same for all the heights.

## Outputs

This service returns a non-negative integer representing the surface where water can be retained. the unit is a square of the unit of the input heights.


## Operation principal

The input can be visualized as a 2 dimensions array. The first dimension is the height of the building, the second dimension is the position of the building.  
```javascript
[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
//can be visualized as
[
  [., ., ., ., ., ., ., X, ., ., ., .],
  [., ., ., X, ., ., ., X, X, ., X, .],
  [., X, ., X, X, ., X, X, X, X, X, X],
]
// where X = building and . = empty space
```
The service computes each row independently to determine the number of "cells" with retained water.  
Each row is treated from left to right by looking at each "cell".  
The algorithm uses a `boolean` to know if a previous "cell" was a solid one (a building), which is set to `false` by default and `true` when the first building is encountered.
It also uses two `integers` variables to count "cells" with retained watter and another variable for those which might.   
The empty cells are ignored until the first solid "cell" is encountered. Then each empty cell is counted in the temporary variable.  
At each solid cell encountered (except the first) the temporary variable is added to the total variable and reset to 0.

Here is an example of the algorithm in action on a row:
```text
--- step 1 (empty ignored) ---
total = 0
potentialCount = 0
encountered = false
idx = 0
[., ., X, ., ., X, X, ., X, .]
[|, O, O, O, O, O, O, O, O, O] // represents the index of the cell
        
--- step 2 (empty ignored) ---
total = 0
potentialCount = 0
encountered = false
idx = 1
[., ., X, ., ., X, X, ., X, .]
[O, |, O, O, O, O, O, O, O, O] // represents the index of the cell

--- step 3 (first building encountered) ---
total = 0
potentialCount = 0
encountered = true
idx = 2
[., ., X, ., ., X, X, ., X, .]
[O, O, |, O, O, O, O, O, O, O] // represents the index of the cell

--- step 4 (potential water retained encoutered) ---
total = 0
potentialCount = 1
encountered = true
idx = 3
[., ., X, ., ., X, X, ., X, .]
[O, O, O, |, O, O, O, O, O, O] // represents the index of the cell

--- step 5 (potential water retained encoutered) ---
total = 0
potentialCount = 2
encountered = true
idx = 4
[., ., X, ., ., X, X, ., X, .]
[O, O, O, O, |, O, O, O, O, O] // represents the index of the cell

--- step 6 (non-first building encountered) ---
total = 2
potentialCount = 0
encountered = true
idx = 5
[., ., X, ., ., X, X, ., X, .]
[O, O, O, O, O, |, O, O, O, O] // represents the index of the cell

--- step 7 (non-first building encountered) ---
total = 2
potentialCount = 0
encountered = true
idx = 6
[., ., X, ., ., X, X, ., X, .]
[O, O, O, O, O, O, |, O, O, O] // represents the index of the cell

--- step 8 (potential water retained encoutered) ---
total = 2
potentialCount = 1
encountered = true
idx = 7
[., ., X, ., ., X, X, ., X, .]
[O, O, O, O, O, O, O, |, O, O] // represents the index of the cell

--- step 9 (non-first building encountered) ---
total = 3
potentialCount = 0
encountered = true
idx = 8
[., ., X, ., ., X, X, ., X, .]
[O, O, O, O, O, O, O, O, |, O] // represents the index of the cell

--- step 10 (non-first building encountered) ---
total = 3
potentialCount = 1
encountered = true
idx = 9
[., ., X, ., ., X, X, ., X, .]
[O, O, O, O, O, O, O, O, O, |] // represents the index of the cell


results : 3 water retained cells
```

The service sums up the results of all treated rows and returns it.


## Complexity

The base complexity of this algorithm is `O(np)` where `n` is the number of elements in the list and `p` the maximum height since it go through the matrix only one time.
