# `@pandacss/no-physical-properties` false positive

## usage

```bash
pnpm install
pnpm run lint
./src/app/Heading.tsx
51:7  Error: Use logical property of `left` instead. Prefer `insetInlineStart`  @pandacss/no-physical-properties
60:7  Error: Use logical property of `right` instead. Prefer `insetInlineEnd`  @pandacss/no-physical-properties

```

```tsx
const heading = cva({
  base: {
    fontWeight: "strong",
    lineHeight: "m",
  },
  variants: {
    size: {
      "2xl": {
        fontSize: "2xl",
      },
      xl: {
        fontSize: "xl",
      },
      l: {
        fontSize: "l",
      },
      m: {
        fontSize: "m",
      },
      s: {
        fontSize: "s",
      },
      xs: {
        fontSize: "xs",
      },
    },
    align: {
      // false positive lint error is here
      left: {
        textAlign: "left",
        textWrap: "wrap",
      },
      center: {
        textAlign: "center",
        textWrap: "balance",
        wordBreak: "[auto-phrase]",
      },
      // false positive lint error is here
      right: {
        textAlign: "right",
        textWrap: "wrap",
      },
    },
    weight: {
      strong: {
        fontWeight: "strong",
      },
      regular: {
        fontWeight: "regular",
      },
    },
  },
  defaultVariants: {
    size: "2xl",
    align: "left",
    weight: "strong",
  },
});
```

Is this `&` character really necessary? I think it's a false positive?

----

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
