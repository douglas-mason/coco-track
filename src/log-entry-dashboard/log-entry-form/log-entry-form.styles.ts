import { css } from 'emotion';
import { COLORS } from '../../_shared/contants/colors.constant';

export const timeFormClass = css({
  maxWidth: 650,
  'h1': {
    fontFamily: 'Slabo 27px serif',
    fontSize: '2.75em',
    marginTop: 40,
    textAlign: 'left'
  },
  '.ant-form': {
    marginTop: 48,
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.5em',
  },
  '.ant-form-item': {
    backgroundColor: COLORS.lightGray,
    marginBottom: 50,
    marginLeft: 6,
    marginRight: 6,
  },
  '.ant-input': {
    backgroundColor: COLORS.lightGray,
    border: 0,
    borderRadius: 0,
    borderBottom: `1px solid ${COLORS.darkBlue}`,
    color: COLORS.darkBlue,
    cursor: 'pointer',
    paddingBottom: 20,
    width: '100%',
    '::-webkit-input-placeholder': {
      /* Chrome/Opera/Safari */
      fontSize: '1.25em',
      fontWeight: 300,
      color: COLORS.darkGray
    },
    '::-moz-placeholder': { /* Firefox 19+ */
      fontSize: '1.25em',
      fontWeight: 300,
      color: COLORS.darkGray,
      opacity: 1
    },
    ':-ms-input-placeholder': { /* IE 10+ */
      fontSize: '1.25em',
      fontWeight: 300,
      color: COLORS.darkGray
    },
    ':-moz-placeholder': {
      /* Firefox 18- */
      fontSize: '1.25em',
      fontWeight: 300,
      color: COLORS.darkGray
    },
  },
  '.ant-input:hover': {
    borderBottom: `1px solid ${COLORS.blue}`,
  },
  '.ant-input:focus': {
    boxShadow: 'none',
  },
  '.ant-input-number': {
    barckgroundColor: COLORS.lightGray,
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.25em',
    border: 0,
    borderRadius: 0,
    borderBottom: `1px solid ${COLORS.darkGray}`,
    paddingBottom: 40,
    width: '100%'
  },
  '.ant-input-number-input': {
    barckgroundColor: COLORS.lightGray,
    color: COLORS.darkGray,
    cursor: 'pointer'
  },
  '.ant-input-number:hover': {
    borderBottom: `1px solid ${COLORS.blue}`,
    borderRight: `1px solid ${COLORS.blue}`,
  },
  '.ant-input-number-focused': {
    boxShadow: 'none',
  },
  '.ant-input-number-handler-wrap': {
    borderLeft: `1px solid ${COLORS.blue}`,
  },
  '.ant-input-number-handler-up': {
    borderTop: `1px solid ${COLORS.blue}`,
  },
  '.ant-input-number-handler-down': {
    borderTop: `1px solid ${COLORS.blue}`,
  },
  '.ant-calendar-picker': {
    width: '100%',
  },
  '.ant-select': {
    backgroundColor: COLORS.lightGray,
    color: COLORS.darkGray,
    cursor: 'pointer',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.25em',
  },
  '.ant-select-selection': {
    backgroundColor: COLORS.lightGray,
    color: COLORS.darkGray,
    width: '100%',
    border: 0,
    borderRadius: 0,
    borderBottom: `1px solid ${COLORS.darkBlue}`,
    paddingBottom: 40
  },
  '.ant-select-selection__placeholder': {
    color: COLORS.darkGray,
    fontWeight: 300
  },
  '.ant-select-selection:hover': {
    borderBottom: `1px solid ${COLORS.blue}`,
  },
  '.ant-select-selection:focus': {
    boxShadow: 'none',
  },
});

export const pointsButtonContainerClass = css({
  textAlign: 'left'
})

export const buttonContainerClass = css({
  marginTop: 12,
  textAlign: 'right',
});
