google-ngram
======

A simple package to interact with the Google Books Ngram API.

[![Version](https://img.shields.io/npm/v/google-ngram.svg)](https://npmjs.org/package/google-ngram)
[![License](https://img.shields.io/npm/l/google-ngram.svg)](https://github.com/ashwink0/google-ngram/blob/master/LICENSE)
[![Build Status](https://travis-ci.com/ashwink0/ngram.svg?branch=main)](https://travis-ci.com/ashwink0/ngram)

<!-- toc -->
* [Example Usage](#example-usage)
* [Parameters](#parameters)
<!-- tocstop -->

# Example Usage:
``` js
const ngram=require('google-ngram')

//simple usage
ngram.getNGram('the', {}).then(r => console.log(r))

//with options
ngram.getNGram('the', {corpus: 28, smoothing: 4, startYear: 1980}).then(r => console.log(r))

```

# Parameters:
* getNGram([Content](#content), [Options](#options))

    ###Content
      
  | Type | Notes |
  | --- | --- |
  | String | Required |

    ### Options
  | Type | Notes |
    | --- | --- |
  | Object | Required |
    * Object Attributes
      
      | Name | Type | Notes |
      | --- | --- | --- |
      | startYear | number | optional |
      | endYear | number | optional |
      | corpus | number | optional |
      | smoothing | number | optional |
