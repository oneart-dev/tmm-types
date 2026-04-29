# tmm-types

Generated TypeScript types published to GitHub. Consumed by tmm-vue and tmm-nuxt.

Do NOT edit `src/` manually — types are generated from tmm-go2 swagger output.

## Key Commands
- Build: `yarn run build`
- After changes: `git add -A && git commit -m "chore: update generated types" && git push`

## Relationships
- Source: tmm-go2 swagger → `./swag` regenerates swagger output
- Consumers update via: `yarn add -D https://github.com/oneart-dev/tmm-types`
