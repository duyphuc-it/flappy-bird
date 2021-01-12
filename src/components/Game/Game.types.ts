import { toggleStatusGame } from "../../store/game";
import {GameState} from '../../store/game';

export interface GameProps {
    gameState: GameState;
    toggleStatusGame: typeof toggleStatusGame;
}