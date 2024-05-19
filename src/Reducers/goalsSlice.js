import { createSlice } from "@reduxjs/toolkit"

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
        value: [
            {
                'id': 1,
                'name': 'Estado inicial Goals',
                'description': 'Tarea 2 DAW',
                'dueDate': '12/05/2024'
            }
        ]
    },
    reducers: {
        addGoal: (state, action) => {
            const newGoal = { ...action.payload, id: Date.now() }; // Añade un identificador único
            state.value.push(newGoal);
        },
        deleteGoal: (state, action) => {
            state.value = state.value.filter(goal => goal.id !== action.payload);
        }
    }
})

export const { addGoal, deleteGoal } = goalsSlice.actions;
export default goalsSlice.reducer;
