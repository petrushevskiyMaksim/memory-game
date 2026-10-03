const body = document.querySelector('body');

export const modalWindow = (content) => {
    const win = contentWin();
    const leaderboard = contentLeaderboard();
    const overlay = overlayModal();

    const modal = document.createElement('div');
    modal.classList.add('modal');

    // const closeButton = document.querySelector();

    const modalContent = content === 'win' ? win : leaderboard;

    modal.append(modalContent);

    overlay.append(modal);

    body.append(overlay);
    body.style.overflow = 'hidden';

    return overlay;
};

const overlayModal = () => {
    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');

    return overlay;
};

const contentWin = () => {
    const win = document.createElement('div');

    win.textContent = 'YOU ARE VICTORY';

    return win;
};

const contentLeaderboard = () => {
    const contentLeaderboard = document.createElement('div');
    contentLeaderboard.textContent = 'Leaderboard';

    return contentLeaderboard;
};
