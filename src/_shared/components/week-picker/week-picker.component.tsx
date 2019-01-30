import React from 'react';
import { Button, Icon, DatePicker } from 'antd';
import moment from 'moment';

const { WeekPicker: WeekPickerComponent } = DatePicker;

const noop = () => {};

interface WeekPickerProps {
  selectedWeek: moment.Moment;
  onWeekChange: (date: moment.Moment) => void;
}

export const WeekPicker = (props: WeekPickerProps) => {
  const { selectedWeek, onWeekChange } = props;
  return (
    <div>
      <WeekPickerComponent
        onChange={onWeekChange}
        format={'[Week of] MM-DD-YYYY'}
        defaultValue={selectedWeek}
      />
    </div>
  );
};
