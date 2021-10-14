import {
  FrequencyOfDissemination,
  DataProvenance,
  InstitutionalMandate,
} from '@eeacms/volto-ims-policy/components';

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

  // Frequency of dissemination
  if (config.widgets.views?.id) {
    config.widgets.views.id.frequency_of_dissemination = FrequencyOfDissemination;
  }

  // Data provenance
  config.widgets.id.data_provenance = DataProvenance;

  // Institutional mandate
  config.widgets.id.institutional_mandate = InstitutionalMandate;

  // Toast
  config.settings.toastConfig = {
    position: 'top-center',
    autoClose: 6000,
  };

  return config;
};

export default applyConfig;
