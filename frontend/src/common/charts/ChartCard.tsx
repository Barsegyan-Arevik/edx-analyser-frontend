import {ReactNode} from "react";
import {Card} from "@mui/material";
import {ChartsText} from "@mui/x-charts";


type ChartCardProps = {
    children?: ReactNode;
    chartTitle: string;
}

export default function ChartCard(props: ChartCardProps) {
    return (
        <Card sx={{maxWidth: '600px'}}>
            <ChartsText text={props.chartTitle}></ChartsText>
            {props.children}
        </Card>
    )
}
