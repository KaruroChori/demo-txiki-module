import assert from 'tjs:assert';

const T = (await import("tjs:trialmode")).default
assert.eq(T.HelloWorld(),42)