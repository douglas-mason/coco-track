import * as React from 'react';
import { Row, Col, Button } from 'antd';
import { LogEntryForm } from './log-entry-form/log-entry-form.container';
import { LogList } from './log-list/log-list.container';

export class LogEntryDashboard extends React.Component {
  render() {
    return (
      <Row>
        <Col span={8}>
          <LogEntryForm />
        </Col>
        <Col span={16} className="list">
          <LogList />
        </Col>
      </Row>
    );
  }
}
