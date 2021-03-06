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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateDR?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreateDR' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-request-id': 'f1e1a579-4976-4caa-84ee-2e79451fd5a5',
  'x-ms-correlation-request-id': 'f1e1a579-4976-4caa-84ee-2e79451fd5a5',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150824T093333Z:f1e1a579-4976-4caa-84ee-2e79451fd5a5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 24 Aug 2015 09:33:32 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateDR?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreateDR' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-request-id': 'f1e1a579-4976-4caa-84ee-2e79451fd5a5',
  'x-ms-correlation-request-id': 'f1e1a579-4976-4caa-84ee-2e79451fd5a5',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150824T093333Z:f1e1a579-4976-4caa-84ee-2e79451fd5a5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 24 Aug 2015 09:33:32 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateDR?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR\",\"name\":\"xplatTestGCreateDR\",\"location\":\"southeastasia\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '732f774f-8711-4a1b-9d0a-525a2428dddd',
  'x-ms-correlation-request-id': '732f774f-8711-4a1b-9d0a-525a2428dddd',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150824T093333Z:732f774f-8711-4a1b-9d0a-525a2428dddd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 24 Aug 2015 09:33:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateDR?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR\",\"name\":\"xplatTestGCreateDR\",\"location\":\"southeastasia\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '732f774f-8711-4a1b-9d0a-525a2428dddd',
  'x-ms-correlation-request-id': '732f774f-8711-4a1b-9d0a-525a2428dddd',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150824T093333Z:732f774f-8711-4a1b-9d0a-525a2428dddd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 24 Aug 2015 09:33:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR/providers/Microsoft.Network/dnszones/xplattestgcreatedr.xplattestdrs?api-version=2015-05-04-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDR\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\",\"name\":\"xplattestgcreatedr.xplattestdrs\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"618e4bb4-d573-48f5-a9d5-83190ecdba51\",\"location\":\"global\",\"properties\":{}}", { 'cache-control': 'private',
  'content-length': '331',
  'content-type': 'application/json; charset=utf-8',
  etag: '618e4bb4-d573-48f5-a9d5-83190ecdba51',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '0f40ab8c-d754-428d-8ec5-df7d8a9a9e3d',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'c1c27cbd-f2b8-4d45-b3eb-139a46be0c21',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150824T093337Z:c1c27cbd-f2b8-4d45-b3eb-139a46be0c21',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 24 Aug 2015 09:33:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR/providers/Microsoft.Network/dnszones/xplattestgcreatedr.xplattestdrs?api-version=2015-05-04-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDR\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\",\"name\":\"xplattestgcreatedr.xplattestdrs\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"618e4bb4-d573-48f5-a9d5-83190ecdba51\",\"location\":\"global\",\"properties\":{}}", { 'cache-control': 'private',
  'content-length': '331',
  'content-type': 'application/json; charset=utf-8',
  etag: '618e4bb4-d573-48f5-a9d5-83190ecdba51',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '0f40ab8c-d754-428d-8ec5-df7d8a9a9e3d',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'c1c27cbd-f2b8-4d45-b3eb-139a46be0c21',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150824T093337Z:c1c27cbd-f2b8-4d45-b3eb-139a46be0c21',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 24 Aug 2015 09:33:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR/providers/Microsoft.Network/dnszones/xplattestgcreatedr.xplattestdrs?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDR\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\",\"name\":\"xplattestgcreatedr.xplattestdrs\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"618e4bb4-d573-48f5-a9d5-83190ecdba51\",\"location\":\"global\",\"properties\":{\"maxNumberOfRecordSets\":1000,\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '382',
  'content-type': 'application/json; charset=utf-8',
  etag: '618e4bb4-d573-48f5-a9d5-83190ecdba51',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'c8e08bd1-1d8c-4747-ba4f-7432efee7802',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11994',
  'x-ms-correlation-request-id': '07d255c1-25e8-4e88-84ce-cd6b3ae45999',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150824T093340Z:07d255c1-25e8-4e88-84ce-cd6b3ae45999',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 24 Aug 2015 09:33:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR/providers/Microsoft.Network/dnszones/xplattestgcreatedr.xplattestdrs?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDR\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\",\"name\":\"xplattestgcreatedr.xplattestdrs\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"618e4bb4-d573-48f5-a9d5-83190ecdba51\",\"location\":\"global\",\"properties\":{\"maxNumberOfRecordSets\":1000,\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '382',
  'content-type': 'application/json; charset=utf-8',
  etag: '618e4bb4-d573-48f5-a9d5-83190ecdba51',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'c8e08bd1-1d8c-4747-ba4f-7432efee7802',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11994',
  'x-ms-correlation-request-id': '07d255c1-25e8-4e88-84ce-cd6b3ae45999',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150824T093340Z:07d255c1-25e8-4e88-84ce-cd6b3ae45999',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 24 Aug 2015 09:33:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR/providers/Microsoft.Network/dnszones/xplattestgcreatedr.xplattestdrs/A/xplattestdnsrecord?api-version=2015-05-04-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDR\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\\/A\\/xplattestdnsrecord\",\"name\":\"xplattestdnsrecord\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"824efe60-2355-4a5f-9d3a-e19dcc570417\",\"location\":\"global\",\"tags\":{},\"properties\":{\"TTL\":4}}", { 'cache-control': 'private',
  'content-length': '361',
  'content-type': 'application/json; charset=utf-8',
  etag: '824efe60-2355-4a5f-9d3a-e19dcc570417',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'c67cd8cf-5ccc-4a74-b2f9-0635ab7fbb91',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '5fed56d4-629d-47d8-860c-2fd06976df62',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150824T093343Z:5fed56d4-629d-47d8-860c-2fd06976df62',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 24 Aug 2015 09:33:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR/providers/Microsoft.Network/dnszones/xplattestgcreatedr.xplattestdrs/A/xplattestdnsrecord?api-version=2015-05-04-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDR\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\\/A\\/xplattestdnsrecord\",\"name\":\"xplattestdnsrecord\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"824efe60-2355-4a5f-9d3a-e19dcc570417\",\"location\":\"global\",\"tags\":{},\"properties\":{\"TTL\":4}}", { 'cache-control': 'private',
  'content-length': '361',
  'content-type': 'application/json; charset=utf-8',
  etag: '824efe60-2355-4a5f-9d3a-e19dcc570417',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'c67cd8cf-5ccc-4a74-b2f9-0635ab7fbb91',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '5fed56d4-629d-47d8-860c-2fd06976df62',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150824T093343Z:5fed56d4-629d-47d8-860c-2fd06976df62',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 24 Aug 2015 09:33:43 GMT',
  connection: 'close' });
 return result; }]];