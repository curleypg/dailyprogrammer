import re

def solvePalindrome(fileTxt):
    f = open(fileTxt, "r")
    text = f.read()
    eztext = re.sub('\W', "", text)
    if eztext.lower() == eztext[::-1].lower():
        print "Palindrome"
    else:
        print "Not a palindrome"

solvePalindrome("test.txt")

solvePalindrome("dammit.txt")
