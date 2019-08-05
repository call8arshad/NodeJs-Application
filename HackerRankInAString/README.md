# How to run and About the Question:

## How to Run
```
OUTPUT_PATH=path/outputFile node main.js
```

### We say that a string contains the word **hackerrank** if a subsequence of its characters spell the word **hackerrank**.
```
For example,
if string **s = haacckkerrannk** it does contain hackerrank,
but **s = haacckkerannk** does not.
In the second case, the second r is missing.
```

### More formally, let  be the respective indices of **h, a, c, k, e, r, r, a, n, k** in string . If  is true, then  contains hackerrank.

### Input Format

The first line contains an integer , the number of queries. 
Each of the next  lines contains a single query string .


### Output Format
```
For each query, print **YES** on a new line if  contains hackerrank, otherwise, print **NO**.
```

### Sample Input 0
```
2
hereiamstackerrank
hackerworld
```

### Sample Output 0
```
YES
NO
```

### Explanation 0
We perform the following  queries:
 ```
1. s = **h**erei**a**msta**ckerrank**
   The characters of hackerrank are bolded in the string above.
   Because the string contains all the characters in hackerrank in the same exact order as they appear in hackerrank,
   we print YES on a new line.
2. s = **hacker**world
   does not contain the last three characters of hackerrank, so we print NO on a new line.
```

### Sample Input 1
```
2
hhaacckkekraraannk
rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt
```

### Sample Output 1
```
YES
NO
```
