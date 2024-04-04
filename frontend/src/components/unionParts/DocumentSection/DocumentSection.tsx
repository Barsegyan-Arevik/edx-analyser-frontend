import * as React from 'react';
import { useState } from 'react';
import './DocumentSection.css'
import Header from '../HeaderSection/Header';
import ComplexTable from '../../Charts/Table/TableHeatMap';
import DoubleLineChart from '../../Charts/UnusedFiles/DoubleLineChart';
import TableWithLink from "../../Charts/Table/TableWithLink";
import MyShimmer from "../../Shimmer/ShimmerComponent";

export type TableData = {
    boxTitle: string;
    columnName: string;
    additionalColumn?: string;
    columnCount: string;
    labelText: string;
    data: string;
}

export type DocumentSectionProps = {
    tableScrollingData: TableData;
    tableSearchedTermsData: TableData;
    headerText: string;
    // !!!graphData?  
}

export default function DocumentSection(props: DocumentSectionProps) {
    
    function convertingStringToTableScrolling(str) {
        return str
            .trim()
            .split('\n')
            .slice(1) // Пропустить первую строку (заголовки столбцов)
            .map((row, index) => {
                const [pdfName, scrollingAmount, medianTime] = row.split(',');
                return { user: pdfName, timeSec: parseInt(scrollingAmount, 10), medianTime: parseInt(medianTime, 10) };
            })
            .sort((a, b) => b.timeSec - a.timeSec) // Сортировка по убыванию
            .map((data, index) => ({ ...data, id: index + 1 })); // Добавление идентификатора
    }

    // function convertingStringToTableSearchedTerms(data) {
    //     return data
    //         .trim()
    //         .split('\n')
    //         .slice(1) // Пропустить первую строку (заголовки столбцов)
    //         .map((row, index) => {
    //             const [pdfName, scrollingAmount] = row.split(',');
    //             return { user: scrollingAmount, timeSec: parseInt(pdfName, 10) };
    //         })
    //         .sort((a, b) => b.timeSec - a.timeSec) // Сортировка по убыванию
    //         .map((data, index) => ({ ...data, id: index + 1 })); // Добавление идентификатора
    // }

    function convertingStringToTableSearchedTerms(data) {
        return data
            .trim()
            .split('\n')
            .slice(1) // Пропустить первую строку (заголовки столбцов)
            .map((row, index) => {
                const [pdfName, scrollingAmount] = row.split(',');
                return { pdfName, timeSec: parseInt(scrollingAmount, 10) };
            })
            .sort((a, b) => b.timeSec - a.timeSec) // Сортировка по убыванию
            .map((data, index) => ({
                ...data,
                id: index + 1,
                pdfName: <a href={data.pdfName} >{data.pdfName}</a>
            })); // Добавление идентификатора и создание кликабельной ссылки
    }


    // Пример использования:
    const initialScrollingData = convertingStringToTableScrolling(props.tableScrollingData.data);
    const initialSearchedTermsData = convertingStringToTableSearchedTerms(props.tableSearchedTermsData.data)


    const [rowsScrolling, setRowsScrolling] = useState(initialScrollingData);
    const [rowsSearchedTerms, setRowsSearchedTerms] = useState(initialSearchedTermsData);

    const paperSizeScrolling = '900px'
    const paperSizeSearchedTerms = '600px'

    return (
        <div className={"document_interaction"}>
            <div style={{ marginTop: '20px' }}>
                <Header text={props.headerText} />
            </div>
            <div className='document_interaction_container'>
                {/*<div className='item_doc_1'>*/}
                {/*    <ComplexTable*/}
                {/*        {...props.tableScrollingData}*/}
                {/*    />*/}
                {/*</div>*/}
                <div className='item_doc_2'>
                    <TableWithLink
                        {...props.tableSearchedTermsData}
                    />
                </div>
            </div>
        </div>
    );
};

