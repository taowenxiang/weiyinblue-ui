# Changesets

This repository uses [Changesets](https://github.com/changesets/changesets) to manage versioning and changelogs for `@weiyinblue/ui`.

Use the following workflow when a package-facing change is ready:

```bash
pnpm changeset
pnpm version-packages
```

The first command records a change summary. The second command applies version bumps and changelog updates.
