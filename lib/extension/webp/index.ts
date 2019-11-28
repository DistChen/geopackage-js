import GeoPackage from "../../geoPackage";

/**
 * WebPExtension module.
 * @module WebPExtension
 * @see module:extension/BaseExtension
 */

var BaseExtension = require('../baseExtension')
  , Extension = require('../extension');

export default class WebPExtension extends BaseExtension {
  constructor(geoPackage: GeoPackage, tableName: String) {
    super(geoPackage);
    this.tableName = tableName;
  }
  getOrCreateExtension(): any {
    return this.getOrCreate(WebPExtension.EXTENSION_NAME, this.tableName, 'tile_data', WebPExtension.EXTENSION_WEBP_DEFINITION, Extension.READ_WRITE);
  }
}

WebPExtension.EXTENSION_NAME = 'gpkg_webp';
WebPExtension.EXTENSION_WEBP_AUTHOR = 'gpkg';
WebPExtension.EXTENSION_WEBP_NAME_NO_AUTHOR = 'webp';
WebPExtension.EXTENSION_WEBP_DEFINITION = 'http://www.geopackage.org/spec/#extension_webp';