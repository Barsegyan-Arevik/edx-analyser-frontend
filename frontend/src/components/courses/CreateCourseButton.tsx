import {Fab, Grid} from '@mui/material'
import {FaPlus} from 'react-icons/fa6'
import CreateCourseForm from './CreateCourseForm'
import * as React from 'react'

type CreateCourseButtonProps = {
    isFormOpen: boolean;
    setIsFormOpen: (boolean) => void;
}

export default function CreateCourseButton(
    props: CreateCourseButtonProps
) {
    return (
        <Grid>
            <Fab
                onClick={() => props.setIsFormOpen(true)}
                color="primary"
                aria-label="add"
                sx={{
                    position: 'fixed',
                    bottom: '5vh',
                    right: '5vh',
                }}
            >
                <FaPlus size={24} lightingColor={'#405479'}/>
            </Fab>
            {props.isFormOpen ? (
                <CreateCourseForm open={props.isFormOpen} onClose={() => props.setIsFormOpen(false)}/>
            ) : null}
        </Grid>
    )
}