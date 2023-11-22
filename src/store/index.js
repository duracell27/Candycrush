import { configureStore, createSlice } from "@reduxjs/toolkit"
import { moveBelowReducer } from "./reducers/moveBelow"
import { dragEndReducer } from "./reducers/dragEnd"

const initialState = {
    board: [],
    boardSize: 8,
    squareBeingDragged: undefined,
    squareBeingReplaced: undefined,
}

const candyCrushSlice = createSlice({
    name: 'candyCrush',
    initialState,
    reducers: {
        updateBoard: (state, action)=>{
            state.board = action.payload
        },
        dragStart: (state, action)=>{
            state.squareBeingDragged = action.payload
        },
        dragDrop: (state, action)=>{
            state.squareBeingReplaced = action.payload
        },
        dragEnd: dragEndReducer,
        moveBelow: moveBelowReducer
    }
})

export const {updateBoard, moveBelow, dragStart, dragDrop, dragEnd} = candyCrushSlice.actions

export const store = configureStore({
    reducer: {
        candyCrush:  candyCrushSlice.reducer 
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: false
        })
    
})