const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

const createDeck = (numDecks = 1) => {
    const deck = [];
    for (let i = 0; i < numDecks; i++) {
        suits.forEach(suit => {
            values.forEach(value => {
                deck.push({ value, suit });
            });
        });
    }
    return deck;
};

// Fisher-yates shuffle method with O(N) time and requires O(1) additional space. 
const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
};

const stringFormatter = (hands) => {
    return hands.map(hand => hand.map(card => `${card.value} of ${card.suit}`));
}

const isValidNumber = (numPlayers, cardsPerPlayer, totalCards) => {
    if (numPlayers <= 0) {
        throw new Error("Number of players must be a positive integer.");
    }
    if (cardsPerPlayer <= 0) {
        throw new Error("Cards per player must be a positive integer.");
    }
    if (numPlayers * cardsPerPlayer > totalCards) {
        throw new Error("Not enough cards in the deck to deal the requested number of cards per player.");
    }
};

const shuffleAndDeal = (numPlayers, cardsPerPlayer, numDecks = 1) => {
    const deck = createDeck(numDecks);

    isValidNumber(numPlayers, cardsPerPlayer, deck.length);

    shuffleDeck(deck);

    const hands = [];
    for (let i = 0; i < numPlayers; i++) {
        hands.push(deck.splice(0, cardsPerPlayer));
    }

    return stringFormatter(hands);
};

export default shuffleAndDeal;
