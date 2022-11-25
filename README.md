# pnpm | turborepo | auto

A monorepo boilerplate using `pnpm` (installer), `turborepo` (task-runner), and `auto` (publisher).

## Installation

Install dependencies:

```bash
pnpm i
```

Install hooks:

```bash
pnpm prepare
```

## Getting Started

Set up auto and follow the prompts

```bash
pnpm auto init
```

[Create your `GH_TOKEN` and `NPM_TOKEN` for versioning and publishing.](https://intuit.github.io/auto/docs/welcome/getting-started#2-configure-environment-variables)

**Note**: Make sure to set up your `NPM_TOKEN` via `Settings` -> `Secret` -> `Actions`

Create `GitHub` labels:

```bash
pnpm auto create-labels
```

[Create and set up your `TURBO_TOKEN` and `TURBO_TEAM` for task running remote caching](https://turbo.build/repo/docs/ci/github-actions#remote-caching).

## Getting Started

## Commands

Commit changes using conventional changelog:

```bash
pnpm commit
```

Lint files:

```bash
pnpm lint
```

Run tests:

```bash
pnpm test
```

Run tests in watch mode:

```bash
pnpm test:watch
```

Compile files, build bundle:

```bash
pnpm build
```

Run tests against bundle:

```bash
pnpm test:prod
```

Clean up bundle, typescript, and jest artifacts:

```bash
pnpm clean
```

## License

MIT
