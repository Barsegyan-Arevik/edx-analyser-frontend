import { Box, Grid, Paper } from '@mui/material'
import * as React from 'react'
import { SectionActivity, SectionType } from '../../../models/common'
import { MdOutlineForum } from 'react-icons/md'
import { IoBookOutline, IoExtensionPuzzleOutline, IoVideocamOutline } from 'react-icons/io5'

type SectionActivityChartProps = {
    items: Array<SectionActivity>
    numberOfStudents: number
}

function getImageBySectionType(sectionType: SectionType, color: string, size: string): React.JSX.Element {
    switch (sectionType) {
    case SectionType.TEXTBOOK:
        return <IoBookOutline color={color} fontSize={size} />
    case SectionType.VIDEO:
        return <IoVideocamOutline color={color} fontSize={size} />
    case SectionType.PROBLEMS:
        return <IoExtensionPuzzleOutline color={color} fontSize={size} />
    case SectionType.FORUM:
        return <MdOutlineForum color={color} fontSize={size} />
    }
}

function getDescriptionBySectionType(sectionType: SectionType): string {
    switch (sectionType) {
    case SectionType.TEXTBOOK:
        return 'просматривали учебник'
    case SectionType.VIDEO:
        return 'просматривали видео'
    case SectionType.PROBLEMS:
        return 'делали попытки решить задачи'
    case SectionType.FORUM:
        return 'проявляли активность на форуме'
    }
}

export default function SectionActivityChart(
    props: SectionActivityChartProps
) {
    console.log(props.items)
    return (
        <Paper style={{ width: '100%' }}>
            <Grid item spacing={1}>
                <Box
                    sx={{
                        padding: '0.9rem',
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        whiteSpace: 'nowrap'
                    }}
                >
                    <Box
                        sx={{
                            fontSize: '2em',
                            marginBottom: '0.7em',
                            color: '#405479'
                        }}
                    >
                        Активность на секциях курса
                    </Box>
                    {props.items.map(item => (
                        <Grid container key={item.section_type} alignItems="center" spacing={2}
                              justifyContent={'space-between'}>
                            <Grid item xs={10}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        color: '#405479',
                                        marginBottom: '1em'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            fontSize: '1.5em',
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                    <span style={{
                                        fontWeight: 'bold',
                                        fontSize: '1.3em'
                                    }}>{Math.round((item.students_count / props.numberOfStudents) * 100)}%
                                    </span>
                                        <div style={{ width: '4px' }}></div>
                                        <span
                                            style={{ fontSize: '1.1em' }}>студентов {getDescriptionBySectionType(item.section_type)}</span>

                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={1}>
                                {getImageBySectionType(item.section_type, '#405479', '3em')}
                            </Grid>
                        </Grid>
                    ))}
                </Box>
            </Grid>
        </Paper>
    )
}
