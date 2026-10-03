let firstCard = null;
let isMatched = false;
let matchedPairs = 0;
let lockBoard = false;
const TOTAL_PAIRS = 8;

export const logic = (board) => {
    board.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (!card) return;
        if (lockBoard) return;
        if (card === firstCard) return;
        if (card.classList.contains('.is-matched')) return;
        if (card.classList.contains('.is-flipped')) return;

        flippedCard(card);

        if (!firstCard) {
            firstCard = card;
            return;
        }

        checkMatched(card);
    });
};

const checkMatched = (secondCard) => {
    const isMatch = firstCard.dataset.id === secondCard.dataset.id;

    if (isMatch) {
        firstCard.classList.add('is-matched');
        secondCard.classList.add('is-matched');
        matchedPairs++;

        firstCard = null;

        if (matchedPairs === TOTAL_PAIRS) {
            console.log('FINISH GAME');
        }
    } else {
        lockBoard = true;

        setTimeout(() => {
            flippedCard(firstCard);
            flippedCard(secondCard);
            firstCard = null;
            lockBoard = false;
        }, 1000);
    }
};

export const flippedCard = (card) => {
    card.classList.toggle('is-flipped');
};
