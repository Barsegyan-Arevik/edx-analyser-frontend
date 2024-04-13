import * as React from 'react'
import { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Box, Button } from '@mui/material'
import { SlMagnifier } from 'react-icons/sl'
import { FiInfo } from 'react-icons/fi'
import ModalWindow from './ModalWindow'
import InfoPopup from './InfoPopup'

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

    const [infoPopupOpen, setInfoPopupOpen] = useState(false)
    const handleOpenInfoPopup = () => {
        setInfoPopupOpen(true)
    }

    const handleCloseInfoPopup = () => {
        setInfoPopupOpen(false)
    }

    return (
        <Paper>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 16,
                    color: '#405479',
                    paddingLeft: 2,
                    paddingTop: 1,
                    paddingRight: 1
                }}
            >
                {props.chartTitle}
                <div>
                    {props.popupChart ?
                        <Button onClick={handleOpenModalWindow}>
                            <SlMagnifier />
                        </Button> : null
                    }
                    {props.additionalInfo ?
                        <Button onClick={handleOpenInfoPopup}>
                            <FiInfo />
                        </Button> : null
                    }
                </div>
            </Box>
            {props.chart}
            <ModalWindow open={modalWindowOpen} handleClose={handleCloseModalWindow}>
                {props.popupChart}
            </ModalWindow>
            <InfoPopup open={infoPopupOpen} handleClose={handleCloseInfoPopup} info={props.additionalInfo} />
        </Paper>
    )
}
