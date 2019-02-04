import { css } from 'emotion';
import { COLORS } from '../../contants/colors.constant';

export const weekPickerContainerClass = css({
  marginTop: 10,
  textAlign: 'right',
  '.ant-input': {
    backgroundColor: COLORS.lightGray,
    border: 0,
    borderRadius: 0,
    borderBottom: `1px solid ${COLORS.darkGray}`,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 300,
    fontSize: '1.5em',
    textAlign: 'center'
  },
});








