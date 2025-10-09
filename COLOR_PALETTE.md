# Color Palette Reference

This document provides a comprehensive reference for the color palette used in the corporate website.

## Primary Colors

### Dark Purple/Indigo (Main Primary Color)
- **Main**: `#4B369D` - Used as the primary brand color and page backgrounds
- **Shades**: Available from `palette-primary-50` to `palette-primary-900`
- **Usage**: Page backgrounds, primary elements, brand foundation

### Orange (Secondary/Premium)
- **Main**: `#FFA500` - Used for premium features and special elements
- **Shades**: Available from `palette-gold-50` to `palette-gold-900`
- **Usage**: Premium features, special offers, luxury elements, highlights

## Accent Colors

### Green (Actions)
- **Main**: `#79C214` - Lime green for actions and accents
- **Shades**: Available from `palette-accent-50` to `palette-accent-900`
- **Usage**: Action buttons, links, highlights, success states

### Green (Success)
- **Main**: `#79C214` - Lime green for success states
- **Shades**: Available from `palette-success-50` to `palette-success-900`
- **Usage**: Success messages, positive indicators, confirmations

### Yellow (Warning)
- **Main**: `#F9EA36` - Bright yellow for warnings
- **Shades**: Available from `palette-warning-50` to `palette-warning-900`
- **Usage**: Warning messages, caution indicators, alerts

### Red (Error)
- **Main**: `#E81416` - Bright red for errors
- **Shades**: Available from `palette-error-50` to `palette-error-900`
- **Usage**: Error messages, destructive actions, critical alerts

## Additional Palette Colors

### Coral
- **Main**: `#FF6F61` - Vibrant coral
- **Shades**: Available from `palette-coral-50` to `palette-coral-900`
- **Usage**: Special highlights, decorative elements


### Lime
- **Main**: `#A2D63A` - Vivid lime green
- **Shades**: Available from `palette-lime-50` to `palette-lime-900`
- **Usage**: Fresh content, new features, growth indicators

### Sky Blue
- **Main**: `#2E86C1` - Clear sky blue
- **Shades**: Available from `palette-sky-50` to `palette-sky-900`
- **Usage**: Trust elements, professional content, calm interfaces

## Usage Examples

### Tailwind Classes

```html
<!-- Primary violet button -->
<button class="bg-palette-primary-500 hover:bg-palette-primary-600 text-white">
  Primary Action
</button>

<!-- Secondary indigo button -->
<button class="bg-palette-secondary-500 hover:bg-palette-secondary-600 text-white">
  Secondary Action
</button>

<!-- Success message -->
<div class="bg-palette-success-50 border border-palette-success-200 text-palette-success-800">
  Success message
</div>

<!-- Error message -->
<div class="bg-palette-error-50 border border-palette-error-200 text-palette-error-800">
  Error message
</div>

<!-- Warning message -->
<div class="bg-palette-warning-50 border border-palette-warning-200 text-palette-warning-800">
  Warning message
</div>
```

### Legacy Support

For backward compatibility, you can also use:

```html
<!-- Legacy primary color -->
<button class="bg-primary text-white">Primary Button</button>

<!-- Legacy secondary color -->
<button class="bg-secondary text-white">Secondary Button</button>

<!-- Legacy accent color -->
<div class="text-accent">Accent Text</div>
```

## Color Accessibility

All colors have been tested for accessibility compliance:

- **Contrast Ratios**: Meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- **Color Blindness**: Tested for protanopia, deuteranopia, and tritanopia
- **Readability**: Ensures text remains readable on all background combinations

## Design Guidelines

1. **Primary Usage**: Use dark purple/indigo (`#4B369D`) for page backgrounds and main brand elements
2. **Action Usage**: Use green (`#79C214`) for all buttons, actions, and interactive elements
3. **Premium Usage**: Use orange (`#FFA500`) for premium features, special offers, and highlights
4. **State Colors**: Use green for success, yellow for warnings, red for errors
5. **Consistency**: Maintain consistent color usage across all pages and components
6. **Color Hierarchy**: Dark Purple (background) → Green (actions) → Orange (premium/special)

## Implementation Notes

- All colors are available as Tailwind CSS classes
- Each color has 10 shades (50-900) for flexibility
- Colors are defined in `tailwind.config.js`
- Use the `palette-` prefix for new color usage
- Legacy colors are maintained for backward compatibility
