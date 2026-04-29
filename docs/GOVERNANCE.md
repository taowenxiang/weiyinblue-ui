# Governance

## Naming conventions

- Public exports should use descriptive names with stable intent.
- Prefer additive API evolution until the system reaches a more mature public release.
- Avoid renaming exports unless there is a clear correctness or ergonomics problem.

## Token rules

- Use semantic tokens first.
- Add new brand or utility tokens only when semantic tokens are insufficient.
- Do not add one-off visual escape hatches for a single component without documenting the reason.

## Deprecation policy

- Mark APIs as deprecated in docs before removing them.
- Keep deprecated exports available for at least one minor release cycle once versioned publishing begins.
- Removal should be accompanied by a migration note.

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
- lint, typecheck, build, and e2e pass
- accessibility concerns addressed explicitly for interactive components
