# Design System: Spacing

## Token set

- 4px: `--space-1`
- 8px: `--space-2`
- 12px: `--space-3`
- 16px: `--space-4`
- 20px: `--space-5`
- 24px: `--space-6`
- 32px: `--space-8`
- 40px: `--space-10`
- 48px: `--space-12`
- 64px: `--space-16`

## Layout guidance

- Stack related content with 8px to 16px spacing.
- Use 24px-to-32px spacing for section separation.
- Keep side gutters proportional on desktop and tablet screens.

## Flutter mapping

- `--space-4` -> `EdgeInsets.all(16)`
- `--space-6` -> `EdgeInsets.symmetric(vertical: 24)`
