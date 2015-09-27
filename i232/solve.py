import re

def closestDistance(file):
    text = open(file, 'r')
    array = []
    for f in text.readlines():
        array.append((f.translate(None, "\n()").split(",")))

    points = array[1:]
    b = ((float(points[0][0]))-(float(points[1][0])))**2+((float(points[0][1]))-(float(points[1][1])))**2

    for i in points:
        for j in points:
            a = ((float(i[0])-float(j[0]))**2)+((float(i[1])-float(j[1]))**2)
            if not (a == 0) and (a < b):
                b = a
                stayi = i
                stayj = j
    print stayi
    print stayj

closestDistance("test.txt")

closestDistance("challenge.txt")
