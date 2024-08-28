var docusign = require('../src/index');
var oAuth = docusign.ApiClient.OAuth;
var restApi = docusign.ApiClient.RestApi;
var config;
try {
  config = require('../test-config');
} catch (err) {
  console.error(err);
}
var assert = require('assert');
var path = require('path');
var Buffer = global.Buffer.from ? global.Buffer : require('safe-buffer').Buffer;
var fs = require('fs');

var privateKey = config.privateKey;
var integratorKey = config.integratorKey;
var accountId;

var basePath = restApi.BasePath.DEMO;
var oAuthBasePath = oAuth.BasePath.DEMO;

var userId = config.userId;
var RedirectURI = 'https://www.docusign.com/api';
var privateKeyFilename = 'keys/docusign_private_key.txt';
var expiresIn = 3600;
var organizationId;
if (privateKey) {
  var buf;
  if (typeof Buffer.from === 'function') {
    // Node 5.10+
    buf = Buffer.from(privateKey, 'base64'); // Ta-da
  } else {
    // older Node versions, now deprecated
    buf = new Buffer(privateKey, 'base64'); // Ta-da
  }

  var text = buf.toString('ascii');
  fs.writeFileSync(path.resolve('test', privateKeyFilename), text);
}

describe('SDK Unit Tests:', function (done) {
  var apiClient = new docusign.ApiClient({
    basePath: basePath,
    oAuthBasePath: oAuthBasePath
  });
  var scopes = [
    oAuth.Scope.SIGNATURE,
    oAuth.Scope.ORGANIZATION_READ,
    oAuth.Scope.USER_READ,
    oAuth.Scope.USER_WRITE
  ];

  before(function (done) {
    // IMPORTANT NOTE:
    // the first time you ask for a JWT access token, you should grant access by making the following call
    // get DocuSign OAuth authorization url:
    var oauthLoginUrl = apiClient.getJWTUri(integratorKey, RedirectURI, oAuthBasePath);
    // open DocuSign OAuth authorization url in the browser, login and grant access
    console.log(oauthLoginUrl);
    // END OF NOTE
    var fs = require('fs');
    var privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));

    apiClient.requestJWTUserToken(integratorKey, userId, scopes, privateKeyFile, expiresIn)
      .then(function (res) {
        apiClient.setJWTToken(res.body.access_token);

        apiClient.getUserInfo(res.body.access_token)
          .then(function (userInfo) {
            accountId = userInfo.accounts[0].accountId;
            console.log('LoginInformation: ' + JSON.stringify(userInfo));
            done();
          })
          .catch(function (error) {
            if (error) {
              console.log(error);
              return done(error);
            }
          });
      })
      .catch(function (err) {
        if (err) {
          return done(err);
        }
      });
  });

  it('Test Org Admin', function (done) {
    var orgadminApi = new docusign.AccountsApi(apiClient);
    orgadminApi.getOrganizations().then(function (response) {
      var organizations = response.organizations;
      assert.notStrictEqual(response, undefined);
      assert.notStrictEqual(response.organizations, undefined);
      organizationId = organizations[0].id;
      done();
    })
      .catch(function (error) {
        if (error) {
          return done(error);
        }
      });
  });

  it('Test Bulk Import', function (done) {
    var bulkImportApi = new docusign.BulkImportsApi(apiClient);
    var csvFilename = 'docs/fileInput.csv';
    var csvFilenameFilled = 'docs/file.csv';
    var csvPath = path.resolve(__dirname, csvFilename);
    var csvPathFilled = path.resolve(__dirname, csvFilenameFilled);
    fs.writeFileSync(csvPathFilled, fs.readFileSync(csvPath).toString().replace('<accountId>', accountId));
    var csvFilled = fs.readFileSync(csvPathFilled);
    bulkImportApi.createBulkImportAddUsersRequest(organizationId, csvFilled)
      .then(response => {
        assert.notEqual(response.created, undefined);
        fs.unlink(csvPathFilled, function () {});
        setTimeout(function () {
          // bulkImportApi.delete(response.id);
        }, 300);
        return done();
      })
      .catch(err => {
        fs.unlink(csvPathFilled, function () {});
        var validErrorCodes = [
          'principal_throttled',
          'organization_import_import_pending'
        ];
        if (!validErrorCodes.includes(err.body.error)) {
          return done(err);
        } else {
          return done();
        }
      });
  });

  it('Test Create User', function (done) {
    var userName = 'NodeJS SDK User';
    var usersApi = new docusign.UsersApi(apiClient);
    var permissionProfile = new docusign.PermissionProfileRequest(9305351);
    var accountProperties = docusign.NewUserRequestAccountProperties.constructFromObject({
      permission_profile: permissionProfile,
      id: accountId,
      groups: [],
      company_name: 'NodeJS SDK Company'
    });

    var request = docusign.NewUserRequest.constructFromObject({
      user_name: userName,
      email: 'NodeJSEmail@test.com',
      accounts: [accountProperties]
    });

    usersApi.createUser(request, organizationId)
      .then(function (response) {
        assert.equal(response.user_name, userName);
        return done();
      })
      .catch(done);
  });
  it('Test Get Product Profiles', function (done) {
    var permissionProfilesApi = new docusign.ProductPermissionProfilesApi(apiClient);
    permissionProfilesApi.getProductPermissionProfiles(organizationId, accountId)
      .then(function (response) {
        var profile = response.product_permission_profiles[0];
        assert.notStrictEqual(profile, undefined);
        assert.notStrictEqual(profile.product_id, undefined);
        assert.notStrictEqual(profile.product_name, undefined);
        assert.notStrictEqual(profile.permission_profiles.length, 0);
        return done();
      })
      .catch(done);
  });

  it('Test Get User Profiles', function (done) {
    var usersApi = new docusign.UsersApi(apiClient);
    var from = new Date(new Date() - (10 * 24 * 60 * 60 * 1000));

    var options = {
      'accountId': accountId,
      'lastModifiedSince': from
    };
    usersApi.getUsers(organizationId, options)
      .then(function (response) {
        assert.notStrictEqual(response.users, undefined);
        return done();
      })
      .catch(done);
  });
});
