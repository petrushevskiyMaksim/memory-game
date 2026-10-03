import { button } from '../components/button';
import { modalWindow } from '../components/modal';
import { renderScore } from '../components/score';

const body = document.querySelector('body');

export const header = () => {
    const header = document.createElement('header');

    const newGameBtn = button('New Game');
    newGameBtn.classList.add('new-game-btn');

    const leaderboardBtn = button('Leaderboard');
    leaderboardBtn.classList.add('leaderboard-btn');

    leaderboardBtn.addEventListener('click', () => {
        body.append(modalWindow('leaderboard'));
    });

    header.append(newGameBtn, renderScore(), leaderboardBtn);

    return header;
};
