import React from 'react'
import './Bird.style.scss';
import {BirdProps} from './Bird.types';
import {connect} from 'react-redux';
import { AppState } from '../../store';
import {toggleStatusGame} from '../../store/game';

const Bird = (props: BirdProps) => {


    React.useEffect(() => {
        let bird = document.getElementById("bird");
        document.addEventListener("keydown", (event) => {
            if(event.code === "Space") {
                if(bird) {
                    let currentOffset = bird.offsetTop;
                    let newOffset = currentOffset - 50;
                    bird.style.top = `${newOffset}px`;
                }
            }
        })

        setInterval(() => {
            if(bird) {
            }
        }, 500)

    }, [])

    return <div className="bird" id="bird"></div>
}



const mapStateToProps = (state: AppState) => ({
    gameState: state.gameReducer
}
)
export default connect(mapStateToProps, { toggleStatusGame })(Bird);