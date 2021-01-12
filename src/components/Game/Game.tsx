import React, { useRef } from 'react';
import { GameProps } from './Game.types';
import { AppState } from '../../store/index';
import { connect } from 'react-redux';
import { toggleStatusGame } from '../../store/game';
import './Game.style.scss';
import Ground from '../Ground';
import Bird from '../Bird';


const Game = (props: GameProps) => {

    const gameState = useRef(props.gameState);

    console.log(props.gameState.status);


    // const removeEventLIstener = () => {
    //     document.removeEventListener("click", startGame);
    //     document.removeEventListener("keydown", startGame);
    // }

    React.useEffect(() => {
        gameState.current = props.gameState;
    }, [props.gameState])

    React.useEffect(() => {
        const startGame = (event: any) => {
            console.log("infunction", gameState.current.status);
            if(event.type === "click"){
                props.toggleStatusGame();
                document.removeEventListener("click", startGame);
                document.removeEventListener("keydown", startGame);
            }else if(event.type === "keydown") {
                if(event.code === "Space") {
                    props.toggleStatusGame();
                    document.removeEventListener("click", startGame);
                    document.removeEventListener("keydown", startGame);
                }
            }
        }
        document.addEventListener("keydown", startGame);
        document.addEventListener("click", startGame);
    }, [props])

    // const startGame = (event: any) => {
    //     console.log("infunction", gameState.current.status);
    //     if(event.type === "click"){
    //         props.toggleStatusGame();
    //         removeEventLIstener();
    //     }else if(event.type === "keydown") {
    //         if(event.code === "Space") {
    //             props.toggleStatusGame();
    //             removeEventLIstener();
    //         }
    //     }
    // }

   


    return (<div className="game-content">
                <Bird />
                <Ground />
            </div>)
}

const mapStateToProps = (state: AppState) => ({
    gameState: state.gameReducer
}
)
export default connect(mapStateToProps, { toggleStatusGame })(Game);