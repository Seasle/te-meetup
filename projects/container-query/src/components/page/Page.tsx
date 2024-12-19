import { type FC } from 'react';
import { Allotment } from 'allotment';
import { Content } from '../content';
import classes from './Page.module.css';

export const Page: FC = () => (
  <div className={classes.page}>
    <Allotment>
      <Allotment.Pane minSize={256}>
        <div className={classes.pane}>
          <Content
            title="Проект А"
            newCount={20}
            inProgressCount={8}
            onReviewCount={5}
            doneCount={3}
          />
        </div>
      </Allotment.Pane>
      <Allotment.Pane minSize={256}>
        <div className={classes.pane}>
          <Content
            title="Проект Б"
            newCount={10}
            inProgressCount={18}
            onReviewCount={3}
            doneCount={12}
          />
        </div>
      </Allotment.Pane>
      <Allotment.Pane minSize={256}>
        <div className={classes.pane}>
          <Content
            title="Проект В"
            newCount={0}
            inProgressCount={9}
            onReviewCount={1}
            doneCount={4}
          />
        </div>
      </Allotment.Pane>
    </Allotment>
  </div>
);
