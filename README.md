# LearnLab (BC-AINE-011)

LearnLab is a lightweight Learning Management System built as the AI-Native Engineering Capstone Project. It supports course creation and management, course catalog and discovery, student enrollment, lessons, quizzes and assessments, learning progress tracking, and basic administration.

The project follows specification-driven, agent-assisted engineering with Claude Code and the Claude Harness Engine.

## Status

Foundation only (Task 1). The repository contains documentation, specifications, and placeholder directories. No application code, dependencies, or CI configuration exist yet. Implementation is pending architecture review.

## Documentation

| Document | Purpose |
|---|---|
| [CLAUDE.md](CLAUDE.md) | Engineering instructions, workflow, testing, and security rules |
| [AGENTS.md](AGENTS.md) | Agent-facing guidance |
| [docs/business-problem.md](docs/business-problem.md) | Business context (preliminary) |
| [docs/architecture.md](docs/architecture.md) | Architecture principles, components, and decisions |
| [docs/implementation-plan.md](docs/implementation-plan.md) | Incremental roadmap and status |
| [specs/spec.md](specs/spec.md) | System specification (draft) |
| [specs/model-contracts.md](specs/model-contracts.md) | Runtime model contract decision |

## Repository layout

| Path | Contents |
|---|---|
| docs/ | Business and architecture documentation |
| specs/ | Functional specification and model contracts |
| tests/ | Deterministic automated tests (planned) |
| evals/ | AI evaluations (planned, separate from tests) |
| .claude/ | Claude Code agents, skills, hooks, and commands (planned) |

## Planned technology stack

Subject to the authoritative capstone requirements.

1. Frontend: React, TypeScript, Vite
2. Backend: Python, FastAPI
3. Database: SQLite
4. Testing: pytest (backend), Vitest (frontend), Playwright (browser)
5. CI/CD: GitLab CI

## Contributing

Work on a feature branch created from capstone/learnlab. Open a Merge Request for every change. Direct commits to main or capstone/learnlab are not permitted. See the workflow in [CLAUDE.md](CLAUDE.md).

## Repository

Remote: https://git.virtusa.com/cnl-projects/wiley-b2/ishani-welagedara.git

Project settings: https://git.virtusa.com/cnl-projects/wiley-b2/ishani-welagedara/-/settings/integrations

## Authors

Ishani Welagedara
