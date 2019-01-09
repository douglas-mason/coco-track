import * as React from 'react';
import { LogEntry } from '../../../../_shared/interfaces/log-entry.interface';
import { Categories } from '../../../../_shared/contants/categories.enum';

interface LogDayItemProps {
  logEntry: LogEntry;
}

const logEntryData: LogEntry = {
  title: 'COCO-123 add log list',
  value: 3,
  categoryId: Categories.TimeOnPoints,
  date: new Date(),
  id: '1',
  notes: 'got some mock data displaying',
  arePointsCompleted: false,
  createdAt: new Date(),
  updatedAt: new Date(),
  updatedBy: '1',
};

export class LogDayItem extends React.Component<LogDayItemProps> {
  render() {
    const { logEntry = logEntryData } = this.props;
    return (
      <li>
        <div>{logEntry.value}</div>
        <div>{logEntry.title}</div>
        <div>{logEntry.categoryId}</div>
        <div>{logEntry.subCategoryId}</div>
        <div>{logEntry.date}</div>
      </li>
    );
  }
}
