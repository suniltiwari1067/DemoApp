import * as React from 'react';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';

/**
 * @description Custom Image
 */
const FastImages = props => (
  <FastImage
    style={props.style}
    source={props.imageSource}
    resizeMode={
      props.resizeMode === 'cover'
        ? FastImage.resizeMode.cover
        : FastImage.resizeMode.contain
    }
  />
);

FastImages.propTypes = {
  style: PropTypes.object,
  /**
   * @param {string | number} imageSource - To set image path
   */
  imageSource: PropTypes.object,
  resizeMode: PropTypes.oneOf(['contain', 'cover']),
};

FastImages.defaultProps = {
  resizeMode: 'cover',
};

export default FastImages;
