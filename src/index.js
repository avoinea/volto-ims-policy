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

  return config;
};

export default applyConfig;
