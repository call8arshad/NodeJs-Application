# How to run and Question:

## How to Run
```
OUTPUT_PATH=path/outputFile node main.js
```

## Question:
Roy wanted to increase his typing speed for programming contests. His friend suggested that he type the sentence
**"The quick brown fox jumps over the lazy dog"** repeatedly.
This sentence is known as a pangram because it contains every letter of the alphabet.

After typing the sentence several times, Roy became bored with it so he started to look for other pangrams.

Given a sentence, determine whether it is a pangram. Ignore case.


## Input consists of a string s
```
where 0 <= |s| <= (10)3 and s[i]== {a - z, A - Z, spaces}
```

### Output Format
```
Output a line containing **pangram** if  is a pangram, otherwise output **not pangram**. 
```
### Sample Input 0
```
We promptly judged antique ivory buckles for the next prize
```
### Sample Output 0
```
pangram
```
 
### Sample Explanation 0
```
All of the letters of the alphabet are present in the string.
```

### Sample Input 1
```
We promptly judged antique ivory buckles for the prize
```

### Sample Output 1
```
not pangram
```

### Sample Explanation 0
```
The string lacks an x.
```
