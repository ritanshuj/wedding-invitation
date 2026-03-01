# 🪷 Luxurious Buddhist Storytelling Wedding Invitation

A high-end, production-ready React web application designed for a grand North Indian Buddhist wedding. This invitation tells a story as the user scrolls, featuring parallax effects, hand-painted watercolor aesthetics, and rich animations.

## ✨ Key Features

- **Rich Parallax Scrolling**: Foreground and background elements move at varying speeds for a deep 3D effect.
- **Storytelling Layout**: Five distinct sections (Invocation, Mehendi, Haldi/Baraat, Nuptial Vows, Blessings) designed with thematic colors.
- **Buddhist Iconography**: Features calm Buddha visuals, lotus symbols, and tranquil design languages (Peach, Saffron, Mint, and Gold).
- **Corrected Connecting Line**: The SVG path is now a fixed background element (`z-0`) that tracks scroll progress without overlaying or interfering with text.
- **Mobile Optimized**: Fully responsive typography and layout using Tailwind CSS. No text clipping or horizontal scrolling issues.
- **"Happening" Vibe**: Interactive "Petal Fall" effect, shimmering gold highlights, and animated dhol/instrument icons for the Baraat section.
- **Hand-made Aesthetics**: Subtle watercolor textures and brush-stroke borders create an artisan feel.

## 🛠️ Tech Stack

- **React v18**: UI Lifecycle management.
- **Framer Motion**: Powering the parallax, scroll-triggers, and entry animations.
- **Tailwind CSS**: Modern utility-first styling for perfect responsiveness.
- **Lucide-React**: Elegant minimalist iconography.
- **Google Fonts**: Playfair Display (Luxury Serif) and Great Vibes (Handwriting).

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher)
- npm (installed with Node)

### Installation

1. Create a new directory and navigate into it:
    `mkdir wedding-invitation && cd wedding-invitation`

2. Copy the file contents provided in this response into the respective files.

3. Install the dependencies:
    `npm install`

4. Run the application:
    `npm start`

The application will be available at `http://localhost:3000`.

## 📂 Project Structure

- `src/App.js`: Main application containing the storytelling sections and parallax logic.
- `src/components/PetalFall.js`: Decorative floating jasmine/marigold petals component.
- `src/components/DecorativeLine.js`: The scroll-tracked vertical connector (fixed background).
- `src/index.css`: Global styles, custom fonts, and hand-made paper textures.
- `tailwind.config.js`: Custom color palette (Mint, Peach, Saffron, Lavender) and animation keyframes.

## 🎨 Creative Choices

- **The Color Story**: Transitioning from calm mint (Buddha intro) to energetic peach (Mehendi), then vibrant saffron (Haldi/Baraat), and finally a rich gold/maroon for the ceremony.
- **Typography**: Used `text-balance` and fluid scaling (`text-5xl md:text-8xl`) to ensure luxury titles always look perfect on mobile devices.
- **Performance**: Animations are hardware-accelerated via Framer Motion to ensure smooth scrolling even on older mobile devices.

## 🧘 Troubleshooting

- **Images not loading?** Ensure you have an active internet connection as the app pulls high-res watercolor assets and photos from Unsplash and CDN.
- **Smooth background line not showing?** Ensure the browser supports SVG 2.0 (all modern browsers do). The line is `z-0` so it sits behind the content cards.
