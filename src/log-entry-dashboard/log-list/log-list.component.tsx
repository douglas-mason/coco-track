import * as React from 'react';
import moment from 'moment';
import { AuthenticationContext } from '../../_shared/contexts/authentication/authentication.context';
import { LogDay } from './log-day/log-day.container';
import { LogEntry } from '../../_shared/interfaces/log-entry.interface';
import { listContainerClass, weekDayContainerClass, panelClass } from './log-list.styles';
import { WeekPicker } from '../../_shared/components/week-picker/week-picker.component';
import { Collapse, Row, Col } from 'antd';

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
    this.setState({
      selectedWeek: date,
    });
  };

  renderWeekDays = () => {
    const { logs } = this.state;
    const dayPanels = WEEK_DAYS.map(day => (
      <Panel key={day} header={day} className={panelClass}>
        <LogDay logEntries={logs} />
      </Panel>
    ));
    return dayPanels;
  };

  render() {
    const { currentUser } = this.context;
    const { selectedWeek } = this.state;

    return (
      <section className={listContainerClass}>
        <Row>
          <Col>
            <WeekPicker selectedWeek={selectedWeek} onWeekChange={this.loadWeek} />
          </Col>
        </Row>
        <Row>
          <Col className={weekDayContainerClass}>
            <Collapse bordered={false}>{this.renderWeekDays()}</Collapse>
          </Col>
        </Row>
      </section>
    );
  }
}

export const LogList = LogListComponent;
