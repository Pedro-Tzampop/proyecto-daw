import { createSlice } from "@reduxjs/toolkit"

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: [],
    },
    reducers: {
        addTask: (state, action) => {
            const newTask = { ...action.payload, id: Date.now()}; 
            console.log(action.payload);
            state.value.push(newTask);
            fetch('http://localhost:3001/tasks/addTasks',{
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
        initAddTask: (state, action) => {
            const newTask = { ...action.payload, id: Date.now()}; 
            console.log(action.payload);
            state.value.push(newTask);
        },
        deleteTask: (state, action) => {
            state.value = state.value.filter(task => task.id !== action.payload);
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

export const { addTask, initAddTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
