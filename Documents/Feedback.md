# 📝 Kiyora — User Feedback & Testing Report

> **Level 6 Submission Evidence — Midnight Preprod**

Kiyora was tested by users on the **Midnight Preprod Testnet** to evaluate the privacy-preserving access-control experience, wallet connection flow, credential issuance, Zero-Knowledge proof generation, verification, revocation handling, UI/UX, and overall product usability.

The feedback loop collected both quantitative ratings and qualitative suggestions from testers using **Lace Wallet** and **1AM Wallet**.

---

## 📊 Feedback Overview

| Metric                          |                   Result |
| ------------------------------- | -----------------------: |
| Product Testing Period          |     14–22 September 2026 |
| Feedback Responses              |                       70 |
| Midnight Preprod Wallet Entries |                       70 |
| Wallets Supported               | Lace Wallet + 1AM Wallet |
| Feedback Method                 |              Google Form |
| Feedback Storage                |            Google Sheets |
| Rating Scale                    |                      1–5 |
| Test Completion                 |                      Yes |
| Wallet Connection Success       |                      Yes |

---

## 🔄 Feedback Collection Process

The Kiyora team followed the following feedback loop:

```text
User Testing
     ↓
Open Kiyora Live Application
     ↓
Connect Midnight Preprod Wallet
     ↓
Configure / Issue Credential
     ↓
Generate Zero-Knowledge Proof
     ↓
Verify Authorization
     ↓
Test Revocation / Negative Path
     ↓
Submit Feedback Form
     ↓
Collect Rating + Suggestions
     ↓
Identify UX / Functional Issues
     ↓
Review & Improve Product
```

Each tester was asked to provide:

* Email address
* Midnight Preprod wallet address
* Wallet used
* Wallet connection result
* Whether the test was completed
* Product improvement suggestions
* Overall experience rating
* Optional social/community handle

---

## 🧪 What Was Tested

Users were encouraged to interact with the live Kiyora application and evaluate:

* Landing page and product presentation
* User onboarding
* Midnight wallet connection
* Lace Wallet integration
* 1AM Wallet integration
* Credential issuance flow
* Credential verification
* Zero-Knowledge proof generation
* Local proof-generation experience
* Authorization threshold verification
* Credential revocation
* Negative verification path
* Nullifier / replay-protection behavior
* On-chain verification state
* Transaction confirmation
* Preprod explorer links
* DUST / faucet onboarding
* Loading and proving indicators
* Responsive UI
* Dark-mode / Midnight visual design
* Overall privacy-preserving access experience

---

## 💬 Key Feedback Themes

The collected feedback highlighted strong usability across the main Kiyora flow while also identifying several practical improvements.

### ✅ Positive Feedback

Users specifically mentioned:

* Clean and modern UI
* Smooth wallet connection
* Clear Zero-Knowledge verification experience
* Strong privacy-focused concept
* Clear distinction between public and confidential information
* Smooth credential lifecycle
* Effective revoked-credential rejection
* Clear proving-status indicators
* Good Midnight Preprod integration
* Useful quick-start guidance
* Clean dark-mode and moon-inspired visual design
* Clear transaction and verification feedback
* Successful Lace and 1AM wallet testing

Example feedback included:

> "The overall ZK flow is very clean."

> "UI looks sharp and easy to navigate."

> "Very smooth experience with 1AM wallet."

> "The Proved vs Confidential breakdown in the green card is very clear."

> "The UI looks very professional."

> "The privacy guarantee is very intuitive to explain."

> "The dark mode styling with moon theme is great."

> "The whole lifecycle demonstrated Compact zero-knowledge capabilities well."

> "Outstanding dApp."

---

## 🔐 Privacy & Zero-Knowledge Feedback

A major part of the testing focused on whether Kiyora successfully communicated its privacy-preserving authorization model.

Testers evaluated whether they could:

* Prove authorization without exposing the underlying credential
* Verify eligibility through a Zero-Knowledge proof
* Keep confidential credential information local
* Understand what information was publicly verified
* Test revoked credentials
* Observe rejection before unnecessary on-chain transactions
* Understand the difference between public contract state and private user data

Several testers specifically appreciated the **Proved vs Confidential** presentation and the fact that revoked credentials could be rejected without unnecessarily submitting a failed transaction.

Example feedback:

> "The Proved vs Confidential breakdown in the green card is very clear."

> "Really appreciate that the ZK circuit aborts client-side without submitting an error transaction to Preprod."

