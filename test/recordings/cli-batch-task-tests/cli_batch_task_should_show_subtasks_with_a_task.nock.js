// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D38070A23AB241\",\"creationTime\":\"2016-05-20T05:36:01.745274Z\",\"lastModified\":\"2016-05-20T05:36:03.5820097Z\",\"state\":\"running\",\"stateTransitionTime\":\"2016-05-20T05:36:02.6860227Z\",\"previousState\":\"active\",\"previousStateTransitionTime\":\"2016-05-20T05:36:01.745274Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n    \"numberOfInstances\":3,\"coordinationCommandLine\":\"cmd /c echo hello\"\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"startTime\":\"2016-05-20T05:36:02.6860227Z\",\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \"affinityId\":\"TVM:tvm-3426989531_3-20160520t052823z\",\"nodeUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_3-20160520t052823z\",\"poolId\":\"xplattestpool\",\"nodeId\":\"tvm-3426989531_3-20160520t052823z\",\"taskRootDirectory\":\"workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\0\",\"taskRootDirectoryUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_3-20160520t052823z/files/workitems/xplatjobfortasktests/job-1/xplattask/0\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 20 May 2016 05:36:03 GMT',
  etag: '0x8D38070A23AB241',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c949baa0-0053-479c-afbd-f7cd561e6122',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'e5041d2d-0f1f-477d-aa2f-4b4d7f58c7da',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D38070A23AB241\",\"creationTime\":\"2016-05-20T05:36:01.745274Z\",\"lastModified\":\"2016-05-20T05:36:03.5820097Z\",\"state\":\"running\",\"stateTransitionTime\":\"2016-05-20T05:36:02.6860227Z\",\"previousState\":\"active\",\"previousStateTransitionTime\":\"2016-05-20T05:36:01.745274Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n    \"numberOfInstances\":3,\"coordinationCommandLine\":\"cmd /c echo hello\"\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"startTime\":\"2016-05-20T05:36:02.6860227Z\",\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \"affinityId\":\"TVM:tvm-3426989531_3-20160520t052823z\",\"nodeUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_3-20160520t052823z\",\"poolId\":\"xplattestpool\",\"nodeId\":\"tvm-3426989531_3-20160520t052823z\",\"taskRootDirectory\":\"workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\0\",\"taskRootDirectoryUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_3-20160520t052823z/files/workitems/xplatjobfortasktests/job-1/xplattask/0\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 20 May 2016 05:36:03 GMT',
  etag: '0x8D38070A23AB241',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c949baa0-0053-479c-afbd-f7cd561e6122',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'e5041d2d-0f1f-477d-aa2f-4b4d7f58c7da',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D38070A23AB241\",\"creationTime\":\"2016-05-20T05:36:01.745274Z\",\"lastModified\":\"2016-05-20T05:36:03.5820097Z\",\"state\":\"completed\",\"stateTransitionTime\":\"2016-05-20T05:36:06.0669645Z\",\"previousState\":\"running\",\"previousStateTransitionTime\":\"2016-05-20T05:36:02.6860227Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n    \"numberOfInstances\":3,\"coordinationCommandLine\":\"cmd /c echo hello\"\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"startTime\":\"2016-05-20T05:36:02.6860227Z\",\"endTime\":\"2016-05-20T05:36:06.0669645Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \"affinityId\":\"TVM:tvm-3426989531_3-20160520t052823z\",\"nodeUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_3-20160520t052823z\",\"poolId\":\"xplattestpool\",\"nodeId\":\"tvm-3426989531_3-20160520t052823z\",\"taskRootDirectory\":\"workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\0\",\"taskRootDirectoryUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_3-20160520t052823z/files/workitems/xplatjobfortasktests/job-1/xplattask/0\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 20 May 2016 05:36:03 GMT',
  etag: '0x8D38070A23AB241',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '6f2f6b0b-2817-429a-b033-bc069a63b184',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '8ac6c857-3615-478f-a583-e84424a61233',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D38070A23AB241\",\"creationTime\":\"2016-05-20T05:36:01.745274Z\",\"lastModified\":\"2016-05-20T05:36:03.5820097Z\",\"state\":\"completed\",\"stateTransitionTime\":\"2016-05-20T05:36:06.0669645Z\",\"previousState\":\"running\",\"previousStateTransitionTime\":\"2016-05-20T05:36:02.6860227Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n    \"numberOfInstances\":3,\"coordinationCommandLine\":\"cmd /c echo hello\"\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"startTime\":\"2016-05-20T05:36:02.6860227Z\",\"endTime\":\"2016-05-20T05:36:06.0669645Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \"affinityId\":\"TVM:tvm-3426989531_3-20160520t052823z\",\"nodeUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_3-20160520t052823z\",\"poolId\":\"xplattestpool\",\"nodeId\":\"tvm-3426989531_3-20160520t052823z\",\"taskRootDirectory\":\"workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\0\",\"taskRootDirectoryUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_3-20160520t052823z/files/workitems/xplatjobfortasktests/job-1/xplattask/0\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 20 May 2016 05:36:03 GMT',
  etag: '0x8D38070A23AB241',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '6f2f6b0b-2817-429a-b033-bc069a63b184',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '8ac6c857-3615-478f-a583-e84424a61233',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D38070A23AB241\",\"creationTime\":\"2016-05-20T05:36:01.745274Z\",\"lastModified\":\"2016-05-20T05:36:03.5820097Z\",\"state\":\"completed\",\"stateTransitionTime\":\"2016-05-20T05:36:06.0669645Z\",\"previousState\":\"running\",\"previousStateTransitionTime\":\"2016-05-20T05:36:02.6860227Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n    \"numberOfInstances\":3,\"coordinationCommandLine\":\"cmd /c echo hello\"\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"startTime\":\"2016-05-20T05:36:02.6860227Z\",\"endTime\":\"2016-05-20T05:36:06.0669645Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \"affinityId\":\"TVM:tvm-3426989531_3-20160520t052823z\",\"nodeUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_3-20160520t052823z\",\"poolId\":\"xplattestpool\",\"nodeId\":\"tvm-3426989531_3-20160520t052823z\",\"taskRootDirectory\":\"workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\0\",\"taskRootDirectoryUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_3-20160520t052823z/files/workitems/xplatjobfortasktests/job-1/xplattask/0\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 20 May 2016 05:36:03 GMT',
  etag: '0x8D38070A23AB241',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '7a83be39-f27a-4222-8980-e35e52f34ccd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '4640d73c-704c-4133-b27e-0ba8a00dc644',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D38070A23AB241\",\"creationTime\":\"2016-05-20T05:36:01.745274Z\",\"lastModified\":\"2016-05-20T05:36:03.5820097Z\",\"state\":\"completed\",\"stateTransitionTime\":\"2016-05-20T05:36:06.0669645Z\",\"previousState\":\"running\",\"previousStateTransitionTime\":\"2016-05-20T05:36:02.6860227Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n    \"numberOfInstances\":3,\"coordinationCommandLine\":\"cmd /c echo hello\"\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"startTime\":\"2016-05-20T05:36:02.6860227Z\",\"endTime\":\"2016-05-20T05:36:06.0669645Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \"affinityId\":\"TVM:tvm-3426989531_3-20160520t052823z\",\"nodeUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_3-20160520t052823z\",\"poolId\":\"xplattestpool\",\"nodeId\":\"tvm-3426989531_3-20160520t052823z\",\"taskRootDirectory\":\"workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\0\",\"taskRootDirectoryUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_3-20160520t052823z/files/workitems/xplatjobfortasktests/job-1/xplattask/0\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 20 May 2016 05:36:03 GMT',
  etag: '0x8D38070A23AB241',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '7a83be39-f27a-4222-8980-e35e52f34ccd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '4640d73c-704c-4133-b27e-0ba8a00dc644',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask/subtasksinfo?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#subtaskinfo\",\"value\":[\r\n    {\r\n      \"id\":1,\"state\":\"running\",\"previousStateTransitionTime\":\"1601-01-01T00:00:00Z\",\"nodeInfo\":{\r\n        \"affinityId\":\"TVM:tvm-3426989531_1-20160520t052823z\",\"nodeUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_1-20160520t052823z\",\"poolId\":\"xplattestpool\",\"nodeId\":\"tvm-3426989531_1-20160520t052823z\",\"taskRootDirectory\":\"workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\1\",\"taskRootDirectoryUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_1-20160520t052823z/files/workitems/xplatjobfortasktests/job-1/xplattask/1\"\r\n      }\r\n    },{\r\n      \"id\":2,\"state\":\"completed\",\"previousState\":\"running\",\"exitCode\":0,\"nodeInfo\":{\r\n        \"affinityId\":\"TVM:tvm-3426989531_2-20160520t052823z\",\"nodeUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_2-20160520t052823z\",\"poolId\":\"xplattestpool\",\"nodeId\":\"tvm-3426989531_2-20160520t052823z\",\"taskRootDirectory\":\"workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\2\",\"taskRootDirectoryUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_2-20160520t052823z/files/workitems/xplatjobfortasktests/job-1/xplattask/2\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '930d3b73-caee-4139-a9db-b39eb624ac87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'd0dd4fdf-ff01-4da0-b7be-65ca2f2aa7c1',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask/subtasksinfo?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#subtaskinfo\",\"value\":[\r\n    {\r\n      \"id\":1,\"state\":\"running\",\"previousStateTransitionTime\":\"1601-01-01T00:00:00Z\",\"nodeInfo\":{\r\n        \"affinityId\":\"TVM:tvm-3426989531_1-20160520t052823z\",\"nodeUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_1-20160520t052823z\",\"poolId\":\"xplattestpool\",\"nodeId\":\"tvm-3426989531_1-20160520t052823z\",\"taskRootDirectory\":\"workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\1\",\"taskRootDirectoryUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_1-20160520t052823z/files/workitems/xplatjobfortasktests/job-1/xplattask/1\"\r\n      }\r\n    },{\r\n      \"id\":2,\"state\":\"completed\",\"previousState\":\"running\",\"exitCode\":0,\"nodeInfo\":{\r\n        \"affinityId\":\"TVM:tvm-3426989531_2-20160520t052823z\",\"nodeUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_2-20160520t052823z\",\"poolId\":\"xplattestpool\",\"nodeId\":\"tvm-3426989531_2-20160520t052823z\",\"taskRootDirectory\":\"workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\2\",\"taskRootDirectoryUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-3426989531_2-20160520t052823z/files/workitems/xplatjobfortasktests/job-1/xplattask/2\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '930d3b73-caee-4139-a9db-b39eb624ac87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'd0dd4fdf-ff01-4da0-b7be-65ca2f2aa7c1',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:09 GMT',
  connection: 'close' });
 return result; }]];