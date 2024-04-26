import * as React from 'react';
import {Box, Divider, Grid, ListItem, Paper, Typography} from '@mui/material';
import './ForumActivityChart.css';
import {CiUser} from 'react-icons/ci';
import {SlLike} from 'react-icons/sl';
import {GoCommentDiscussion} from 'react-icons/go';
import {ForumQuestion, QuestionType} from '../../../models/forum';

interface ActivitySectionProps {
    forumQuestion: ForumQuestion;
}

function ForumQuestionChart(props: ActivitySectionProps) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4} md={3}>
                <Box display="flex" flexDirection="column">
                    <Typography><CiUser/> {props.forumQuestion.author}</Typography>
                    <Typography><SlLike/> {props.forumQuestion.likes_count}</Typography>
                    <Typography><GoCommentDiscussion/> {props.forumQuestion.comments_count}</Typography>
                </Box>
            </Grid>
            <Divider orientation="vertical" flexItem color={'#405479'} sx={{ borderBottomWidth: 10, height: 60 }}/>
            <Grid item xs={8}>
                <Box>
                    <Typography fontSize={'2em'}>{props.forumQuestion.title}</Typography>
                    <Typography>{props.forumQuestion.body}</Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

interface ForumActivityChartSectionProps {
    label: string;
    questions: ForumQuestion[];
}

function getLabelByQuestionType(questionType: QuestionType) {
    return questionType === QuestionType.THREAD ? 'Топ обсуждений по популярности' : 'Топ вопросов по популярности';
}

function ForumActivityChartSection(props: ForumActivityChartSectionProps) {
    return (
        <Paper
            sx={{
                bgcolor: '#fff',
                borderColor: '#F5F5F5',
                color: '#405479',
                borderRadius: 1,
                textAlign: 'left',
                padding: '20px'
            }}
        >
            {props.questions.length > 0 && (
                <Typography>
                    {props.label}
                </Typography>
            )}
            {props.questions.map((question, index) => (
                <ListItem key={index}>
                    <ForumQuestionChart forumQuestion={question}/>
                </ListItem>
            ))}
        </Paper>
    );
}

type ForumActivityChartProps = {
    questions: ForumQuestion[];
};

export default function ForumActivityChart(props: ForumActivityChartProps) {
    const threads = props.questions.filter(item => item.question_type === QuestionType.THREAD);
    const responses = props.questions.filter(item => item.question_type === QuestionType.RESPONSE);
    return (
        <Grid container spacing={3} paddingBottom={'1em'}>
            {threads.length > 0 && (
                <Grid item xs={12}>
                    <ForumActivityChartSection
                        questions={threads}
                        label={getLabelByQuestionType(QuestionType.THREAD)}/>
                </Grid>
            )}
            {responses.length > 0 && (
                <Grid item xs={12}>
                    <ForumActivityChartSection
                        questions={responses}
                        label={getLabelByQuestionType(QuestionType.RESPONSE)}/>
                </Grid>
            )}
        </Grid>
    );
}
