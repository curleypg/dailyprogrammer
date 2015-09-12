Goal of the project is to take the input the game board and output the possible solutions.

The game Set.

So far, I have written primitive matching logic which tests if for 3 cards, each trait is the same or each trait is unique.

update: set_alt takes 2 cards and returns the *only* possible card which completes the set based on the this rule: "Given any two cards, there is exactly one card which forms a set with those two cards. Therefore the probability of producing a Set from 3 randomly drawn cards from a complete deck is 1/79." -- Wikipedia
