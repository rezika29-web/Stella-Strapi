'use strict';

/**
 * peminjaman service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::peminjaman.peminjaman');
