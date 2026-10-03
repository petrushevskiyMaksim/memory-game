import { data } from '../../data';
import { card } from '../components/card';

export const gameBoard = () => {
    const board = document.createElement('main');
    board.classList.add('board');

    const images = [...data, ...data];

    const sortedImages = shuffle(images);

    sortedImages.forEach((image) => {
        board.append(card(image.src, image.id));
    });

    return board;
};

function shuffle(array) {
    const arr = [...array];
    let m = arr.length,
        t,
        i;

    while (m) {
        i = Math.floor(Math.random() * m--);

        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }

    return arr;
}
