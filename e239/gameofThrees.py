from sys import argv

script, first = argv

def gameOfThree(num):
    num = int(num)
    if num == 1:
        print num
        exit()
    elif num % 3 == 0:
        ret = num/3
        print num, "0"
    else:
        if (num-1) % 3 == 0:
            ret = (num-1)/3
            print num, "-1"
        else:
            ret = (num+1)/3
            print num, "+1"
    gameOfThree(ret)


gameOfThree(first)
