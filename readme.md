# Infinite loop bug demo

## Reproduction

To make the demo portable, `docker-compose` is required

- start the GQL server, `node start-gql.js`
- `npx pnpm install` (or just `pnpm install` :))
- `npm run build && npm run dev`
- Open `http://localhost:1234`, observe infinite loop
  - the `gqty` query is very small, simple and present at the top of `apps/deploy/components/pages/home.tsx`
    - fwiw, this is a very basic [parcel](https://parceljs.org/) app
  - the `gqty` _client package_ lives at `packages/mfe-admin-gql-client`
