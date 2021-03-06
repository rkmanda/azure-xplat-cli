// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storageclitest?restype=container&comp=lease')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:57:08 GMT',
  etag: '"0x8D3B0843692560E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e25f9716-0001-0045-7d6d-e24b96000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-id': '633e7d74-5522-49ae-9f9f-64a860dd00ab',
  date: 'Wed, 20 Jul 2016 09:57:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storageclitest?restype=container&comp=lease')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:57:08 GMT',
  etag: '"0x8D3B0843692560E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e25f9716-0001-0045-7d6d-e24b96000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-id': '633e7d74-5522-49ae-9f9f-64a860dd00ab',
  date: 'Wed, 20 Jul 2016 09:57:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:57:08 GMT',
  etag: '"0x8D3B0843692560E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b10894c9-0001-0025-7a6d-e20eb4000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'infinite',
  date: 'Wed, 20 Jul 2016 09:57:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:57:08 GMT',
  etag: '"0x8D3B0843692560E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b10894c9-0001-0025-7a6d-e20eb4000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'infinite',
  date: 'Wed, 20 Jul 2016 09:57:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>containerpolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 20 Jul 2016 09:57:08 GMT',
  etag: '"0x8D3B0843692560E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4f8f2316-0001-002f-656d-e2173d000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:57:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>containerpolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 20 Jul 2016 09:57:08 GMT',
  etag: '"0x8D3B0843692560E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4f8f2316-0001-002f-656d-e2173d000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:57:16 GMT',
  connection: 'close' });
 return result; }]];