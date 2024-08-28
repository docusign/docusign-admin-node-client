/**
 * Docusign Admin API
 * An API for an organization administrator to manage organizations, accounts and users
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Configuration', 'ApiClient', 'model/AddDSGroupAndUsersResponse', 'model/AddDSGroupUsersResponse', 'model/AddUserResponse', 'model/AddUserResponseAccountProperties', 'model/AddressInformation', 'model/AssetGroupAccountClone', 'model/AssetGroupAccountCloneSourceAccount', 'model/AssetGroupAccountCloneTargetAccount', 'model/AssetGroupAccountCloneTargetAccountAdmin', 'model/AssetGroupAccountClones', 'model/AssetGroupAccountResponse', 'model/AssetGroupAccountsResponse', 'model/CertificateResponse', 'model/DSGroupAddRequest', 'model/DSGroupAndUsersResponse', 'model/DSGroupListResponse', 'model/DSGroupRequest', 'model/DSGroupResponse', 'model/DSGroupUserResponse', 'model/DSGroupUsersAddRequest', 'model/DSGroupUsersRemoveRequest', 'model/DSGroupUsersResponse', 'model/DeleteMembershipRequest', 'model/DeleteMembershipResponse', 'model/DeleteMembershipsRequest', 'model/DeleteMembershipsResponse', 'model/DeleteResponse', 'model/DeleteUserIdentityRequest', 'model/DocuSignAccountDomainModelAddress', 'model/DomainResponse', 'model/DomainsResponse', 'model/ErrorDetails', 'model/ForceActivateMembershipRequest', 'model/GroupRequest', 'model/IdentityProviderResponse', 'model/IdentityProvidersResponse', 'model/IndividualMembershipDataRedactionRequest', 'model/IndividualUserDataRedactionRequest', 'model/IndividualUserDataRedactionResponse', 'model/LinkResponse', 'model/MemberGroupResponse', 'model/MemberGroupsResponse', 'model/MembershipDataRedactionRequest', 'model/MembershipDataRedactionResponse', 'model/MembershipResponse', 'model/NewAccountUserRequest', 'model/NewMultiProductUserAddRequest', 'model/NewUserRequest', 'model/NewUserRequestAccountProperties', 'model/NewUserResponse', 'model/NewUserResponseAccountProperties', 'model/OASIRRErrorDetails', 'model/OASIRROrganizationAccountSettingsErrorDataResponse', 'model/OETRErrorDetails', 'model/OSAMRContact', 'model/OrgExportSelectedAccount', 'model/OrgExportSelectedDomain', 'model/OrgReportConfigurationResponse', 'model/OrgReportCreateResponse', 'model/OrgReportListResponse', 'model/OrgReportListResponseOrgReport', 'model/OrgReportListResponseRequestor', 'model/OrgReportRequest', 'model/OrganizationAccountRequest', 'model/OrganizationAccountResponse', 'model/OrganizationAccountSettingsImportRequestorResponse', 'model/OrganizationAccountSettingsImportResponse', 'model/OrganizationAccountSettingsImportResultResponse', 'model/OrganizationAccountsRequest', 'model/OrganizationExportAccount', 'model/OrganizationExportDomain', 'model/OrganizationExportRequest', 'model/OrganizationExportRequestorResponse', 'model/OrganizationExportResponse', 'model/OrganizationExportTaskResponse', 'model/OrganizationExportsResponse', 'model/OrganizationImportResponse', 'model/OrganizationImportResponseErrorRollup', 'model/OrganizationImportResponseRequestor', 'model/OrganizationImportResponseWarningRollup', 'model/OrganizationImportsResponse', 'model/OrganizationResponse', 'model/OrganizationSalesforceAccountManagersResponse', 'model/OrganizationSimpleIdObject', 'model/OrganizationSubscriptionResponse', 'model/OrganizationUserResponse', 'model/OrganizationUsersResponse', 'model/OrganizationsResponse', 'model/PagingResponseProperties', 'model/PermissionProfileRequest', 'model/PermissionProfileResponse', 'model/PermissionProfileResponse21', 'model/PermissionsResponse', 'model/ProductPermissionProfileRequest', 'model/ProductPermissionProfileResponse', 'model/ProductPermissionProfilesRequest', 'model/ProductPermissionProfilesResponse', 'model/RemoveDSGroupUsersResponse', 'model/RemoveUserProductsResponse', 'model/RequiredAttributeMappingResponse', 'model/Saml2IdentityProviderResponse', 'model/SettingResponse', 'model/SubAccountCreateRequest', 'model/SubAccountCreateRequestSubAccountCreationSubscription', 'model/SubAccountCreateRequestSubAccountCreationTargetAccountAdmin', 'model/SubAccountCreateRequestSubAccountCreationTargetAccountDetails', 'model/SubAccountCreateSubscriptionDetails', 'model/SubAccountCreateSubscriptionModuleDetails', 'model/SubAccountCreateTargetAccount', 'model/SubAccountCreateTargetAccountAdmin', 'model/SubAccountCreateWorker', 'model/SubAccountCreateWorkerResponse', 'model/SubAccountErrorDetails', 'model/SubscriptionPlanItemResponse', 'model/SubscriptionProvisionModelAccountCreateAccountAdmin', 'model/SubscriptionProvisionModelAccountCreateCreateAccountDetails', 'model/SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails', 'model/SubscriptionProvisionModelAccountCreateCreateSubAccountDetails', 'model/SubscriptionProvisionModelAssetGroupWork', 'model/SubscriptionProvisionModelAssetGroupWorkResult', 'model/SubscriptionProvisionModelChangeEvent', 'model/SubscriptionProvisionModelServiceErrorDetails', 'model/UpdateMembershipRequest', 'model/UpdateResponse', 'model/UpdateUserEmailRequest', 'model/UpdateUserRequest', 'model/UpdateUsersEmailRequest', 'model/UpdateUsersRequest', 'model/UserDrilldownResponse', 'model/UserIdentityRequest', 'model/UserIdentityResponse', 'model/UserProductPermissionProfilesRequest', 'model/UserProductPermissionProfilesResponse', 'model/UserProductProfileDeleteRequest', 'model/UserUpdateResponse', 'model/UsersDrilldownResponse', 'model/UsersUpdateResponse', 'api/AccountsApi', 'api/BulkExportsApi', 'api/BulkImportsApi', 'api/DSGroupsApi', 'api/IdentityProvidersApi', 'api/OrganizationsApi', 'api/ProductPermissionProfilesApi', 'api/ProvisionAssetGroupApi', 'api/ReservedDomainsApi', 'api/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./Configuration'), require('./ApiClient'), require('./model/AddDSGroupAndUsersResponse'), require('./model/AddDSGroupUsersResponse'), require('./model/AddUserResponse'), require('./model/AddUserResponseAccountProperties'), require('./model/AddressInformation'), require('./model/AssetGroupAccountClone'), require('./model/AssetGroupAccountCloneSourceAccount'), require('./model/AssetGroupAccountCloneTargetAccount'), require('./model/AssetGroupAccountCloneTargetAccountAdmin'), require('./model/AssetGroupAccountClones'), require('./model/AssetGroupAccountResponse'), require('./model/AssetGroupAccountsResponse'), require('./model/CertificateResponse'), require('./model/DSGroupAddRequest'), require('./model/DSGroupAndUsersResponse'), require('./model/DSGroupListResponse'), require('./model/DSGroupRequest'), require('./model/DSGroupResponse'), require('./model/DSGroupUserResponse'), require('./model/DSGroupUsersAddRequest'), require('./model/DSGroupUsersRemoveRequest'), require('./model/DSGroupUsersResponse'), require('./model/DeleteMembershipRequest'), require('./model/DeleteMembershipResponse'), require('./model/DeleteMembershipsRequest'), require('./model/DeleteMembershipsResponse'), require('./model/DeleteResponse'), require('./model/DeleteUserIdentityRequest'), require('./model/DocuSignAccountDomainModelAddress'), require('./model/DomainResponse'), require('./model/DomainsResponse'), require('./model/ErrorDetails'), require('./model/ForceActivateMembershipRequest'), require('./model/GroupRequest'), require('./model/IdentityProviderResponse'), require('./model/IdentityProvidersResponse'), require('./model/IndividualMembershipDataRedactionRequest'), require('./model/IndividualUserDataRedactionRequest'), require('./model/IndividualUserDataRedactionResponse'), require('./model/LinkResponse'), require('./model/MemberGroupResponse'), require('./model/MemberGroupsResponse'), require('./model/MembershipDataRedactionRequest'), require('./model/MembershipDataRedactionResponse'), require('./model/MembershipResponse'), require('./model/NewAccountUserRequest'), require('./model/NewMultiProductUserAddRequest'), require('./model/NewUserRequest'), require('./model/NewUserRequestAccountProperties'), require('./model/NewUserResponse'), require('./model/NewUserResponseAccountProperties'), require('./model/OASIRRErrorDetails'), require('./model/OASIRROrganizationAccountSettingsErrorDataResponse'), require('./model/OETRErrorDetails'), require('./model/OSAMRContact'), require('./model/OrgExportSelectedAccount'), require('./model/OrgExportSelectedDomain'), require('./model/OrgReportConfigurationResponse'), require('./model/OrgReportCreateResponse'), require('./model/OrgReportListResponse'), require('./model/OrgReportListResponseOrgReport'), require('./model/OrgReportListResponseRequestor'), require('./model/OrgReportRequest'), require('./model/OrganizationAccountRequest'), require('./model/OrganizationAccountResponse'), require('./model/OrganizationAccountSettingsImportRequestorResponse'), require('./model/OrganizationAccountSettingsImportResponse'), require('./model/OrganizationAccountSettingsImportResultResponse'), require('./model/OrganizationAccountsRequest'), require('./model/OrganizationExportAccount'), require('./model/OrganizationExportDomain'), require('./model/OrganizationExportRequest'), require('./model/OrganizationExportRequestorResponse'), require('./model/OrganizationExportResponse'), require('./model/OrganizationExportTaskResponse'), require('./model/OrganizationExportsResponse'), require('./model/OrganizationImportResponse'), require('./model/OrganizationImportResponseErrorRollup'), require('./model/OrganizationImportResponseRequestor'), require('./model/OrganizationImportResponseWarningRollup'), require('./model/OrganizationImportsResponse'), require('./model/OrganizationResponse'), require('./model/OrganizationSalesforceAccountManagersResponse'), require('./model/OrganizationSimpleIdObject'), require('./model/OrganizationSubscriptionResponse'), require('./model/OrganizationUserResponse'), require('./model/OrganizationUsersResponse'), require('./model/OrganizationsResponse'), require('./model/PagingResponseProperties'), require('./model/PermissionProfileRequest'), require('./model/PermissionProfileResponse'), require('./model/PermissionProfileResponse21'), require('./model/PermissionsResponse'), require('./model/ProductPermissionProfileRequest'), require('./model/ProductPermissionProfileResponse'), require('./model/ProductPermissionProfilesRequest'), require('./model/ProductPermissionProfilesResponse'), require('./model/RemoveDSGroupUsersResponse'), require('./model/RemoveUserProductsResponse'), require('./model/RequiredAttributeMappingResponse'), require('./model/Saml2IdentityProviderResponse'), require('./model/SettingResponse'), require('./model/SubAccountCreateRequest'), require('./model/SubAccountCreateRequestSubAccountCreationSubscription'), require('./model/SubAccountCreateRequestSubAccountCreationTargetAccountAdmin'), require('./model/SubAccountCreateRequestSubAccountCreationTargetAccountDetails'), require('./model/SubAccountCreateSubscriptionDetails'), require('./model/SubAccountCreateSubscriptionModuleDetails'), require('./model/SubAccountCreateTargetAccount'), require('./model/SubAccountCreateTargetAccountAdmin'), require('./model/SubAccountCreateWorker'), require('./model/SubAccountCreateWorkerResponse'), require('./model/SubAccountErrorDetails'), require('./model/SubscriptionPlanItemResponse'), require('./model/SubscriptionProvisionModelAccountCreateAccountAdmin'), require('./model/SubscriptionProvisionModelAccountCreateCreateAccountDetails'), require('./model/SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails'), require('./model/SubscriptionProvisionModelAccountCreateCreateSubAccountDetails'), require('./model/SubscriptionProvisionModelAssetGroupWork'), require('./model/SubscriptionProvisionModelAssetGroupWorkResult'), require('./model/SubscriptionProvisionModelChangeEvent'), require('./model/SubscriptionProvisionModelServiceErrorDetails'), require('./model/UpdateMembershipRequest'), require('./model/UpdateResponse'), require('./model/UpdateUserEmailRequest'), require('./model/UpdateUserRequest'), require('./model/UpdateUsersEmailRequest'), require('./model/UpdateUsersRequest'), require('./model/UserDrilldownResponse'), require('./model/UserIdentityRequest'), require('./model/UserIdentityResponse'), require('./model/UserProductPermissionProfilesRequest'), require('./model/UserProductPermissionProfilesResponse'), require('./model/UserProductProfileDeleteRequest'), require('./model/UserUpdateResponse'), require('./model/UsersDrilldownResponse'), require('./model/UsersUpdateResponse'), require('./api/AccountsApi'), require('./api/BulkExportsApi'), require('./api/BulkImportsApi'), require('./api/DSGroupsApi'), require('./api/IdentityProvidersApi'), require('./api/OrganizationsApi'), require('./api/ProductPermissionProfilesApi'), require('./api/ProvisionAssetGroupApi'), require('./api/ReservedDomainsApi'), require('./api/UsersApi'));
  }
}(function(Configuration, ApiClient, AddDSGroupAndUsersResponse, AddDSGroupUsersResponse, AddUserResponse, AddUserResponseAccountProperties, AddressInformation, AssetGroupAccountClone, AssetGroupAccountCloneSourceAccount, AssetGroupAccountCloneTargetAccount, AssetGroupAccountCloneTargetAccountAdmin, AssetGroupAccountClones, AssetGroupAccountResponse, AssetGroupAccountsResponse, CertificateResponse, DSGroupAddRequest, DSGroupAndUsersResponse, DSGroupListResponse, DSGroupRequest, DSGroupResponse, DSGroupUserResponse, DSGroupUsersAddRequest, DSGroupUsersRemoveRequest, DSGroupUsersResponse, DeleteMembershipRequest, DeleteMembershipResponse, DeleteMembershipsRequest, DeleteMembershipsResponse, DeleteResponse, DeleteUserIdentityRequest, DocuSignAccountDomainModelAddress, DomainResponse, DomainsResponse, ErrorDetails, ForceActivateMembershipRequest, GroupRequest, IdentityProviderResponse, IdentityProvidersResponse, IndividualMembershipDataRedactionRequest, IndividualUserDataRedactionRequest, IndividualUserDataRedactionResponse, LinkResponse, MemberGroupResponse, MemberGroupsResponse, MembershipDataRedactionRequest, MembershipDataRedactionResponse, MembershipResponse, NewAccountUserRequest, NewMultiProductUserAddRequest, NewUserRequest, NewUserRequestAccountProperties, NewUserResponse, NewUserResponseAccountProperties, OASIRRErrorDetails, OASIRROrganizationAccountSettingsErrorDataResponse, OETRErrorDetails, OSAMRContact, OrgExportSelectedAccount, OrgExportSelectedDomain, OrgReportConfigurationResponse, OrgReportCreateResponse, OrgReportListResponse, OrgReportListResponseOrgReport, OrgReportListResponseRequestor, OrgReportRequest, OrganizationAccountRequest, OrganizationAccountResponse, OrganizationAccountSettingsImportRequestorResponse, OrganizationAccountSettingsImportResponse, OrganizationAccountSettingsImportResultResponse, OrganizationAccountsRequest, OrganizationExportAccount, OrganizationExportDomain, OrganizationExportRequest, OrganizationExportRequestorResponse, OrganizationExportResponse, OrganizationExportTaskResponse, OrganizationExportsResponse, OrganizationImportResponse, OrganizationImportResponseErrorRollup, OrganizationImportResponseRequestor, OrganizationImportResponseWarningRollup, OrganizationImportsResponse, OrganizationResponse, OrganizationSalesforceAccountManagersResponse, OrganizationSimpleIdObject, OrganizationSubscriptionResponse, OrganizationUserResponse, OrganizationUsersResponse, OrganizationsResponse, PagingResponseProperties, PermissionProfileRequest, PermissionProfileResponse, PermissionProfileResponse21, PermissionsResponse, ProductPermissionProfileRequest, ProductPermissionProfileResponse, ProductPermissionProfilesRequest, ProductPermissionProfilesResponse, RemoveDSGroupUsersResponse, RemoveUserProductsResponse, RequiredAttributeMappingResponse, Saml2IdentityProviderResponse, SettingResponse, SubAccountCreateRequest, SubAccountCreateRequestSubAccountCreationSubscription, SubAccountCreateRequestSubAccountCreationTargetAccountAdmin, SubAccountCreateRequestSubAccountCreationTargetAccountDetails, SubAccountCreateSubscriptionDetails, SubAccountCreateSubscriptionModuleDetails, SubAccountCreateTargetAccount, SubAccountCreateTargetAccountAdmin, SubAccountCreateWorker, SubAccountCreateWorkerResponse, SubAccountErrorDetails, SubscriptionPlanItemResponse, SubscriptionProvisionModelAccountCreateAccountAdmin, SubscriptionProvisionModelAccountCreateCreateAccountDetails, SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails, SubscriptionProvisionModelAccountCreateCreateSubAccountDetails, SubscriptionProvisionModelAssetGroupWork, SubscriptionProvisionModelAssetGroupWorkResult, SubscriptionProvisionModelChangeEvent, SubscriptionProvisionModelServiceErrorDetails, UpdateMembershipRequest, UpdateResponse, UpdateUserEmailRequest, UpdateUserRequest, UpdateUsersEmailRequest, UpdateUsersRequest, UserDrilldownResponse, UserIdentityRequest, UserIdentityResponse, UserProductPermissionProfilesRequest, UserProductPermissionProfilesResponse, UserProductProfileDeleteRequest, UserUpdateResponse, UsersDrilldownResponse, UsersUpdateResponse, AccountsApi, BulkExportsApi, BulkImportsApi, DSGroupsApi, IdentityProvidersApi, OrganizationsApi, ProductPermissionProfilesApi, ProvisionAssetGroupApi, ReservedDomainsApi, UsersApi) {
  'use strict';

  /**
   * The Docusign Admin API enables you to automate user management with your existing systems while ensuring governance and compliance..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var DocusignAdmin = require('index'); // See note below*.
   * var xxxSvc = new DocusignAdmin.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new DocusignAdmin.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new DocusignAdmin.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new DocusignAdmin.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   */
  var exports = {
	/**
	 * The configuration constructor.
	 * @property {module:Configuration}
	 */
	 Configuration: Configuration,
	/**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AddDSGroupAndUsersResponse model constructor.
     * @property {module:model/AddDSGroupAndUsersResponse}
     */
    AddDSGroupAndUsersResponse: AddDSGroupAndUsersResponse,
    /**
     * The AddDSGroupUsersResponse model constructor.
     * @property {module:model/AddDSGroupUsersResponse}
     */
    AddDSGroupUsersResponse: AddDSGroupUsersResponse,
    /**
     * The AddUserResponse model constructor.
     * @property {module:model/AddUserResponse}
     */
    AddUserResponse: AddUserResponse,
    /**
     * The AddUserResponseAccountProperties model constructor.
     * @property {module:model/AddUserResponseAccountProperties}
     */
    AddUserResponseAccountProperties: AddUserResponseAccountProperties,
    /**
     * The AddressInformation model constructor.
     * @property {module:model/AddressInformation}
     */
    AddressInformation: AddressInformation,
    /**
     * The AssetGroupAccountClone model constructor.
     * @property {module:model/AssetGroupAccountClone}
     */
    AssetGroupAccountClone: AssetGroupAccountClone,
    /**
     * The AssetGroupAccountCloneSourceAccount model constructor.
     * @property {module:model/AssetGroupAccountCloneSourceAccount}
     */
    AssetGroupAccountCloneSourceAccount: AssetGroupAccountCloneSourceAccount,
    /**
     * The AssetGroupAccountCloneTargetAccount model constructor.
     * @property {module:model/AssetGroupAccountCloneTargetAccount}
     */
    AssetGroupAccountCloneTargetAccount: AssetGroupAccountCloneTargetAccount,
    /**
     * The AssetGroupAccountCloneTargetAccountAdmin model constructor.
     * @property {module:model/AssetGroupAccountCloneTargetAccountAdmin}
     */
    AssetGroupAccountCloneTargetAccountAdmin: AssetGroupAccountCloneTargetAccountAdmin,
    /**
     * The AssetGroupAccountClones model constructor.
     * @property {module:model/AssetGroupAccountClones}
     */
    AssetGroupAccountClones: AssetGroupAccountClones,
    /**
     * The AssetGroupAccountResponse model constructor.
     * @property {module:model/AssetGroupAccountResponse}
     */
    AssetGroupAccountResponse: AssetGroupAccountResponse,
    /**
     * The AssetGroupAccountsResponse model constructor.
     * @property {module:model/AssetGroupAccountsResponse}
     */
    AssetGroupAccountsResponse: AssetGroupAccountsResponse,
    /**
     * The CertificateResponse model constructor.
     * @property {module:model/CertificateResponse}
     */
    CertificateResponse: CertificateResponse,
    /**
     * The DSGroupAddRequest model constructor.
     * @property {module:model/DSGroupAddRequest}
     */
    DSGroupAddRequest: DSGroupAddRequest,
    /**
     * The DSGroupAndUsersResponse model constructor.
     * @property {module:model/DSGroupAndUsersResponse}
     */
    DSGroupAndUsersResponse: DSGroupAndUsersResponse,
    /**
     * The DSGroupListResponse model constructor.
     * @property {module:model/DSGroupListResponse}
     */
    DSGroupListResponse: DSGroupListResponse,
    /**
     * The DSGroupRequest model constructor.
     * @property {module:model/DSGroupRequest}
     */
    DSGroupRequest: DSGroupRequest,
    /**
     * The DSGroupResponse model constructor.
     * @property {module:model/DSGroupResponse}
     */
    DSGroupResponse: DSGroupResponse,
    /**
     * The DSGroupUserResponse model constructor.
     * @property {module:model/DSGroupUserResponse}
     */
    DSGroupUserResponse: DSGroupUserResponse,
    /**
     * The DSGroupUsersAddRequest model constructor.
     * @property {module:model/DSGroupUsersAddRequest}
     */
    DSGroupUsersAddRequest: DSGroupUsersAddRequest,
    /**
     * The DSGroupUsersRemoveRequest model constructor.
     * @property {module:model/DSGroupUsersRemoveRequest}
     */
    DSGroupUsersRemoveRequest: DSGroupUsersRemoveRequest,
    /**
     * The DSGroupUsersResponse model constructor.
     * @property {module:model/DSGroupUsersResponse}
     */
    DSGroupUsersResponse: DSGroupUsersResponse,
    /**
     * The DeleteMembershipRequest model constructor.
     * @property {module:model/DeleteMembershipRequest}
     */
    DeleteMembershipRequest: DeleteMembershipRequest,
    /**
     * The DeleteMembershipResponse model constructor.
     * @property {module:model/DeleteMembershipResponse}
     */
    DeleteMembershipResponse: DeleteMembershipResponse,
    /**
     * The DeleteMembershipsRequest model constructor.
     * @property {module:model/DeleteMembershipsRequest}
     */
    DeleteMembershipsRequest: DeleteMembershipsRequest,
    /**
     * The DeleteMembershipsResponse model constructor.
     * @property {module:model/DeleteMembershipsResponse}
     */
    DeleteMembershipsResponse: DeleteMembershipsResponse,
    /**
     * The DeleteResponse model constructor.
     * @property {module:model/DeleteResponse}
     */
    DeleteResponse: DeleteResponse,
    /**
     * The DeleteUserIdentityRequest model constructor.
     * @property {module:model/DeleteUserIdentityRequest}
     */
    DeleteUserIdentityRequest: DeleteUserIdentityRequest,
    /**
     * The DocuSignAccountDomainModelAddress model constructor.
     * @property {module:model/DocuSignAccountDomainModelAddress}
     */
    DocuSignAccountDomainModelAddress: DocuSignAccountDomainModelAddress,
    /**
     * The DomainResponse model constructor.
     * @property {module:model/DomainResponse}
     */
    DomainResponse: DomainResponse,
    /**
     * The DomainsResponse model constructor.
     * @property {module:model/DomainsResponse}
     */
    DomainsResponse: DomainsResponse,
    /**
     * The ErrorDetails model constructor.
     * @property {module:model/ErrorDetails}
     */
    ErrorDetails: ErrorDetails,
    /**
     * The ForceActivateMembershipRequest model constructor.
     * @property {module:model/ForceActivateMembershipRequest}
     */
    ForceActivateMembershipRequest: ForceActivateMembershipRequest,
    /**
     * The GroupRequest model constructor.
     * @property {module:model/GroupRequest}
     */
    GroupRequest: GroupRequest,
    /**
     * The IdentityProviderResponse model constructor.
     * @property {module:model/IdentityProviderResponse}
     */
    IdentityProviderResponse: IdentityProviderResponse,
    /**
     * The IdentityProvidersResponse model constructor.
     * @property {module:model/IdentityProvidersResponse}
     */
    IdentityProvidersResponse: IdentityProvidersResponse,
    /**
     * The IndividualMembershipDataRedactionRequest model constructor.
     * @property {module:model/IndividualMembershipDataRedactionRequest}
     */
    IndividualMembershipDataRedactionRequest: IndividualMembershipDataRedactionRequest,
    /**
     * The IndividualUserDataRedactionRequest model constructor.
     * @property {module:model/IndividualUserDataRedactionRequest}
     */
    IndividualUserDataRedactionRequest: IndividualUserDataRedactionRequest,
    /**
     * The IndividualUserDataRedactionResponse model constructor.
     * @property {module:model/IndividualUserDataRedactionResponse}
     */
    IndividualUserDataRedactionResponse: IndividualUserDataRedactionResponse,
    /**
     * The LinkResponse model constructor.
     * @property {module:model/LinkResponse}
     */
    LinkResponse: LinkResponse,
    /**
     * The MemberGroupResponse model constructor.
     * @property {module:model/MemberGroupResponse}
     */
    MemberGroupResponse: MemberGroupResponse,
    /**
     * The MemberGroupsResponse model constructor.
     * @property {module:model/MemberGroupsResponse}
     */
    MemberGroupsResponse: MemberGroupsResponse,
    /**
     * The MembershipDataRedactionRequest model constructor.
     * @property {module:model/MembershipDataRedactionRequest}
     */
    MembershipDataRedactionRequest: MembershipDataRedactionRequest,
    /**
     * The MembershipDataRedactionResponse model constructor.
     * @property {module:model/MembershipDataRedactionResponse}
     */
    MembershipDataRedactionResponse: MembershipDataRedactionResponse,
    /**
     * The MembershipResponse model constructor.
     * @property {module:model/MembershipResponse}
     */
    MembershipResponse: MembershipResponse,
    /**
     * The NewAccountUserRequest model constructor.
     * @property {module:model/NewAccountUserRequest}
     */
    NewAccountUserRequest: NewAccountUserRequest,
    /**
     * The NewMultiProductUserAddRequest model constructor.
     * @property {module:model/NewMultiProductUserAddRequest}
     */
    NewMultiProductUserAddRequest: NewMultiProductUserAddRequest,
    /**
     * The NewUserRequest model constructor.
     * @property {module:model/NewUserRequest}
     */
    NewUserRequest: NewUserRequest,
    /**
     * The NewUserRequestAccountProperties model constructor.
     * @property {module:model/NewUserRequestAccountProperties}
     */
    NewUserRequestAccountProperties: NewUserRequestAccountProperties,
    /**
     * The NewUserResponse model constructor.
     * @property {module:model/NewUserResponse}
     */
    NewUserResponse: NewUserResponse,
    /**
     * The NewUserResponseAccountProperties model constructor.
     * @property {module:model/NewUserResponseAccountProperties}
     */
    NewUserResponseAccountProperties: NewUserResponseAccountProperties,
    /**
     * The OASIRRErrorDetails model constructor.
     * @property {module:model/OASIRRErrorDetails}
     */
    OASIRRErrorDetails: OASIRRErrorDetails,
    /**
     * The OASIRROrganizationAccountSettingsErrorDataResponse model constructor.
     * @property {module:model/OASIRROrganizationAccountSettingsErrorDataResponse}
     */
    OASIRROrganizationAccountSettingsErrorDataResponse: OASIRROrganizationAccountSettingsErrorDataResponse,
    /**
     * The OETRErrorDetails model constructor.
     * @property {module:model/OETRErrorDetails}
     */
    OETRErrorDetails: OETRErrorDetails,
    /**
     * The OSAMRContact model constructor.
     * @property {module:model/OSAMRContact}
     */
    OSAMRContact: OSAMRContact,
    /**
     * The OrgExportSelectedAccount model constructor.
     * @property {module:model/OrgExportSelectedAccount}
     */
    OrgExportSelectedAccount: OrgExportSelectedAccount,
    /**
     * The OrgExportSelectedDomain model constructor.
     * @property {module:model/OrgExportSelectedDomain}
     */
    OrgExportSelectedDomain: OrgExportSelectedDomain,
    /**
     * The OrgReportConfigurationResponse model constructor.
     * @property {module:model/OrgReportConfigurationResponse}
     */
    OrgReportConfigurationResponse: OrgReportConfigurationResponse,
    /**
     * The OrgReportCreateResponse model constructor.
     * @property {module:model/OrgReportCreateResponse}
     */
    OrgReportCreateResponse: OrgReportCreateResponse,
    /**
     * The OrgReportListResponse model constructor.
     * @property {module:model/OrgReportListResponse}
     */
    OrgReportListResponse: OrgReportListResponse,
    /**
     * The OrgReportListResponseOrgReport model constructor.
     * @property {module:model/OrgReportListResponseOrgReport}
     */
    OrgReportListResponseOrgReport: OrgReportListResponseOrgReport,
    /**
     * The OrgReportListResponseRequestor model constructor.
     * @property {module:model/OrgReportListResponseRequestor}
     */
    OrgReportListResponseRequestor: OrgReportListResponseRequestor,
    /**
     * The OrgReportRequest model constructor.
     * @property {module:model/OrgReportRequest}
     */
    OrgReportRequest: OrgReportRequest,
    /**
     * The OrganizationAccountRequest model constructor.
     * @property {module:model/OrganizationAccountRequest}
     */
    OrganizationAccountRequest: OrganizationAccountRequest,
    /**
     * The OrganizationAccountResponse model constructor.
     * @property {module:model/OrganizationAccountResponse}
     */
    OrganizationAccountResponse: OrganizationAccountResponse,
    /**
     * The OrganizationAccountSettingsImportRequestorResponse model constructor.
     * @property {module:model/OrganizationAccountSettingsImportRequestorResponse}
     */
    OrganizationAccountSettingsImportRequestorResponse: OrganizationAccountSettingsImportRequestorResponse,
    /**
     * The OrganizationAccountSettingsImportResponse model constructor.
     * @property {module:model/OrganizationAccountSettingsImportResponse}
     */
    OrganizationAccountSettingsImportResponse: OrganizationAccountSettingsImportResponse,
    /**
     * The OrganizationAccountSettingsImportResultResponse model constructor.
     * @property {module:model/OrganizationAccountSettingsImportResultResponse}
     */
    OrganizationAccountSettingsImportResultResponse: OrganizationAccountSettingsImportResultResponse,
    /**
     * The OrganizationAccountsRequest model constructor.
     * @property {module:model/OrganizationAccountsRequest}
     */
    OrganizationAccountsRequest: OrganizationAccountsRequest,
    /**
     * The OrganizationExportAccount model constructor.
     * @property {module:model/OrganizationExportAccount}
     */
    OrganizationExportAccount: OrganizationExportAccount,
    /**
     * The OrganizationExportDomain model constructor.
     * @property {module:model/OrganizationExportDomain}
     */
    OrganizationExportDomain: OrganizationExportDomain,
    /**
     * The OrganizationExportRequest model constructor.
     * @property {module:model/OrganizationExportRequest}
     */
    OrganizationExportRequest: OrganizationExportRequest,
    /**
     * The OrganizationExportRequestorResponse model constructor.
     * @property {module:model/OrganizationExportRequestorResponse}
     */
    OrganizationExportRequestorResponse: OrganizationExportRequestorResponse,
    /**
     * The OrganizationExportResponse model constructor.
     * @property {module:model/OrganizationExportResponse}
     */
    OrganizationExportResponse: OrganizationExportResponse,
    /**
     * The OrganizationExportTaskResponse model constructor.
     * @property {module:model/OrganizationExportTaskResponse}
     */
    OrganizationExportTaskResponse: OrganizationExportTaskResponse,
    /**
     * The OrganizationExportsResponse model constructor.
     * @property {module:model/OrganizationExportsResponse}
     */
    OrganizationExportsResponse: OrganizationExportsResponse,
    /**
     * The OrganizationImportResponse model constructor.
     * @property {module:model/OrganizationImportResponse}
     */
    OrganizationImportResponse: OrganizationImportResponse,
    /**
     * The OrganizationImportResponseErrorRollup model constructor.
     * @property {module:model/OrganizationImportResponseErrorRollup}
     */
    OrganizationImportResponseErrorRollup: OrganizationImportResponseErrorRollup,
    /**
     * The OrganizationImportResponseRequestor model constructor.
     * @property {module:model/OrganizationImportResponseRequestor}
     */
    OrganizationImportResponseRequestor: OrganizationImportResponseRequestor,
    /**
     * The OrganizationImportResponseWarningRollup model constructor.
     * @property {module:model/OrganizationImportResponseWarningRollup}
     */
    OrganizationImportResponseWarningRollup: OrganizationImportResponseWarningRollup,
    /**
     * The OrganizationImportsResponse model constructor.
     * @property {module:model/OrganizationImportsResponse}
     */
    OrganizationImportsResponse: OrganizationImportsResponse,
    /**
     * The OrganizationResponse model constructor.
     * @property {module:model/OrganizationResponse}
     */
    OrganizationResponse: OrganizationResponse,
    /**
     * The OrganizationSalesforceAccountManagersResponse model constructor.
     * @property {module:model/OrganizationSalesforceAccountManagersResponse}
     */
    OrganizationSalesforceAccountManagersResponse: OrganizationSalesforceAccountManagersResponse,
    /**
     * The OrganizationSimpleIdObject model constructor.
     * @property {module:model/OrganizationSimpleIdObject}
     */
    OrganizationSimpleIdObject: OrganizationSimpleIdObject,
    /**
     * The OrganizationSubscriptionResponse model constructor.
     * @property {module:model/OrganizationSubscriptionResponse}
     */
    OrganizationSubscriptionResponse: OrganizationSubscriptionResponse,
    /**
     * The OrganizationUserResponse model constructor.
     * @property {module:model/OrganizationUserResponse}
     */
    OrganizationUserResponse: OrganizationUserResponse,
    /**
     * The OrganizationUsersResponse model constructor.
     * @property {module:model/OrganizationUsersResponse}
     */
    OrganizationUsersResponse: OrganizationUsersResponse,
    /**
     * The OrganizationsResponse model constructor.
     * @property {module:model/OrganizationsResponse}
     */
    OrganizationsResponse: OrganizationsResponse,
    /**
     * The PagingResponseProperties model constructor.
     * @property {module:model/PagingResponseProperties}
     */
    PagingResponseProperties: PagingResponseProperties,
    /**
     * The PermissionProfileRequest model constructor.
     * @property {module:model/PermissionProfileRequest}
     */
    PermissionProfileRequest: PermissionProfileRequest,
    /**
     * The PermissionProfileResponse model constructor.
     * @property {module:model/PermissionProfileResponse}
     */
    PermissionProfileResponse: PermissionProfileResponse,
    /**
     * The PermissionProfileResponse21 model constructor.
     * @property {module:model/PermissionProfileResponse21}
     */
    PermissionProfileResponse21: PermissionProfileResponse21,
    /**
     * The PermissionsResponse model constructor.
     * @property {module:model/PermissionsResponse}
     */
    PermissionsResponse: PermissionsResponse,
    /**
     * The ProductPermissionProfileRequest model constructor.
     * @property {module:model/ProductPermissionProfileRequest}
     */
    ProductPermissionProfileRequest: ProductPermissionProfileRequest,
    /**
     * The ProductPermissionProfileResponse model constructor.
     * @property {module:model/ProductPermissionProfileResponse}
     */
    ProductPermissionProfileResponse: ProductPermissionProfileResponse,
    /**
     * The ProductPermissionProfilesRequest model constructor.
     * @property {module:model/ProductPermissionProfilesRequest}
     */
    ProductPermissionProfilesRequest: ProductPermissionProfilesRequest,
    /**
     * The ProductPermissionProfilesResponse model constructor.
     * @property {module:model/ProductPermissionProfilesResponse}
     */
    ProductPermissionProfilesResponse: ProductPermissionProfilesResponse,
    /**
     * The RemoveDSGroupUsersResponse model constructor.
     * @property {module:model/RemoveDSGroupUsersResponse}
     */
    RemoveDSGroupUsersResponse: RemoveDSGroupUsersResponse,
    /**
     * The RemoveUserProductsResponse model constructor.
     * @property {module:model/RemoveUserProductsResponse}
     */
    RemoveUserProductsResponse: RemoveUserProductsResponse,
    /**
     * The RequiredAttributeMappingResponse model constructor.
     * @property {module:model/RequiredAttributeMappingResponse}
     */
    RequiredAttributeMappingResponse: RequiredAttributeMappingResponse,
    /**
     * The Saml2IdentityProviderResponse model constructor.
     * @property {module:model/Saml2IdentityProviderResponse}
     */
    Saml2IdentityProviderResponse: Saml2IdentityProviderResponse,
    /**
     * The SettingResponse model constructor.
     * @property {module:model/SettingResponse}
     */
    SettingResponse: SettingResponse,
    /**
     * The SubAccountCreateRequest model constructor.
     * @property {module:model/SubAccountCreateRequest}
     */
    SubAccountCreateRequest: SubAccountCreateRequest,
    /**
     * The SubAccountCreateRequestSubAccountCreationSubscription model constructor.
     * @property {module:model/SubAccountCreateRequestSubAccountCreationSubscription}
     */
    SubAccountCreateRequestSubAccountCreationSubscription: SubAccountCreateRequestSubAccountCreationSubscription,
    /**
     * The SubAccountCreateRequestSubAccountCreationTargetAccountAdmin model constructor.
     * @property {module:model/SubAccountCreateRequestSubAccountCreationTargetAccountAdmin}
     */
    SubAccountCreateRequestSubAccountCreationTargetAccountAdmin: SubAccountCreateRequestSubAccountCreationTargetAccountAdmin,
    /**
     * The SubAccountCreateRequestSubAccountCreationTargetAccountDetails model constructor.
     * @property {module:model/SubAccountCreateRequestSubAccountCreationTargetAccountDetails}
     */
    SubAccountCreateRequestSubAccountCreationTargetAccountDetails: SubAccountCreateRequestSubAccountCreationTargetAccountDetails,
    /**
     * The SubAccountCreateSubscriptionDetails model constructor.
     * @property {module:model/SubAccountCreateSubscriptionDetails}
     */
    SubAccountCreateSubscriptionDetails: SubAccountCreateSubscriptionDetails,
    /**
     * The SubAccountCreateSubscriptionModuleDetails model constructor.
     * @property {module:model/SubAccountCreateSubscriptionModuleDetails}
     */
    SubAccountCreateSubscriptionModuleDetails: SubAccountCreateSubscriptionModuleDetails,
    /**
     * The SubAccountCreateTargetAccount model constructor.
     * @property {module:model/SubAccountCreateTargetAccount}
     */
    SubAccountCreateTargetAccount: SubAccountCreateTargetAccount,
    /**
     * The SubAccountCreateTargetAccountAdmin model constructor.
     * @property {module:model/SubAccountCreateTargetAccountAdmin}
     */
    SubAccountCreateTargetAccountAdmin: SubAccountCreateTargetAccountAdmin,
    /**
     * The SubAccountCreateWorker model constructor.
     * @property {module:model/SubAccountCreateWorker}
     */
    SubAccountCreateWorker: SubAccountCreateWorker,
    /**
     * The SubAccountCreateWorkerResponse model constructor.
     * @property {module:model/SubAccountCreateWorkerResponse}
     */
    SubAccountCreateWorkerResponse: SubAccountCreateWorkerResponse,
    /**
     * The SubAccountErrorDetails model constructor.
     * @property {module:model/SubAccountErrorDetails}
     */
    SubAccountErrorDetails: SubAccountErrorDetails,
    /**
     * The SubscriptionPlanItemResponse model constructor.
     * @property {module:model/SubscriptionPlanItemResponse}
     */
    SubscriptionPlanItemResponse: SubscriptionPlanItemResponse,
    /**
     * The SubscriptionProvisionModelAccountCreateAccountAdmin model constructor.
     * @property {module:model/SubscriptionProvisionModelAccountCreateAccountAdmin}
     */
    SubscriptionProvisionModelAccountCreateAccountAdmin: SubscriptionProvisionModelAccountCreateAccountAdmin,
    /**
     * The SubscriptionProvisionModelAccountCreateCreateAccountDetails model constructor.
     * @property {module:model/SubscriptionProvisionModelAccountCreateCreateAccountDetails}
     */
    SubscriptionProvisionModelAccountCreateCreateAccountDetails: SubscriptionProvisionModelAccountCreateCreateAccountDetails,
    /**
     * The SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails model constructor.
     * @property {module:model/SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails}
     */
    SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails: SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails,
    /**
     * The SubscriptionProvisionModelAccountCreateCreateSubAccountDetails model constructor.
     * @property {module:model/SubscriptionProvisionModelAccountCreateCreateSubAccountDetails}
     */
    SubscriptionProvisionModelAccountCreateCreateSubAccountDetails: SubscriptionProvisionModelAccountCreateCreateSubAccountDetails,
    /**
     * The SubscriptionProvisionModelAssetGroupWork model constructor.
     * @property {module:model/SubscriptionProvisionModelAssetGroupWork}
     */
    SubscriptionProvisionModelAssetGroupWork: SubscriptionProvisionModelAssetGroupWork,
    /**
     * The SubscriptionProvisionModelAssetGroupWorkResult model constructor.
     * @property {module:model/SubscriptionProvisionModelAssetGroupWorkResult}
     */
    SubscriptionProvisionModelAssetGroupWorkResult: SubscriptionProvisionModelAssetGroupWorkResult,
    /**
     * The SubscriptionProvisionModelChangeEvent model constructor.
     * @property {module:model/SubscriptionProvisionModelChangeEvent}
     */
    SubscriptionProvisionModelChangeEvent: SubscriptionProvisionModelChangeEvent,
    /**
     * The SubscriptionProvisionModelServiceErrorDetails model constructor.
     * @property {module:model/SubscriptionProvisionModelServiceErrorDetails}
     */
    SubscriptionProvisionModelServiceErrorDetails: SubscriptionProvisionModelServiceErrorDetails,
    /**
     * The UpdateMembershipRequest model constructor.
     * @property {module:model/UpdateMembershipRequest}
     */
    UpdateMembershipRequest: UpdateMembershipRequest,
    /**
     * The UpdateResponse model constructor.
     * @property {module:model/UpdateResponse}
     */
    UpdateResponse: UpdateResponse,
    /**
     * The UpdateUserEmailRequest model constructor.
     * @property {module:model/UpdateUserEmailRequest}
     */
    UpdateUserEmailRequest: UpdateUserEmailRequest,
    /**
     * The UpdateUserRequest model constructor.
     * @property {module:model/UpdateUserRequest}
     */
    UpdateUserRequest: UpdateUserRequest,
    /**
     * The UpdateUsersEmailRequest model constructor.
     * @property {module:model/UpdateUsersEmailRequest}
     */
    UpdateUsersEmailRequest: UpdateUsersEmailRequest,
    /**
     * The UpdateUsersRequest model constructor.
     * @property {module:model/UpdateUsersRequest}
     */
    UpdateUsersRequest: UpdateUsersRequest,
    /**
     * The UserDrilldownResponse model constructor.
     * @property {module:model/UserDrilldownResponse}
     */
    UserDrilldownResponse: UserDrilldownResponse,
    /**
     * The UserIdentityRequest model constructor.
     * @property {module:model/UserIdentityRequest}
     */
    UserIdentityRequest: UserIdentityRequest,
    /**
     * The UserIdentityResponse model constructor.
     * @property {module:model/UserIdentityResponse}
     */
    UserIdentityResponse: UserIdentityResponse,
    /**
     * The UserProductPermissionProfilesRequest model constructor.
     * @property {module:model/UserProductPermissionProfilesRequest}
     */
    UserProductPermissionProfilesRequest: UserProductPermissionProfilesRequest,
    /**
     * The UserProductPermissionProfilesResponse model constructor.
     * @property {module:model/UserProductPermissionProfilesResponse}
     */
    UserProductPermissionProfilesResponse: UserProductPermissionProfilesResponse,
    /**
     * The UserProductProfileDeleteRequest model constructor.
     * @property {module:model/UserProductProfileDeleteRequest}
     */
    UserProductProfileDeleteRequest: UserProductProfileDeleteRequest,
    /**
     * The UserUpdateResponse model constructor.
     * @property {module:model/UserUpdateResponse}
     */
    UserUpdateResponse: UserUpdateResponse,
    /**
     * The UsersDrilldownResponse model constructor.
     * @property {module:model/UsersDrilldownResponse}
     */
    UsersDrilldownResponse: UsersDrilldownResponse,
    /**
     * The UsersUpdateResponse model constructor.
     * @property {module:model/UsersUpdateResponse}
     */
    UsersUpdateResponse: UsersUpdateResponse,
    /**
     * The AccountsApi service constructor.
     * @property {module:api/AccountsApi}
     */
    AccountsApi: AccountsApi,
    /**
     * The BulkExportsApi service constructor.
     * @property {module:api/BulkExportsApi}
     */
    BulkExportsApi: BulkExportsApi,
    /**
     * The BulkImportsApi service constructor.
     * @property {module:api/BulkImportsApi}
     */
    BulkImportsApi: BulkImportsApi,
    /**
     * The DSGroupsApi service constructor.
     * @property {module:api/DSGroupsApi}
     */
    DSGroupsApi: DSGroupsApi,
    /**
     * The IdentityProvidersApi service constructor.
     * @property {module:api/IdentityProvidersApi}
     */
    IdentityProvidersApi: IdentityProvidersApi,
    /**
     * The OrganizationsApi service constructor.
     * @property {module:api/OrganizationsApi}
     */
    OrganizationsApi: OrganizationsApi,
    /**
     * The ProductPermissionProfilesApi service constructor.
     * @property {module:api/ProductPermissionProfilesApi}
     */
    ProductPermissionProfilesApi: ProductPermissionProfilesApi,
    /**
     * The ProvisionAssetGroupApi service constructor.
     * @property {module:api/ProvisionAssetGroupApi}
     */
    ProvisionAssetGroupApi: ProvisionAssetGroupApi,
    /**
     * The ReservedDomainsApi service constructor.
     * @property {module:api/ReservedDomainsApi}
     */
    ReservedDomainsApi: ReservedDomainsApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi
  };

  return exports;
}));