import * as React from 'react';
import { LogEntry } from '../../../../_shared/interfaces/log-entry.interface';
import { infoContainerClass } from './log-day-item.styles';
import { Button, Row, Col } from 'antd';

interface LogDayItemProps {
  logEntry: LogEntry;
}

export class LogDayItem extends React.Component<LogDayItemProps> {
  render() {
    const { logEntry } = this.props;
    return (
      <Row className={infoContainerClass}>
        <Col span={1}>
          {logEntry.value}
        </Col>
        <Col span={8}>
          {logEntry.title}
        </Col>
        <Col span={1}>
          {logEntry.categoryId}
        </Col>
        <Col span={4}>
          {logEntry.subCategoryId}
        </Col>
        <Col span={7}>
          {logEntry.date.toDateString()}
        </Col>
        <Col span={3}>
          <Button>Edit</Button>
        </Col>
      </Row>
    );
  }
}
