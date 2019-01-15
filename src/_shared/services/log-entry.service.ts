import { LogEntry } from '../interfaces/log-entry.interface';
import { Categories } from '../contants/categories.enum';

export const getLogEntries = (
  userId: string,
  startDate: Date,
  endDate: Date
) => {
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
  return [logEntryData, logEntryData, logEntryData, logEntryData];
};

export const createLogEntry = (logEntry: LogEntry) => {
  console.log(logEntry);
};

export const updateLogEntry = (logEntry: LogEntry) => {
  console.log(logEntry);
};

export const deleteLogEntry = (logEntryId: string) => {
  console.log(logEntryId);
};
