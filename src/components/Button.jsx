export const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.03]";

  const gradientClasses =
    "bg-gradient-to-r from-primary to-accent text-white";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${gradientClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
