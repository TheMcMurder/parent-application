import * as singleSpa from 'single-spa'
const testAppUrl = window.ssConfig.adminPortal || 'oh noes'
console.log('testAppUrl', testAppUrl)

singleSpa.declareChildApplication('admin-portal', () => System.import(testAppUrl), () => true)

if (window.serverConfig.singleSpa) {
  console.log('bootstrap')
  singleSpa.start();
}
// System.registerDynamic("primary-navbar!sofe", ['react'], true, function(require, exports, module) {
//   var React = require('react');
//   exports.NavContent = function(props) {
//     return React.createElement(
//       "div",
//       null,
//       props.children
//     );
//   }
// });
// var cpMainContent = document.createElement('div');
// cpMainContent.setAttribute('id', 'cp-main-content')
// document.body.appendChild(cpMainContent);
// window.loggedInUser ={effective_permissions: {}}
// window.tenant = {}


// singleSpa.declareChildApplication('canopy-urls', () => SystemJS.import('https://cdn.canopytax.com/sofe/canopy-urls/v5.3.2-24-g5a6d189/canopy-urls.js'), () => true);
