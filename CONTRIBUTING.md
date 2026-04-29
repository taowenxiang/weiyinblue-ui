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

## Pull request expectations

Every change that affects public behavior should include:

- updated docs or examples when the public API changes
- unit tests for component logic where practical
- e2e coverage when the change affects navigation, page assembly, or critical user flows
- accessibility checks for keyboard behavior, visible focus states, and labeling

## Component contribution rules

When adding a new primitive or block:

- prefer additive APIs over renaming existing exports
- use existing semantic tokens before introducing new custom variables
- document intended usage, supported variants, and known limitations
- add at least one real example in `apps/web`
- keep behavior composable; avoid hiding base primitives unnecessarily

## Release workflow

Versioning is managed with Changesets:

```bash
pnpm changeset
pnpm version-packages
```
