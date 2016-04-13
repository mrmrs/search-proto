# gcomp

Generative component-base page builder

## Development

```sh
npm i
npm start
```

Open <http://localhost:8080>

## Build
For deploying to gh-pages.

```sh
npm run build
```

---

## Components

### Wrappers

- `App` (current) randomly picks components and colors - this should happen higher up and be more intelligent
- `Headers` - control component that renders one of the headers in `components/headers`
- `Collections` - control component that renders one of the collections in `components/collections`

### Dumb UI Components

- `Heading` - stateless component for `h1` - `h6`
- `Text` - stateless component for `p`

- [ ] harmonies?
- [ ] layers - i.e. functionally layer in design details
- [ ] multiple props per control component

MIT License
