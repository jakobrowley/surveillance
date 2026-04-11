# CLAUDE.md — Surveillance

> **For Claude Code:** This file is loaded automatically when you open any session in this folder. Always also load `~/Plugins/_shared/CUSTOMER_BUG_INVESTIGATION.md` for the bug-fix mental model.
>
> **For Claud (the support agent):** This is your reference for everything about Surveillance.

---

## What Surveillance Is

Surveillance is an **Adobe After Effects CEP extension** that creates surveillance/CCTV-style looks: split-screen camera grids, motion-tracking overlays, glitches, night vision, timestamps, and various CCTV aesthetic effects. Editors use it to give footage a security-camera or hidden-camera vibe.

It's the **only plugin where the source has been accessible since the start** (the others were compiled binaries until recently). It's also the plugin with the **most ExtendScript code** by far — the `host/surveillance.jsx` file is 1,283 lines. Bugs in After Effects automation almost always live there.

---

## Technology Stack (verified by source inspection)

| Component | Technology |
|---|---|
| **Plugin framework** | CEP 9 (Common Extensibility Platform), CSXS manifest version 6.0, RequiredRuntime 9.0 |
| **Host app** | **After Effects only** — `<Host Name="AEFT" Version="13.0" />` (works on AE CC 2014 / 13.0 and newer) |
| **Panel UI** | Vanilla JavaScript + jQuery 3.x + FontAwesome icons |
| **Build tool** | **None.** No `package.json`, no `gulpfile.js`, no `webpack.config.js`. The .zxp is packaged manually using Adobe's `ZXPSignCmd`. |
| **Package manager** | None (no npm dependencies — jQuery is checked into source as a static file) |
| **Current version** | 1.0 (`ExtensionBundleVersion="1.0"` in `manifest.xml:5`) |

**Important:** This plugin has **no automated build pipeline**. There is no `npm run build`. To produce a `.zxp` for distribution, you have to manually invoke ZXPSignCmd against the source folder. This is the biggest operational difference vs FastFX — you can't just edit and rebuild.

---

## File Structure

```
surveillance/
├── CSXS/
│   └── manifest.xml                  # CEP extension manifest
│
├── client/                           # Panel UI (HTML/CSS/JS)
│   ├── index.html                    # 48.5KB — main panel HTML
│   ├── css/
│   │   ├── styles.css                # Custom panel styling
│   │   ├── fontawesome.css           # FA icons
│   │   └── all.css, all.min.css      # FA icons (minified)
│   ├── js/
│   │   ├── main.js                   # 🔧 46KB — main panel JS
│   │   ├── jquery.js                 # 247KB — jQuery (static)
│   │   └── CSInterface.js            # 40KB — Adobe CEP bridge
│   ├── webfonts/                     # FontAwesome font files
│   └── previews/                     # Transition preview videos (1-6.webm)
│
├── host/                             # ExtendScript (runs INSIDE After Effects)
│   ├── surveillance.jsx              # 🔧 115KB / 1,283 lines — main host code
│   └── src/
│       ├── PseudoEffect/             # Custom pseudo-effect framework
│       │   ├── PseudoEffect.js
│       │   └── lib/
│       │       ├── ErrorHandler.js
│       │       ├── FileEx.js
│       │       ├── FolderEx.js
│       │       ├── Schema.js
│       │       └── Types.js
│       ├── ffx/                      # Effect preset files (.ffx)
│       │   ├── fps.ffx
│       │   ├── glitch.ffx
│       │   ├── hue.ffx
│       │   ├── night.ffx
│       │   └── tracker.ffx
│       ├── looks/                    # Look effect files (13+ .ffx)
│       ├── overlays/                 # Overlay video/image assets
│       │   ├── 2x2/, 3x3/, none/
│       │   ├── borders/
│       │   └── looks/
│       └── transitions/              # Transition videos (1-6.mp4)
```

**Critical files** (where 90% of bugs will be):
- `client/js/main.js` — panel logic, 46KB
- `host/surveillance.jsx` — AE automation, 115KB / 1,283 lines

