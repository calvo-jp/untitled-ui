import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTdMNCAyMk0xNSAxN0wyMCAyMk0xMiAyVjRNMTIgMjJWMTdNNS4yIDE3SDE4LjhDMTkuOTIwMSAxNyAyMC40ODAyIDE3IDIwLjkwOCAxNi43ODJDMjEuMjg0MyAxNi41OTAzIDIxLjU5MDMgMTYuMjg0MyAyMS43ODIgMTUuOTA4QzIyIDE1LjQ4MDIgMjIgMTQuOTIwMSAyMiAxMy44VjcuMkMyMiA2LjA3OTg5IDIyIDUuNTE5ODQgMjEuNzgyIDUuMDkyMDJDMjEuNTkwMyA0LjcxNTY5IDIxLjI4NDMgNC40MDk3MyAyMC45MDggNC4yMTc5OUMyMC40ODAyIDQgMTkuOTIwMSA0IDE4LjggNEg1LjJDNC4wNzk4OSA0IDMuNTE5ODQgNCAzLjA5MjAyIDQuMjE3OTlDMi43MTU2OSA0LjQwOTczIDIuNDA5NzMgNC43MTU2OSAyLjIxNzk5IDUuMDkyMDJDMiA1LjUxOTg0IDIgNi4wNzk4OSAyIDcuMlYxMy44QzIgMTQuOTIwMSAyIDE1LjQ4MDIgMi4yMTc5OSAxNS45MDhDMi40MDk3MyAxNi4yODQzIDIuNzE1NjkgMTYuNTkwMyAzLjA5MjAyIDE2Ljc4MkMzLjUxOTg0IDE3IDQuMDc5OSAxNyA1LjIgMTdaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const StandIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M9 17L4 22M15 17L20 22M12 2V4M12 22V17M5.2 17H18.8C19.9201 17 20.4802 17 20.908 16.782C21.2843 16.5903 21.5903 16.2843 21.782 15.908C22 15.4802 22 14.9201 22 13.8V7.2C22 6.07989 22 5.51984 21.782 5.09202C21.5903 4.71569 21.2843 4.40973 20.908 4.21799C20.4802 4 19.9201 4 18.8 4H5.2C4.07989 4 3.51984 4 3.09202 4.21799C2.71569 4.40973 2.40973 4.71569 2.21799 5.09202C2 5.51984 2 6.07989 2 7.2V13.8C2 14.9201 2 15.4802 2.21799 15.908C2.40973 16.2843 2.71569 16.5903 3.09202 16.782C3.51984 17 4.0799 17 5.2 17Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

StandIcon.displayName = "StandIcon";
