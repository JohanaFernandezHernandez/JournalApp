import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setAvtiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

export const starNewNote = () => {
    return async( dispach, getState ) => {

        dispach(savingNewNote());

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc( collection(FirebaseDB, `${ uid }/journal/notes`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispach(addNewEmptyNote(newNote));
        dispach(setAvtiveNote(newNote))

    }
}

export const startLodingNotes = () => {
    return async(dispach, getState) => {

        const { uid } = getState().auth;

        const notes = await loadNotes(uid);

        dispach(setNotes(notes));

    }

}

export const starSaveNote = () => {
    return async(dispach, getState) => {

        dispach(setSaving());

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const noteToFireStore = {...note};
        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc( docRef, noteToFireStore,{ merge:true});

        dispach(updateNote( note ));

    }
}

export const starUpLoadingFiles = (files = []) => { 
    return async ( dispach )=> {
        dispach(setSaving());

        // await fileUpload(files[0]);

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file))
        }

        const photoUrls = await Promise.all(fileUploadPromises);

        dispach(setPhotosToActiveNote(photoUrls));

    }

 }

 export const starDeletingNote = () => {
    return async (dispach, getState) => {

        const {uid} = getState().auth;
        const {active: note} = getState().journal;

        const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${ note.id}` );
        await deleteDoc( docRef);

        dispach( deleteNoteById(note.id));

        

        
    }

 };