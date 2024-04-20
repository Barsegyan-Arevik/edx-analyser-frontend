import * as React from 'react';
import './ForumActivityChart.css';
import { CiUser } from 'react-icons/ci';
import { SlLike } from 'react-icons/sl';
import { GoCommentDiscussion } from 'react-icons/go';
import {QuestionType} from '../../../models/forum';


interface ActivitySectionProps {
    author: string;
    title: string;
    body: string;
    likes_count: number;
    comments_count: number;
}


function ActivitySection(props: ActivitySectionProps) {
  return (
    <div className="messages_section">
        <div className='left-column'>
          <div><CiUser />  {props.author}</div>
          <div><SlLike />  {props.likes_count}</div>
          <div><GoCommentDiscussion />  {props.comments_count}</div>
        </div>
        <div className='vertical-line'></div>
        <div className='right-column'>
            <p>{props.title}</p>
            <p>{props.body}</p>
        </div>
    </div>
  );
}

export type ChartData = {
    author: string;
    title: string;
    body: string;
    likes_count: number;
    comments_count: number;
    question_type: QuestionType;
}

interface DivisionIntoSectionForumActivityChartProps{
    chart: ChartData[]
    sectionType: QuestionType;
}

function DivisionIntoSectionForumActivityChart(props: DivisionIntoSectionForumActivityChartProps) {
  const filteredMessages = props.chart.filter(message => message.question_type === props.sectionType);

  return (
    <div className="activity-list">
      {filteredMessages.length > 0 && (
        <div className={'head'}>
          {props.sectionType === 'thread' ? 'Топ обсуждений по популярности' : 'Топ вопросов по популярности'}
        </div>
      )}
      {filteredMessages.map((message, index) => (
        <div key={index}>
          <ActivitySection
            author={message.author}
            likes_count={message.likes_count}
            comments_count={message.comments_count}
            title={message.title}
            body={message.body}
          />
        </div>
      ))}
    </div>
  );
}

type ForumActivityChartProps = {
    chart: ChartData[]
}

export default function ForumActivityChart(props: ForumActivityChartProps) {
  return (
    <div>
      <DivisionIntoSectionForumActivityChart chart={props.chart} sectionType={QuestionType.THREAD} />
      <DivisionIntoSectionForumActivityChart chart={props.chart} sectionType={QuestionType.RESPONSE} />
    </div>
  );
}
