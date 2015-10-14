/* jshint strict:false */

module.exports = {
  options: {
    appName: 'WAMU Luminate Online Data Viewer', 
    version: '0.12.2', 
    platforms: [
      'win', 
      'osx'
    ], 
    buildDir: './download', 
    buildType: function() {
      return '';
    }
    /* TODO macIcns: './dist/images/osx-icon.icns' */
  }, 
  
  src: [
    './package.json', 
    './dist/**/*.*'
  ]
}