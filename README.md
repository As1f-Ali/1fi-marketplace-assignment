# 1Fi Marketplace — SDE Intern Assignment

A React Native (Expo) implementation of the **1Fi Marketplace** section within the Shop page, built as part of the SDE Intern assignment.

## What's implemented

- **Shop page** with three options: Top Brands, Nearby Stores (blank, as specified), and **1Fi Marketplace** (fully built).
- **Marketplace list screen** — browsable product grid with images, names, and starting prices.
- **Product detail screen** — variant selection, EMI plan comparison, and a CTA to proceed with the selected plan.
- **EMI calculation** using the standard reducing-balance formula, verified to match the real 1Fi app's numbers (e.g. iPhone 17 Pro 256GB at 6 months / 10% p.a. computes to ₹21,600/mo, matching the Play Store screenshot).
- **Loading and error states** on both the list and detail screens, with retry.
- **Mock data layer** (`src/data/mockApi.js`) simulating async API calls with network delay, so data isn't hardcoded into components.

## Tech stack

- React Native + Expo (SDK 57)
- React Navigation (bottom tabs + native stack)
- Local component state (`useState`/`useEffect`) — no external state library, since the data flow is simple enough not to need one

## Project structure

```
src/
  components/     Reusable UI: ProductCard, VariantSelector, EMIPlanList, LoadingState, ErrorState
  screens/        ShopScreen, MarketplaceListScreen, ProductDetailScreen, PlaceholderScreen
  navigation/      RootTabs (bottom nav), ShopStack (Shop → Marketplace → Product Detail)
  data/           Mock product/EMI data + simulated API functions
  utils/          EMI calculation and currency formatting
  theme/          Shared colors and spacing constants
assets/images/    Product images
```

## Design approach

The visual style (colors, card layout, variant selector, EMI plan list) was built to match the real 1Fi app, referencing its Play Store screenshots — particularly the "Pay using 1Fi" screen, which shares the same variant-selection + EMI-plan pattern used here for Marketplace product details.

## Assumptions

- Product and EMI data are mocked, since there's no live 1Fi backend available for this assignment. The data layer is structured so real API calls could be swapped in with minimal changes (the screens only depend on the shape of the returned data, not on how it's fetched).
- "Top Brands" and "Nearby Stores" are left blank per the assignment's explicit scope.
- The CTA currently confirms the selected plan via an alert (in place of an actual checkout flow, which is outside this assignment's scope).

## Running the project

```
npm install
npx expo start
```
Scan the QR code with Expo Go (Android) or press `w` for web.