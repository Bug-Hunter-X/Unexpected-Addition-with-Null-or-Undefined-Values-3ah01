# JavaScript Null/Undefined Addition Bug

This repository demonstrates a common JavaScript error related to adding null or undefined values using loose comparison. The `foo` function incorrectly handles these cases leading to unexpected results. The solution provides a more robust way to handle null/undefined values before performing arithmetic operations.

## Bug

The original code uses loose comparison (`==`) which can lead to unexpected results when comparing `null` or `undefined` to numeric values. In this case, `null` and `undefined` are coerced to `0`, resulting in incorrect sums when one of the arguments is `null` or `undefined`.

## Solution

The solution uses strict equality (`===`) to explicitly check for `null` or `undefined` and handles them appropriately.  A conditional check handles these cases by returning a different result or throwing an error, depending on the desired behavior.