import React from 'react';
import { TextWidget, SelectWidget } from '@plone/volto/components';

export const ReadOnlyId = (props) => {
  // Read-only
  if (props?.behavior === 'plone.shortname') {
    return <TextWidget {...props} isDisabled={true} />;
  }
  // Slate metadata mention
  if (props?.choices?.length) {
    return <SelectWidget {...props} />;
  }
  // Default
  return <TextWidget {...props} />;
};
