import * as React from 'react';
import { Row, Col, Button } from 'antd';
import { LogEntryForm } from './log-entry-form/log-entry-form.container';
import { LogList } from './log-list/log-list.container';
import { panelClass } from './log-entry-dashboard.styles';

export class LogEntryDashboard extends React.Component {
  render() {
    return (
      <Row>
        <Col span={8}>
          <LogEntryForm />
        </Col>
        <Col span={16} className={panelClass}>
          <LogList />
        </Col>
      </Row>
    );
  }
}
