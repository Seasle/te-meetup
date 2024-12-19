import { type CSSProperties, type FC } from 'react';
import clsx from 'clsx';
import classes from './Content.module.css';

export interface IContentProps {
  title: string;
  newCount: number;
  inProgressCount: number;
  onReviewCount: number;
  doneCount: number;
}

export const Content: FC<IContentProps> = ({
  title,
  newCount,
  inProgressCount,
  onReviewCount,
  doneCount,
}) => {
  const total = newCount + inProgressCount + onReviewCount + doneCount;

  const cssVariables = {
    '--count-new': newCount,
    '--count-in-progress': inProgressCount,
    '--count-review': onReviewCount,
    '--count-done': doneCount,
  } as CSSProperties;

  return (
    <div className={classes.wrapper} style={cssVariables}>
      <div className={classes.content}>
        <div className={classes.header}>
          <p className={classes.title}>{title}</p>
        </div>
        <div className={clsx(classes.panel, classes.total)}>
          <p className={classes.text}>Всего задач</p>
          <span className={classes.indicator}>{total}</span>
          <div className={classes.chart}></div>
        </div>
        <div className={clsx(classes.panel, classes.new)}>
          <p className={classes.text}>Новых задач</p>
          <span className={classes.indicator}>{newCount}</span>
        </div>
        <div className={clsx(classes.panel, classes.inProgress)}>
          <p className={classes.text}>Задач в работе</p>
          <span className={classes.indicator}>{inProgressCount}</span>
        </div>
        <div className={clsx(classes.panel, classes.review)}>
          <p className={classes.text}>Задач на ревью</p>
          <span className={classes.indicator}>{onReviewCount}</span>
        </div>
        <div className={clsx(classes.panel, classes.done)}>
          <p className={classes.text}>Закрыто задач</p>
          <span className={classes.indicator}>{doneCount}</span>
        </div>
      </div>
    </div>
  );
};
