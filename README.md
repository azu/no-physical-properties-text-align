# `@pandacss/no-physical-properties` textAlign Issue

This repository demonstrates an issue with the `@pandacss/no-physical-properties` ESLint rule, which fails to detect `textAlign: "left"` and `textAlign: "right"` as physical properties that should be replaced with logical properties.

## Issue Description

The `@pandacss/no-physical-properties` ESLint rule is designed to encourage the use of logical properties instead of physical properties. However, in the current version, it does not detect `textAlign: "left"` or `textAlign: "right"` as physical properties.

The following code should trigger ESLint errors but doesn't:

```tsx
import { css } from "../../styled-system/css";
export default function Home() {
  return (
    <main>
      <p className={css({
        textAlign: "left" // This should trigger an ESLint error
      })}>left text</p>
      <p className={css({
        textAlign: "right" // This should trigger an ESLint error
      })}>right text</p>
      <p className={css({
        textAlign: "start" // This is valid
      })}>start text</p>
      <p className={css({
        textAlign: "end"  // This is valid
      })}>end text</p>
    </main>
  );
}

```

## How to Reproduce

```bash
# Install dependencies
pnpm install

# Run ESLint
pnpm run lint
```

With the latest versions (@pandacss/eslint-plugin@0.2.8, @pandacss/dev@0.53.3), no ESLint errors are reported.

## Proper Logical Property Alternatives

According to MDN documentation, the appropriate conversion from physical properties to logical properties is:

- `textAlign: "left"` → `textAlign: "start"` (aligns with the start of the content)
- `textAlign: "right"` → `textAlign: "end"` (aligns with the end of the content)

Using logical properties ensures proper display even when text direction changes (e.g., RTL).

Reference: [MDN Web Docs - text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
