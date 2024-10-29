# DocuSign Node Client Changelog

See [DocuSign Support Center](https://support.docusign.com/en/releasenotes/) for Product Release Notes.


## [v3.0.0] - Admin API v2.1-1.4.1 - 2024-10-28
### Changed
- Added support for version v2.1-1.4.1 of the DocuSign Admin API.
- Updated the SDK release version.

## [v3.0.0-rc3] - Admin API v2.1-1.4.1 - 2024-10-22
### Changed
- Added support for version v2.1-1.4.1 of the DocuSign Admin API.
- Updated the SDK release version.

## [v3.0.0-rc2] - Admin API v2.1-1.4.0 - 2024-09-19
### Other Changes
- Fixed issue - skipped removing empty arrays in request parameters when making HTTP calls.
- Updated the SDK release version.

## [v3.0.0-rc1] - Admin API v2.1-1.4.0 - 2024-08-27
### Breaking Changes
<details>
<summary>API Changes (Click to expand)</summary>

<br/>
<div style="margin-left: 20px;">

Added new query parameter "include_ds_groups" to the API "/v2/organizations/{organizationId}/users":

<h3>Added New APIs for Account Creation</h3>
<li>GET: get subscription details for organization</li>
<li>POST: initiate Create account request</li>
<li>GET: get ongoing process details by org ID</li>
<li>GET: get individual process details by org ID, asset group ID, asset group work ID</li>


</div>
</details>
 
### Other Changes
- Added support for version v2.1-1.4.0 of the DocuSign Admin API.
- Updated the SDK release version.

## [v2.3.0-rc1] - Admin API v2.1-1.3.0 - 2024-04-23
### Changed
**Security Updates**
- Updated HTTP Client: Due to identified security vulnerabilities in Superagent proxy version 3.0.0, we have transitioned from using Superagent to the more secure Axios HTTP client. This update helps in safeguarding your interactions by patching potential security gaps.

**New Features**
- Proxy Support for HTTP Requests: We've introduced the ability to make HTTP requests through a proxy. This enhancement is particularly useful for users operating within corporate or restricted networks.
- JWT Token Request Functionality: The new sendJWTTokenRequest method allows you to obtain authentication tokens without exposing your privateKey. This method is designed to enhance security in your authentication processes.

**Changes to Existing Features**
- Updated Callback Response Structure: We have made changes to the response structure for callbacks. If you are using callback functions in your integration, please note the updated response object attributes:
> statusCode
header
body

**Migration Guide**
- For those using callback functions, please adjust your implementation to handle the new response structure as detailed above.
## [v2.3.0] - Admin API v2.1-1.3.0 - 2023-08-02
### Changed
- Added support for version v2.1-1.3.0 of the DocuSign Admin API.
- Updated the SDK release version.

New endpoints:
* `GET /v1/organizations/{organizationId}/assetGroups/accounts` Get asset group accounts for an organization.
* `POST /v1/organizations/{organizationId}/assetGroups/accountClone` Clone an existing DocuSign account.
* `GET /v1/organizations/{organizationId}/assetGroups/accountClones` Gets all asset group account clones for an organization.
* `GET /v1/organizations/{organizationId}/assetGroups/{assetGroupId}/accountClones/{assetGroupWorkId}` Gets information about a single cloned account.
## [v2.2.0] - Admin API v2.1-1.2.0 - 2023-05-10
### Changed
- Added support for version v2.1-1.2.0 of the DocuSign Admin API.
- Updated the SDK release version.

## [v2.1.0] - Admin API v2.1-1.1.1 - 2023-03-22
### Changed
- Added support for version v2.1-1.1.1 of the DocuSign Admin API.
- Updated the SDK release version.

## [v2.0.0] - Admin API v2.1-1.1.0 - 2023-01-23
### Breaking 
- Deprecating Node versions <12
### Security
- Update jsonwebtoken package to 9.0.0 addressing CVE-2022-23529

### Changed
- Added support for version v2.1-1.1.0 of the DocuSign Admin API.
- Updated the SDK release version.

## [v1.1.0] - Admin API v2.1-1.1.0 - 2022-04-26
### Changed
- Added support for version v2.1-1.1.0 of the DocuSign Admin API.
- Updated the SDK release version.

## [v1.0.2] - Admin API v2.1-1.0.0 - 2022-01-10
### Changed
- Added support for version v2.1-1.0.0 of the DocuSign Admin API.
- Updated the SDK release version.

## [1.0.1] - Admin API v2.1-1.0.0 - 2021-11-03
### Changed
- Updated Readme. Renamed OrgAdmin to Admin.

## [1.0.0] - Admin API v2.1-1.0.0 - 2021-09-17
### Changed
- Added support for version v2.1-1.0.0 of the DocuSign Admin API.
- Updated the SDK release version.


## [v1.0.0-beta] - OrgAdmin API v2-1.0.7
### Added
- Added first beta version of the DocuSign OrgAdmin API.
