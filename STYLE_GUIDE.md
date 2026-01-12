# SportsLive Decals Style Guide

## Overview
Complete design system documentation including colors, typography, spacing, component patterns, and module specifications for the SportsLive Decals brand with cyan blue accent color.

---

## Color Palette

### Primary Colors
- **Cyan Blue**: `#00b4d8` (RGB: 0, 180, 216) - Primary brand color for CTAs, accents, and highlights
- **Cyan Blue Variant**: `#0090b3` (RGB: 0, 144, 179) - Hover states and darker variations

### Background Colors
- **Background Black**: `#0a0a0a` (RGB: 10, 10, 10) - Main background color
- **Card Black**: `#141414` (RGB: 20, 20, 20) - Cards, panels, and elevated surfaces
- **Pure White**: `#ffffff` (RGB: 255, 255, 255) - Primary text and headings
- **Muted White**: `#a1a1a1` (RGB: 161, 161, 161) - Secondary text and descriptions

### Opacity Variations
- **Cyan Blue Borders & Accents**:
  - 10% Opacity: `rgba(0, 180, 216, 0.1)`
  - 20% Opacity: `rgba(0, 180, 216, 0.2)`
  - 30% Opacity: `rgba(0, 180, 216, 0.3)`
  - 50% Opacity: `rgba(0, 180, 216, 0.5)`
- **Text Opacity**: 100% (Headings), 80% (Body Text), 60% (Secondary Text), 40% (Tertiary Text)

---

## Typography

### Font Family
System font stack (native): `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`

### Headings
- **H1 - Hero Titles**: `3.5rem - 4.5rem` | `font-weight: 900` | `text-transform: uppercase` | `letter-spacing: -0.025em` | `font-style: italic`
- **H2 - Section Titles**: `2.5rem - 3rem` | `font-weight: 900` | `text-transform: uppercase` | `letter-spacing: -0.025em` | `font-style: italic`
- **H2 - Featured Products Header**: `36px (2.25rem) mobile / 48px (3rem) desktop` | `font-weight: 700` | `text-transform: uppercase` | `letter-spacing: -0.025em`
- **H3 - Card Titles**: `1.25rem (20px)` | `font-weight: 900` | `text-transform: uppercase` | `letter-spacing: 0.025em`

### Body Text
- **Base**: `1rem (16px) mobile / 1.125rem (18px) desktop` | `font-weight: 400` | `line-height: 1.75` | `color: rgba(255, 255, 255, 0.8)`
- **Product Name (Cards)**: `1.25rem (20px)` | `font-weight: 900` | `text-transform: uppercase` | `letter-spacing: 0.025em`
- **Product Description (Cards)**: `0.75rem (12px)` | `font-weight: 400` | `text-transform: uppercase` | `letter-spacing: 0.05em` | `color: rgba(255, 255, 255, 0.5)`
- **Price**: `1.25rem (20px)` | `font-weight: 700` | `color: #00b4d8`
- **Small Text / Links**: `0.75rem (12px)` | `font-weight: 700` | `text-transform: uppercase` | `letter-spacing: 0.05em`

### Font Weights
- Regular: `400`
- Semi-Bold: `600`
- Bold: `700` (Used for Featured Products header and product names)
- Black: `900` (Preferred for headings)

### Letter Spacing
- Extra Wide Tracking: `0.15em` (badges, small labels)
- Wide Tracking: `0.1em` (buttons, badges)
- Normal Wide: `0.05em` (navigation, buttons, product text)
- Tight Tracking: `-0.025em` (large headings)

---

## Buttons

### Primary Button
- **Background**: `#00b4d8` (cyan)
- **Text Color**: `#0a0a0a` (black)
- **Padding**: `1rem 1.5rem` (py-4 px-6) - Large buttons
- **Padding Small**: `0.75rem 1rem` (py-3 px-4) - Small buttons
- **Font Size**: `0.75rem (12px)`
- **Font Weight**: `900` (Black)
- **Text Transform**: `uppercase`
- **Letter Spacing**: `0.1em` (tracking-widest)
- **Border Radius**: `0px` (Sharp corners)
- **Hover**: White background, black text

### Secondary Button (Outlined)
- **Background**: `transparent`
- **Border**: `2px solid #00b4d8`
- **Text Color**: `#00b4d8`
- **Padding**: Same as primary
- **Hover**: Cyan background, black text

### Outline Button
- **Background**: `rgba(255, 255, 255, 0.05)` (white 5% opacity)
- **Border**: `1px solid rgba(255, 255, 255, 0.1)` (white 10% opacity)
- **Text Color**: White
- **Padding**: `px-6 py-4` (large) or `px-4 py-3` (small)
- **Font Weight**: `900` (Black)
- **Text Transform**: `uppercase`
- **Letter Spacing**: `0.1em` (tracking-widest)
- **Border Radius**: `0px` (Sharp corners)
- **Hover**: Border becomes `#00b4d8` (cyan)

