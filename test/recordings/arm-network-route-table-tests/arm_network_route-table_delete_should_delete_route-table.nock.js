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
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"ArmRouteTbl\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl\",\r\n  \"etag\": \"W/\\\"8a7940f9-31c2-4997-9192-13ad1dcd3c3e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '323',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8a7940f9-31c2-4997-9192-13ad1dcd3c3e"',
  'x-ms-request-id': '75a1de50-d0ef-4cc0-bd6b-84f0a9f88079',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'e49c60ec-d737-4ca4-9149-a3cdf1ffdf60',
  'x-ms-routing-request-id': 'WESTUS:20150723T230727Z:e49c60ec-d737-4ca4-9149-a3cdf1ffdf60',
  date: 'Thu, 23 Jul 2015 23:07:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"ArmRouteTbl\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl\",\r\n  \"etag\": \"W/\\\"8a7940f9-31c2-4997-9192-13ad1dcd3c3e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '323',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8a7940f9-31c2-4997-9192-13ad1dcd3c3e"',
  'x-ms-request-id': '75a1de50-d0ef-4cc0-bd6b-84f0a9f88079',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'e49c60ec-d737-4ca4-9149-a3cdf1ffdf60',
  'x-ms-routing-request-id': 'WESTUS:20150723T230727Z:e49c60ec-d737-4ca4-9149-a3cdf1ffdf60',
  date: 'Thu, 23 Jul 2015 23:07:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/2b120023-51e9-42a7-9ab6-c7f3ee9e2b25?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '2b120023-51e9-42a7-9ab6-c7f3ee9e2b25',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/2b120023-51e9-42a7-9ab6-c7f3ee9e2b25?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'abbd61f0-35eb-4f88-91d9-82e4f728b817',
  'x-ms-routing-request-id': 'WESTUS:20150723T230727Z:abbd61f0-35eb-4f88-91d9-82e4f728b817',
  date: 'Thu, 23 Jul 2015 23:07:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/2b120023-51e9-42a7-9ab6-c7f3ee9e2b25?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '2b120023-51e9-42a7-9ab6-c7f3ee9e2b25',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/2b120023-51e9-42a7-9ab6-c7f3ee9e2b25?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'abbd61f0-35eb-4f88-91d9-82e4f728b817',
  'x-ms-routing-request-id': 'WESTUS:20150723T230727Z:abbd61f0-35eb-4f88-91d9-82e4f728b817',
  date: 'Thu, 23 Jul 2015 23:07:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/2b120023-51e9-42a7-9ab6-c7f3ee9e2b25?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1fd77d68-e533-46ad-906b-7ddd03db16ec',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'ccaaf0a1-44ac-468c-8d3e-d441202952aa',
  'x-ms-routing-request-id': 'WESTUS:20150723T230738Z:ccaaf0a1-44ac-468c-8d3e-d441202952aa',
  date: 'Thu, 23 Jul 2015 23:07:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/2b120023-51e9-42a7-9ab6-c7f3ee9e2b25?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1fd77d68-e533-46ad-906b-7ddd03db16ec',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'ccaaf0a1-44ac-468c-8d3e-d441202952aa',
  'x-ms-routing-request-id': 'WESTUS:20150723T230738Z:ccaaf0a1-44ac-468c-8d3e-d441202952aa',
  date: 'Thu, 23 Jul 2015 23:07:38 GMT',
  connection: 'close' });
 return result; }]];