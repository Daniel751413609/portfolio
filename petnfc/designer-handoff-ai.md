# PetNFC Designer Handoff for AI

## Project
- name: PetNFC / 毛孩智聯
- type: pet identity platform
- region: Taiwan
- language: Traditional Chinese

## One-line Summary
PetNFC lets a stranger scan a pet's NFC tag, open a public pet profile page immediately, contact the owner fast, and trigger a LINE notification to the owner.

## Core Product Goal
Design a low-friction rescue flow.

Success means:
- no app download
- no registration for stranger
- information readable in 5 to 10 seconds
- clear primary CTA above the fold
- owner can be contacted fast

## Users

### User 1
- role: pet owner
- type: primary payer
- goals:
  - create pet identity profile
  - get notified when tag is scanned
  - update emergency contact info
- habits:
  - uses LINE
  - does not want another app

### User 2
- role: stranger / finder
- type: critical activation user
- goals:
  - know if the pet has an owner
  - know how to help immediately
  - contact owner in 1 to 2 actions
- constraints:
  - low patience
  - no onboarding tolerance
  - may be under time pressure

### User 3
- role: vet clinic / pet store staff
- type: channel partner
- goals:
  - help owner activate tag quickly
  - provide value-added service

## Main Flows

### Flow A: owner activation
- step 1: owner buys NFC tag
- step 2: owner logs in with LINE Login
- step 3: owner binds tag ID
- step 4: owner fills pet profile
- step 5: owner finishes activation

### Flow B: stranger scan
- step 1: stranger scans NFC tag
- step 2: phone opens public pet page
- step 3: stranger sees pet photo, name, notes, contact actions
- step 4: stranger taps contact CTA
- step 5: owner receives LINE notification

### Flow C: partner-assisted activation
- step 1: clinic/store staff helps scan or enter tag ID
- step 2: staff helps create basic profile
- step 3: activation completes

## Screens to Design

### Screen 1
- name: owner activation page
- primary user: pet owner
- purpose: login and bind NFC tag
- required content:
  - brand title
  - short activation instructions
  - LINE Login button
  - tag ID input or scan entry
  - activate CTA
- completion result:
  - activation success state
  - redirect to profile edit page

### Screen 2
- name: owner profile edit page
- primary user: pet owner
- purpose: create public pet profile
- required content:
  - pet photo upload
  - pet name
  - breed
  - age
  - gender
  - personality notes
  - medical alert
  - emergency contact
  - preview public page CTA
  - save CTA
- completion result:
  - success confirmation
  - preview available

### Screen 3
- name: public pet page after NFC scan
- primary user: stranger / finder
- purpose: help user understand and act immediately
- required content priority:
  - pet photo
  - pet name
  - status label
  - short instruction on what to do
  - personality / approach note
  - medical warning if needed
  - primary CTA
- primary CTAs:
  - contact owner
  - I found this pet
  - take to nearby vet
- design rules:
  - must not feel like dashboard
  - must feel urgent, warm, simple, trustworthy
  - key action visible on first screen

### Screen 4
- name: contact success page
- primary user: stranger / finder
- purpose: confirm help action is complete
- required content:
  - success message
  - owner has been notified
  - optional next-step guidance

### Screen 5
- name: LINE notification card
- primary user: pet owner
- purpose: alert owner immediately after scan
- required content:
  - pet name
  - scan time
  - scan location description
  - return to management page CTA

## Most Important Screen
- screen: public pet page after NFC scan
- reason: this screen determines whether the stranger helps or leaves

## Visual Direction
- tone:
  - warm
  - trustworthy
  - calm
  - clear
- avoid:
  - government form feeling
  - hospital admin dashboard feeling
  - too much text above the fold
  - weak CTA hierarchy

## UX Rules
- first screen must show pet identity and main CTA
- stranger should not need login
- stranger should not need to read long paragraphs
- owner setup can be form-based
- scan flow should feel lighter and faster than owner flow

## MVP Scope
- include:
  - owner activation page
  - owner profile edit page
  - public pet page
  - contact success page
  - LINE notification card
- exclude:
  - GPS tracking
  - social lost-pet feed
  - insurance integration
  - AI vet features
  - complex B2B dashboard

## Output Request for Designer AI
Please generate:
- 1 mobile-first UI direction
- 1 owner activation flow
- 1 owner profile edit flow
- 1 public NFC scan page
- 1 contact success page
- 1 LINE notification mockup

## Final Prompt Summary
Design a Taiwan-focused pet NFC rescue product in Traditional Chinese. The most important screen is the public page opened after an NFC scan. A stranger must understand the pet, trust the page, and contact the owner within seconds. Prioritize warmth, clarity, and strong CTA hierarchy. Avoid dashboard-style UI.
