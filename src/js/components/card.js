export const card = (srcImage, id) => {
    const card = document.createElement('div');
    card.dataset.id = id;
    card.classList.add('card');

    const cardInner = document.createElement('div');
    cardInner.classList.add('card__inner');

    cardInner.append(cardImage(srcImage), cardBack());

    card.append(cardInner);

    return card;
};

const cardImage = (imageUrl) => {
    const img = document.createElement('img');
    img.classList.add('card__face', 'card__face--front');
    img.src = imageUrl;

    return img;
};

const cardBack = () => {
    const back = document.createElement('div');
    back.classList.add('card__face--back');

    return back;
};
