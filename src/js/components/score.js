export const renderScore = () => {
    const score = document.createElement('div');
    score.classList.add('score');

    const steps = renderSteps();

    const pairs = renderPairs();

    score.append(steps, pairs);

    return score;
};

const renderSteps = () => {
    const steps = document.createElement('span');
    steps.classList.add('steps');

    const label = document.createElement('span');
    label.textContent = 'Total steps: ';

    const stepsNum = document.createElement('span');
    stepsNum.classList.add('steps-num');
    stepsNum.textContent = '0';

    steps.append(label, stepsNum);
    return steps;
};
const renderPairs = () => {
    const pairs = document.createElement('span');
    pairs.classList.add('pairs');

    const pairsLabel = document.createElement('span');
    pairsLabel.textContent = 'Pairs open: ';

    const pairsNum = document.createElement('span');
    pairsNum.classList.add('pairs-num');
    pairsNum.textContent = '0';

    const pairsTotal = document.createElement('span');
    pairsTotal.textContent = ' from 8';

    pairs.append(pairsLabel, pairsNum, pairsTotal);

    return pairs;
};
