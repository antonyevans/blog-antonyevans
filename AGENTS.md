# Repository Guidelines

## Project Structure & Module Organization
This repository is currently a clean starting point. Use the structure below as the default layout for new work:
- `src/` application source code, organized by feature or domain.
- `tests/` automated tests mirroring `src/` paths.
- `assets/` static files (images, fixtures, sample data).
- `scripts/` local developer utilities (setup, checks, release helpers).
- `docs/` design notes, architecture decisions, and onboarding docs.

Example: `src/blog/posts.py` should have corresponding tests in `tests/blog/test_posts.py`.

## Build, Test, and Development Commands
No canonical toolchain is defined yet. When adding one, expose consistent commands through a single entrypoint (`Makefile` or package scripts). Recommended baseline:
- `make setup` install dependencies and prepare local environment.
- `make test` run the full test suite.
- `make lint` run static checks/format validation.
- `make dev` start the local development workflow.

If `make` is not used, provide equivalent commands in `README.md` and keep names aligned (`test`, `lint`, `dev`).

## Coding Style & Naming Conventions
- Use 4 spaces for indentation unless the language standard requires otherwise.
- Prefer descriptive names: `post_repository.py`, `test_post_repository.py`.
- Use `snake_case` for files/functions, `PascalCase` for classes, and `UPPER_SNAKE_CASE` for constants.
- Add a formatter and linter early (for example, `ruff`/`black`, `eslint`, or language-native equivalents) and run them before opening a PR.

## Testing Guidelines
- Place unit tests in `tests/` with names like `test_<module>.py` or `<module>.test.ts`.
- Cover new behavior and important edge cases.
- Keep tests deterministic and isolated from external services unless explicitly marked as integration tests.
- Target meaningful coverage for changed code; avoid untested feature merges.

## Commit & Pull Request Guidelines
Git history is not available in this directory, so adopt Conventional Commits by default:
- `feat: add post publishing workflow`
- `fix: handle missing front-matter title`
- `docs: add contributor setup notes`

For pull requests:
- Write a clear summary of what changed and why.
- Link related issues/tasks.
- Include test evidence (command + result).
- Add screenshots/log output for UI or behavior changes where helpful.
