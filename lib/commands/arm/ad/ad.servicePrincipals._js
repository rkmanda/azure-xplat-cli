/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';
var adUtils = require('./adUtils._js');
var profile = require('../../../util/profile');
var rbacClients = require('../role/rbacClients');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var log = cli.output;

  var ad = cli.category('ad')
    .description($('Commands to display active directory objects'));
  var adUser = ad.category('servicePrincipal')
    .description($('Commands to display active directory service principals'));

  adUser.command('list')
    .description($('Get all active directory service principals in current subscription\'s tenant'))
    .option('| more', $('Provides paging support. Press \'Enter\' for more information.'))
    .execute(function (options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var client = rbacClients.getADGraphClient(subscription);
      var progress = cli.interaction.progress($('Listing active directory service principals'));
      try {
        adUtils.listGraphObjects(client, 'servicePrincipal', log, _);
      } finally {
        progress.end();
      }
    });

  adUser.command('show [spn] [objectId] [search]')
    .description($('Get an active directory user'))
    .usage('[options] <name>')
    .option('--spn <spn>', $('the name of the service principal to return'))
    .option('--objectId <objectId>', $('the object id of the service principal to return.'))
    .option('--search <search>', $('search service principals with display name starting with the provided value'))
    .execute(function (spn, objectId, search, options, _) {
    //TODO, validate parameters
    var subscription = profile.current.getSubscription(options.subscription);
    var client = rbacClients.getADGraphClient(subscription);
    var progress = cli.interaction.progress($('Getting active directory service principals'));
    var servicePrincipals = []; 
    try {
      if (spn) {
        servicePrincipals = client.servicePrincipal.getByServicePrincipalName(spn, _).servicePrincipals;
      } else if (objectId) {
        var servicePrincipal = client.servicePrincipal.get(objectId, _).servicePrincipal;
        if (servicePrincipal) {
          servicePrincipals.push(servicePrincipal);
        }
      } else {
        servicePrincipals = client.servicePrincipal.list(search, _).servicePrincipals;
      }
    } finally {
      progress.end();
    }

    if (servicePrincipals.length > 0) {
      adUtils.displayServicePrincipals(servicePrincipals, log);
    } else {
      log.data($('No matching service principal was found'));
    }
  });
};