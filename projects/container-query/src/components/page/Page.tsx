import { type FC } from 'react';
import { Allotment } from 'allotment';
import { ContentA } from '../content-a';
import classes from './Page.module.css';

export const Page: FC = () => {
  return (
    <div className={classes.page}>
      <Allotment>
        <Allotment.Pane minSize={200}>
          <div className={classes.pane}>
            <ContentA />
          </div>
        </Allotment.Pane>
        <Allotment.Pane minSize={200}>
          <div className={classes.pane}>
            <ContentA />
          </div>
        </Allotment.Pane>
        <Allotment.Pane minSize={200}>
          <div className={classes.pane}>
            <ContentA />
          </div>
        </Allotment.Pane>
      </Allotment>
    </div>
  );
};
