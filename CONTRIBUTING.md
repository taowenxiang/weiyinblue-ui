# Contributing

## Local workflow

Install dependencies:

```bash
pnpm install
```

Start development:

```bash
pnpm dev
```

Run the core validation checks:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
```

The workspace also includes `apps/consumer-smoke`, which acts as the external-consumer verification path for the public package surface.

## v1.0 maintenance defaults

After `v1.0`, the package should change for narrow reasons only:

- bug fixes
- accessibility fixes
- compatibility work for React, Next.js, Tailwind, or PostCSS
- repeated high-frequency patterns proven in real usage
- small additive blocks or helpers that reduce repeated page assembly work

These are not enough on their own:

- one-off page styling
- visual novelty for a single screen
- large new component families without repeated need

## Pull request expectations

Every change that affects public behavior should include:

- updated docs or examples when the public API changes
- unit tests for component logic where practical
- e2e coverage when the change affects navigation, page assembly, or critical user flows
- accessibility checks for keyboard behavior, visible focus states, and labeling
- an updated stability/API-surface classification when export tiers change

## Component contribution rules

When adding a new primitive or block:

- prefer additive APIs over renaming existing exports
- use existing semantic tokens before introducing new custom variables
- document intended usage, supported variants, and known limitations
- add at least one real example in `apps/web`
- keep `docs/API_SURFACE.md` accurate when export tiers or intended usage change
- keep behavior composable; avoid hiding base primitives unnecessarily

For `v1.0` maintenance, a new public addition should also satisfy all of these:

- it appears in at least two target product types
- it cannot be comfortably composed from the existing stable surface
- it has clear light and dark behavior
- it has keyboard and accessibility expectations that are testable
- it has docs guidance and at least one realistic example

## Release workflow

Versioning is managed with Changesets:

```bash
pnpm changeset
pnpm version-packages
```

The `v1.0` release gate is:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
```

Before tagging a stable release, also verify:

- `docs/API_SURFACE.md` matches the current public exports
- README and docs installation guidance stay consistent
- `apps/consumer-smoke` still validates the public package surface
