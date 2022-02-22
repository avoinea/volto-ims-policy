import React from 'react';
import { TextWidget } from '@plone/volto/components';

export const DescriptionWidget = (props) => (
  // Read-only
  <TextWidget {...props} isDisabled={true} />
);
