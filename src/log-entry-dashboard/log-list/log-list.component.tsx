import * as React from 'react';
import { AuthenticationContext } from '../../_shared/contexts/authentication/authentication.context';
import { LogDay } from './log-day/log-day.container';
import { LogEntry } from '../../_shared/interfaces/log-entry.interface';

interface LogListProps {
  loadLogEntries: (
    userId: string,
    startDate: Date,
    endDate: Date
  ) => LogEntry[];
}
interface LogListState {
  logs?: LogEntry[];
}

class LogListComponent extends React.Component<LogListProps, LogListState> {
  state = {
    logs: [],
  };
  static contextType = AuthenticationContext;
  context!: React.ContextType<typeof AuthenticationContext>;
  componentDidMount() {
    const { loadLogEntries } = this.props;
    const logs = loadLogEntries('1', new Date(), new Date());
    this.setState({ logs });
  }

  render() {
    const { currentUser } = this.context;
    const { logs = [] } = this.state;

    return (
      <div>
        <div>Calendar Controls</div>
        <div>
          <LogDay logEntries={logs} />
        </div>
      </div>
    );
  }
}

export const LogList = LogListComponent;
