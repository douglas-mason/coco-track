import * as React from 'react';
import { LogEntry } from '../../../../_shared/interfaces/log-entry.interface';
import { infoContainerClass } from './log-day-item.styles';
import { Button } from 'antd';

interface LogDayItemProps {
  logEntry: LogEntry;
}

export class LogDayItem extends React.Component<LogDayItemProps> {
  render() {
    const { logEntry } = this.props;
    return (
      <li className={infoContainerClass}>
        <div>{logEntry.value}</div>
        <div>{logEntry.title}</div>
        <div>{logEntry.categoryId}</div>
        <div>{logEntry.subCategoryId}</div>
        <div>{logEntry.date.toDateString()}</div>
        <Button>Edit</Button>
      </li>
    );
  }
}
