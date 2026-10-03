import { button } from '../components/button';
import { renderScore } from '../components/score';

export const header = () => {
    const header = document.createElement('header');

    const newGameBtn = button('New Game');
    newGameBtn.classList.add('new-game-btn');

    const leaderboardBtn = button('Leaderboard');
    leaderboardBtn.classList.add('leaderboard-btn');

    header.append(newGameBtn);
    header.append(renderScore());
    header.append(leaderboardBtn);

    return header;
};
