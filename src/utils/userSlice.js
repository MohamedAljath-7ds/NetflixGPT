import { createSlice } from "@reduxjs/toolkit";

const Userslice = createSlice({
    name:'aljath',
    initialState:null,
    reducers:{
        addUser:(state,action) => {
            return action.payload;
        },
        RemoveUser:() => {
            return null;
        }
    }
})


export const{addUser, RemoveUser} = Userslice.actions;

export default Userslice.reducer