---

## Build Pipeline (manual)

There is NO `npm run build`. To produce a new `.zxp`:

1. Edit the source files in place
2. Use Adobe's **ZXPSignCmd** tool to package and sign the extension folder:
   ```bash
   ZXPSignCmd -sign <source_folder> <output.zxp> <certificate.p12> <password> -tsa http://timestamp.digicert.com
   ```
3. The signing certificate is **NOT in the source tree** — it lives separately. Escalate any signing-related issues.

**For local testing without signing:**
- Set CEP debug mode (see Diagnostic Tools below) and copy the source folder directly into After Effects' CEP extensions directory:
  - Mac: `~/Library/Application Support/Adobe/CEP/extensions/com.extension.surveillance/`
  - Windows: `%APPDATA%\Adobe\CEP\extensions\com.extension.surveillance\`

---

## Core Architecture

### Entry point flow

1. After Effects loads `client/index.html` when the user opens Window → Extensions → Surveillance
2. `client/js/main.js` runs — initializes a global `surv` object, sets up UI handlers
3. `surv.csi = new CSInterface()` establishes the bridge to ExtendScript
4. `checkOfflineLicense()` runs immediately to validate cached license

### How the panel talks to After Effects

The panel JS uses `CSInterface.evalScript()` to call functions inside `host/surveillance.jsx`. All communication is **asynchronous callback-based**, with JavaScript code sent as strings:

```javascript
// Example from main.js:42
surv.csi.evalScript("checkUnfinished()", function(res) {
    if (res === "ok") { /* UI initialization */ }
});

// Example from main.js:393 — passing string args
surv.csi.evalScript("addTracker('" + type + "','" + trackerInput.value + "')", function(res) {
    // process result
});

// Example from main.js:416 — function returning JSON
surv.csi.evalScript("readTracker(" + surv.activeTrackerId + ")", function(res) {
    var result = JSON.parse(res);
});
```

**The 1,283-line `surveillance.jsx` file** is the workhorse — it has 40+ exported functions covering license, UI alerts, composition creation, grid operations, tracker creation, effect application, etc.

### Major surveillance.jsx functions (top-level)

| Function | Lines | Purpose |
|---|---|---|
| `createTracker()` | ~889-1015 | **Largest function — 127 lines.** Creates a complex shape layer tracker with deeply nested vector groups and 40+ expression strings. Most fragile area in the codebase. |
| `defineAssets()` | ~1074-1155 | Registers looks, overlays, and transitions into the project structure |
| `importAssets()` | ~1261-1283 | Imports `.ffx` effect files |
| `launchLooks()` | ~596-614 | Initializes composition for the looks workflow |
| `launchTransitions()` | — | Initializes composition for transitions |
| `addGrid()` | — | Creates 2x2 / 3x3 camera grid layouts |
| `addTracker()` / `readTracker()` / `removeTracker()` | — | Tracker CRUD operations |
| `addEffects()` / `addOverlays()` | — | Apply effects and overlays |
| `toggleFPS()` / `toggleBorder()` / `toggleGlitch()` / `toggleNight()` | — | Toggle individual effect features |
| `checkOfflineLicense()` / `saveOfflineLicense()` / `removeOfflineLicense()` | — | ⚠️ License — OFF-LIMITS |

---

## ⚠️ OFF-LIMITS FILES — NEVER MODIFY

| File / area | Why it's off-limits |
|---|---|
| `client/js/main.js` lines 22-23 | **Hardcoded WooCommerce API credentials** — `licenseAPIKey="ck_60bbfd050bb532fc54354a7cd5104f09a203b2d0"` and `licenseSecretKey="cs_8ea328e5927e16aab8472579b122491cf4defcff"`. These are exposed in plain text and decodable from any installed `.zxp`. They need to be revoked/replaced by Jakob — never modify or attempt to "fix." |
| `client/js/main.js` lines 24-26 | License URLs (`tinytapes.com/wp-json/lmfwc/v2/licenses/{activate,validate,deactivate}/`) |
| `client/js/main.js` `validateLicenseKey()` function | License activation flow — calls the API, decrypts/encrypts the cached license file |
| `client/js/main.js` lines 1183-1202 | XOR encryption function `crypt()` — uses static salt "tinytapes" |
| `host/surveillance.jsx` `checkOfflineLicense()`, `saveOfflineLicense()`, `removeOfflineLicense()`, `getLicenseInfo()` | License file I/O on the AE side |
| `host/surveillance.jsx` `licensePrompt()` | License entry modal dialog |

**If a customer's bug seems related to license activation, license validation, or "license invalid" errors → escalate immediately.**

---

## Common Bug Categories (where bugs actually live)

### 1. Tracker creation bugs (most common AND most fragile)

`createTracker()` in `surveillance.jsx:889-1015` is 127 lines of deeply nested After Effects API calls. Example of how brittle it is:

```javascript
tracker.property("ADBE Root Vectors Group")
  .property(1).property(2).property(1).property(2).property(1)
  .property("ADBE Vector Rect Size").expression = "...";
