// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '26d6d535-5164-443d-82f6-4c695caf7688',
    name: 'BDHadoopHumboldtCRPAdhocTestShortTerm',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'NorthCentralUS';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/changerdpsetting?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/changerdpsetting/operationresults/ee6d8803-6d50-4ab1-8e68-2d00c14bd8b1-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/changerdpsetting/azureasyncoperations/ee6d8803-6d50-4ab1-8e68-2d00c14bd8b1-0?api-version=2015-03-01-preview',
  'x-ms-request-id': 'a39231e7-5b2c-4333-a4e8-1688d9e332a1',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '26f6915f-c7f8-4c57-b5ae-778959f42f76',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T195135Z:26f6915f-c7f8-4c57-b5ae-778959f42f76',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:51:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/changerdpsetting?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/changerdpsetting/operationresults/ee6d8803-6d50-4ab1-8e68-2d00c14bd8b1-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/changerdpsetting/azureasyncoperations/ee6d8803-6d50-4ab1-8e68-2d00c14bd8b1-0?api-version=2015-03-01-preview',
  'x-ms-request-id': 'a39231e7-5b2c-4333-a4e8-1688d9e332a1',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '26f6915f-c7f8-4c57-b5ae-778959f42f76',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T195135Z:26f6915f-c7f8-4c57-b5ae-778959f42f76',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:51:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/changerdpsetting/azureasyncoperations/ee6d8803-6d50-4ab1-8e68-2d00c14bd8b1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '38c38814-f292-4e45-8e53-164209f320ab',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14821',
  'x-ms-correlation-request-id': '8a51a412-d086-44ac-9ba2-6e701964143c',
  'x-ms-routing-request-id': 'WESTUS:20160428T195236Z:8a51a412-d086-44ac-9ba2-6e701964143c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:52:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/changerdpsetting/azureasyncoperations/ee6d8803-6d50-4ab1-8e68-2d00c14bd8b1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '38c38814-f292-4e45-8e53-164209f320ab',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14821',
  'x-ms-correlation-request-id': '8a51a412-d086-44ac-9ba2-6e701964143c',
  'x-ms-routing-request-id': 'WESTUS:20160428T195236Z:8a51a412-d086-44ac-9ba2-6e701964143c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:52:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/changerdpsetting/azureasyncoperations/ee6d8803-6d50-4ab1-8e68-2d00c14bd8b1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '675bc2f6-6d9a-4017-ab9f-410f05a3a4a0',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14875',
  'x-ms-correlation-request-id': '4679b423-96ee-478e-81d0-9f778f80eef7',
  'x-ms-routing-request-id': 'WESTUS:20160428T195337Z:4679b423-96ee-478e-81d0-9f778f80eef7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:53:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/changerdpsetting/azureasyncoperations/ee6d8803-6d50-4ab1-8e68-2d00c14bd8b1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '675bc2f6-6d9a-4017-ab9f-410f05a3a4a0',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14875',
  'x-ms-correlation-request-id': '4679b423-96ee-478e-81d0-9f778f80eef7',
  'x-ms-routing-request-id': 'WESTUS:20160428T195337Z:4679b423-96ee-478e-81d0-9f778f80eef7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:53:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/changerdpsetting/azureasyncoperations/ee6d8803-6d50-4ab1-8e68-2d00c14bd8b1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1d0a1325-dd29-46c0-91a7-9fc057c7d0b3',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14813',
  'x-ms-correlation-request-id': 'd8077b5a-b724-4cd1-b8c2-be0eb784b925',
  'x-ms-routing-request-id': 'WESTUS:20160428T195437Z:d8077b5a-b724-4cd1-b8c2-be0eb784b925',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:54:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/changerdpsetting/azureasyncoperations/ee6d8803-6d50-4ab1-8e68-2d00c14bd8b1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1d0a1325-dd29-46c0-91a7-9fc057c7d0b3',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14813',
  'x-ms-correlation-request-id': 'd8077b5a-b724-4cd1-b8c2-be0eb784b925',
  'x-ms-routing-request-id': 'WESTUS:20160428T195437Z:d8077b5a-b724-4cd1-b8c2-be0eb784b925',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:54:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/changerdpsetting/azureasyncoperations/ee6d8803-6d50-4ab1-8e68-2d00c14bd8b1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a46fe207-f7d5-497a-adfb-53faf0cecb3a',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14907',
  'x-ms-correlation-request-id': 'a80eb2d2-c87f-426a-b175-07e9019aece1',
  'x-ms-routing-request-id': 'WESTUS:20160428T195539Z:a80eb2d2-c87f-426a-b175-07e9019aece1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:55:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/changerdpsetting/azureasyncoperations/ee6d8803-6d50-4ab1-8e68-2d00c14bd8b1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a46fe207-f7d5-497a-adfb-53faf0cecb3a',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14907',
  'x-ms-correlation-request-id': 'a80eb2d2-c87f-426a-b175-07e9019aece1',
  'x-ms-routing-request-id': 'WESTUS:20160428T195539Z:a80eb2d2-c87f-426a-b175-07e9019aece1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:55:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/changerdpsetting/azureasyncoperations/ee6d8803-6d50-4ab1-8e68-2d00c14bd8b1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '41d74658-94d3-4372-a10f-593425d5c016',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14977',
  'x-ms-correlation-request-id': '8cb01f83-a2ae-4d4a-aa95-d83d13f4df82',
  'x-ms-routing-request-id': 'WESTUS:20160428T195640Z:8cb01f83-a2ae-4d4a-aa95-d83d13f4df82',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:56:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/changerdpsetting/azureasyncoperations/ee6d8803-6d50-4ab1-8e68-2d00c14bd8b1-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '41d74658-94d3-4372-a10f-593425d5c016',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14977',
  'x-ms-correlation-request-id': '8cb01f83-a2ae-4d4a-aa95-d83d13f4df82',
  'x-ms-routing-request-id': 'WESTUS:20160428T195640Z:8cb01f83-a2ae-4d4a-aa95-d83d13f4df82',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:56:40 GMT',
  connection: 'close' });
 return result; }]];