import React from 'react';
import { Button, Icon } from 'antd';
import moment from 'moment';

const noop = () => {};

interface WeekPickerProps {
  selectedWeek: moment.Moment;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export const WeekPicker = (props: WeekPickerProps) => {
  const { selectedWeek, onPrevClick = noop, onNextClick = noop } = props;
  return (
    <div>
      <Button onClick={onPrevClick}>
        <Icon type="caret-left" />
      </Button>
      {selectedWeek.format('[Week of] MM-DD-YYYY')}
      <Button onClick={onNextClick}>
        <Icon type="caret-right" />
      </Button>
    </div>
  );
};
