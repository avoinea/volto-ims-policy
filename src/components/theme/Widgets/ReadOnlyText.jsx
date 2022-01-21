import React from 'react';
import { TextWidget } from '@plone/volto/components';

export const ReadOnlyText = (props) => (
  <TextWidget {...props} isDisabled={true} />
);
