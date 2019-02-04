import { css } from 'emotion';
import { COLORS } from '../../_shared/contants/colors.constant'

export const listContainerClass = css({
  marginTop: 50,
});

export const panelClass = css({
  fontSize: '1.5em',
  fontFamily: 'Montserrat, sans-serif',
  marginTop: 30,
  paddingBottom: 20,
  ':first-of-type': {
    marginTop: 60
  }
})

export const weekDayContainerClass = css({
  marginTop: 30,
  textAlign: 'left',
  '> .ant-collapse > .ant-collapse-item': {
    backgroundColor: COLORS.lightGray,
    border: 0,
    borderBottom: `1px solid ${COLORS.darkBlue}`
  }
});
