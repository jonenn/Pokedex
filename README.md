# Pokedex

An elegant, modern Pokédex web app built with React, TypeScript, and Vite. Browse, search, and favorite Pokémon using a beautiful UI powered by the [PokeAPI GraphQL endpoint](https://beta.pokeapi.co/graphql/v1beta).

## Features

-  **Pokémon List**: Browse a grid of Pokémon with images and names.
-  **Detail View**: Click a Pokémon to view stats, abilities, types, and description.
-  **Favorites**: Mark Pokémon as favorites and view your favorites list.
-  **Sorting**: Sort Pokémon by number or name.
-  **Responsive Design**: Fully responsive and mobile-friendly.
-  **Modern UI**: Clean, accessible, and visually appealing interface.

## Getting Started

### Prerequisites

-  [Node.js](https://nodejs.org/) (v18+ recommended)
-  [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/jonenn/Pokedex.git
cd Pokedex
npm install
# or
yarn install
```

### Running Locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

### Linting

```bash
npm run lint
# or
yarn lint
```

## Technologies Used

-  [React 19](https://react.dev/)
-  [TypeScript](https://www.typescriptlang.org/)
-  [Vite](https://vitejs.dev/)
-  [React Router v7](https://reactrouter.com/)
-  [PokeAPI GraphQL](https://beta.pokeapi.co/graphql/v1beta)
-  CSS (custom, organized by atomic design)

## Project Structure

```
src/
	api/           # API calls and data fetching
	assets/        # SVGs and static assets
	components/    # React components (atoms, molecules, organisms, pages, templates)
	graphql/       # GraphQL queries
	styles/        # CSS, organized by atomic design
	utils/         # Utility functions and types
	App.tsx        # Main app component
	main.tsx       # Entry point
```

## Folder Structure (Atomic Design)

-  **atoms/**: Smallest UI elements (Button, Input, Label, etc.)
-  **molecules/**: Combinations of atoms (Card, SearchBar, Abilities, etc.)
-  **organisms/**: Complex UI sections (Header, AboutSection, StatsSection, etc.)
-  **pages/**: Top-level route components (Home, Character, Favorites)
-  **templates/**: Layout wrappers (MainTemplate, CharTemplate)

## API

This app uses the [PokeAPI GraphQL endpoint](https://beta.pokeapi.co/graphql/v1beta) for all Pokémon data. See `src/api/pokemon.ts` and `src/graphql/queries/` for details.

---

## Developer Notes

### Key Files & Patterns

-  **src/App.tsx**: Main router setup. Defines routes for Home, Character, and Favorites pages using React Router v7.
-  **src/api/pokemon.ts**: Contains all data fetching logic. Uses async functions to fetch Pokémon lists and details via GraphQL queries.
-  **src/graphql/queries/**: Stores GraphQL query strings for fetching Pokémon data.
-  **src/components/**: Organized by atomic design. Atoms are basic UI, molecules are composed, organisms are complex sections, pages are route-level, templates are layout wrappers.
-  **src/utils/PokemonTypes.ts**: TypeScript interfaces for Pokémon data shape.

### State Management

-  Uses React's built-in `useState` and `useEffect` for local state and side effects.
-  Favorites are persisted in `localStorage` under the key `favoritePokemons`.
-  No external state management library is used (Redux, Zustand, etc.).

### API Usage

-  All data is fetched from the PokeAPI GraphQL endpoint.
-  See `fetchAllPokemons` and `fetchPokemonById` in `src/api/pokemon.ts` for usage examples.
-  Sorting is handled by passing variables to the GraphQL query.

### Styling

-  CSS is organized by atomic design in `src/styles/`.
-  Uses CSS custom properties for theming and type colors.
-  Each component imports its own CSS module.

### Routing

-  Uses React Router v7 for navigation.
-  Main routes:
   -  `/` — Home (Pokémon list)
   -  `/pokemon/:id` — Pokémon detail
   -  `/favorites` — Favorites list

### Adding a New Feature

1. Create new components in the appropriate atomic folder.
2. Add styles in the matching CSS folder.
3. Update routing in `App.tsx` if needed.
4. For new data, add queries in `src/graphql/queries/` and fetching logic in `src/api/pokemon.ts`.

### Testing & Linting

-  Lint with `npm run lint` (ESLint + TypeScript rules).
-  No test suite is included by default. Add tests as needed (suggested: React Testing Library + Jest).

### Useful Tips

-  Use the `typeColors` utility for consistent Pokémon type coloring.
-  To persist new user data, use `localStorage` or add a backend.
-  For SVGs, import from `src/assets/` and use as React components or image sources.
