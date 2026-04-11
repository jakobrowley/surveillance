# Security Notes — Known Issues

## Hardcoded WooCommerce API credentials (HIGH PRIORITY)

**File:** `surveillance_src_new/surveillance/client/js/main.js` lines 22-23

```javascript
surv.licenseAPIKey = 'ck_60bbfd050bb532fc54354a7cd5104f09a203b2d0';
surv.licenseSecretKey = 'cs_8ea328e5927e16aab8472579b122491cf4defcff';
```

These same credentials are also in FastFX and Terminal. They're decodable from any installed `.zxp` file. See the Terminal repo's SECURITY.md for the rotation plan.

## XOR-based offline license encryption (MEDIUM PRIORITY)

**File:** `surveillance_src_new/surveillance/client/js/main.js` lines 1183-1202

The offline license file is "encrypted" with a simple XOR cipher using the static salt `"tinytapes"`. This is trivially reversible and not cryptographically meaningful. It exists only as a basic obfuscation against casual tampering.

**Followup work:** if license tampering becomes a real concern, replace XOR with proper symmetric encryption (AES-GCM) using a key derived from a build-time secret. But note: any client-side encryption can be bypassed since the customer has the binary. The real fix is server-side validation, which the LMFWC API already provides.

## No automated build pipeline (LOW PRIORITY — operational concern)

Surveillance has no `package.json`, no Vite/Webpack config, no build script. Producing a `.zxp` requires manually invoking Adobe's `ZXPSignCmd` against the source folder with an external signing certificate. This is fragile and slow.

**Followup work:** add a minimal build script (`gulp-zxp-extension` or similar) that produces the signed ZXP from the source folder with one command. Document the certificate location and password in a separate (gitignored) `build-secrets.env` file.
