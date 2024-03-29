import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { starNewNote } from "../../store/journal"
import { useMemo } from "react"


export const JournalPage = () => {
 
  const { isSaving, active } = useSelector((state)=>state.journal)
  const dispach = useDispatch();

  const onClickNewNote = () => {
    dispach(starNewNote());
  }

  return (
    <JournalLayout>

      {
        (!!active)
        ? <NoteView/>
        : <NothingSelectedView/> 
      }

       <IconButton
       onClick={ onClickNewNote }
        disabled= { isSaving }
        size='Large'
        sx={{
          color:'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position:'fixed',
          right: 50,
          bottom:50
        }}
        >

          <AddOutlined sx={{ fontSize: 30 }}/>

       </IconButton>


    </JournalLayout>
   
    
  )
}
