'use strict';

/**
 * imaging service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::imaging.imaging');
