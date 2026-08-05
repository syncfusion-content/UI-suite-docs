
# UG Front Matter Review Report

**Scope:** blazor (91 files scanned, 84 referenced by TOC, 7 not referenced)
**Generated:** 2026-08-05
**Spec version:** v1 (per 2026-08-03 spec)

## Summary
- ✅ Pass: 0 files
- ⚠ Warning: 0 files
- ❌ Fail: 84 files

## Stats
- Title with "component" suffix (should drop): 53
- H1 with "component" suffix (should drop): 53
- Title with non-canonical control display: 0
- Boilerplate description: 78
- How-to missing "How to" prefix: 0
- How-to noun-phrase filename (ungrammatical after "How to"): 0
- Overview H1 missing trailing period: 1
- Special-case (Feature with "Getting Started" content): 0
- TOC anchor text != H1: ~30
- How-to title exceeds 70 chars (phrase too long): 0
- Files with `Syncfusion®` instead of `Syncfusion`: 83

> **Platform display note:** All files in this scope are Blazor. The `platform:` front matter value is diagram-sdk (not `ej2-blazor`), but the folder is in blazor — Blazor display name is `Blazor`.
> **Canonical control for Diagram SDK:** No canonical display name in the embedded lists for "Diagram SDK". The platform folder is "diagram-sdk", so per spec the agent should fall back to title-casing `control:` — but the per-platform slug map also has no entry for `diagram`/diagram-sdk. The agent flags this as an unmapped component and proposes `Diagram Component` (per actual TOC anchor text "Diagram") as the working canonical.

## Skipped (not referenced by TOC)

None of the 91 .md files in this folder are missing from the Blazor TOC. The 7 file count delta between folder count and TOC count comes from non-`.md` files (e.g., `images/`, code-snippet). No `.md` files skipped.

> The TOC entry `/diagram-sdk/blazor/Localization` uses uppercase `L`, but the file on disk is localization.md (lowercase). On case-insensitive Windows filesystems this resolves correctly, but if deployed to a case-sensitive host the link would 404. The agent flags this for the user; no frontmatter action required.

## Files

---

### ❌ overview.md
**Category:** Overview
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped — see `## Unmapped`)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `About Syncfusion Blazor Diagram Component \| Syncfusion` (53 chars) | `Overview of the Blazor Diagram Component \| Syncfusion®` (54 chars) | ❌ Wrong pattern; trailing `®` |
| `description:` | flag-only | `Checkout and learn here all the features and Overview of the Blazor Diagram component and much more.` (97 chars) | ❌ Below 100; boilerplate (`Checkout and learn here all about…`) |
| `# H1` | `About Syncfusion Blazor Diagram Component.` (43 chars) | `Diagram Component Overview` (24 chars) | ❌ Wrong pattern; no trailing period |

**Proposed fix:**

```yaml
title: "About Syncfusion Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# About Syncfusion Blazor Diagram Component.
```

---

### ❌ getting-started.md
**Category:** Getting Started
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Getting Started with Blazor Diagram Component \| Syncfusion` (60 chars) | `Getting Started with Blazor Diagram in Blazor Server App \| Syncfusion®` (70 chars) | ❌ Wrong pattern; trailing `®` |
| `description:` | `Learn how to get started with the Syncfusion Blazor Diagram Component control. Explore setup, features, examples, and customization options.` | `Check out and learn about the documentation for getting started with Blazor Diagram Component in Blazor Server App.` (125 chars) | ❌ Boilerplate (`Check out and learn about…`); not the canonical GS template |
| `# H1` | `Getting Started with Blazor Diagram Component` (45 chars) | `Getting Started with Diagram Component in the Blazor Server App.` (62 chars) | ❌ Wrong pattern; trailing period |

Note: TOC anchor is `Blazor Server App`. The agent treats the four `getting-started-with-*.md` files as distinct GS variants, not duplicates. The spec GS pattern is `Getting Started with <Platform> <Control>`, so the per-host-app phrase is dropped in the proposed fix.

**Proposed fix:**

```yaml
title: "Getting Started with Blazor Diagram Component | Syncfusion"
description: "Learn how to get started with the Syncfusion Blazor Diagram Component control. Explore setup, features, examples, and customization options."
```

```markdown
# Getting Started with Blazor Diagram Component
```

---

### ❌ getting-started-with-web-app.md
**Category:** Getting Started
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Getting Started with Blazor Diagram Component \| Syncfusion` (60 chars) | `Getting Started with Blazor Diagram in Web App \| Syncfusion®` (58 chars) | ❌ Wrong pattern; trailing `®` |
| `description:` | canonical GS | `Check out and learn about the documentation for getting started with Blazor Diagram Component in Blazor Web App.` (115 chars) | ❌ Boilerplate |
| `# H1` | `Getting Started with Blazor Diagram Component` (45 chars) | `Getting Started with Blazor Diagram Component in Web App` (53 chars) | ❌ Wrong pattern |

TOC anchor: `Blazor Web App`.

**Proposed fix:**

```yaml
title: "Getting Started with Blazor Diagram Component | Syncfusion"
description: "Learn how to get started with the Syncfusion Blazor Diagram Component control. Explore setup, features, examples, and customization options."
```

```markdown
# Getting Started with Blazor Diagram Component
```

---

### ❌ getting-started-with-wasm-app.md
**Category:** Getting Started
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Getting Started with Blazor Diagram Component \| Syncfusion` (60 chars) | `Getting Started with Blazor Diagram in Blazor WASM App \| Syncfusion®` (66 chars) | ❌ Wrong pattern; trailing `®` |
| `description:` | canonical GS | `Check out and learn about the documentation for getting started with Blazor Diagram Component in Blazor WASM App.` (115 chars) | ❌ Boilerplate |
| `# H1` | `Getting Started with Blazor Diagram Component` (45 chars) | `Getting Started with Diagram Component in the Blazor WASM App` (60 chars) | ❌ Wrong pattern |

TOC anchor: `Blazor WASM App`.

**Proposed fix:**

```yaml
title: "Getting Started with Blazor Diagram Component | Syncfusion"
description: "Learn how to get started with the Syncfusion Blazor Diagram Component control. Explore setup, features, examples, and customization options."
```

```markdown
# Getting Started with Blazor Diagram Component
```

---

### ❌ getting-started-with-maui-app.md
**Category:** Getting Started
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Getting Started with Blazor Diagram Component \| Syncfusion` (60 chars) | `Getting Started with Blazor Diagram in Blazor MAUI App \| Syncfusion®` (65 chars) | ❌ Wrong pattern; trailing `®` |
| `description:` | canonical GS | `Check out and learn about the documentation for getting started with Blazor Diagram Component in Blazor MAUI App.` (114 chars) | ❌ Boilerplate |
| `# H1` | `Getting Started with Blazor Diagram Component` (45 chars) | `Getting Started with the Diagram Component in the Blazor MAUI App` (63 chars) | ❌ Wrong pattern |

TOC anchor: `Blazor Hybrid MAUI App`.

**Proposed fix:**

```yaml
title: "Getting Started with Blazor Diagram Component | Syncfusion"
description: "Learn how to get started with the Syncfusion Blazor Diagram Component control. Explore setup, features, examples, and customization options."
```

```markdown
# Getting Started with Blazor Diagram Component
```

---

### ❌ accessibility.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Accessibility in Blazor Diagram Component \| Syncfusion` (57 chars) | `Accessibility Features in Blazor Diagram Component \| Syncfusion®` (65 chars) | ❌ Trailing `®`; extra word `Features` |
| `description:` | flag-only | `Checkout and Learn all the features about accessibility in Blazor Diagram component and many more details.` (111 chars) | ❌ Boilerplate (`Checkout and Learn all the features…`) |
| `# H1` | `Accessibility in Blazor Diagram Component` (45 chars) | `Accessibility Features in Blazor Diagram Component` (51 chars) | ❌ Extra word `Features` |

TOC anchor: `Accessibility`.

**Proposed fix:**

```yaml
title: "Accessibility in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Accessibility in Blazor Diagram Component
```

---

### ❌ Blazor-PostgreSQL.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `PostgreSQL in Blazor Diagram Component \| Syncfusion` (54 chars) | `Loading Blazor Diagram from PostgreSQL Database \| Syncfusion®` (62 chars) | ❌ Wrong feature phrase; trailing `®` |
| `description:` | flag-only | `Fetch organizational chart layout data from PostgreSQL and bind it to a .NET API-backed Blazor Diagram for Server and WASM samples.` (126 chars) | ✅ length OK, content-aware |
| `# H1` | `PostgreSQL in Blazor Diagram Component` (39 chars) | `Loading Blazor Diagram from PostgreSQL Database` (48 chars) | ❌ Wrong phrase |

TOC anchor: `PostgreSQL`.

**Proposed fix:**

```yaml
title: "PostgreSQL in Blazor Diagram Component | Syncfusion"
description: "Fetch organizational chart layout data from PostgreSQL and bind it to a .NET API-backed Blazor Diagram for Server and WASM samples."
```

```markdown
# PostgreSQL in Blazor Diagram Component
```

---

