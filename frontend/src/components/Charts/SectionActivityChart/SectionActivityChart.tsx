import { Box, Typography } from '@mui/material'
import * as React from 'react'
import { SectionActivity, SectionType } from '../../models/common'
import { MdOutlineForum } from 'react-icons/md'
import { IoBookOutline, IoExtensionPuzzleOutline, IoVideocamOutline } from 'react-icons/io5'
// import './SectionActivityChart.css'

type SectionActivityChartProps = {
    items: Array<SectionActivity>
}

function getImageBySectionType(sectionType: SectionType, color: string, size: string): React.JSX.Element {
    switch (sectionType) {
    case SectionType.TEXTBOOK:
        return <IoBookOutline color={color} fontSize={size}/>
    case SectionType.VIDEO:
        return <IoVideocamOutline color={color} fontSize={size}/>
    case SectionType.PROBLEMS:
        return <IoExtensionPuzzleOutline color={color} fontSize={size}/>
    case SectionType.FORUM:
        return <MdOutlineForum color={color} fontSize={size}/>
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
        <div style={{width: '35rem'}}>
        <Box
            sx={{
                padding: '0.9rem',
                bgcolor: 'background.paper',
                borderRadius: 1,
                // width: '35rem',
                height: '12.4rem',
                whiteSpace: 'nowrap',
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
                <Box key={item.section_type}
                     sx={{
                         display: 'flex',
                         justifyContent: 'space-between',
                         color: '#405479',
                         marginBottom: '1em'
                    }}
                >
                    <Box
                        sx={{
                            fontSize: '1.5em'
                        }}
                    >
                        <span style={{ fontWeight: 'bold', fontSize: '1.4em' }}>{item.students_count}%</span> студентов {getDescriptionBySectionType(item.section_type)}

                    </Box>

                    {getImageBySectionType(item.section_type, '#405479', '3em')}
                </Box>
            ))}
        </Box>
        </div>
    )
}
