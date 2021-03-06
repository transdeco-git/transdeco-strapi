const { sanitizeEntity } = require('strapi-utils');

const Shopify = require('shopify-api-node');

const shopify = new Shopify({
  shopName: process.env.SHOPIFY_SHOPNAME,
  apiKey: process.env.SHOPIFY_APIKEY,
  password: process.env.SHOPIFY_PASSWORD
});

module.exports = {
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services.product.findOne({ id });
    entity.shopify = await shopify.product.get(entity.shopifyID);
    return sanitizeEntity(entity, { model: strapi.models.product });
  },
};

