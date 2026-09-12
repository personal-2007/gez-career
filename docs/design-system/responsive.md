# Design System: Responsive Behavior

## Breakpoints

- Mobile: 0-767px
- Tablet: 768-1023px
- Laptop: 1024-1279px
- Desktop: 1280px+

## Mobile-first approach

- Start from stacked layouts and touch-friendly controls.
- Move to multi-column layouts on larger screens.
- Use bottom navigation on phones and collapsible navigation on tablets.

## Flutter mapping

- Use `LayoutBuilder` and media queries to adapt widget layouts.
- Translate responsive CSS rules to a `ResponsiveLayout` helper.