### "View All Products" Button (Featured Collection)
- **Background**: `transparent`
- **Border**: `2px solid #00b4d8`
- **Text Color**: `#00b4d8`
- **Padding**: `20px (1.25rem) vertical, 48px (3rem) horizontal`
- **Font Size**: `0.875rem (14px)`
- **Font Weight**: `700` (Bold)
- **Text Transform**: `uppercase`
- **Letter Spacing**: `0.1em` (tracking-widest)
- **Border Radius**: `0px`
- **Hover**: Cyan background `#00b4d8`, white text

### Quick Add Button (Product Cards)
- **Background**: `#00b4d8` (cyan)
- **Text Color**: `#ffffff` (white)
- **Padding**: `12px vertical, 24px horizontal`
- **Font Size**: `0.75rem (12px)`
- **Font Weight**: `700` (Bold)
- **Text Transform**: `uppercase`
- **Letter Spacing**: `0.1em` (tracking-widest)
- **Border Radius**: `0px`
- **Position**: Absolute, centered over product image
- **Display**: Opacity 0 by default, opacity 100% on card hover (300ms transition)
- **Hover**: Background lightens to `#33c3e8`

---

## Header & Navigation

### Header Container
- **Position**: Sticky (`top: 0`, `z-index: 50`)
- **Background**: `rgba(0, 0, 0, 0.95)` with `backdrop-filter: blur(12px)`
- **Border Bottom**: `1px solid rgba(0, 180, 216, 0.2)` (cyan 20% opacity)
- **Height**: Auto (responsive padding: `py-4` to `py-6`)
- **Logo Height**: `56px`

### Main Navigation Links
- **Font Family**: System font stack (native)
- **Font Size**: `14px (0.875rem / text-sm)`
- **Font Weight**: `600` (Semi-Bold / font-semibold)
- **Text Transform**: `UPPERCASE`
- **Letter Spacing**: `0.05em` (tracking-wider)
- **Color**: White (`#ffffff`)
- **Hover Color**: Cyan Blue (`#00b4d8`)
- **Hover Effect**: `2px` bottom border animates from left (300ms)

### Dropdown / Sub-Navigation
- **Font Size**: `14px (0.875rem / text-sm)`
- **Font Weight**: `400` (Regular / font-normal)
- **Text Transform**: `UPPERCASE`
- **Letter Spacing**: `0.025em` (tracking-wide)
- **Color**: `rgba(255, 255, 255, 0.8)` (80% opacity)
- **Hover Color**: Cyan Blue (`#00b4d8`)
- **Hover Background**: `rgba(0, 180, 216, 0.05)` (cyan 5% opacity)
- **Padding**: `px-4 py-3` (16px horizontal, 12px vertical)

#### Dropdown Container
- **Background**: `#141414` (Card Black)
- **Border**: `1px solid rgba(0, 180, 216, 0.3)` (cyan 30% opacity)
- **Border Radius**: `0px` (Sharp Corners)
- **Min Width**: `200px`

### Mobile Navigation
- **Font Size (Top-Level)**: `16px (1rem / text-base)`
- **Font Weight**: `600` (Semi-Bold)
- **Sub-Item Font Size**: `14px (0.875rem / text-sm)`
- **Sub-Item Weight**: `400` (Regular)
- **Sub-Item Indent**: `pl-8` (32px left padding)
- **Hamburger Icon**: Menu icon (`24px / w-6 h-6`)
- **Panel Background**: `#0a0a0a` (Background Black)

**Note**: Mobile navigation uses larger font sizes (16px vs 14px) and increased padding (`py-4`) to ensure adequate touch target sizes for mobile devices (minimum 44x44px).

---

## Featured Products Module

### Section Container
- **Max Width**: `1280px`, centered
- **Padding Vertical**: `64px (4rem)` top and bottom
- **Padding Horizontal**: `16px (1rem)` mobile → `24px (1.5rem)` tablet → `32px (2rem)` desktop
- **Background**: Inherits from parent (typically `#000000`)

### Header Area

#### Badge (Eyebrow Label)
- **Text**: "FEATURED PRODUCTS"
- **Display**: Inline block, centered
- **Padding**: `8px (0.5rem)` vertical, `24px (1.5rem)` horizontal
- **Border**: `1px solid rgba(0, 180, 216, 0.3)` (cyan 30% opacity)
- **Background**: `rgba(0, 180, 216, 0.05)` (cyan 5% opacity)
- **Text Color**: `#00b4d8` (bright cyan)
- **Font Size**: `0.75rem (12px)`
- **Font Weight**: `700` (Bold)
- **Text Transform**: `uppercase`
- **Letter Spacing**: `0.1em` (tracking-widest)
- **Margin Bottom**: `24px (1.5rem)`

