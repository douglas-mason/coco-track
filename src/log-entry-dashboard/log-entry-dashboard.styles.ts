import { css } from 'emotion';
import { COLORS } from '../_shared/contants/colors.constant';

export const panelClass = css({
  border: `1px solid ${COLORS.darkBlue}`,
});

export const mainContainerClass = css({
  margin: '0 auto',
  width: '95%',
  height: '100vh'
});
