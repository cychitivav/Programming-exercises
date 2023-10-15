from math import pi, floor, cos, factorial


def n_prime(n):
    """Return the nth prime number with the C. P. Willian's method"""
    s = []
    for i in range(1, 2**n + 1):
        d = []
        for j in range(1, i + 1):
            d.append(floor(cos(pi * (factorial(j-1) + 1) / j)**2))

        s.append(floor((n/sum(d))**(1/n)))

    return 1 + sum(s)


print(n_prime(6))
