import * as React from 'react';
import { css } from 'emotion';
import moment from 'moment';
import { AuthenticationContext } from '../../_shared/contexts/authentication/authentication.context';
import { LogDay } from './log-day/log-day.container';
import { LogEntry } from '../../_shared/interfaces/log-entry.interface';
import { listContainerClass } from './log-list.styles';
import { panelClass } from '../log-entry-dashboard.styles';
import { WeekPicker } from '../../_shared/components/week-picker/week-picker.component';
import { Collapse } from 'antd';

const { Panel } = Collapse;
const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

interface LogListProps {
  loadLogEntries: (
    userId: string,
    startDate: Date,
    endDate: Date
  ) => LogEntry[];
}
interface LogListState {
  logs?: LogEntry[];
  selectedWeek: moment.Moment;
}

class LogListComponent extends React.Component<LogListProps, LogListState> {
  state = {
    logs: [],
    selectedWeek: moment().week(moment().week()),
  };
  static contextType = AuthenticationContext;
  context!: React.ContextType<typeof AuthenticationContext>;
  componentDidMount() {
    const { loadLogEntries } = this.props;
    const logs = loadLogEntries('1', new Date(), new Date());
    this.setState({ logs });
  }

  loadWeek = (date: moment.Moment) => {
    const { selectedWeek } = this.state;
    this.setState({
      selectedWeek: date,
    });
  };

  renderWeekDays = () => {
    const { logs } = this.state;
    const dayPanels = WEEK_DAYS.map(day => (
      <Panel key={day} header={day}>
        <LogDay logEntries={logs} />
      </Panel>
    ));
    return dayPanels;
  };

  render() {
    const { currentUser } = this.context;
    const { selectedWeek } = this.state;

    return (
      <div className={css([panelClass, listContainerClass])}>
        <WeekPicker selectedWeek={selectedWeek} onWeekChange={this.loadWeek} />
        <div>Calendar Controls</div>
        <Collapse bordered={false}>{this.renderWeekDays()}</Collapse>
      </div>
    );
  }
}

export const LogList = LogListComponent;
