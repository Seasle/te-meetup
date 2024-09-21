import { type FC } from 'react';
import classes from './ContentA.module.css';
import clsx from 'clsx';

export const ContentA: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.header}>
          <p className={classes.title}>Основные показатели</p>
        </div>
        <div className={clsx(classes.panel, classes.total)}>
          <p className={classes.text}>Всего задач</p>
          <span className={classes.indicator}>36</span>
          <div className={classes.chart}></div>
        </div>
        <div className={clsx(classes.panel, classes.new)}>
          <p className={classes.text}>Новых задач</p>
          <span className={classes.indicator}>20</span>
        </div>
        <div className={clsx(classes.panel, classes.inProgress)}>
          <p className={classes.text}>Задач в работе</p>
          <span className={classes.indicator}>8</span>
        </div>
        <div className={clsx(classes.panel, classes.review)}>
          <p className={classes.text}>Задач на ревью</p>
          <span className={classes.indicator}>5</span>
        </div>
        <div className={clsx(classes.panel, classes.done)}>
          <p className={classes.text}>Закрыто задач</p>
          <span className={classes.indicator}>3</span>
        </div>
      </div>
    </div>
  );
};