```

A single off-by-one in those property indices breaks the entire tracker.

**Where to look:**
- `surveillance.jsx:889-1015` for the function itself
- The `addTracker()` and `readTracker()` wrappers in the same file
- The expression strings — they reference `effect("Pseudo/SurveillanceTracker")` match names, so any rename breaks them

### 2. Composition / asset loading bugs

The customer applies a look or transition and either nothing happens, the wrong asset loads, or AE throws an error.

**Where to look:**
- `host/surveillance.jsx` `launchLooks()` (~596) and `launchTransitions()` 
- `defineAssets()` (~1074) — registers asset paths
- `importAssets()` (~1261) — actual file imports
- The `host/src/looks/`, `host/src/overlays/`, and `host/src/transitions/` directories — verify the customer's expected asset file actually exists

### 3. Grid layout bugs

The 2x2 / 3x3 camera grid layout breaks or shows wrong positions.

**Where to look:**
- `addGrid()` in `surveillance.jsx`
- `host/src/overlays/2x2/` and `host/src/overlays/3x3/` for the grid templates

### 4. Expression / wiggle bugs

Tracker has expression-driven properties (wiggle, color, conditional visibility). When customers see "tracker not moving" or "color wrong" → the expression strings are likely the issue.

**Where to look:**
- The expression strings inside `createTracker()` in `surveillance.jsx:990-1010`
- Watch for Windows vs Mac line ending issues — the expressions use literal `\r` and could break on either platform

### 5. AE version compatibility

There's a documented version-specific quirk in `surveillance.jsx:20-27`:

```javascript
appVersion = parseFloat(app.version);
commandID = 2359;        // Default for AE < 16.1
tabName = 'General';
if (appVersion >= 16.1) {
    commandID = 3131;    // Scripting prefs location changed in AE 16.1
    tabName = 'Scripting & Expressions';
}
```

If a customer reports "the plugin works on my old AE but not my new one" or vice versa → check this area first for similar version-conditional code.

### 6. UI bugs

Panel layout broken, buttons don't respond, jQuery selectors find wrong elements.

**Where to look:**
- `client/js/main.js` — the panel JS
- `client/index.html` — the panel structure
- `client/css/styles.css` — custom styles

---

## Adobe API Reference

When debugging code that calls into After Effects:

```
~/Plugins/_shared/api-reference/AE.md       # After Effects ExtendScript API
~/Plugins/_shared/api-reference/CEP.md      # CEP framework, CSInterface.js, Vulcan.js
```

**Mandatory workflow:** before guessing at any After Effects API call, grep `AE.md` for the function or object name. The Match Names appendix at the bottom of `AE.md` is **critical** for Surveillance because the plugin uses Match Names extensively (e.g., `"ADBE Vector Rect Size"`, `"Pseudo/SurveillanceTracker"`).

Run `/lookup <api-name>` for one-keystroke access.

---

## Diagnostic Tools

### Adobe CEP Remote Debugging (the killer tool)

Once enabled, you can use full Chrome DevTools on the live Surveillance panel running inside After Effects.

**One-time setup:**
1. Mac: `defaults write com.adobe.CSXS.11 PlayerDebugMode 1` (use the CSXS version matching the customer's AE — CSXS.11 for 2023+, CSXS.12 for 2024+)
2. Windows: `regedit` → `HKEY_CURRENT_USER\Software\Adobe\CSXS.11` → new String entry `PlayerDebugMode = 1`

**Per-session usage:**
1. Create a `.debug` file at the Surveillance extension root with this content (port can be anything 1024-65534):
   ```xml
   <ExtensionList>
     <Extension Id="com.extension.surveillance">
       <HostList>
         <Host Name="AEFT" Port="8088"/>
       </HostList>
     </Extension>
   </ExtensionList>
   ```
2. Launch After Effects → open Surveillance panel
3. Open Chrome → `http://localhost:8088/`
4. Click the Surveillance entry → full Chrome DevTools opens

