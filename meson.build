#Only to perform standalone tests during dev.
project(
    'test-demo',
    ['c', 'cpp'],
    default_options: ['c_std=gnu11', 'cpp_std=gnu++20'],
)
src = ['./src/dev/main.cpp']
test_dev = executable('dev', src)
test('basic test', test_dev)