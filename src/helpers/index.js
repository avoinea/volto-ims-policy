import { isInternalURL } from "@plone/volto/helpers";

export const setImageSize = (image, scales, size) => {
  const imageScaled = isInternalURL(image)
    ? // Backwards compat in the case that the block is storing the full server URL
      (() => {
        if (scales) {
          if (size === "h") return scales.huge;
          if (size === "l") return scales.large;
          if (size === "m") return scales.preview;
          if (size === "s") return scales.thumb;
          return scales.large;
        }
      })()
    : { download: image, width: "100%", height: "100%" };

  return imageScaled;
};
