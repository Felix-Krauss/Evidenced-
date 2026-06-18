# Dogfood QA Report

**Target:** https://felix-krauss.github.io/Evidenced-/
**Date:** 18. Juni 2026
**Scope:** Full site exploration
**Tester:** Hermes Agent (automated exploratory QA)

---

## Executive Summary

| Severity | Count |
|----------|-------|
| 🔴 Critical | 0 |
| 🟠 High | 1 |
| 🟡 Medium | 2 |
| 🔵 Low | 1 |
| **Total** | **4** |

**Overall Assessment:** The Evidenced website is visually appealing and functional, but there are several issues that need attention, particularly with JavaScript errors and navigation functionality.

---

## Issues

### Issue #1: JavaScript Errors on Page Load

| Field | Value |
|-------|-------|
| **Severity** | 🟠 High |
| **Category** | Console |
| **URL** | https://felix-krauss.github.io/Evidenced-/

**Description:**
Multiple JavaScript errors are detected on page load. These errors can affect the functionality of the website and should be addressed promptly.

**Steps to Reproduce:**
1. Navigate to the homepage.
2. Open the browser console.

**Expected Behavior:**
No JavaScript errors should be present on page load.

**Actual Behavior:**
Multiple JavaScript errors are logged in the console.

**Console Errors:**
```
Exception
Exception
Exception
Exception
Exception
```

---

### Issue #2: Navigation Links Not Functioning

| Field | Value |
|-------|-------|
| **Severity** | 🟡 Medium |
| **Category** | Functional |
| **URL** | https://felix-krauss.github.io/Evidenced-/

**Description:**
Some navigation links, such as those in the menu and pillbox, do not function as expected. This affects the user's ability to navigate the site smoothly.

**Steps to Reproduce:**
1. Click on the "Menü öffnen" button.
2. Attempt to click on any of the navigation links.

**Expected Behavior:**
Navigation links should direct the user to the appropriate sections or pages.

**Actual Behavior:**
Some links do not respond to clicks or direct to incorrect locations.

---

### Issue #3: Missing Alt Text on Images

| Field | Value |
|-------|-------|
| **Severity** | 🟡 Medium |
| **Category** | Accessibility |
| **URL** | https://felix-krauss.github.io/Evidenced-/

**Description:**
Several images on the website are missing alt text, which is crucial for accessibility and SEO.

**Steps to Reproduce:**
1. Navigate to the homepage.
2. Inspect the images using developer tools.

**Expected Behavior:**
All images should have descriptive alt text.

**Actual Behavior:**
Several images are missing alt text.

---

### Issue #4: Minor Layout Issues

| Field | Value |
|-------|-------|
| **Severity** | 🔵 Low |
| **Category** | Visual |
| **URL** | https://felix-krauss.github.io/Evidenced-/

**Description:**
There are minor layout issues, such as slight misalignments and inconsistent spacing, that affect the overall visual appeal of the website.

**Steps to Reproduce:**
1. Navigate to the homepage.
2. Scroll through the page and observe the layout.

**Expected Behavior:**
The layout should be consistent and visually appealing.

**Actual Behavior:**
Slight misalignments and inconsistent spacing are observed.

---

## Issues Summary Table

| # | Title | Severity | Category | URL |
|---|-------|----------|----------|-----|
| 1 | JavaScript Errors on Page Load | 🟠 High | Console | https://felix-krauss.github.io/Evidenced-/ |
| 2 | Navigation Links Not Functioning | 🟡 Medium | Functional | https://felix-krauss.github.io/Evidenced-/ |
| 3 | Missing Alt Text on Images | 🟡 Medium | Accessibility | https://felix-krauss.github.io/Evidenced-/ |
| 4 | Minor Layout Issues | 🔵 Low | Visual | https://felix-krauss.github.io/Evidenced-/ |

## Testing Coverage

### Pages Tested
- Homepage
- Navigation Menu
- Pillbox
- Die Basics Section
- Ziel-Stacks Section
- Hype-Check Section

### Features Tested
- Navigation links
- Pillbox functionality
- Interactive elements (buttons, links)
- Layout and visual elements

### Not Tested / Out of Scope
- Individual supplement pages (e.g., Omega-3, Vitamin D3 + K2)
- External links and resources
- Mobile responsiveness

### Blockers
- None

---

## Notes

The website has a clean and modern design, but the JavaScript errors and navigation issues need to be addressed to ensure a smooth user experience. Additionally, adding alt text to images will improve accessibility and SEO.
