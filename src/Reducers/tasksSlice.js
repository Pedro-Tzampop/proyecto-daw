import { createSlice } from "@reduxjs/toolkit"

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: [
            {
                'id': 1,
                'name': 'Estado inicial Tasks',
                'description': 'Tarea 2 DAW',
                'dueDate': '12/05/2024'
            }
        ]
    },
    reducers: {
        addTask: (state, action) => {
            const newTask = { ...action.payload, id: Date.now() }; // Añade un identificador único
            state.value.push(newTask);
        },
        deleteTask: (state, action) => {
            state.value = state.value.filter(task => task.id !== action.payload);
        }
    }
})

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