> "The cards separating public contract state from local confidential secrets make Compact intuitive."

> "Great cryptographic privacy demonstration."

---

## 👛 Wallet Testing

Both supported wallet integrations were tested during the feedback period.

### Lace Wallet

Testers reported:

* Successful connection
* Smooth proof generation
* Successful Midnight connector integration
* Clear transaction confirmation
* Reliable verification flow

Some testers suggested clearer guidance around enabling the Midnight connector and DUST setup.

### 1AM Wallet

Testers reported:

* Successful wallet connection
* Fast transaction approval
* Successful credential issuance
* Successful verification
* Successful revocation testing
* Smooth ProofStation experience

Some users experienced:

* Wallet initially locked
* Browser popup blocking
* Wallet popup requiring a second connection attempt

These were primarily onboarding/browser-environment observations rather than failures of the complete Kiyora flow.

---

## ⚠️ Issues & Improvement Suggestions

The feedback identified several areas for future improvement.

### ⏱️ Proof Generation Feedback

Several users mentioned the proving process taking approximately **10–14 seconds**.

Suggested improvements included:

* Estimated proving time
* Countdown indicator
* More detailed progress information
* Stronger completion feedback

### 💧 DUST & Faucet Guidance

Some testers requested:

* Clearer DUST maturity information
* Better balance synchronization guidance
* Direct Midnight Preprod faucet link
* More explanation of testnet requirements

### 👛 Wallet Connection

A few testers reported:

* Wallet extension initially locked
* Browser popup blocking
* Wallet popup requiring another click
* Midnight connector needing to be enabled

Suggested improvements:

* Better wallet troubleshooting instructions
* Automatic detection of locked wallets
* Clearer browser-extension instructions
* More prominent wallet setup guidance

### 🔍 Explorer & Transaction UX

Testers suggested:

* One-click transaction hash copying
* Direct explorer links
* Explorer bookmark buttons
* Transaction fee information
* Network block-height information

### 📱 Mobile Experience

One tester suggested adding a more noticeable completion cue on mobile.

Future improvements could include:

* Stronger mobile completion states
* More compact verification cards
* Improved mobile transaction feedback

### 📚 Documentation

Testers suggested additional documentation around:

* Compact circuit revocation
* DUST requirements
* Proof generation
* Preprod setup
* Wallet configuration

---

## 📋 Feedback-to-Improvement Mapping

| Feedback Area    | User Observation                           | Improvement Direction                                |
| ---------------- | ------------------------------------------ | ---------------------------------------------------- |
| Proof Generation | Proof can take 10–14 seconds               | Add estimated proving time and richer progress state |
| Loading UX       | Users want reassurance during proving      | Improve proving animation and status messaging       |
| DUST             | Some users wanted clearer DUST information | Add DUST maturity and balance guidance               |
| Faucet           | Testers wanted easier faucet access        | Add direct Preprod faucet link                       |
| Wallet           | Some extensions were locked                | Add clearer wallet troubleshooting                   |
| Browser Popup    | Brave sometimes blocked wallet popup       | Add popup troubleshooting guidance                   |
| Connector        | Lace requires Midnight connector           | Improve connector onboarding                         |
| Explorer         | Users requested quicker transaction access | Add copy and explorer shortcut buttons               |
| Transactions     | Fee details were requested                 | Add transaction fee breakdown                        |
| Network          | Block-height information requested         | Add optional network status indicator                |
| Mobile UX        | Completion feedback could be clearer       | Improve mobile success states                        |
| Documentation    | More Compact explanations requested        | Expand technical documentation                       |

---

## 📈 Quantitative Feedback

Users were asked to rate their overall Kiyora experience on a scale of **1–5**.

The collected ratings were predominantly **4 and 5**, with testers consistently reporting successful wallet connections and completed test flows.

The feedback was intentionally structured to allow testers to report both positive experiences and practical improvement suggestions.

Across the collected responses:

* Wallet connection was reported as successful.
* Test completion was reported as successful.
* Both Lace Wallet and 1AM Wallet were tested.
* Credential issuance and verification flows were exercised.
* Positive and revoked credential paths were tested.
* Users provided actionable UX and documentation suggestions.

---

## 🗣️ Selected User Feedback

### UI / UX

> "UI looks sharp and easy to navigate."

> "The UI looks very professional."

> "Dark mode styling with moon theme is great."

> "Very responsive UI."

> "The green verified modal with on-chain counter increment is very satisfying."

### Wallet Experience

> "1AM wallet connection was instantaneous."

