
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved:'',
        notes: [],
        active: null,
        // active: {
        //     id: 'abcd',
        //     title: '',
        //     body: '',
        //     date: 1245,
        //     imageUrls: [], //https:foto1.jpg,....
        // }
        
    },
    reducers: {
        addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload);
            state.isSaving = false;
        },
        setAvtiveNote: (state, action) => {
            state.active = action.payload;
        },
        savingNewNote:(state) => {
            state.isSaving = true;

        },
        setNotes: (state, action) => {
            state.notes = action.payload;

        },
        setSaving: (state, action) => {

        },
        updateNote: (state, action) => {

        },
        deleteNodeById: (state, action) => {

        },
    }
});


// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setAvtiveNote, savingNewNote, setNotes, setSaving, updateNote, deleteNodeById} = journalSlice.actions;