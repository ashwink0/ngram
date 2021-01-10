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
ngram.getNGram('the', {}).then(r => console.log(r))

//with options
ngram.getNGram('the', {corpus: 28, smoothing: 4, startYear: 1980}).then(r => console.log(r))

```

# getNGram(Content, Options)
* Parameters

  ### Content

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
    | year_start | number | optional |
    | year_end | number | optional |
    | corpus | number | optional |
    | smoothing | number | optional |
* Return
  | Type | Notes |
  | --- | --- |
  | Promise | Resolves => Array <Object\>
  * Object Attributes
  | Name | Type | Notes |
  | --- | --- | --- |
  | ngram | string | The content word |
  | timeseries | Array | List of percents |
