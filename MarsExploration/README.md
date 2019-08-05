# How to run and Question explanation:

## How to Run
```
OUTPUT_PATH=path/outputFile node main.js
```
## Sami's spaceship crashed on Mars! She sends a series of SOS messages to Earth for help.

Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine how many letters of Sami's SOS have been changed by radiation.

For example, Earth receives SOSTOT. Sami's original message was SOSSOS. Two of the message characters were changed in transit.

```
 s: the string as received on Earth
```
### Input Format
```
There is one line of input: a single string, s.
```

Note: As the original message is just SOS repeated  times, 's length will be a multiple of 3.

### Constraints
```
 1 <= s <= 99
 |s| % 3 = 0
 s will contain only uppercase English letters, ascii[A-Z].
```

### Output Format
Print the number of letters in Sami's message that were altered by cosmic radiation.

### Sample Input 0
```
SOSSPSSQSSOR
```

### Sample Output 0
```
3
```
### Explanation 0
s = **SOSSPSSQSSOR**, and signal length |s| = 12. Sami sent 4 SOS messages (i.e. 12/3 = 4).
```
Expected signal: SOSSOSSOSSOS
Recieved signal: SOSSPSSQSSOR
Difference:          X  X   X
```
We print the number of changed letters.

### Sample Input 1
```
SOSSOT
```
### Sample Output 1
```
1
```
### Explanation 1

s = **SOSSOT**, and signal length |s| = 6. Sami sent 2 SOS messages (i.e. 6/3 = 2).
```
Expected Signal: SOSSOS     
Received Signal: SOSSOT
Difference:           X
```
We print the number of changed letters, which is .

### Sample Input 2
```
SOSSOSSOS
```
### Sample Output 2
```
0
```
### Explanation 2

Since no character is altered, we print 0.
