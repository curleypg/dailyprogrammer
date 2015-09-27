import re

class ConnectFour:
    def __init__(self, file):
        self.board = [[0 for x in range(8)] for y in range(8)]
        self.moves = ""
        self.file = file
        self.rowcount = {'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'F': 0, 'G': 0}
    def play(self):
        raw = open(self.file, "r")
        for m in raw.readlines():
            self.moves += m.translate(None, "\n ").upper()

        for i in range(0, len(self.moves)):
            self.rowcount[self.moves[i].upper()]+=1
            row = ord(self.moves[i])-65
            height = self.rowcount[self.moves[i].upper()]
            if i % 2 == 0:
                self.board[row][height] = "x"
            else:
                self.board[row][height] = "y"

x = ConnectFour("game.txt")
x.play()
