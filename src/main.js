import * as singleSpa from 'single-spa'
const testAppUrl = window.ssConfig.adminPortal || 'oh noes'
console.log('testAppUrl', testAppUrl)

singleSpa.declareChildApplication('admin-portal', () => System.import(testAppUrl), () => true)

if (window.serverConfig.singleSpa) {
  console.log('bootstrap')
  singleSpa.start();
}
