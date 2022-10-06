# UnoptimizedService documentation

This service computes in an unoptimized way the surface where water can is retained by one building on each side.

## Inputs

This service takes as input a list of buildings heights. The unit does not matter, but it must be the same for all the heights.

## Outputs

This service returns a non-negative integer representing the surface where water can be retained. the unit is a square of the unit of the input heights.


## Operation principal

The input can be visualized as a 2 dimensions array. The first dimension is the height of the building, the second dimension is the position of the building.  
```json
[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
//can be visualized as
[
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
]
// where 1 = building and 0 = empty space
```
The service computes for each "cell" (starting by the second column of buildings) if there is a solid "cell" (a building) on left to know if the water can be retained.  
If there is no solid "cell" on the immediate left, the service looks further to the left to find a solid "cell" before the left end of the array.  
If there was one, the service does the same thing on the right to know if the water is well retained on both sides.

The service sums up all the cells where water can be retained and returns it.


## Complexity

The base complexity of this algorithm is `O(np)` where `n` is the number of elements in the list and `p` the maximum height.  
Then adds up the complexity of the methods `_verifyLeftCells` and `_verifyRightCells` which is `O(i)` where `i` is the x-axis index of the checked cell.  
The "second" complexity is bound to the "distance" between the current "cell" and the left (and right) first solid "cell" since the algorithm looks further until finding one.
