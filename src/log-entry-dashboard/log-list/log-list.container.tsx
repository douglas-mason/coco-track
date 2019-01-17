import * as React from 'react';
import { LogList as LogListComponent } from './log-list.component';
import { getLogEntries } from '../../_shared/services/log-entry.service';

export const LogList = () => {
  const mapPropsToComponent = {
    loadLogEntries: (userId: string, startDate: Date, endDate: Date) => {
      const logs = getLogEntries('1', new Date(), new Date());
      return logs;
    },
  };
  return <LogListComponent {...mapPropsToComponent} />;
};
