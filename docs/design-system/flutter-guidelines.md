# Flutter Guidelines

## Future conversion strategy

- Keep the design tokens and layout primitives platform-neutral.
- Map React page structures to Flutter screens with corresponding widget names.

## Example mappings

- React: `JobCard.jsx` -> Flutter: `job_card.dart`
- React: `BottomNavigation` -> Flutter: `NavigationBar`
- React: `Modal` -> Flutter: `Dialog` / `showModalBottomSheet`
- React: `Input` -> Flutter: `TextFormField`
- React: `Sidebar` -> Flutter: `NavigationRail` / `Drawer`

## UI principles

- Avoid over-animation; keep interactions fast and readable.
- Keep touch targets at least 48px in height.
- Respect reduced-motion requirements.
