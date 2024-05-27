import { createSlice } from "@reduxjs/toolkit"

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
        value: [],
    },
    reducers: {
        addGoal: (state, action) => {
            const newGoal = { ...action.payload, id: Date.now() }; 
            state.value.push(newGoal);
            fetch("htpp://localhost:3001/goals/addGoals",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"actividad3DAW"
                },
                body: JSON.stringify(action.payload)
            }).catch((err)=>{
                console.log(err);
            })
        },
        InitAddGoal: (state, action) => {
            const newGoal = { ...action.payload, id: Date.now() }; 
            state.value.push(newGoal);
        },
        deleteGoal: (state, action) => {
            state.value = state.value.filter(goal => goal.id !== action.payload);
            fetch("http://localhost:3001/tasks/removeTasks/"+action.payload,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"actividad3DAW"
                },
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
})

export const { addGoal, InitAddGoal, deleteGoal } = goalsSlice.actions;
export default goalsSlice.reducer;
