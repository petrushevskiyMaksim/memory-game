import { header } from './js/layout/header';
import { gameBoard } from './js/layout/gameBoard';
import { logic } from './js/gameLogic/logic';

document.body.prepend(header(), gameBoard());

const board = document.querySelector('.board');

logic(board);
