# pnpm | turborepo | auto

A monorepo boilerplate using `pnpm` (installer), `turborepo` (task-runner), and `auto` (publisher).

Boilerplate based on the turborepo [kitchen sink starter](https://github.com/vercel/turbo/tree/main/examples/kitchen-sink).

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

**Note**: Make sure to set up your `NPM_TOKEN` via `Settings` -> `Secrets` -> `Actions`

Create `GitHub` labels:

```bash
pnpm auto create-labels
```

[Create and set up your `TURBO_TOKEN` and `TURBO_TEAM` for task running remote caching](https://turbo.build/repo/docs/ci/github-actions#remote-caching).

## Commands

Commit changes using conventional changelog:

```bash
pnpm commit
```

Lint files:

```bash
pnpm lint
```

Run tests with coverage:

```bash
pnpm test
```

Run tests in watch mode:

```bash
pnpm test:watch
```

Clean up bundle artifacts (dist, typescript, jest), compile files, and build bundle:

```bash
pnpm build
```

Compile files and build bundle:

```bash
pnpm build:prod
```

Run tests against bundle:

```bash
pnpm test:prod
```

## License

MIT
