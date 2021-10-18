const applyConfig = (config) => {
  // Restrict block-style to Layout only
  config.settings.layoutOnlyBlockStyles = true;

  // Restrict slate metadata mentions to Layout only
  config.settings.layoutOnlySlateMetadataMentions = true;

  // Disable tags on View
  config.settings.showTags = false;

  // Enable Title block
  config.blocks.blocksConfig.title.restricted = false;
  config.blocks.requiredBlocks = [];

  // 134485 pass faceted related popup to plone for resolving instead of volto
  config.settings.virtualHostedPaths = [
    ...(config.settings.virtualHostedPaths || []),
    '**/@@eeareferencebrowser-popup-selecteditem.html',
  ];

  config.settings.toastConfig = {
    position: 'top-center',
    autoClose: 6000,
  };

  // Date format for EU
  config.settings.dateFormat = 'D MMM YYYY, hh:mm a';

  return config;
};

export default applyConfig;
