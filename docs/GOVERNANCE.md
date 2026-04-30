# Governance

This file defines how Weiyinblue is maintained after `v1.0`.

## Release policy

- Patch releases are for bug fixes, accessibility fixes, regressions, and compatibility fixes.
- Minor releases are for additive exports, additive variants, or narrow new blocks that pass the component policy.
- Major releases are reserved for intentional API cleanup, removals, or contract changes.

## Allowed reasons to change the system

- a reproducible bug
- an accessibility issue
- React, Next.js, Tailwind, or PostCSS compatibility work
- a repeated high-frequency product pattern proven across multiple real uses
- a narrow additive block or helper that reduces repeated page assembly work

## Reasons that are not enough on their own

- one-off page styling
- novelty-driven visual changes
- large component-family expansion without repeated usage evidence
- introducing custom tokens just to satisfy a single screen

## Naming conventions

- Public exports should use descriptive names with stable intent.
- Prefer additive evolution over renaming existing exports.
- If a symbol needs to stay public for compatibility but is not a first-line API, classify it as advanced instead of silently promoting it.

## Deprecation policy

- Mark APIs as deprecated in docs before removing them.
- Add a migration note before scheduling removal.
- Once public versioning is in use, keep deprecated exports available until the next planned major cycle whenever practical.

## Required release gate

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
- `pnpm test:e2e`
- export audit against `docs/API_SURFACE.md`
- docs and README consistency review for install and usage guidance
- `apps/consumer-smoke` remains green

## Suggested issue labels

- `theme`
- `primitive`
- `block`
- `forms`
- `docs`
- `infra`
- `release`
- `a11y`
- `good first issue`

## Required review checks

- docs updated if public behavior changed
- tests added or updated if interaction changed
- accessibility concerns addressed explicitly for interactive components
- API surface classification updated when exports or usage tiers change
- no new long-term maintenance burden added without justification
