// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="introduction.html">How to Read This Book</a></span></li><li class="chapter-item expanded "><li class="part-title">Authorization Server</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain.html"><strong aria-hidden="true">2.</strong> Domain</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/scopes.html"><strong aria-hidden="true">2.1.</strong> Scopes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/signing-key.html"><strong aria-hidden="true">2.2.</strong> Signing Key</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/browser-session.html"><strong aria-hidden="true">2.3.</strong> Browser Session</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/access-token.html"><strong aria-hidden="true">2.4.</strong> Access Token</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/client-credentials.html"><strong aria-hidden="true">2.5.</strong> Client Credentials</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/client.html"><strong aria-hidden="true">2.6.</strong> Client</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/grant.html"><strong aria-hidden="true">2.7.</strong> Grant</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/launch-context.html"><strong aria-hidden="true">2.8.</strong> Launch Context</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/authorization-request.html"><strong aria-hidden="true">2.9.</strong> Authorization Request</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/authorization-request/code-request.html"><strong aria-hidden="true">2.9.1.</strong> Code Request</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/authorization-request/polled-requests.html"><strong aria-hidden="true">2.9.2.</strong> Polled Requests</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/authorization-request/session-widening.html"><strong aria-hidden="true">2.9.3.</strong> Session Widening</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/errors.html"><strong aria-hidden="true">2.10.</strong> Errors</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/authorization-code.html"><strong aria-hidden="true">2.11.</strong> Authorization Code</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/refresh-token.html"><strong aria-hidden="true">2.12.</strong> Refresh Token</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/owner-prompt.html"><strong aria-hidden="true">2.13.</strong> Owner Prompt</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/retention.html"><strong aria-hidden="true">2.14.</strong> Retention</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/same-device-sign-in-codes.html"><strong aria-hidden="true">2.15.</strong> Same-Device Sign-In Codes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/session-housekeeping.html"><strong aria-hidden="true">2.16.</strong> Session Housekeeping</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/source-guards.html"><strong aria-hidden="true">2.17.</strong> Source Guards</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/domain/test-fixtures.html"><strong aria-hidden="true">2.18.</strong> Test Fixtures</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/grant-store.html"><strong aria-hidden="true">3.</strong> Grant Store</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/grant-store/clients.html"><strong aria-hidden="true">3.1.</strong> Clients</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/grant-store/browser-sessions.html"><strong aria-hidden="true">3.2.</strong> Browser Sessions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/grant-store/authorization-requests.html"><strong aria-hidden="true">3.3.</strong> Authorization Requests</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/grant-store/launch-contexts.html"><strong aria-hidden="true">3.4.</strong> Launch Contexts</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/grant-store/grants.html"><strong aria-hidden="true">3.5.</strong> Grants</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/grant-store/authorization-codes.html"><strong aria-hidden="true">3.6.</strong> Authorization Codes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/grant-store/refresh-tokens.html"><strong aria-hidden="true">3.7.</strong> Refresh Tokens</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/grant-store/signing-keys.html"><strong aria-hidden="true">3.8.</strong> Signing Keys</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/grant-store/test-fake.html"><strong aria-hidden="true">3.9.</strong> Test Fake</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/authority.html"><strong aria-hidden="true">4.</strong> Authority</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/authority/authenticated-client.html"><strong aria-hidden="true">4.1.</strong> Authenticated Client</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/authority/delegated-scopes.html"><strong aria-hidden="true">4.2.</strong> Delegated Scopes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/authority/standing-grant.html"><strong aria-hidden="true">4.3.</strong> Standing Grant</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/authority/redemption.html"><strong aria-hidden="true">4.4.</strong> Redemption</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/authority/same-device-sign-in.html"><strong aria-hidden="true">4.5.</strong> Same-Device Sign-In</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/authority/browser-pairing.html"><strong aria-hidden="true">4.6.</strong> Browser Pairing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/authority/session-widening.html"><strong aria-hidden="true">4.7.</strong> Session Widening</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/authority/token-entitlement.html"><strong aria-hidden="true">4.8.</strong> Token Entitlement</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/authority/test-fixtures.html"><strong aria-hidden="true">4.9.</strong> Test Fixtures</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/writers.html"><strong aria-hidden="true">5.</strong> Writers</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/writers/request-approver.html"><strong aria-hidden="true">5.1.</strong> Request Approver</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/writers/grant-recorder.html"><strong aria-hidden="true">5.2.</strong> Grant Recorder</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/writers/refresh-family-writer.html"><strong aria-hidden="true">5.3.</strong> Refresh Family Writer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/writers/access-token-minter.html"><strong aria-hidden="true">5.4.</strong> Access Token Minter</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/writers/browser-session-writer.html"><strong aria-hidden="true">5.5.</strong> Browser Session Writer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/writers/test-fixtures.html"><strong aria-hidden="true">5.6.</strong> Test Fixtures</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities.html"><strong aria-hidden="true">6.</strong> Capabilities</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/access.html"><strong aria-hidden="true">6.1.</strong> Access</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/access/consents.html"><strong aria-hidden="true">6.1.1.</strong> Consents</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/access/oauth-consents.html"><strong aria-hidden="true">6.1.2.</strong> OAuth Consents</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/access/device-consents.html"><strong aria-hidden="true">6.1.3.</strong> Device Consents</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/access/session-widening-consents.html"><strong aria-hidden="true">6.1.4.</strong> Session Widening Consents</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/access/grants.html"><strong aria-hidden="true">6.1.5.</strong> Grants</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/access/clients.html"><strong aria-hidden="true">6.1.6.</strong> Clients</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/access/browser-sessions.html"><strong aria-hidden="true">6.1.7.</strong> Browser Sessions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/access/tokens.html"><strong aria-hidden="true">6.1.8.</strong> Tokens</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/oauth.html"><strong aria-hidden="true">6.2.</strong> OAuth</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/oauth/launch-contexts.html"><strong aria-hidden="true">6.2.1.</strong> Launch Contexts</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/oauth/code-authorization-starter.html"><strong aria-hidden="true">6.2.2.</strong> Code Authorization Starter</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/oauth/authorization-status-reader.html"><strong aria-hidden="true">6.2.3.</strong> Authorization Status Reader</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/oauth/session-shortfall.html"><strong aria-hidden="true">6.2.4.</strong> Session Shortfall</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/oauth/session-widening.html"><strong aria-hidden="true">6.2.5.</strong> Session Widening</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/oauth/client-authenticator.html"><strong aria-hidden="true">6.2.6.</strong> Client Authenticator</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/oauth/device-authorizer.html"><strong aria-hidden="true">6.2.7.</strong> Device Authorizer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/oauth/browser-pairing.html"><strong aria-hidden="true">6.2.8.</strong> Browser Pairing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/oauth/same-device-sign-in.html"><strong aria-hidden="true">6.2.9.</strong> Same-Device Sign-In</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/oauth/token-exchanger.html"><strong aria-hidden="true">6.2.10.</strong> Token Exchanger</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/oauth/client-token-revoker.html"><strong aria-hidden="true">6.2.11.</strong> Client Token Revoker</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/oauth/public-keys-reader.html"><strong aria-hidden="true">6.2.12.</strong> Public Keys Reader</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/session.html"><strong aria-hidden="true">6.3.</strong> Session</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/session/token-verifier.html"><strong aria-hidden="true">6.3.1.</strong> Token Verifier</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/session/session-reader.html"><strong aria-hidden="true">6.3.2.</strong> Session Reader</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/session/session-ender.html"><strong aria-hidden="true">6.3.3.</strong> Session Ender</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/session/browser-session-ender.html"><strong aria-hidden="true">6.3.4.</strong> Browser Session Ender</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/session/browser-session-use-recorder.html"><strong aria-hidden="true">6.3.5.</strong> Browser Session Use Recorder</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/capabilities/test-fixtures.html"><strong aria-hidden="true">6.4.</strong> Test Fixtures</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http.html"><strong aria-hidden="true">7.</strong> HTTP</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http/browser-session-cookie.html"><strong aria-hidden="true">7.1.</strong> Browser Session Cookie</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http/errors-and-wire-shapes.html"><strong aria-hidden="true">7.2.</strong> Errors and Wire Shapes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http/extractors.html"><strong aria-hidden="true">7.3.</strong> Extractors</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http/middleware.html"><strong aria-hidden="true">7.4.</strong> Middleware</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http/routes.html"><strong aria-hidden="true">7.5.</strong> Routes</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http/routes/oauth-router.html"><strong aria-hidden="true">7.5.1.</strong> OAuth Router</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http/routes/authorize.html"><strong aria-hidden="true">7.5.2.</strong> Authorize</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http/routes/authorization-pages.html"><strong aria-hidden="true">7.5.3.</strong> Authorization Pages</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http/routes/pairing-and-sign-in.html"><strong aria-hidden="true">7.5.4.</strong> Pairing and Sign-In</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http/routes/device-authorization.html"><strong aria-hidden="true">7.5.5.</strong> Device Authorization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http/routes/token-endpoint.html"><strong aria-hidden="true">7.5.6.</strong> Token Endpoint</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http/routes/consent-routes.html"><strong aria-hidden="true">7.5.7.</strong> Consent Routes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http/routes/session-widening-routes.html"><strong aria-hidden="true">7.5.8.</strong> Session Widening Routes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http/routes/owner-resource-routes.html"><strong aria-hidden="true">7.5.9.</strong> Owner Resource Routes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http/routes/session-routes.html"><strong aria-hidden="true">7.5.10.</strong> Session Routes</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/http/test-fixtures.html"><strong aria-hidden="true">7.6.</strong> Test Fixtures</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/assembly.html"><strong aria-hidden="true">8.</strong> Assembly</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/assembly/setup.html"><strong aria-hidden="true">8.1.</strong> Setup</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/assembly/live-bindings.html"><strong aria-hidden="true">8.2.</strong> Live Bindings</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/assembly/access-bindings.html"><strong aria-hidden="true">8.3.</strong> Access Bindings</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/assembly/oauth-bindings.html"><strong aria-hidden="true">8.4.</strong> OAuth Bindings</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/assembly/session-bindings.html"><strong aria-hidden="true">8.5.</strong> Session Bindings</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/assembly/ports-and-adapters.html"><strong aria-hidden="true">8.6.</strong> Ports and Adapters</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/assembly/seeding.html"><strong aria-hidden="true">8.7.</strong> Seeding</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/persistence.html"><strong aria-hidden="true">9.</strong> Persistence</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/persistence/sqlite-grant-store.html"><strong aria-hidden="true">9.1.</strong> SQLite Grant Store</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/persistence/clients.html"><strong aria-hidden="true">9.2.</strong> Clients</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/persistence/browser-sessions.html"><strong aria-hidden="true">9.3.</strong> Browser Sessions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/persistence/authorization-requests.html"><strong aria-hidden="true">9.4.</strong> Authorization Requests</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/persistence/launch-contexts.html"><strong aria-hidden="true">9.5.</strong> Launch Contexts</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/persistence/grants.html"><strong aria-hidden="true">9.6.</strong> Grants</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/persistence/authorization-codes.html"><strong aria-hidden="true">9.7.</strong> Authorization Codes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/persistence/refresh-tokens.html"><strong aria-hidden="true">9.8.</strong> Refresh Tokens</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/persistence/signing-keys.html"><strong aria-hidden="true">9.9.</strong> Signing Keys</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/persistence/test-fixtures.html"><strong aria-hidden="true">9.10.</strong> Test Fixtures</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/utilities.html"><strong aria-hidden="true">10.</strong> Utilities</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests.html"><strong aria-hidden="true">11.</strong> Integration Tests</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/smoke.html"><strong aria-hidden="true">11.1.</strong> Smoke</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/bearer-only.html"><strong aria-hidden="true">11.2.</strong> Bearer Only</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/scope-gating.html"><strong aria-hidden="true">11.3.</strong> Scope Gating</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/request-caller.html"><strong aria-hidden="true">11.4.</strong> Request Caller</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/revocation.html"><strong aria-hidden="true">11.5.</strong> Revocation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/same-device-sign-in.html"><strong aria-hidden="true">11.6.</strong> Same-Device Sign-In</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/client-auth.html"><strong aria-hidden="true">11.7.</strong> Client Auth</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/client-management.html"><strong aria-hidden="true">11.8.</strong> Client Management</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/grant-flows.html"><strong aria-hidden="true">11.9.</strong> Grant Flows</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/oauth-endpoints.html"><strong aria-hidden="true">11.10.</strong> OAuth Endpoints</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/session-required.html"><strong aria-hidden="true">11.11.</strong> Session Required</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/session-shortfall.html"><strong aria-hidden="true">11.12.</strong> Session Shortfall</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/session-widening.html"><strong aria-hidden="true">11.13.</strong> Session Widening</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/wait-page.html"><strong aria-hidden="true">11.14.</strong> Wait Page</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/consent-card.html"><strong aria-hidden="true">11.15.</strong> Consent Card</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/approval-scopes.html"><strong aria-hidden="true">11.16.</strong> Approval Scopes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/device-code.html"><strong aria-hidden="true">11.17.</strong> Device Code</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/device-page.html"><strong aria-hidden="true">11.18.</strong> Device Page</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/browser-pairing.html"><strong aria-hidden="true">11.19.</strong> Browser Pairing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/browser-sessions.html"><strong aria-hidden="true">11.20.</strong> Browser Sessions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/token-revocation.html"><strong aria-hidden="true">11.21.</strong> Token Revocation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/cache-suppression.html"><strong aria-hidden="true">11.22.</strong> Cache Suppression</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/authorization-start-limit.html"><strong aria-hidden="true">11.23.</strong> Authorization Start Limit</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="authorization-server/integration-tests/test-fixtures.html"><strong aria-hidden="true">11.24.</strong> Test Fixtures</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