### ❌ commands.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Commands in Blazor Diagram Component \| Syncfusion` (52 chars) | `Commands in Blazor Diagram Component \| Syncfusion®` (53 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all about diagram Commands in Blazor Diagram component and much more details.` (108 chars) | ❌ Boilerplate |
| `# H1` | `Commands in Blazor Diagram Component` (39 chars) | `Commands in Diagram Component` (28 chars) | ❌ Missing `Blazor`; missing `Component` |

TOC anchor: `Commands`.

**Proposed fix:**

```yaml
title: "Commands in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Commands in Blazor Diagram Component
```

---

### ❌ connectors.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Connectors in Blazor Diagram Component \| Syncfusion` (56 chars) | `Actions of Connectors in Diagram Component \| Syncfusion®` (58 chars) | ❌ Wrong phrase (`Actions of`); trailing `®`; missing `Blazor` |
| `description:` | flag-only | `Checkout and learn here all about actions of connectors in Blazor Diagram component and much more details.` (110 chars) | ❌ Boilerplate |
| `# H1` | `Connectors in Blazor Diagram Component` (39 chars) | `Connector in Diagram Component` (30 chars) | ❌ Singular; missing `Blazor`; missing `Component` |

TOC anchor: `Connectors`. Note: anchor uses plural `Connectors`; H1 is singular `Connector`. Per spec the H1 is the metadata source; the agent uses the filename (connectors.md → `Connectors`).

**Proposed fix:**

```yaml
title: "Connectors in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Connectors in Blazor Diagram Component
```

---

### ❌ customization.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Connector Customization in Blazor Diagram Component \| Syncfusion` (72 chars) | `Connector Customization in Blazor Diagram Component \| Syncfusion®` (73 chars) | ❌ Exceeds 70; trailing `®` |
| `description:` | flag-only | `Checkout and learn here all about connector customization in Blazor Diagram component and much more details.` (115 chars) | ❌ Boilerplate |
| `# H1` | `Connector Customization in Blazor Diagram Component` (54 chars) | `Connector Customization in Blazor Diagram Component` (54 chars) | ✅ Match (but title needs shortening) |

**Proposed fix:** Drop "Connector" prefix to fit 70 chars.

```yaml
title: "Customization in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Connector Customization in Blazor Diagram Component
```

---

### ❌ interactions.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Interaction in Blazor Diagram Component \| Syncfusion` (56 chars) | `Interaction in Blazor Diagram Component \| Syncfusion®` (57 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all about connector interaction in Blazor Diagram component and much more details.` (110 chars) | ❌ Boilerplate |
| `# H1` | `Interaction in Blazor Diagram Component` (43 chars) | `Interaction in Diagram Component` (32 chars) | ❌ Missing `Blazor`; missing `Component` |

TOC anchor: `Interaction` (note: filename is interactions.md plural but anchor uses singular).

**Proposed fix:**

```yaml
title: "Interaction in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Interaction in Blazor Diagram Component
```

---

### ❌ events.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Connector Events in Blazor Diagram Component \| Syncfusion` (64 chars) | `Connector Events in Blazor Diagram Component \| Syncfusion®` (65 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all about Connector Events in Blazor Diagram component and much more details.` (108 chars) | ❌ Boilerplate |
| `# H1` | `Connector Events in Blazor Diagram Component` (46 chars) | `Connector Events in Diagram Component` (37 chars) | ❌ Missing `Blazor`; missing `Component` |

TOC anchor: `Events`.

**Proposed fix:**

```yaml
title: "Connector Events in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Connector Events in Blazor Diagram Component
```

---

### ❌ straight.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Straight Segments in Blazor Diagram Component \| Syncfusion` (65 chars) | `Straight Segments in Blazor Diagram Component \| Syncfusion®` (66 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all about Straight Segments in Blazor Diagram component and much more details.` (109 chars) | ❌ Boilerplate |
| `# H1` | `Straight Segments in Blazor Diagram Component` (50 chars) | `Straight Segments in Blazor Diagram Component` (50 chars) | ✅ Match |

**Proposed fix:**

```yaml
title: "Straight Segments in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Straight Segments in Blazor Diagram Component
```

---

### ❌ orthogonal.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Orthogonal Segments in Blazor Diagram Component \| Syncfusion` (66 chars) | `Orthogonal Segments in Blazor Diagram Component \| Syncfusion®` (67 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Check out and learn about how to create Orthogonal Segments in Blazor Diagram component and much more details.` (114 chars) | ❌ Boilerplate |
| `# H1` | `Orthogonal Segments in Blazor Diagram Component` (51 chars) | `Orthogonal Segments in Blazor Diagram Component` (51 chars) | ✅ Match |

**Proposed fix:**

```yaml
title: "Orthogonal Segments in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Orthogonal Segments in Blazor Diagram Component
```

---

### ❌ multiplesegments.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Multiple Segments in Blazor Diagram Component \| Syncfusion` (64 chars) | `Multiple Segments in Blazor Diagram Component \| Syncfusion®` (65 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Check out and learn about how to create connectors with Multiple Segments in the Blazor Diagram component and much more details.` (129 chars) | ❌ Boilerplate |
| `# H1` | `Multiple Segments in Blazor Diagram Component` (49 chars) | `Multiple Segments in Blazor Diagram Component` (49 chars) | ✅ Match |

**Proposed fix:**

```yaml
title: "Multiple Segments in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Multiple Segments in Blazor Diagram Component
```

---

### ❌ bezier.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Bezier Segments in Blazor Diagram Component \| Syncfusion` (62 chars) | `Bezier Segment in Blazor Diagram Component \| Syncfusion®` (61 chars) | ❌ Singular; trailing `®` |
| `description:` | flag-only | `Check out and learn about Bezier Connector Segments in Blazor Diagram component and much more details.` (110 chars) | ❌ Boilerplate |
| `# H1` | `Bezier Segments in Blazor Diagram Component` (45 chars) | `Bezier Segments in Diagram Component` (36 chars) | ❌ Missing `Blazor`; missing `Component` |

TOC anchor: `Bezier`.

**Proposed fix:**

```yaml
title: "Bezier Segments in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Bezier Segments in Blazor Diagram Component
```

---

### ❌ controlpointinteraction.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Control Point Interaction in Blazor Diagram Component \| Syncfusion` (74 chars) | `Bezier Segments Interaction in Blazor Diagram \| Syncfusion®` (63 chars) | ❌ Wrong phrase; trailing `®`; missing `Component`; exceeds 70? — actual 63 OK but phrase wrong |
| `description:` | flag-only | `Checkout and learn here all about Bezier Segments in Blazor Diagram component and much more details.` (107 chars) | ❌ Boilerplate |
| `# H1` | `Control Point Interaction in Blazor Diagram Component` (58 chars) | `Bezier Segments Interaction in Blazor Diagram` (46 chars) | ❌ Wrong phrase; missing `Component` |

TOC anchor: `ControlPoint Interaction`.

**Proposed fix:**

```yaml
title: "Control Point Interaction in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Control Point Interaction in Blazor Diagram Component
```

---

### ❌ segmenteditorientation.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Segment Edit Orientation in Blazor Diagram Component \| Syncfusion` (73 chars) | `Bezier Segments in Blazor Diagram Component \| Syncfusion®` (60 chars) | ❌ Wrong phrase; trailing `®`; exceeds 70? — actual 60 OK |
| `description:` | flag-only | ` Check out and learn about how to edit the Bezier Segments in Blazor Diagram component and much more details.` (114 chars) | ❌ Boilerplate |
| `# H1` | `Segment Edit Orientation in Blazor Diagram Component` (57 chars) | `Bezier Segments in Blazor Diagram Component` (45 chars) | ❌ Wrong phrase |

TOC anchor: `Segment Edit Orienttaion` (typo in TOC — `Orienttaion`).

**Proposed fix:**

```yaml
title: "Segment Edit Orientation in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Segment Edit Orientation in Blazor Diagram Component
```

---

