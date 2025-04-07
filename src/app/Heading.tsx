import type { ElementType } from "react";
import type { RecipeVariantProps } from "../../styled-system/css";
import { cva, cx } from "../../styled-system/css";

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
      left: {
        textAlign: "left",
        textWrap: "wrap",
      },
      center: {
        textAlign: "center",
        textWrap: "balance",
        wordBreak: "[auto-phrase]",
      },
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

type HeadingVariants = RecipeVariantProps<typeof heading>;

export type HeadingProps<C extends ElementType = "h1"> = HeadingVariants &
  React.ComponentProps<C> & {
  as?: C;
};

export const Heading = <C extends ElementType = "h1">({
                                                        as: Component = "h1",
                                                        size,
                                                        align,
                                                        weight,
                                                        children,
                                                        className,
                                                        ...headingAttrs
                                                      }: HeadingProps<C>) => {
  return (
    <Component
      {...headingAttrs}
      className={cx(
        heading({
          size,
          align,
          weight,
        }),
        className,
      )}
    >
      {children}
    </Component>
  );
};
