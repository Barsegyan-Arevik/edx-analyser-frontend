import * as React from 'react'
import {useState} from 'react'
import Paper from '@mui/material/Paper'
import {Box, Button, Tooltip} from '@mui/material'
import {SlMagnifier} from 'react-icons/sl'
import {FiInfo} from 'react-icons/fi'
import ModalWindow from '../ModalWindow'

type ChartWrapperProps = {
    chartTitle: string,
    additionalInfo?: string,
    chart: React.JSX.Element,
    popupChart?: React.JSX.Element
}

export default function ChartWrapper(props: ChartWrapperProps) {
    const [modalWindowOpen, setModalWindowOpen] = useState(false)

    const handleOpenModalWindow = () => {
        setModalWindowOpen(true)
    }

    const handleCloseModalWindow = () => {
        setModalWindowOpen(false)
    }

    return (
        <div>
            <Paper style={{minWidth: '400px'}}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        color: '#405479',
                        paddingLeft: '1.5rem',
                        paddingTop: '0.8rem',
                        paddingBottom: '0.5rem',
                        paddingRight: 1,
                        fontSize: '1.7em'
                    }}
                >
                    {props.chartTitle}
                    <div>
                        {props.popupChart ?
                            <Button onClick={handleOpenModalWindow}>
                                <SlMagnifier/>
                            </Button> : null
                        }
                        {props.additionalInfo ?
                            <Tooltip title={props.additionalInfo}>
                                <Button>
                                    <FiInfo/>
                                </Button>
                            </Tooltip> : null
                        }
                    </div>
                </Box>
                {props.chart}
                <ModalWindow open={modalWindowOpen} handleClose={handleCloseModalWindow}>
                    {props.popupChart}
                </ModalWindow>
            </Paper>
        </div>
    )
}