### ❌ constraints.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Constraints in Blazor Diagram Component \| Syncfusion` (55 chars) | `Constraints in Blazor Diagram Component \| Syncfusion®` (56 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all about diagram Constraints in Blazor Diagram component and much more details.` (110 chars) | ❌ Boilerplate |
| `# H1` | `Constraints in Blazor Diagram Component` (42 chars) | `Constraints in Diagram Component` (31 chars) | ❌ Missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Constraints in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Constraints in Blazor Diagram Component
```

---

### ❌ container.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Container in Blazor Diagram Component \| Syncfusion` (55 chars) | `Container in Blazor Diagram Component \| Syncfusion®` (56 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all the features about Container support in Blazor Diagram component and much more.` (110 chars) | ❌ Boilerplate |
| `# H1` | `Container in Blazor Diagram Component` (42 chars) | `Container in Blazor Diagram Component` (42 chars) | ✅ Match |

**Proposed fix:**

```yaml
title: "Container in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Container in Blazor Diagram Component
```

---

### ❌ context-menu.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Context Menu in Blazor Diagram Component \| Syncfusion` (56 chars) | `Context Menu in Blazor Diagram Component \| Syncfusion®` (57 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all the features about Diagram Context Menu in Blazor Diagram component and much more.` (112 chars) | ❌ Boilerplate |
| `# H1` | `Context Menu in Blazor Diagram Component` (43 chars) | `Context Menu in Diagram Component` (32 chars) | ❌ Missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Context Menu in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Context Menu in Blazor Diagram Component
```

---

### ❌ data-binding.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Data Binding in Blazor Diagram Component \| Syncfusion` (59 chars) | `Data Binding in Blazor Diagram Component \| Syncfusion®` (60 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Learn here all about Data Binding such as local data, remote data in Blazor Diagram component and more.` (105 chars) | ❌ Boilerplate (starts `Learn here all about`) |
| `# H1` | `Data Binding in Blazor Diagram Component` (43 chars) | `Data Binding in Diagram Component` (32 chars) | ❌ Missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Data Binding in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Data Binding in Blazor Diagram Component
```

---

### ❌ events.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Events in Blazor Diagram Component \| Syncfusion` (51 chars) | `Diagram Events in Blazor Diagram Component \| Syncfusion®` (60 chars) | ❌ Trailing `®`; extra prefix `Diagram` |
| `description:` | flag-only | `Checkout and learn here all the features about Diagram events in Blazor Diagram component and much more.` (106 chars) | ❌ Boilerplate |
| `# H1` | `Events in Blazor Diagram Component` (38 chars) | `Diagram Events in Blazor Diagram Component` (47 chars) | ❌ Extra `Diagram` prefix |

TOC anchor: `Events`. Per spec, filename events.md → `Events`, not `Diagram Events`.

**Proposed fix:**

```yaml
title: "Events in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Events in Blazor Diagram Component
```

---

### ❌ export.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Exporting in Blazor Diagram Component \| Syncfusion` (56 chars) | `Exporting in Blazor Diagram Component \| Syncfusion®` (57 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all the features about the Exporting feature in Blazor Diagram component and more.` (108 chars) | ❌ Boilerplate |
| `# H1` | `Exporting in Blazor Diagram Component` (40 chars) | `Exporting in Blazor Diagram Component` (40 chars) | ✅ Match |

TOC anchor: `Exporting`.

**Proposed fix:**

```yaml
title: "Exporting in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Exporting in Blazor Diagram Component
```

---

### ❌ flip.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Flip in Blazor Diagram Component \| Syncfusion` (49 chars) | `Flip in Blazor Diagram Component \| Syncfusion®` (50 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all the features about flip support in Blazor Diagram component and much more details.` (111 chars) | ❌ Boilerplate |
| `# H1` | `Flip in Blazor Diagram Component` (36 chars) | `Flip in Blazor Diagram Component` (36 chars) | ✅ Match |

TOC anchor: `Flip`.

**Proposed fix:**

```yaml
title: "Flip in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Flip in Blazor Diagram Component
```

---

### ❌ grid-lines.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Grid Lines in Blazor Diagram Component \| Syncfusion` (56 chars) | `Grid Lines in Blazor Diagram Component \| Syncfusion®` (57 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all the features about Grid Lines in Blazor Diagram component and much more details.` (112 chars) | ❌ Boilerplate |
| `# H1` | `Grid Lines in Blazor Diagram Component` (43 chars) | `Grid Lines in Blazor Diagram Component` (43 chars) | ✅ Match |

TOC anchor: `Gridlines`.

**Proposed fix:**

```yaml
title: "Grid Lines in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Grid Lines in Blazor Diagram Component
```

---

### ❌ group.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Group in Blazor Diagram Component \| Syncfusion` (51 chars) | `Node Group in Blazor Diagram Component \| Syncfusion®` (57 chars) | ❌ Trailing `®`; extra `Node` |
| `description:` | flag-only | `Learn here all about how to create and update the NodeGroup in Blazor Diagram component and much more details.` (111 chars) | ❌ Boilerplate |
| `# H1` | `Group in Blazor Diagram Component` (38 chars) | `Node Group in Blazor Diagram Component` (42 chars) | ❌ Extra `Node` |

TOC anchor: `Group`.

**Proposed fix:**

```yaml
title: "Group in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Group in Blazor Diagram Component
```

---

### ❌ interaction.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Interaction in Blazor Diagram Component \| Syncfusion` (56 chars) | `Connector Interactions in Blazor Diagram Component \| Syncfusion®` (70 chars) | ❌ Trailing `®`; extra `Connector` |
| `description:` | flag-only | `Checkout and learn here all about diagram interaction in Blazor Diagram component and much more details.` (107 chars) | ❌ Boilerplate |
| `# H1` | `Interaction in Blazor Diagram Component` (43 chars) | `Connector Interactions in Blazor Diagram Component` (53 chars) | ❌ Extra `Connector Interactions` |

TOC anchor: `Interaction`. Note: file interaction.md (singular) describes connectors specifically; spec requires H1 derived from filename.

**Proposed fix:**

```yaml
title: "Interaction in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Interaction in Blazor Diagram Component
```

---

### ❌ localization.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Localization in Blazor Diagram Component \| Syncfusion` (58 chars) | `Localization in the Blazor Diagram Component \| Syncfusion®` (62 chars) | ❌ Trailing `®`; extra `the` |
| `description:` | flag-only | `Checkout and learn  all the features about Localization in the Blazor Diagram component and much more.` (108 chars) | ❌ Boilerplate |
| `# H1` | `Localization in Blazor Diagram Component` (45 chars) | `Localization in Blazor Diagram Component` (45 chars) | ✅ Match |

TOC anchor uses capital L: `Localization`. File on disk uses lowercase localization.md. Flag for the user.

**Proposed fix:**

```yaml
title: "Localization in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Localization in Blazor Diagram Component
```

---

### ❌ migration-classic-to-native.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Migration in Blazor Diagram Component \| Syncfusion` (56 chars) | `Migration from SfDiagram(classic) to SfDiagram Component \| Syncfusion®` (76 chars) | ❌ Exceeds 70; trailing `®` |
| `description:` | flag-only | `Learn how to migrate the SfDiagram to SfDiagramComponent in Blazor Diagram component and much more details.` (110 chars) | ❌ Boilerplate (starts `Learn how to migrate`) |
| `# H1` | `Migration in Blazor Diagram Component` (43 chars) | `Migrating from SfDiagram(Classic) to SfDiagram Component Control` (66 chars) | ❌ Wrong phrase; extra `Control` |

TOC anchor: `Migration from SfDiagram(Classic)`.

**Proposed fix:**

```yaml
title: "Migration in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Migration in Blazor Diagram Component
```

---

### ❌ page-settings.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Page Settings in Blazor Diagram Component \| Syncfusion` (58 chars) | `Page Settings in Blazor Diagram Component \| Syncfusion®` (59 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all the features about Page Setting in Blazor Diagram component and much more.` (106 chars) | ❌ Boilerplate |
| `# H1` | `Page Settings in Blazor Diagram Component` (45 chars) | `Page Settings in Diagram Component` (34 chars) | ❌ Missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Page Settings in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Page Settings in Blazor Diagram Component
```

---

### ❌ print.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Printing in Blazor Diagram Component \| Syncfusion` (55 chars) | `Printing in Blazor Diagram Component \| Syncfusion®` (56 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all the features about the Printing feature in Blazor Diagram component and more.` (108 chars) | ❌ Boilerplate |
| `# H1` | `Printing in Blazor Diagram Component` (39 chars) | `Printing in Blazor Diagram Component` (39 chars) | ✅ Match |

**Proposed fix:**

```yaml
title: "Printing in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Printing in Blazor Diagram Component
```

---

### ❌ rulers.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Rulers in Blazor Diagram Component \| Syncfusion` (53 chars) | `Ruler settings in Blazor Diagram Component \| Syncfusion®` (59 chars) | ❌ Trailing `®`; `Ruler` singular; `settings` lowercase |
| `description:` | flag-only | `Checkout and learn here all the features about the Ruler feature in Blazor Diagram component and more.` (105 chars) | ❌ Boilerplate |
| `# H1` | `Rulers in Blazor Diagram Component` (40 chars) | `Ruler Settings in Blazor Diagram Component` (45 chars) | ❌ Singular `Ruler`; extra `Settings` |

TOC anchor: `Rulers`.

**Proposed fix:**

```yaml
title: "Rulers in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Rulers in Blazor Diagram Component
```

---

### ❌ scroll-settings.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Scroll Settings in Blazor Diagram Component \| Syncfusion` (60 chars) | `Scroll Settings in Blazor Diagram Component \| Syncfusion®` (61 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all the features about Scroll Setting in Blazor Diagram component and much more.` (108 chars) | ❌ Boilerplate |
| `# H1` | `Scroll Settings in Blazor Diagram Component` (47 chars) | `Scroll Settings in Diagram Component` (36 chars) | ❌ Missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Scroll Settings in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Scroll Settings in Blazor Diagram Component
```

---

### ❌ serialization.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Serialization in Blazor Diagram Component \| Syncfusion` (60 chars) | `Serialization in Blazor Diagram Component \| Syncfusion®` (61 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Learn here all about how to save and load the diagram elements in Blazor Diagram component and more.` (105 chars) | ❌ Boilerplate (starts `Learn here all about`) |
| `# H1` | `Serialization in Blazor Diagram Component` (47 chars) | `Serialization in Diagram Component` (36 chars) | ❌ Missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Serialization in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Serialization in Blazor Diagram Component
```

---

### ❌ shapes.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Shapes in Blazor Diagram Component \| Syncfusion` (53 chars) | `Shapes in Blazor Diagram Component \| Syncfusion®` (54 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all the features about Shapes in Blazor Diagram component and much more details.` (107 chars) | ❌ Boilerplate |
| `# H1` | `Shapes in Blazor Diagram Component` (40 chars) | `Node Shapes in Blazor Diagram Component` (44 chars) | ❌ Extra `Node` prefix |

**Proposed fix:**

```yaml
title: "Shapes in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Shapes in Blazor Diagram Component
```

---

### ❌ style.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Style in Blazor Diagram Component \| Syncfusion` (51 chars) | `Style in Blazor Diagram Component \| Syncfusion®` (52 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all the features about Styles in Blazor Diagram component and much more details.` (109 chars) | ❌ Boilerplate |
| `# H1` | `Style in Blazor Diagram Component` (38 chars) | `Style in Blazor Diagram Component` (38 chars) | ✅ Match |

**Proposed fix:**

```yaml
title: "Style in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Style in Blazor Diagram Component
```

---

### ❌ tool-tip.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Tooltip in Blazor Diagram Component \| Syncfusion` (53 chars) | `Tooltip in Blazor Diagram Component \| Syncfusion®` (54 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn all the features about the Tooltip support in Blazor Diagram component and much more.` (108 chars) | ❌ Boilerplate |
| `# H1` | `Tooltip in Blazor Diagram Component` (40 chars) | `Tooltip in Diagram Component` (29 chars) | ❌ Missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Tooltip in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Tooltip in Blazor Diagram Component
```

---

### ❌ tools.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Tools in Blazor Diagram Component \| Syncfusion` (51 chars) | `Tools in Blazor Diagram Component \| Syncfusion®` (52 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Explore the Blazor Diagram component's drawing tools, connectors, annotations, and customization options with detailed documentation.` (131 chars) | ✅ length OK, content-aware |
| `# H1` | `Tools in Blazor Diagram Component` (38 chars) | `Tools in Diagram Component` (27 chars) | ❌ Missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Tools in Blazor Diagram Component | Syncfusion"
description: "Explore the Blazor Diagram component's drawing tools, connectors, annotations, and customization options with detailed documentation."
```

```markdown
# Tools in Blazor Diagram Component
```

---

### ❌ uml-class-diagram.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `UML Class Diagram in Blazor Diagram Component \| Syncfusion` (66 chars) | `UML Class Diagram in Blazor Diagram Component \| Syncfusion` (64 chars) | ❌ Missing `®` (inconsistent with rest) |
| `description:` | flag-only | `Learn how to create and customize UML class diagrams using the Syncfusion Blazor Diagram component and much more details.` (122 chars) | ❌ Boilerplate (starts `Learn how to create`) |
| `# H1` | `UML Class Diagram in Blazor Diagram Component` (51 chars) | `UML Class Diagram in Blazor Diagram Component` (51 chars) | ✅ Match |

**Proposed fix:**

```yaml
title: "UML Class Diagram in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# UML Class Diagram in Blazor Diagram Component
```

---

### ❌ uml-sequence-diagram.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `UML Sequence Diagram in Blazor Diagram Component \| Syncfusion` (68 chars) | `Sequence diagram model in Blazor Diagram Component \| Syncfusion®` (65 chars) | ❌ Wrong phrase; trailing `®`; lowercase `diagram` |
| `description:` | flag-only | `Check out and learn here all about Sequence diagram model support in Blazor Diagram component and more.` (108 chars) | ❌ Boilerplate |
| `# H1` | `UML Sequence Diagram in Blazor Diagram Component` (53 chars) | `Sequence Diagram Model in Blazor diagram component` (51 chars) | ❌ Wrong phrase; lowercase `diagram component` |

TOC anchor: `Uml Sequence Diagram`.

**Proposed fix:**

```yaml
title: "UML Sequence Diagram in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# UML Sequence Diagram in Blazor Diagram Component
```

---

### ❌ undo-redo.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Undo Redo in Blazor Diagram Component \| Syncfusion` (55 chars) | `Undo Redo in Blazor Diagram Component \| Syncfusion®` (56 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Learn all about undo and redo support in the Blazor Diagram component, including implementation details, customization options, and more.` (138 chars) | ⚠ Borderline (starts `Learn all about` — close to boilerplate) |
| `# H1` | `Undo Redo in Blazor Diagram Component` (42 chars) | `Undo Redo support in Blazor Diagram Component` (48 chars) | ❌ Extra `support` |

TOC anchor: `Undo Redo`.

**Proposed fix:**

```yaml
title: "Undo Redo in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Undo Redo in Blazor Diagram Component
```

---

### ❌ user-handle.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `User Handle in Blazor Diagram Component \| Syncfusion` (57 chars) | `User Handle in Blazor Diagram Component \| Syncfusion®` (58 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Learn how to create and customize user handles in the Blazor Diagram component, with practical examples, and more.` (118 chars) | ⚠ Borderline |
| `# H1` | `User Handle in Blazor Diagram Component` (44 chars) | `User Handles for Node and Connector in Blazor Diagram Component` (68 chars) | ❌ Extra `for Node and Connector` |

TOC anchor: `User Handles`.

**Proposed fix:**

```yaml
title: "User Handle in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# User Handle in Blazor Diagram Component
```

---

### ❌ overview-component.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Overview in Blazor Diagram Component \| Syncfusion` (54 chars) | `Overview in Blazor Diagram Component \| Syncfusion®` (55 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Check out and learn here all the features and Overview Control in Blazor Diagram component and much more.` (108 chars) | ❌ Boilerplate |
| `# H1` | `Overview in Blazor Diagram Component` (41 chars) | `Overview in Blazor Diagram Component` (41 chars) | ✅ Match |

TOC anchor: `Overview Control`.

**Proposed fix:**

```yaml
title: "Overview in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Overview in Blazor Diagram Component
```

---

### ❌ how-to.md
**Category:** Feature (not How-to — see note)
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `How to in Blazor Diagram Component \| Syncfusion` (53 chars) | `How to Use Diagram Methods and Properties \| Syncfusion®` (58 chars) | ❌ Trailing `®`; phrase reads but per spec How-to category would use `How to <verb phrase> in <Platform> <Control>` |
| `description:` | flag-only | `Checkout and learn here all about how to achieve common use cases in Blazor Diagram component, it's elements and more.` (122 chars) | ❌ Boilerplate |
| `# H1` | (How-to pattern) | `How to Use Diagram Methods and Properties for Common Scenarios` (68 chars) | ❌ Exceeds 70? — 68 OK; per spec this file is how-to.md (no subfolder) — agent classifies as Feature because path does not contain `/how-to/` |

> Path how-to.md does NOT contain `/how-to/` (it's the file itself), so the spec classifies as Feature. The agent notes the TOC anchor `How To` and that the H1 actually starts with `How to`, but the spec file-classification rule is path-based. Flag for the user.

**Proposed fix:**

```yaml
title: "How to in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# How to in Blazor Diagram Component
```

---

### ❌ nodes.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Nodes in Blazor Diagram Component \| Syncfusion` (52 chars) | `Action of Nodes in Blazor Diagram Component \| Syncfusion®` (61 chars) | ❌ Trailing `®`; `Action of` instead of `Nodes` |
| `description:` | flag-only | `Checkout and learn here all the features about action of nodes in Blazor Diagram component and much more.` (105 chars) | ❌ Boilerplate |
| `# H1` | `Nodes in Blazor Diagram Component` (39 chars) | `Node in Blazor Diagram Component` (38 chars) | ❌ Singular |

**Proposed fix:**

```yaml
title: "Nodes in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Nodes in Blazor Diagram Component
```

---

### ❌ customization.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Customization in Blazor Diagram Component \| Syncfusion` (59 chars) | `Customization in Blazor Diagram Component \| Syncfusion®` (60 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all about customization support in Blazor Diagram component, it's elements and more.` (112 chars) | ❌ Boilerplate |
| `# H1` | `Customization in Blazor Diagram Component` (46 chars) | `Appearance of a Node in Diagram Component` (44 chars) | ❌ Wrong phrase; missing `Blazor`; missing `Component` |

TOC anchor: `Customization`.

**Proposed fix:**

```yaml
title: "Customization in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Customization in Blazor Diagram Component
```

---

### ❌ interaction.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Node Interaction in Blazor Diagram Component \| Syncfusion` (62 chars) | `Node Interaction in Blazor Diagram Component \| Syncfusion®` (63 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all the features about node interaction in Blazor Diagram component and much more details.` (113 chars) | ❌ Boilerplate |
| `# H1` | `Node Interaction in Blazor Diagram Component` (49 chars) | `Node Interaction in Diagram Component` (38 chars) | ❌ Missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Node Interaction in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Node Interaction in Blazor Diagram Component
```

---

### ❌ events.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Node Events in Blazor Diagram Component \| Syncfusion` (58 chars) | `Node Events in Blazor Diagram Component \| Syncfusion®` (59 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all the features about Node Events in Blazor Diagram component and much more details.` (111 chars) | ❌ Boilerplate |
| `# H1` | `Node Events in Blazor Diagram Component` (45 chars) | `Events and Constraints in Diagram Component` (46 chars) | ❌ Wrong phrase; missing `Blazor`; missing `Component` |

TOC anchor: `Events`.

**Proposed fix:**

```yaml
title: "Node Events in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Node Events in Blazor Diagram Component
```

---

### ❌ positioning.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Positioning in Blazor Diagram Component \| Syncfusion` (58 chars) | `Positioning a Node in Blazor Diagram Component \| Syncfusion®` (65 chars) | ❌ Trailing `®`; extra `a Node` |
| `description:` | flag-only | `Checkout and learn here all about Node Positioning in Blazor Diagram component and much more details.` (108 chars) | ❌ Boilerplate |
| `# H1` | `Positioning in Blazor Diagram Component` (45 chars) | `Positioning a Node in Diagram Component` (42 chars) | ❌ Extra `a Node`; missing `Blazor`; missing `Component` |

TOC anchor: `Positioning`.

**Proposed fix:**

```yaml
title: "Positioning in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Positioning in Blazor Diagram Component
```

---

### ❌ expand-and-collapse.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Expand and Collapse in Blazor Diagram Component \| Syncfusion` (67 chars) | `DiagramIcon in Blazor Diagram Component \| Syncfusion®` (56 chars) | ❌ Wrong phrase (`DiagramIcon` instead of `Expand and Collapse`) |
| `description:` | flag-only | `Learn here all about how to create the Diagram Icon handles in Blazor Diagram component and much more details.` (115 chars) | ❌ Boilerplate |
| `# H1` | `Expand and Collapse in Blazor Diagram Component` (54 chars) | `Expand and Collapse Support for Nodes in Blazor Diagram Component` (70 chars) | ❌ Exceeds 70? — 70 OK; extra `Support for Nodes` |

TOC anchor: `Expand and Collapse`.

**Proposed fix:**

```yaml
title: "Expand and Collapse in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Expand and Collapse in Blazor Diagram Component
```

---

### ❌ bpmn-shapes.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `BPMN Shapes in Blazor Diagram Component \| Syncfusion` (58 chars) | `BPMN Shapes in Blazor Diagram \| Syncfusion®` (49 chars) | ❌ Trailing `®`; missing `Component` |
| `description:` | flag-only | `Overview of built-in BPMN shapes in Blazor Diagram: events, gateways, activities, data, text annotation, and flow connectors.` (124 chars) | ✅ length OK, content-aware |
| `# H1` | `BPMN Shapes in Blazor Diagram Component` (45 chars) | `BPMN Shapes in Blazor Diagram` (32 chars) | ❌ Missing `Component` |

**Proposed fix:**

```yaml
title: "BPMN Shapes in Blazor Diagram Component | Syncfusion"
description: "Overview of built-in BPMN shapes in Blazor Diagram: events, gateways, activities, data, text annotation, and flow connectors."
```

```markdown
# BPMN Shapes in Blazor Diagram Component
```

---

### ❌ bpmn-event.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `BPMN Event in Blazor Diagram Component \| Syncfusion` (57 chars) | `BPMN Event in Blazor Diagram \| Syncfusion®` (48 chars) | ❌ Trailing `®`; missing `Component` |
| `description:` | flag-only | `Add BPMN events in Blazor Diagram with Start, Intermediate, and End types plus triggers like message, timer, signal, error, and escalation.` (137 chars) | ✅ length OK, content-aware |
| `# H1` | `BPMN Event in Blazor Diagram Component` (44 chars) | `BPMN Event in Blazor Diagram` (31 chars) | ❌ Missing `Component` |

**Proposed fix:**

```yaml
title: "BPMN Event in Blazor Diagram Component | Syncfusion"
description: "Add BPMN events in Blazor Diagram with Start, Intermediate, and End types plus triggers like message, timer, signal, error, and escalation."
```

```markdown
# BPMN Event in Blazor Diagram Component
```

---

### ❌ bpmn-gateway.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `BPMN Gateway in Blazor Diagram Component \| Syncfusion` (59 chars) | `BPMN Gateway in Blazor Diagram \| Syncfusion®` (50 chars) | ❌ Trailing `®`; missing `Component` |
| `description:` | flag-only | `Control BPMN process flow in Blazor Diagram using Exclusive, Parallel, Inclusive, Complex, and Event-Based gateway types.` (120 chars) | ✅ length OK, content-aware |
| `# H1` | `BPMN Gateway in Blazor Diagram Component` (46 chars) | `BPMN Gateway in Blazor Diagram` (33 chars) | ❌ Missing `Component` |

**Proposed fix:**

```yaml
title: "BPMN Gateway in Blazor Diagram Component | Syncfusion"
description: "Control BPMN process flow in Blazor Diagram using Exclusive, Parallel, Inclusive, Complex, and Event-Based gateway types."
```

```markdown
# BPMN Gateway in Blazor Diagram Component
```

---

### ❌ bpmn-data-object.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `BPMN Data Object in Blazor Diagram Component \| Syncfusion` (63 chars) | `BPMN Data Object in Blazor Diagram \| Syncfusion®` (54 chars) | ❌ Trailing `®`; missing `Component` |
| `description:` | flag-only | `Model information flowing through a BPMN process in Blazor Diagram using Data Object input, output, and collective data shapes.` (124 chars) | ✅ length OK, content-aware |
| `# H1` | `BPMN Data Object in Blazor Diagram Component` (50 chars) | `BPMN Data Object in Blazor Diagram` (37 chars) | ❌ Missing `Component` |

**Proposed fix:**

```yaml
title: "BPMN Data Object in Blazor Diagram Component | Syncfusion"
description: "Model information flowing through a BPMN process in Blazor Diagram using Data Object input, output, and collective data shapes."
```

```markdown
# BPMN Data Object in Blazor Diagram Component
```

---

### ❌ bpmn-data-store.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `BPMN Data Store in Blazor Diagram Component \| Syncfusion` (62 chars) | `BPMN Data Store in Blazor Diagram \| Syncfusion®` (53 chars) | ❌ Trailing `®`; missing `Component` |
| `description:` | flag-only | `Add a BPMN data store in Blazor Diagram to represent persistent storage accessed by activities during a business process.` (124 chars) | ✅ length OK, content-aware |
| `# H1` | `BPMN Data Store in Blazor Diagram Component` (49 chars) | `BPMN Data Store in Blazor Diagram` (36 chars) | ❌ Missing `Component` |

TOC anchor: `BPMN Datasource`. Note: anchor says "Datasource" but spec pattern is `BPMN Data Store` (from filename).

**Proposed fix:**

```yaml
title: "BPMN Data Store in Blazor Diagram Component | Syncfusion"
description: "Add a BPMN data store in Blazor Diagram to represent persistent storage accessed by activities during a business process."
```

```markdown
# BPMN Data Store in Blazor Diagram Component
```

---

### ❌ bpmn-activity.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `BPMN Activity in Blazor Diagram Component \| Syncfusion` (60 chars) | `BPMN Activity in Blazor Diagram \| Syncfusion®` (51 chars) | ❌ Trailing `®`; missing `Component` |
| `description:` | flag-only | `Create BPMN activities in Blazor Diagram using Task, Collapsed Sub-Process, loop, compensation, call, ad-hoc, and event subprocess types.` (131 chars) | ✅ length OK, content-aware |
| `# H1` | `BPMN Activity in Blazor Diagram Component` (47 chars) | `BPMN Activity in Blazor Diagram` (34 chars) | ❌ Missing `Component` |

**Proposed fix:**

```yaml
title: "BPMN Activity in Blazor Diagram Component | Syncfusion"
description: "Create BPMN activities in Blazor Diagram using Task, Collapsed Sub-Process, loop, compensation, call, ad-hoc, and event subprocess types."
```

```markdown
# BPMN Activity in Blazor Diagram Component
```

---

### ❌ bpmn-text-annotation.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `BPMN Text Annotation in Blazor Diagram Component \| Syncfusion` (67 chars) | `BPMN Text Annotation in Blazor Diagram \| Syncfusion®` (58 chars) | ❌ Trailing `®`; missing `Component` |
| `description:` | flag-only | `Attach BPMN text annotations in Blazor Diagram to nodes with auto, left, right, top, or bottom connector directions.` (114 chars) | ✅ length OK, content-aware |
| `# H1` | `BPMN Text Annotation in Blazor Diagram Component` (54 chars) | `BPMN Text Annotation in Blazor Diagram` (41 chars) | ❌ Missing `Component` |

**Proposed fix:**

```yaml
title: "BPMN Text Annotation in Blazor Diagram Component | Syncfusion"
description: "Attach BPMN text annotations in Blazor Diagram to nodes with auto, left, right, top, or bottom connector directions."
```

```markdown
# BPMN Text Annotation in Blazor Diagram Component
```

---

### ❌ bpmn-expanded-sub-process.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `BPMN Expanded Sub Process in Blazor Diagram Component \| Syncfusion` (70 chars) | `BPMN Expanded Sub-Process in Blazor Diagram \| Syncfusion®` (62 chars) | ❌ Trailing `®`; missing `Component`; hyphen in `Sub-Process` |
| `description:` | flag-only | `Group related BPMN nodes inside a Blazor Diagram Expanded Sub-Process with loop, compensation, ad-hoc, and event subprocess variants.` (135 chars) | ✅ length OK, content-aware |
| `# H1` | `BPMN Expanded Sub Process in Blazor Diagram Component` (58 chars) | `BPMN Expanded Sub-Process in Blazor Diagram` (45 chars) | ❌ Missing `Component`; hyphen in `Sub-Process` |

**Proposed fix:**

```yaml
title: "BPMN Expanded Sub Process in Blazor Diagram Component | Syncfusion"
description: "Group related BPMN nodes inside a Blazor Diagram Expanded Sub-Process with loop, compensation, ad-hoc, and event subprocess variants."
```

```markdown
# BPMN Expanded Sub Process in Blazor Diagram Component
```

---

### ❌ bpmn-connectors.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `BPMN Connectors in Blazor Diagram Component \| Syncfusion` (62 chars) | `BPMN Connectors in Blazor Diagram \| Syncfusion®` (53 chars) | ❌ Trailing `®`; missing `Component` |
| `description:` | flag-only | `Build BPMN connectors in Blazor Diagram using Association, Sequence, and Message flows to link activities, artifacts, and process participants.` (137 chars) | ✅ length OK, content-aware |
| `# H1` | `BPMN Connectors in Blazor Diagram Component` (49 chars) | `BPMN Connectors in Blazor Diagram` (36 chars) | ❌ Missing `Component` |

**Proposed fix:**

```yaml
title: "BPMN Connectors in Blazor Diagram Component | Syncfusion"
description: "Build BPMN connectors in Blazor Diagram using Association, Sequence, and Message flows to link activities, artifacts, and process participants."
```

```markdown
# BPMN Connectors in Blazor Diagram Component
```

---

### ❌ swimlane.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Swimlane in Blazor Diagram Component \| Syncfusion` (55 chars) | `Swimlane in Blazor Diagram Component \| Syncfusion®` (56 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Check out and learn here all about swimlane support in Blazor Diagram component and much more details.` (103 chars) | ❌ Boilerplate |
| `# H1` | `Swimlane in Blazor Diagram Component` (42 chars) | `Swimlane in Blazor Diagram Component` (42 chars) | ✅ Match |

**Proposed fix:**

```yaml
title: "Swimlane in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Swimlane in Blazor Diagram Component
```

---

### ❌ lane.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Lane in Blazor Diagram Component \| Syncfusion` (51 chars) | `Lane in Blazor Diagram Component \| Syncfusion®` (52 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Check out and learn here all about Lane in Blazor Diagram component, its elements and much more details.` (107 chars) | ❌ Boilerplate |
| `# H1` | `Lane in Blazor Diagram Component` (38 chars) | `Lane in Blazor Diagram Component` (38 chars) | ✅ Match |

**Proposed fix:**

```yaml
title: "Lane in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Lane in Blazor Diagram Component
```

---

### ❌ interaction.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Lane Interaction in Blazor Diagram Component \| Syncfusion` (63 chars) | `Lane Interaction in Blazor Diagram Component \| Syncfusion®` (64 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `How to select, resize(with and without selection), and swap the lane, and how to add the child element into the lane.` (116 chars) | ⚠ No canonical template, but starts with `How to` — borderline; OK to flag for rewrite |
| `# H1` | `Lane Interaction in Blazor Diagram Component` (50 chars) | `Lane Interaction in Blazor Diagram Component` (50 chars) | ✅ Match |

**Proposed fix:**

```yaml
title: "Lane Interaction in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Lane Interaction in Blazor Diagram Component
```

---

### ❌ phase.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Phase in Blazor Diagram Component \| Syncfusion` (52 chars) | `Phase in Blazor Diagram Component \| Syncfusion®` (53 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Check out and learn here all about Phase support in Blazor Diagram component, its elements and more.` (103 chars) | ❌ Boilerplate |
| `# H1` | `Phase in Blazor Diagram Component` (39 chars) | `Phase in Blazor Diagram Component` (39 chars) | ✅ Match |

**Proposed fix:**

```yaml
title: "Phase in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Phase in Blazor Diagram Component
```

---

### ❌ swimlane-palette.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Swimlane Palette in Blazor Diagram Component \| Syncfusion` (63 chars) | `Swimlane-Palette in Blazor Diagram Component \| Syncfusion®` (64 chars) | ❌ Trailing `®`; hyphen in `Swimlane-Palette` |
| `description:` | flag-only | `Learn here all about Swimlane-Palette support in Blazor Diagram component, its elements and much more details.` (115 chars) | ❌ Boilerplate |
| `# H1` | `Swimlane Palette in Blazor Diagram Component` (50 chars) | `Swimlane-Palette in Blazor Diagram Component` (50 chars) | ❌ Hyphen in `Swimlane-Palette` |

TOC anchor: `Swimlane-Palette`.

**Proposed fix:**

```yaml
title: "Swimlane Palette in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Swimlane Palette in Blazor Diagram Component
```

---

### ❌ collaborative-editing.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Collaborative Editing in Blazor Diagram Component \| Syncfusion` (68 chars) | `Collaborative Editing in Blazor Diagram \| Syncfusion®` (57 chars) | ❌ Trailing `®`; missing `Component` |
| `description:` | flag-only | `Checkout and learn to set up real-time collaborative editing in Blazor Diagram using SignalR and Redis.` (107 chars) | ⚠ Borderline (starts `Checkout and learn`) |
| `# H1` | `Collaborative Editing in Blazor Diagram Component` (55 chars) | `Collaborative editing in Blazor diagram` (40 chars) | ❌ lowercase; missing `Component` |

**Proposed fix:**

```yaml
title: "Collaborative Editing in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Collaborative Editing in Blazor Diagram Component
```

---

### ❌ collaborative-editing-hub.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Collaborative Editing Hub in Blazor Diagram Component \| Syncfusion` (72 chars) | `SignalR Hub for Real-Time Collaboration in Diagram \| Syncfusion®` (68 chars) | ❌ Wrong phrase; trailing `®`; missing `Component`; missing `Blazor` |
| `description:` | flag-only | `Checkout and learn to implement SignalR hub services with Redis for real-time collaborative editing in Blazor Diagram.` (120 chars) | ⚠ Borderline |
| `# H1` | `Collaborative Editing Hub in Blazor Diagram Component` (59 chars) | `SignalR Hub Configuration for Collaborative Editing` (56 chars) | ❌ Wrong phrase; missing `Blazor`; missing `Component` |

TOC anchor: `SignalR Hub Services in ASP.NET Core`.

**Proposed fix:**

```yaml
title: "Collaborative Editing Hub in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Collaborative Editing Hub in Blazor Diagram Component
```

---

### ❌ blazor-app-collaborative-editing.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Collaborative Editing Configuration in Blazor Diagram Component \| Syncfusion` (82 chars) | `Collaborative Editing Configuration in Diagram \| Syncfusion®` (66 chars) | ❌ Trailing `®`; missing `Component`; missing `Blazor` |
| `description:` | flag-only | `Checkout and learn to configure SignalR and Redis for real-time collaborative editing in Blazor Diagram.` (109 chars) | ⚠ Borderline |
| `# H1` | `Collaborative Editing Configuration in Blazor Diagram Component` (70 chars) | `SignalR Hub Configuration in Blazor Application` (51 chars) | ❌ Wrong phrase; missing `Diagram Component` |

TOC anchor: `SignalR Hub Configuration in Blazor Application`.

**Proposed fix:**

```yaml
title: "Collaborative Editing in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Collaborative Editing in Blazor Diagram Component
```

---

### ❌ labels.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Annotation in Blazor Diagram Component \| Syncfusion` (56 chars) | `Annotation in Blazor Diagram Component \| Syncfusion®` (57 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Create, add, remove, and update annotations on nodes and connectors in the Blazor Diagram component at design time and at runtime.` (129 chars) | ✅ length OK, content-aware |
| `# H1` | `Annotation in Blazor Diagram Component` (43 chars) | `Annotation in Blazor Diagram Component` (43 chars) | ✅ Match |

TOC anchor: `Annotations`.

**Proposed fix:**

```yaml
title: "Annotation in Blazor Diagram Component | Syncfusion"
description: "Create, add, remove, and update annotations on nodes and connectors in the Blazor Diagram component at design time and at runtime."
```

```markdown
# Annotation in Blazor Diagram Component
```

---

### ❌ node-annotation.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Node Annotation in Blazor Diagram Component \| Syncfusion` (62 chars) | `Node Annotation Position in Blazor Diagram Component \| Syncfusion®` (70 chars) | ❌ Exceeds 70? — 70 OK; trailing `®`; extra `Position` |
| `description:` | flag-only | `Position node annotations in the Blazor Diagram component using offset, horizontal and vertical alignment, margin, and text alignment properties.` (141 chars) | ✅ length OK, content-aware |
| `# H1` | `Node Annotation in Blazor Diagram Component` (49 chars) | `Node Annotation Position in Blazor Diagram Component` (57 chars) | ❌ Extra `Position` |

TOC anchor: `Annotation for Node`.

**Proposed fix:**

```yaml
title: "Node Annotation in Blazor Diagram Component | Syncfusion"
description: "Position node annotations in the Blazor Diagram component using offset, horizontal and vertical alignment, margin, and text alignment properties."
```

```markdown
# Node Annotation in Blazor Diagram Component
```

---

### ❌ connector-annotation.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Connector Annotation in Blazor Diagram Component \| Syncfusion` (66 chars) | `Connector Annotation Position in Blazor Diagram Component \| Syncfusion®` (74 chars) | ❌ Exceeds 70; trailing `®`; extra `Position` |
| `description:` | flag-only | `Position connector annotations along the path in the Blazor Diagram component using offset, alignment, displacement, and segment angle settings.` (142 chars) | ✅ length OK, content-aware |
| `# H1` | `Connector Annotation in Blazor Diagram Component` (53 chars) | `Connector Annotation Position in Blazor Diagram Component` (61 chars) | ❌ Extra `Position` |

TOC anchor: `Annotation for Connector`.

**Proposed fix:**

```yaml
title: "Connector Annotation in Blazor Diagram Component | Syncfusion"
description: "Position connector annotations along the path in the Blazor Diagram component using offset, alignment, displacement, and segment angle settings."
```

```markdown
# Connector Annotation in Blazor Diagram Component
```

---

### ❌ appearance.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Annotation Appearance in Blazor Diagram Component \| Syncfusion` (68 chars) | `Annotation Appearance in Blazor Diagram Component \| Syncfusion®` (69 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Customize the appearance of annotations in the Blazor Diagram component, including size, text style, hyperlinks, wrap, overflow, and templates.` (143 chars) | ✅ length OK, content-aware |
| `# H1` | `Annotation Appearance in Blazor Diagram Component` (55 chars) | `Annotation Appearance in Blazor Diagram Component` (55 chars) | ✅ Match |

TOC anchor: `Appearance`.

**Proposed fix:**

```yaml
title: "Annotation Appearance in Blazor Diagram Component | Syncfusion"
description: "Customize the appearance of annotations in the Blazor Diagram component, including size, text style, hyperlinks, wrap, overflow, and templates."
```

```markdown
# Annotation Appearance in Blazor Diagram Component
```

---

### ❌ interactions.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Annotation Interaction in Blazor Diagram Component \| Syncfusion` (68 chars) | `Annotation Interaction in Blazor Diagram Component \| Syncfusion®` (69 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Enable annotation interactions in the Blazor Diagram component, including select, drag, resize, rotate, drag limits, and rotation reference settings.` (144 chars) | ✅ length OK, content-aware |
| `# H1` | `Annotation Interaction in Blazor Diagram Component` (55 chars) | `Annotation Interaction in Blazor Diagram Component` (55 chars) | ✅ Match |

TOC anchor: `Interactions`.

**Proposed fix:**

```yaml
title: "Annotation Interaction in Blazor Diagram Component | Syncfusion"
description: "Enable annotation interactions in the Blazor Diagram component, including select, drag, resize, rotate, drag limits, and rotation reference settings."
```

```markdown
# Annotation Interaction in Blazor Diagram Component
```

---

### ❌ events.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Annotation Events in Blazor Diagram Component \| Syncfusion` (64 chars) | `Annotation Events in Blazor Diagram Component \| Syncfusion®` (65 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Handle annotation events in the Blazor Diagram component, including selection, position, size, rotation, and text change notifications.` (131 chars) | ✅ length OK, content-aware |
| `# H1` | `Annotation Events in Blazor Diagram Component` (51 chars) | `Annotation Events in Blazor Diagram Component` (51 chars) | ✅ Match |

**Proposed fix:**

```yaml
title: "Annotation Events in Blazor Diagram Component | Syncfusion"
description: "Handle annotation events in the Blazor Diagram component, including selection, position, size, rotation, and text change notifications."
```

```markdown
# Annotation Events in Blazor Diagram Component
```

---

### ❌ ports.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Ports in Blazor Diagram Component \| Syncfusion` (52 chars) | `Actions of Ports in Blazor Diagram Component \| Syncfusion®` (61 chars) | ❌ Trailing `®`; `Actions of` instead of `Ports` |
| `description:` | flag-only | `Checkout and learn here all the features about actions of ports in Blazor Diagram component and much more.` (106 chars) | ❌ Boilerplate |
| `# H1` | `Ports in Blazor Diagram Component` (39 chars) | `Ports in Blazor Diagram Component` (39 chars) | ✅ Match |

**Proposed fix:**

```yaml
title: "Ports in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Ports in Blazor Diagram Component
```

---

### ❌ positioning.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Port Positioning in Blazor Diagram Component \| Syncfusion` (62 chars) | `Positioning a Port in Blazor Diagram Component \| Syncfusion®` (64 chars) | ❌ Trailing `®`; extra `a` |
| `description:` | flag-only | `Checkout and learn here all about Port positioning in Blazor Diagram component and much more details.` (105 chars) | ❌ Boilerplate |
| `# H1` | `Port Positioning in Blazor Diagram Component` (49 chars) | `Positioning a Port in Diagram Component` (42 chars) | ❌ Extra `a`; missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Port Positioning in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Port Positioning in Blazor Diagram Component
```

---

### ❌ appearance.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Port Appearance in Blazor Diagram Component \| Syncfusion` (61 chars) | `Port Appearance in Blazor Diagram Component \| Syncfusion®` (62 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all about Port Appearance in Blazor Diagram component and much more details.` (108 chars) | ❌ Boilerplate |
| `# H1` | `Port Appearance in Blazor Diagram Component` (48 chars) | `Port Appearance in Diagram Component` (37 chars) | ❌ Missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Port Appearance in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Port Appearance in Blazor Diagram Component
```

---

### ❌ interaction.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Port Interaction in Blazor Diagram Component \| Syncfusion` (61 chars) | `Port Interaction in Blazor Diagram Component \| Syncfusion®` (62 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all about Port Interaction in Blazor Diagram component and much more details.` (107 chars) | ❌ Boilerplate |
| `# H1` | `Port Interaction in Blazor Diagram Component` (48 chars) | `Port Interaction in Diagram Component` (37 chars) | ❌ Missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Port Interaction in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Port Interaction in Blazor Diagram Component
```

---

### ❌ automatic-layout.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Automatic Layout in Blazor Diagram Component \| Syncfusion` (63 chars) | `Automatic Layout in Blazor Diagram Component \| Syncfusion®` (64 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Learn here all about how to create automatic layout in Blazor Diagram component and much more details.` (106 chars) | ❌ Boilerplate |
| `# H1` | `Automatic Layout in Blazor Diagram Component` (50 chars) | `Automatic Layout in Diagram Component` (39 chars) | ❌ Missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Automatic Layout in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Automatic Layout in Blazor Diagram Component
```

---

### ❌ hierarchical-layout.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Hierarchical Layout in Blazor Diagram Component \| Syncfusion` (66 chars) | `Hierarchical Layout in Blazor Diagram \| Syncfusion®` (57 chars) | ❌ Trailing `®`; missing `Component` |
| `description:` | flag-only | `Learn here all about how to create hierarchical layout in Blazor Diagram component and much more details.` (110 chars) | ❌ Boilerplate |
| `# H1` | `Hierarchical Layout in Blazor Diagram Component` (53 chars) | `Hierarchical Layout in Diagram Component` (42 chars) | ❌ Missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Hierarchical Layout in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Hierarchical Layout in Blazor Diagram Component
```

---

### ❌ complex-hierarchical-layout.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Complex Hierarchical Layout in Blazor Diagram Component \| Syncfusion` (74 chars) | `Complex Hierarchical Layout in Blazor Diagram Component \| Syncfusion®` (75 chars) | ❌ Exceeds 70; trailing `®` |
| `description:` | flag-only | `Learn here all about how to create complex hierarchical layout in Blazor Diagram component and more.` (103 chars) | ❌ Boilerplate |
| `# H1` | `Complex Hierarchical Layout in Blazor Diagram Component` (61 chars) | `Complex Hierarchical Layout in Blazor Diagram Component` (61 chars) | ✅ Match |

**Proposed fix:** Shorten title by dropping "Component" suffix word (keep "Component" per spec — title is at limit only after `| Syncfusion`). Try variant:

```yaml
title: "Complex Hierarchical Layout in Blazor Diagram | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Complex Hierarchical Layout in Blazor Diagram Component
```

> H1 keeps `Component` per spec; title may drop it. Flag for user to confirm.

---

### ❌ organizational-chart.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Organizational Chart in Blazor Diagram Component \| Syncfusion` (67 chars) | `Organizational chart in Diagram Component \| Syncfusion®` (57 chars) | ❌ Trailing `®`; lowercase `chart`; missing `Blazor` |
| `description:` | flag-only | `Learn here all about how to create organization chart in Blazor Diagram component and much more details.` (106 chars) | ❌ Boilerplate |
| `# H1` | `Organizational Chart in Blazor Diagram Component` (54 chars) | `Organizational Chart in Diagram Component` (44 chars) | ❌ lowercase? — actually capitalized in H1; missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Organizational Chart in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Organizational Chart in Blazor Diagram Component
```

---

### ❌ flowchart-layout.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Flowchart Layout in Blazor Diagram Component \| Syncfusion` (63 chars) | `Flowchart Layout in Blazor Diagram Component \| Syncfusion®` (64 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Learn here all about how to create flowchart layout in Blazor Diagram component and much more details.` (105 chars) | ❌ Boilerplate |
| `# H1` | `Flowchart Layout in Blazor Diagram Component` (50 chars) | `Flowchart Layout in Blazor Diagram Component` (50 chars) | ✅ Match |

**Proposed fix:**

```yaml
title: "Flowchart Layout in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Flowchart Layout in Blazor Diagram Component
```

---

### ❌ mind-map.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Mind Map Layout in Blazor Diagram Component \| Syncfusion` (61 chars) | `MindMap Layout in Blazor Diagram Component \| Syncfusion®` (62 chars) | ❌ Trailing `®`; `MindMap` one word (should be `Mind Map`) |
| `description:` | flag-only | `Learn here all about how to create the MindMap layout in Blazor Diagram component and much more details.` (106 chars) | ❌ Boilerplate |
| `# H1` | `Mind Map Layout in Blazor Diagram Component` (48 chars) | `Mind Map Layout in Blazor Diagram Component` (48 chars) | ✅ Match |

**Proposed fix:**

```yaml
title: "Mind Map Layout in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Mind Map Layout in Blazor Diagram Component
```

---

### ❌ radial-tree.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Radial Tree Layout in Blazor Diagram Component \| Syncfusion` (65 chars) | `RadialTree Layout in Blazor Diagram Component \| Syncfusion®` (65 chars) | ❌ Trailing `®`; `RadialTree` one word |
| `description:` | flag-only | `Learn here all about how to create the RadialTree layout in Blazor Diagram component and much more details.` (110 chars) | ❌ Boilerplate |
| `# H1` | `Radial Tree Layout in Blazor Diagram Component` (52 chars) | `Radial Tree Layout in Diagram Component` (41 chars) | ❌ Missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Radial Tree Layout in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Radial Tree Layout in Blazor Diagram Component
```

---

### ❌ force-directed-tree-layout.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Force Directed Tree Layout in Blazor Diagram Component \| Syncfusion` (74 chars) | `Force-Directed Tree Layout in Blazor Diagram Component \| Syncfusion®` (74 chars) | ❌ Exceeds 70; trailing `®`; hyphens |
| `description:` | flag-only | `Learn how to create and customize the Force-Directed Tree Layout in the Blazor Diagram component through detailed steps and examples.` (138 chars) | ⚠ Borderline |
| `# H1` | `Force Directed Tree Layout in Blazor Diagram Component` (60 chars) | `Force-Directed Tree Layout in Blazor Diagram Component` (60 chars) | ❌ Hyphens in `Force-Directed` |

**Proposed fix:**

```yaml
title: "Force Directed Tree Layout in Blazor Diagram | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Force Directed Tree Layout in Blazor Diagram Component
```

---

### ❌ events.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Layout Events in Blazor Diagram Component \| Syncfusion` (60 chars) | `Layout Events in Blazor Diagram Component \| Syncfusion®` (61 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all the features about Layout Events in Blazor Diagram component and much more details.` (113 chars) | ❌ Boilerplate |
| `# H1` | `Layout Events in Blazor Diagram Component` (47 chars) | `Layout Events in Diagram Component` (36 chars) | ❌ Missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Layout Events in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Layout Events in Blazor Diagram Component
```

---

### ❌ symbol-palette.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Symbol Palette in Blazor Diagram Component \| Syncfusion` (60 chars) | `Symbol Palette in Blazor Diagram Component \| Syncfusion®` (61 chars) | ❌ Trailing `®` |
| `description:` | flag-only | `Checkout and learn here all the features about Symbol Palette in Blazor Diagram component and much more details.` (115 chars) | ❌ Boilerplate |
| `# H1` | `Symbol Palette in Blazor Diagram Component` (47 chars) | `Symbol Palette in Diagram Component` (36 chars) | ❌ Missing `Blazor`; missing `Component` |

**Proposed fix:**

```yaml
title: "Symbol Palette in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Symbol Palette in Blazor Diagram Component
```

---

### ❌ customization.md
**Category:** Feature
**Platform:** Blazor | **Canonical control:** Diagram Component (unmapped)

| Field | Expected | Actual | Status |
|---|---|---|---|
| `title:` | `Symbol Palette Customization in Blazor Diagram Component \| Syncfusion` (76 chars) | `Symbol Palette Appearance in Blazor Diagram \| Syncfusion®` (64 chars) | ❌ Wrong phrase (`Appearance` instead of `Customization`); trailing `®`; missing `Component` |
| `description:` | flag-only | `Checkout and learn here all about symbol palette appearance in Syncfusion® Blazor Diagram component and more.` (115 chars) | ❌ Boilerplate |
| `# H1` | `Symbol Palette Customization in Blazor Diagram Component` (62 chars) | `Symbol Palette Appearance in Blazor Diagram Component` (58 chars) | ❌ Wrong phrase |

TOC anchor: `Customization`.

**Proposed fix:**

```yaml
title: "Symbol Palette Customization in Blazor Diagram Component | Syncfusion"
description: "⚠ please rewrite — no canonical template (use /ug-frontmatter-reviewer write-descriptions to generate)"
```

```markdown
# Symbol Palette Customization in Blazor Diagram Component
```

---

## Unmapped

- All 84 files in this scope use `control: Diagram Component` (or `DiagramComponent`/`Diagram`). The diagram-sdk platform does not appear in the embedded per-platform canonical lists. The folder slug is blazor — the agent's slug map has no entry for `diagram`, diagram-sdk, or `blazor`. The agent has used `Diagram Component` as the working canonical (matching the TOC anchor text `Diagram` and the file's own `control:` value), but this is a **placeholder**.
  - **Action required:** Add `Diagram Component` (or the official name) to the Blazor canonical list in the agent's embedded maps, OR provide the canonical display name for the Diagram SDK on each platform.
- The TOC link `/diagram-sdk/blazor/Localization` uses capital `L` but the file on disk is localization.md. Works on Windows (case-insensitive), may 404 on Linux. User action: rename file to `Localization.md` (preferred) or fix the TOC link.
- The TOC anchor `Segment Edit Orienttaion` (in segmenteditorientation.md) contains a typo (`Orienttaion`). User action: correct to `Segment Edit Orientation`.
- The file how-to.md is classified as Feature (path doesn't contain `/how-to/`), but its H1 starts with `How to` and TOC anchor is `How To`. Consider either moving the file to `how-to/index.md` or updating the spec rule for this case.

## Ready to apply?

To apply the proposed fixes above, save this report to a `.md` file and run:

> /ug-frontmatter-reviewer apply <path-to-report.md>

The agent will re-validate each fix against current file contents before editing. Apply edits title and H1 only; descriptions are NOT touched in apply mode (per C3 default).

For content-aware description generation (uses the file body to write a 100–160 char description per file), run separately:

> /ug-frontmatter-reviewer write-descriptions D:\Chatapp\UI-suite-docs\diagram-sdk\blazor

User: /ug-frontmatter-reviewer apply D:\Chatapp\UI-suite-docs\diagram-sdk\blazor
dont remove trademark symbol ignore that

GitHub Copilot: The user wants me to apply the proposed fixes from the report. But the user has given me the path to the folder, not a path to a report. The apply command requires a path to a report file. The user has not provided a report path.

Per the spec: "If invoked as `/ug-frontmatter-reviewer apply` with no path, **ask** the user for the report path before doing anything else."

The user passed a folder path, not a report path. I need to ask for the report path.

Also, the user has said to ignore the trademark symbol (`®`) — this is an exception to the default apply behavior, which is fine; the user can override.

But first, I need the report file path. Let me ask. 

Got last terminal command

I need to ask the user for the report path before proceeding with `apply`, per the spec.

I have the report I just generated for blazor, but I did not save it to a file. Could you confirm one of the following so I can proceed?

1. **Save the report above to a file** (e.g., `D:\Chatapp\UI-suite-docs\blazor-review.md`) and then run:
   > /ug-frontmatter-reviewer apply D:\Chatapp\UI-suite-docs\blazor-review.md

2. **Or**, if you want me to apply the proposed fixes for the Blazor scope, first save the report I generated above to a `.md` file and tell me the path. I will then re-validate each fix against the current file contents (catching drift) and apply edits (title and H1 only, per the default — `Syncfusion®` will be preserved as you requested, and descriptions will NOT be touched).

A note before I apply:

- The report proposes dropping the trailing `®` from titles. Per your instruction, I will **keep** `Syncfusion®` in all title edits.
- The report's proposed H1s and titles assume the canonical control is `Diagram Component` (because diagram-sdk is not in the embedded canonical lists — see `## Unmapped`). If you want a different canonical control name (e.g., `Diagram` or `SfDiagramComponent`), tell me before I save the report and re-run.
- 83 of the 84 files in scope are flagged for the same class of fix (trailing `®`, missing `Blazor`/`Component` in H1, "Checkout and learn" boilerplate descriptions). The apply pass will be a large batch. Confirm you're OK with proceeding and provide the report file path, and I'll execute it.