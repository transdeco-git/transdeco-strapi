const { sanitizeEntity } = require('strapi-utils');

const Shopify = require('shopify-api-node');

const shopify = new Shopify({
  shopName: 'transdeco',
  apiKey: 'c9d6b8cd0885785cb67bebedcefdd099',
  password: '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'
});

module.exports = {
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services.product.findOne({ id });
    entity.shopify = await shopify.product.get(entity.shopifyID);
    return sanitizeEntity(entity, { model: strapi.models.product });
  },
};
