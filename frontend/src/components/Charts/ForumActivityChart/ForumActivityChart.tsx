import * as React from 'react'
import './ForumActivityChart.css'
import { CiUser } from 'react-icons/ci'
import { SlLike } from 'react-icons/sl'
import { GoCommentDiscussion } from 'react-icons/go'
import { ForumQuestion, QuestionType } from '../../../models/forum'


interface ActivitySectionProps {
    forumQuestion: ForumQuestion
}


function ForumQuestionChart(props: ActivitySectionProps) {
    return (
        <div className="messages_section">
            <div className="left-column">
                <div><CiUser /> {props.forumQuestion.author}</div>
                <div><SlLike /> {props.forumQuestion.likes_count}</div>
                <div><GoCommentDiscussion /> {props.forumQuestion.comments_count}</div>
            </div>
            <div className="vertical-line"></div>
            <div className="right-column">
                <p>{props.forumQuestion.title}</p>
                <p>{props.forumQuestion.body}</p>
            </div>
        </div>
    )
}

interface ForumActivityChartSectionProps {
    label: string;
    questions: ForumQuestion[]
}

function getLabelByQuestionType(questionType: QuestionType) {
    return questionType === QuestionType.THREAD ? 'Топ обсуждений по популярности' : 'Топ вопросов по популярности'
}

function ForumActivityChartSection(props: ForumActivityChartSectionProps) {
    return (
        <div className="activity-list">
            {props.questions.length > 0 && (
                <div className={'head'}>
                    {props.label}
                </div>
            )}
            {props.questions.map((question, index) => (
                <div key={index}>
                    <ForumQuestionChart forumQuestion={question} />
                </div>
            ))}
        </div>
    )
}

type ForumActivityChartProps = {
    questions: ForumQuestion[]
}

export default function ForumActivityChart(props: ForumActivityChartProps) {
    const threads = props.questions.filter(item => item.question_type == QuestionType.THREAD)
    const responses = props.questions.filter(item => item.question_type == QuestionType.RESPONSE)
    return (
        <div>
            {
                threads.length > 0 ?
                    <ForumActivityChartSection
                        questions={threads}
                        label={getLabelByQuestionType(QuestionType.THREAD)} />
                    : null
            }
            {
                responses.length > 0 ?
                    <ForumActivityChartSection
                        questions={responses}
                        label={getLabelByQuestionType(QuestionType.RESPONSE)} />
                    : null
            }
        </div>
    )
}
