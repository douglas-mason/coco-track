import * as React from 'react';
import { Row, Col } from 'antd';
import { LogEntryForm } from './log-entry-form/log-entry-form.container';
import { LogList } from './log-list/log-list.container';
import { mainContainerClass } from './log-entry-dashboard.styles';

export class LogEntryDashboard extends React.Component {
  render() {
    return (
      <section className={mainContainerClass}>
        <Row>
          <Col span={8} offset={2}>
            <LogEntryForm />
          </Col>
          <Col span={10} offset={2}>
            <LogList />
          </Col>
        </Row>
      </section>
    );
  }
}
