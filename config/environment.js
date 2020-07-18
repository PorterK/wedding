'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'wedding',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    firebase: {
      apiKey: process.env.FIREBASE_API_KEY || "AIzaSyCTV8HedN_X19zHM2O1eB5X2e0y7vN4Xyw",
      authDomain: process.env.FIREBASE_AUTH_DOMAIN || "wedding-8c31a.firebaseapp.com",
      databaseURL: process.env.FIREBASE_DATABASE_URL || "https://wedding-8c31a.firebaseio.com",
      projectId: process.env.FIREBASE_PROJECT_ID || "wedding-8c31a",
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "wedding-8c31a.appspot.com",
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "462651463983",
      appId: process.env.FIREBASE_APP_ID || "1:462651463983:web:56717381f84a58e8b6a9da",
      measurementId: process.env.FIREBASE_MEASUREMENT_ID || "G-EK5RRTCWS6"
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
