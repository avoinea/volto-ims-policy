import {
  FrequencyOfDissemination,
  DataProvenance,
  InstitutionalMandate,
} from '@eeacms/volto-ims-policy/components';

import {
  Logout,
  RequestPasswordReset,
  PasswordReset,
} from '@plone/volto/components';

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

  // 139558 any path that isn't static ims or controlpanel is treated as external
  if (config.settings.host !== 'localhost') {
    const notInIMS = /^(?!.*(\/ims|\/static|\/controlpanel|\/cypress)).*$/;
    config.settings.externalRoutes = [
      {
        match: {
          path: notInIMS,
          exact: false,
          strict: false,
        },
      },
    ];
  }

  // 139558 allow certain volto routes to load from any url not just root of site
  config.addonRoutes = [
    ...(config.addonRoutes || []),
    {
      path: '/**/logout',
      component: Logout,
    },
    {
      path: '/**/password-reset',
      component: RequestPasswordReset,
      exact: true,
    },
    {
      path: '/**/password-reset/:token',
      component: PasswordReset,
      exact: true,
    },
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

  // Date format for EU
  config.settings.dateLocale = 'en-gb';

  return config;
};

export default applyConfig;