### ExtendScript debugging via VS Code

For bugs inside `surveillance.jsx` (the host-side code), Chrome DevTools can't reach there. Use the **VS Code ExtendScript Debugger** extension instead:
1. Install the extension in VS Code
2. Open `host/surveillance.jsx`
3. Set breakpoints
4. Use the "Attach" debugger configuration to connect to the running After Effects ExtendScript engine
5. Trigger the function from the panel → step through the code

This is the ONLY way to debug the host-side code interactively. Without it, you're guessing.

### Sentry telemetry

If Sentry is wired up (see plan Component L), check the dashboard for any errors tagged with this customer's email or license ID. Run `/sentry-check <customer-email>`.

---

## Hard Rules (no exceptions)

1. **NEVER touch the OFF-LIMITS files listed above.** If a fix would require it → escalate.
2. **Surveillance has NO build pipeline** — this means every code change requires manual repackaging. Be extra careful with edits.
3. **NEVER attempt to re-sign the .zxp** — the certificate is not in the source tree and signing infrastructure is fragile.
4. **One-customer beta is mandatory** — every source change goes to ONE customer first.
5. **2-hour budget** — escalate via `/escalate` if you're not at fix-and-test by then.
6. **Sentry first** — always check `/sentry-check` before doing anything else.
7. **Run `/learn` at ticket close.**

---

## Known Tech Debt / Gotchas

1. **No build pipeline** — can't `npm run build`. Every fix requires manual ZXP packaging via ZXPSignCmd.
2. **No package.json, no dependency management** — jQuery is a static file in the source tree.
3. **Hardcoded WooCommerce API credentials** in `main.js:22-23` — same issue as FastFX and Terminal. Needs to be revoked and replaced by Jakob.
4. **XOR encryption with static salt** ("tinytapes") for the offline license file — trivially decryptable but not your concern unless told otherwise.
5. **Deep property chain in `createTracker()`** — extremely fragile, prone to breakage on AE API changes.
6. **Hardcoded match names** like `"Pseudo/SurveillanceTracker"` throughout expression strings — any rename breaks every tracker.
7. **No persistent logging** — only `alert()` for errors, which interrupts the user. No log file is written.
8. **Limited error handling in surveillance.jsx** — only `checkUnfinished()` and `canWriteFiles()` are wrapped in try/catch. Most other functions have no error handling at all, so errors propagate as raw AE alerts.
9. **No TODO/FIXME comments** in the source — but that doesn't mean there's no tech debt. The lack of comments is itself a debt.
10. **No version-bumping** — `manifest.xml` says 1.0 and seems to never be updated.

---

## Escalation Tripwires (auto-escalate immediately)

Run `/escalate` and STOP if any of these apply:

- The bug touches any OFF-LIMITS file
- The bug involves license activation, validation, or the `tinytapes.com` API
- The bug requires re-signing the `.zxp`
- The bug requires more than ~30 lines changed across more than 3 files
- The fix would require modifying jQuery or CSInterface.js (these are vendored libraries)
- ZXPSignCmd fails or you can't find the signing certificate
- The customer is a high-value account
