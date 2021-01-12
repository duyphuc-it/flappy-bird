import { createSlice } from '@reduxjs/toolkit';

export type GameState = {
    status: boolean,
}

const initState: GameState = { status: false };

const gameSlice = createSlice({
    name: 'game',
    initialState: initState,
    reducers: {
        toggleStatusGame(state) {
            state.status = !state.status;
        }
    }
})

export const { toggleStatusGame } = gameSlice.actions;
export default gameSlice.reducer;