> "Very smooth experience with 1AM wallet."

> "Lace connected fine after enabling Midnight connector."

> "Wallet connection is rock solid."

### Privacy / ZK Experience

> "The overall ZK flow is very clean."

> "The Proved vs Confidential breakdown in the green card is very clear."

> "Great cryptographic privacy demonstration."

> "The cards separating public contract state from local confidential secrets make Compact intuitive."

### Revocation / Negative Path

> "Revoked credential halted client-side without submitting failed tx on-chain."

> "The circuit rejection is immediate and clearly shows that the credential commitment was revoked in contract storage."

> "The browser halted verification locally with zero gas spent."

### Improvement Suggestions

> "The proving progress indicator could show estimated seconds remaining."

> "Add a quick link to the Midnight Preprod faucet."

> "Add an automatic copy button for transaction hash."

> "Would like an explorer bookmark button."

> "Would be great to see transaction fee breakdown."

> "Add FAQ about Compact circuit revocation handling."

---

## 🔗 Feedback Resources

### 📝 Feedback Form

The feedback was collected through the official Kiyora feedback form:

https://forms.gle/gjAijrpqCXcb2Z6m9

### 📊 Feedback Spreadsheet

The complete responses are maintained in the feedback spreadsheet:

https://docs.google.com/spreadsheets/d/1w4VrdXyHe97cSr8v7JyBOvFp2nHmf2gRNNogB7RxByo/edit?usp=sharing

### 👥 Wallet Address Evidence

The collected Midnight Preprod wallet entries are documented separately in:

`USERS.md`

---

## 🔐 Privacy & Data Handling

Kiyora is designed around privacy-preserving authorization.

The feedback documentation may contain tester-provided information required for testing verification, including public Midnight Preprod wallet addresses.

This repository does **not** contain:

* Private keys
* Seed phrases
* Recovery phrases
* Wallet passwords
* Private credentials
* Raw authentication secrets
* ZK witness values
* Private Merkle paths
* Sensitive proof-generation secrets

Public blockchain wallet addresses are treated as public identifiers.

---

## 🌐 Kiyora Resources

| Resource             | Link                                                                                                 |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| Live Application     | https://kiyora-app.vercel.app/                                                                       |
| GitHub Repository    | https://github.com/Shritii-Patel/Kiyora                                                              |
| Demo Video           | https://drive.google.com/file/d/1cAb_dis5CkSjRz4XW3x5RSnGYpUv2BDh/view?usp=sharing                   |
| Feedback Form        | https://forms.gle/gjAijrpqCXcb2Z6m9                                                                  |
| Feedback Spreadsheet | https://docs.google.com/spreadsheets/d/1w4VrdXyHe97cSr8v7JyBOvFp2nHmf2gRNNogB7RxByo/edit?usp=sharing |
| Preprod Contract     | `0xa6fb686b5fd483e86b8010eaa3cbaa28f2a00d16dfe9097b2130e82f1a8add19`                                 |
| Preprod Explorer     | https://explorer.1am.xyz/contract/a6fb686b5fd483e86b8010eaa3cbaa28f2a00d16dfe9097b2130e82f1a8add19   |

---

## ✅ Level 6 Feedback Requirement

The Kiyora feedback loop has been documented through:

* ✅ Live Midnight Preprod user testing
* ✅ 70 feedback responses
* ✅ Midnight Preprod wallet collection
* ✅ Lace Wallet testing
* ✅ 1AM Wallet testing
* ✅ User feedback form
* ✅ Quantitative product ratings
* ✅ Qualitative user comments
* ✅ Credential issuance testing
* ✅ Zero-Knowledge proof verification testing
* ✅ Revocation / negative-path testing
* ✅ UX issue identification
* ✅ Improvement mapping
* ✅ Public feedback documentation
* ✅ Separate wallet-address evidence in `USERS.md`
* ✅ Feedback spreadsheet maintained for verification

---

## 📌 Conclusion

The Kiyora testing phase provided both positive validation of the application's **privacy-first access-control model** and actionable feedback for continued development.

The feedback particularly validated the usability of the **wallet connection, credential lifecycle, Zero-Knowledge verification experience, revocation handling, UI/UX, and Midnight Preprod integration**.

At the same time, testers identified practical improvements around **proof-generation feedback, DUST onboarding, wallet troubleshooting, explorer access, transaction information, mobile completion states, and technical documentation**.

All collected feedback and testing evidence has been preserved as part of Kiyora's **Level 6 submission documentation**.
