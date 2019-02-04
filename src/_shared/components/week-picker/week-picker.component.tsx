import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import { weekPickerContainerClass } from './week-picker.styles';

const { WeekPicker: WeekPickerComponent } = DatePicker;

const noop = () => { };

interface WeekPickerProps {
  selectedWeek: moment.Moment;
  onWeekChange: (date: moment.Moment) => void;
}

export const WeekPicker = (props: WeekPickerProps) => {
  const { selectedWeek, onWeekChange } = props;
  return (
    <div className={weekPickerContainerClass}>
      <WeekPickerComponent
        onChange={onWeekChange}
        format={'[Week of] MM-DD-YYYY'}
        defaultValue={selectedWeek}
      />
    </div>
  );
};
