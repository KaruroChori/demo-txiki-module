import assert from 'tjs:assert';

const T = (await import("tjs:__MODULE__")).default
assert.eq(T.HelloWorld(),42)