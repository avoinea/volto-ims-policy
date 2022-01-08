import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Button } from 'semantic-ui-react';

const messages = defineMessages({
  small: {
    id: 'Small',
    defaultMessage: 'Small size',
  },
  medium: {
    id: 'Medium',
    defaultMessage: 'Medium size',
  },
  large: {
    id: 'Large',
    defaultMessage: 'Large size',
  },
  full: {
    id: 'Full',
    defaultMessage: 'Full size',
  },
});

const ImageSizeWidget = ({ onChangeBlock, data, block, disabled }) => {
  /**
   * Image size handler
   * @method onImageSize
   * @param {string} size Size option
   * @returns {undefined}
   */
  function onImageSize(size) {
    onChangeBlock(block, {
      ...data,
      size,
    });
  }

  const intl = useIntl();
  return (
    <div className="field-image_size">
      <Button.Group>
        <Button
          icon
          basic
          aria-label={intl.formatMessage(messages.small)}
          onClick={() => onImageSize('s')}
          active={data.size === 's'}
          disabled={disabled}
        >
          <div className="image-sizes-text">S</div>
        </Button>
      </Button.Group>
      <Button.Group>
        <Button
          icon
          basic
          aria-label={intl.formatMessage(messages.medium)}
          onClick={() => onImageSize('m')}
          active={data.size === 'm'}
          disabled={disabled}
        >
          <div className="image-sizes-text">M</div>
        </Button>
      </Button.Group>
      <Button.Group>
        <Button
          icon
          basic
          aria-label={intl.formatMessage(messages.large)}
          onClick={() => onImageSize('l')}
          active={data.size === 'l' || data.size === undefined}
          disabled={disabled}
        >
          <div className="image-sizes-text">L</div>
        </Button>
      </Button.Group>
      <Button.Group>
        <Button
          icon
          basic
          aria-label={intl.formatMessage(messages.full)}
          onClick={() => onImageSize('f')}
          active={data.size === 'f'}
          disabled={disabled}
        >
          <div className="image-sizes-text">F</div>
        </Button>
      </Button.Group>
    </div>
  );
};

export default ImageSizeWidget;
