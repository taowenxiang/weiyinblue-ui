# Design System Decisions

This file records the decisions that define the `v1.0` shape of Weiyinblue.

## Theme philosophy

- The system is light-first.
- Dark mode is fully supported, but light mode remains the primary visual reference.
- Tokens should stay semantic before they become brand-specific.
- Brand styling should flow through documented token categories rather than one-off component overrides.

## Component philosophy

- Prefer fewer, stronger variants over a wide but shallow matrix.
- A primitive should be added only when it is reusable across more than one target product surface.
- Interaction and accessibility behavior are part of the contract, not polish to add later.

## Block philosophy

- Blocks exist to remove repeated page assembly work.
- Blocks should solve layout and consistency, not hide base primitives.
- If a need can be handled by stable primitives and existing blocks, do not add another near-duplicate shell.

## Variant policy

- Default, outline, subtle, and ghost remain the baseline vocabulary where variants exist.
- New variants require repeated use evidence across real screens, not a single page preference.
- State styling should come from token usage and component semantics before variant expansion.

## Token policy

- Use semantic tokens first.
- Add new brand or utility tokens only when the semantic layer is insufficient.
- Do not add one-off visual escape hatches for a single component without documenting the reason.

## Form philosophy

- `react-hook-form` remains the standard integration.
- Form patterns should be documented as first-class product examples, not left to consumer guesswork.
- Layout rules such as section spacing, action rows, and field grouping should be solved at the pattern/block layer, not per screen.

## Documentation philosophy

- `apps/web` is the canonical docs and showcase surface.
- All documentation examples should use public exports only.
- Starter templates and `apps/consumer-smoke` both exist to validate that the package is usable outside docs-only composition.

## Maintenance philosophy

- After `v1.0`, the default posture is maintenance, not expansion.
- Changes should be driven by bugs, accessibility, compatibility, or repeated high-frequency product needs.
- The system should stay boring in a good way: stable defaults, clear docs, and low API churn.
