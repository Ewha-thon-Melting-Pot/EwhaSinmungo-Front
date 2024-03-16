#include "testlib.h"
#include <iostream>
#include <vector>

int main(int argc, char *argv[]) {
    registerGen(argc, argv, 1);

    /* number of friends */
    const int n = opt<int>(1);
    println(n);

    /* choice of friends: n random numbers between 1 and 4 inclusive. */
    std::vector<int> a(n);
    for(int i = 0; i < n; ++i)
        a[i] = rnd.next(1, 4);
    println(a);

    /* choice of hello: random number between 1 and 4 inclusive. */
    println(rnd.next(1, 4));
}