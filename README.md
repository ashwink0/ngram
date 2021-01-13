google-ngram
======

A simple package to interact with the Google Books Ngram API.

[![Version](https://img.shields.io/npm/v/google-ngram.svg)](https://npmjs.org/package/google-ngram)
[![License](https://img.shields.io/npm/l/google-ngram.svg)](https://github.com/ashwink0/google-ngram/blob/master/LICENSE)

[![a](https://nodei.co/npm/google-ngram.png?mini=true)](https://npmjs.org/package/google-ngram)


# Example Usage:
``` js
const ngram=require('google-ngram')

//simple usage
ngram.getNGram('the').then(r => console.log(r))

//with options
ngram.getNGram('the', {year_start: 1920, corpus: 10}).then(r => console.log(r))

//with wildcard
ngram.getNGram('the *').then(r => console.log(r))

```

# getNGram(Content, Options) => Promise: Array

### Content
| Type | Notes |
| --- | --- |
| String | Required |

### Options
| Type | Parameters | Default Values | Notes |
| --- | --- | --- | --- |
| Object | {corpus: int, <br />smoothing: int, <br />year_start: int, <br />year_end: int, <br /> case_insensitive: boolean} <br /><br />(all are optional)| {corpus: 26 (English Corpus), <br />smoothing: 3, <br />year_start: 1800, <br />year_end: 2019, <br /> case_insensitive: false} | Optional |


## Parameter Information:
| Corpus | Number |
| ---| ---|
| English 2019 (Default) |26|
| American English 2019 | 28 |
| British English | 29 |
| English Fiction | 27 |
| Chinese(Simplified) | 34 |
| French | 30 |


