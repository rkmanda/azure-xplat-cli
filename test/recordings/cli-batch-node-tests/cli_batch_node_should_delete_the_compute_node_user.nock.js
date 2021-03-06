// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2915bbd6-1252-405f-8173-6c00428146d9',
    name: 'Batch-MatthChr',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .delete('/pools/xplatTestLinuxPool/nodes/tvm-1695681911_1-20160803t220254z/users/xplatUser?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '34943bf8-5a17-4e8d-a802-b7c6694f81a0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '14742ffb-e76b-4fdb-ba73-0c52a81fa1c5',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .delete('/pools/xplatTestLinuxPool/nodes/tvm-1695681911_1-20160803t220254z/users/xplatUser?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '34943bf8-5a17-4e8d-a802-b7c6694f81a0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '14742ffb-e76b-4fdb-ba73-0c52a81fa1c5',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:21 GMT',
  connection: 'close' });
 return result; }]];