#### Main Heading
- **Text**: "CHAMPIONSHIP GRADE" (split colors)
  - "CHAMPIONSHIP" in white `#ffffff`
  - "GRADE" in cyan `#00b4d8`
- **Font Size**: `36px (2.25rem)` mobile / `48px (3rem)` desktop
- **Font Weight**: `700` (Bold)
- **Text Transform**: `uppercase`
- **Letter Spacing**: `-0.025em` (tight tracking)
- **Text Alignment**: Center
- **Margin Bottom**: `16px (1rem)`

#### Accent Line
- **Width**: `96px (6rem)`
- **Height**: `4px (0.25rem)`
- **Color**: `#00b4d8` (bright cyan, 100% opacity)
- **Position**: Centered horizontally
- **Margin Bottom**: `24px (1.5rem)`
- **Total Header Bottom Margin**: `48px (3rem)` before product grid

### Product Grid
- **Desktop (1024px+)**: 4 columns
- **Tablet (640px - 1023px)**: 2 columns
- **Mobile (< 640px)**: 1 column (full width)
- **Gap**: `24px (1.5rem)` horizontal and vertical

### View All Products CTA Button
- **Position**: Centered below product grid
- **Top Margin**: `48px (3rem)` from last row of products
- **Specs**: See "View All Products" Button section above

---

## Product Card Anatomy

### Card Container
- **Background**: `#141414` (card black)
- **Border**: `2px solid rgba(0, 180, 216, 0.2)` (cyan 20% opacity)
- **Border Radius**: `0px` (sharp corners)
- **Position**: `relative` (for absolute positioned children)
- **Overflow**: `hidden` (clips animations)
- **Transition**: `border-color 0.3s ease`
- **Hover**: Border becomes `#00b4d8` (100% cyan)

### Badge (Top-Right Corner)
- **Position**: `absolute`, `16px` from top, `16px` from right
- **Z-index**: `10` (sits above image)
- **Padding**: `4px (0.25rem)` vertical, `12px (0.75rem)` horizontal
- **Background**: `#00b4d8` (bright cyan)
- **Text Color**: White
- **Font Size**: `0.75rem (12px)`
- **Font Weight**: `700` (Bold)
- **Text Transform**: `uppercase`
- **Letter Spacing**: `0.1em` (extra-wide)
- **Visibility**: Only appears if product has a badge (e.g., "NEW", "SALE", "POPULAR")

### Product Image Area
- **Container**:
  - Aspect Ratio: `1:1` (perfect square)
  - Background: `rgba(0, 0, 0, 0.4)` (black 40% opacity)
  - Overflow: `hidden`
  - Position: `relative`
- **Image**:
  - Size: Full width and height of container
  - Object Fit: `cover` (crops to fill square)
  - Transition: `transform 0.5s ease`
  - Hover: `transform: scale(1.1)` (110% zoom)
- **Gradient Overlay (on hover)**:
  - Position: `absolute`, covers entire image
  - Gradient: Bottom-to-top, `rgba(0, 0, 0, 0.8)` → `transparent`
  - Default: `opacity: 0` (invisible)
  - Hover: `opacity: 1` (fades in)
  - Transition: `300ms ease`

### Quick Add Button Overlay
- **Container**:
  - Position: `absolute`, covers entire image area
  - Display: `flex`, centered both directions
  - Default: `opacity: 0` (invisible)
  - Hover: `opacity: 1` (fades in)
  - Transition: `300ms ease`
- **Button**: See "Quick Add Button" section above
- **Shopping Cart Icon**: `16px × 16px`, white color

### Content Area (Below Image)
- **Container Padding**: `24px (1.5rem)` on all sides

#### Rating Stars
- **Container**: `display: flex`, row with `4px (0.25rem)` gap between stars
- **Margin Bottom**: `12px (0.75rem)`
- **Stars**: `16px × 16px` each, cyan fill `#00b4d8`
- **Review Count**:
  - Text: e.g., "(127)"
  - Color: `rgba(255, 255, 255, 0.6)` (white 60% opacity)
  - Font Size: `0.75rem (12px)`
  - Margin Left: `8px (0.5rem)` from last star

#### Product Name
- **Font Size**: `1.25rem (20px)`
- **Font Weight**: `900` (Black)
- **Text Transform**: `uppercase`
- **Letter Spacing**: `0.025em` (tracking-wide)
- **Color**: White (default) → Cyan `#00b4d8` on card hover
- **Margin Bottom**: `8px (0.5rem)`
- **Transition**: `color 0.3s ease`

