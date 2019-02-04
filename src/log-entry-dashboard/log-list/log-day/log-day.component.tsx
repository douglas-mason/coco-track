import * as React from 'react';
import { LogEntry } from '../../../_shared/interfaces/log-entry.interface';
import { LogDayItem } from './log-day-item/log-day-item.container';

interface LogDayProps {
  logEntries: LogEntry[];
}

export class LogDay extends React.Component<LogDayProps> {
  renderLogDayItems = () => {
    const { logEntries } = this.props;
    return logEntries.map(logEntry => <LogDayItem logEntry={logEntry} />);
  };

  render() {
    return (
      <section>
        {this.renderLogDayItems()}
      </section>
    );
  }
}
