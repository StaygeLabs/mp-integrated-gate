import { memoize } from 'lodash';
import { isNotNil } from 'ramda';

export const joinClass = memoize((...classes: (string | null | undefined)[]) =>
  classes.filter(isNotNil).join(' '),
);
