// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE/ExternalEndpoints/xplatTestTMPEndPoint?api-version=2015-04-28-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\\/externalEndpoints\\/xplatTestTMPEndPoint\",\"name\":\"xplatTestTMPEndPoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":null,\"target\":\"xplattmpendptdns9583.azure.com\",\"weight\":100,\"priority\":322,\"endpointLocation\":\"Southeast Asia\"}}", { 'cache-control': 'private',
  'content-length': '485',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '0f4822fa-6f05-4a26-b114-a77e8f7ded38',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14800',
  'x-ms-correlation-request-id': 'be3f465b-fbcc-4b40-ba3b-a23ae52d009c',
  'x-ms-routing-request-id': 'CENTRALINDIA:20151113T093902Z:be3f465b-fbcc-4b40-ba3b-a23ae52d009c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 13 Nov 2015 09:39:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE/ExternalEndpoints/xplatTestTMPEndPoint?api-version=2015-04-28-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\\/externalEndpoints\\/xplatTestTMPEndPoint\",\"name\":\"xplatTestTMPEndPoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":null,\"target\":\"xplattmpendptdns9583.azure.com\",\"weight\":100,\"priority\":322,\"endpointLocation\":\"Southeast Asia\"}}", { 'cache-control': 'private',
  'content-length': '485',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '0f4822fa-6f05-4a26-b114-a77e8f7ded38',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14800',
  'x-ms-correlation-request-id': 'be3f465b-fbcc-4b40-ba3b-a23ae52d009c',
  'x-ms-routing-request-id': 'CENTRALINDIA:20151113T093902Z:be3f465b-fbcc-4b40-ba3b-a23ae52d009c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 13 Nov 2015 09:39:03 GMT',
  connection: 'close' });
 return result; }]];