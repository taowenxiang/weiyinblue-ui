# Design System Decisions

## Theme philosophy

- The system is light-first.
- Dark mode is fully supported, but light mode is the primary visual reference.
- Theme tokens should stay semantic before they become brand-specific.

## Component philosophy

- Prefer fewer, stronger variants over a wide but shallow variant matrix.
- New primitives should only be added when they are reusable across multiple product contexts.
- Blocks should solve layout and consistency, not replace composability.

## Documentation philosophy

- `apps/web` is the canonical docs and showcase surface.
- All documentation examples should use public exports only.
- The docs site should also serve as a real consumer of the package.

## Form philosophy

- `react-hook-form` is the standard integration.
- Form layout patterns should be documented as first-class examples, not left to consumer guesswork.
