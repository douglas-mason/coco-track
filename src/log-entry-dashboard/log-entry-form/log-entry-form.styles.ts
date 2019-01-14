import { css } from 'emotion';
import { COLORS } from '../../_shared/contants/colors.constant';

export const timeForm = css({
  maxWidth: 650,

  '.ant-form': {
    marginTop: 48,
  },
  '.ant-form-item': {
    marginBottom: 36,
    marginLeft: 6,
    marginRight: 6,
  },
  '.ant-input': {
    border: 0,
    borderRadius: 0,
    borderBottom: `1px solid ${COLORS.gray}`,
    width: '100%',
  },
  '.ant-input:hover': {
    borderBottom: `1px solid ${COLORS.blue}`,
  },
  '.ant-input:focus': {
    boxShadow: 'none',
  },
  '.ant-input-number': {
    width: '100%',
    border: 0,
    borderRadius: 0,
    borderBottom: `1px solid ${COLORS.gray}`,
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
  '.ant-select-selection': {
    width: '100%',
    border: 0,
    borderRadius: 0,
    borderBottom: `1px solid ${COLORS.gray}`,
  },
  '.ant-select-selection:hover': {
    borderBottom: `1px solid ${COLORS.blue}`,
  },
  '.ant-select-selection:focus': {
    boxShadow: 'none',
  },
});

export const buttonContainer = css({
  marginTop: 12,
  textAlign: 'right',
});
