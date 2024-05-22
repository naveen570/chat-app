import { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
const headingVariants = cva(
  "text-white font-semibold leading-normal tracking-wide",
  {
    variants: {
      size: {
        6: "text-md md:text-base",
        5: "text-md md:text-base",
        4: "text-md md:text-base",
        3: "text-base md:text-xl",
        2: "text-xl md:text-2xl",
        1: "text-2xl md:text-3xl",
      },
    },
    defaultVariants: {
      size: 3,
    },
  }
);

type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> &
  VariantProps<typeof headingVariants> & {
    children: React.ReactNode;
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };

const Heading = ({ size, className, children, as, ...props }: HeadingProps) => {
  const HeadingTag: ElementType = as || `h${size}`;
  return (
    <HeadingTag
      className={cn(headingVariants({ size: size }), className)}
      {...props}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
