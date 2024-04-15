import { Box, Typography } from '@mui/material'
import * as React from 'react'
import { SectionActivity, SectionType } from '../../models/common'
import { MdOutlineForum } from 'react-icons/md'
import { IoBookOutline, IoExtensionPuzzleOutline, IoVideocamOutline } from 'react-icons/io5'


type SectionActivityChartProps = {
    items: Array<SectionActivity>
}

function getImageBySectionType(sectionType: SectionType, color: string): React.JSX.Element {
    switch (sectionType) {
    case SectionType.TEXTBOOK:
        return <IoBookOutline color={color} />
    case SectionType.VIDEO:
        return <IoVideocamOutline color={color} />
    case SectionType.PROBLEMS:
        return <IoExtensionPuzzleOutline color={color} />
    case SectionType.FORUM:
        return <MdOutlineForum color={color} />
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
        <Box
            sx={{
                overflow: 'hidden', padding: '20px',
                bgcolor: 'background.paper',
                borderRadius: 1
            }}
        >
            <div style={{ fontSize: 20, marginBottom: 20, color: '#405479' }}>Активность на секциях курса</div>
            {props.items.map(item => (
                <div key={item.section_type} style={{ display: 'flex', justifyContent: 'space-between', gap: '24px' }}>
                    <Typography variant="body2" sx={{ flexGrow: 1 }}>
                        {`${item.students_count}% студентов ${getDescriptionBySectionType(item.section_type)}`}
                    </Typography>
                    {getImageBySectionType(item.section_type, '#405479')}
                </div>
            ))}
        </Box>
    )
}
