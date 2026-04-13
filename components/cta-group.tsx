import Link from "next/link";

type CTAAction = {
  href: string;
  label: string;
  caption: string;
  variant?: "primary" | "secondary" | "dark";
};

type CTAGroupProps = {
  actions: CTAAction[];
  align?: "left" | "center";
  captionTone?: "default" | "light";
};

const variantClassNames = {
  primary: "button-primary",
  secondary: "button-secondary",
  dark: "button-dark",
};

export function CTAGroup({
  actions,
  align = "left",
  captionTone = "default",
}: CTAGroupProps) {
  const isCentered = align === "center";

  return (
    <div
      className={[
        "flex flex-col gap-4 sm:flex-row sm:flex-wrap",
        isCentered ? "justify-center" : "",
      ].join(" ")}
    >
      {actions.map((action) => {
        const className = variantClassNames[action.variant ?? "primary"];
        const isExternalAction =
          action.href.startsWith("tel:") ||
          action.href.startsWith("mailto:") ||
          action.href.startsWith("http://") ||
          action.href.startsWith("https://");

        const content = (
          <div className="min-w-[12.5rem] sm:min-w-[13.5rem]">
            <span className={`${className} w-full`}>
              {action.label}
            </span>
            <p
              className={[
                "mt-2 text-xs leading-6",
                captionTone === "light"
                  ? "text-white/72"
                  : "text-[var(--color-muted)]",
                isCentered ? "text-center" : "",
              ].join(" ")}
            >
              {action.caption}
            </p>
          </div>
        );

        if (isExternalAction) {
          return (
            <a key={action.href + action.label} href={action.href}>
              {content}
            </a>
          );
        }

        return (
          <Link key={action.href + action.label} href={action.href}>
            {content}
          </Link>
        );
      })}
    </div>
  );
}