#### Product Description
- **Font Size**: `0.75rem (12px)`
- **Text Transform**: `uppercase`
- **Letter Spacing**: `0.05em` (tracking-wider)
- **Color**: `rgba(255, 255, 255, 0.5)` (white 50% opacity)
- **Margin Bottom**: `16px (1rem)`

#### Price & CTA Row
- **Container**:
  - Display: `flex`, row, `space-between` alignment
  - Items: Vertically centered
  - Top Padding: `16px (1rem)`
  - Top Border: `1px solid rgba(0, 180, 216, 0.1)` (cyan 10% opacity)
- **Price (Left Side)**:
  - Text: e.g., "$49.99"
  - Color: `#00b4d8` (bright cyan)
  - Font Size: `1.25rem (20px)`
  - Font Weight: `700` (Bold)
- **View Details Link (Right Side)**:
  - Text: "View Details →"
  - Color: `rgba(255, 255, 255, 0.6)` (white 60% opacity, default) → Cyan `#00b4d8` on hover
  - Font Size: `0.75rem (12px)`
  - Font Weight: `700` (Bold)
  - Text Transform: `uppercase`
  - Letter Spacing: `0.05em` (tracking-wider)
  - Transition: `color 0.3s ease`
  - **Note**: This is an Outline Button style link (see Outline Button specification in Buttons section)

### Bottom Accent Line
- **Position**: `absolute`, bottom edge of card
- **Width**: Full card width
- **Height**: `4px (0.25rem)`
- **Background**: `#00b4d8` (bright cyan)
- **Default State**: `transform: scaleX(0)` (invisible, collapsed)
- **Hover State**: `transform: scaleX(1)` (expands to full width)
- **Transform Origin**: `left` (animates from left to right)
- **Transition**: `300ms ease`

---

## Product Card Hover Sequence

When hovering over a product card, these animations happen simultaneously:

1. **Card border**: 20% cyan → 100% cyan (300ms)
2. **Product image**: Scale to 110% zoom (500ms - slower)
3. **Gradient overlay**: Fade in over image (300ms)
4. **Quick Add button**: Fade in centered on image (300ms)
5. **Product name**: White → Cyan (instant with transition)
6. **Bottom accent line**: Wipe across from left to right (300ms)

The staggered timing creates a sophisticated, layered effect.

---

## Responsive Breakpoints

- **Mobile**: `< 640px`
  - Single column layout
  - Cards stack vertically
  - Header text: `36px (2.25rem)`
  - Full-width cards with `16px (1rem)` side padding
- **Tablet**: `640px - 1023px`
  - 2 columns
  - Cards in 2×2, 2×3, etc. grids
  - Header text: `48px (3rem)`
  - `24px (1.5rem)` gaps between cards
- **Desktop**: `1024px+`
  - 4 columns
  - Compact, efficient grid
  - Maximum visual impact
  - `24px (1.5rem)` gaps maintain breathing room

---

## SVG Icons

### Shopping Cart Icon (Quick Add Button)
- **Size**: `16px × 16px`
- **ViewBox**: `0 0 24 24`
- **Stroke**: `currentColor` (inherits white from button)
- **Stroke Width**: `2`
- **Stroke Linecap**: `round`
- **Stroke Linejoin**: `round`
- **Fill**: `none`

### Star Icon (Rating)
- **Size**: `16px × 16px`
- **ViewBox**: `0 0 24 24`
- **Fill**: `#00b4d8` (cyan)
- **Stroke**: `#00b4d8` (cyan)
- **Stroke Width**: `2`
- **Stroke Linecap**: `round`
- **Stroke Linejoin**: `round`

---

## Design Principles

- **Premium E-commerce**: Polished product presentation
- **Hover-Driven Interactions**: Rewards exploration
- **Layered Animations**: Sophisticated, not jarring
- **Cyan Accent System**: Consistent brand color usage
- **Bold Typography**: Uppercase, wide tracking for sports aesthetic
- **High Contrast**: White text on dark backgrounds for readability
- **Championship Positioning**: "Championship Grade" reinforces premium quality
- **Social Proof**: Star ratings and review counts build trust
- **Clear CTAs**: Multiple paths to product details
- **Visual Hierarchy**: Image → rating → name → description → price → action

---

## Notes

- All buttons use sharp, rectangular shapes (0px border radius) for a bold, modern aesthetic
- The Featured Products header uses font-weight 700 (Bold) instead of 900 (Black) for differentiation
- Product card descriptions are optional and may not always be present
- The Quick Add button only appears on hover to maintain a clean default state
- Rating stars use filled cyan stars, not outlined
- All spacing follows the 4px base unit system

