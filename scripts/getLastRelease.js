module.exports = function(pluginConfig, {pkg, npm, plugins, options}, cb) {
  cb(null, {
    version: '1.0.3',
    // gitHead: data.versions[version].gitHead,
    get tag () {
      npmlog.warn('deprecated', 'tag will be removed with the next major release')
      return npm.tag
    }
  });
}