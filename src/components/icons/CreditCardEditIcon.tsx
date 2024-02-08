import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMTBIMjJWOC4yQzIyIDcuMDc5OSAyMiA2LjUxOTg0IDIxLjc4MiA2LjA5MjAyQzIxLjU5MDMgNS43MTU3IDIxLjI4NDMgNS40MDk3NCAyMC45MDggNS4yMTc5OUMyMC40ODAyIDUgMTkuOTIwMSA1IDE4LjggNUg1LjJDNC4wNzk5IDUgMy41MTk4NCA1IDMuMDkyMDIgNS4yMTc5OUMyLjcxNTcgNS40MDk3MyAyLjQwOTczIDUuNzE1NjkgMi4yMTc5OSA2LjA5MjAyQzIgNi41MTk4NCAyIDcuMDc5OSAyIDguMlYxNS44QzIgMTYuOTIwMSAyIDE3LjQ4MDIgMi4yMTc5OSAxNy45MDhDMi40MDk3MyAxOC4yODQzIDIuNzE1NjkgMTguNTkwMyAzLjA5MjAyIDE4Ljc4MkMzLjUxOTg0IDE5IDQuMDc5OSAxOSA1LjIgMTlIMTFNMTQuNSAyMUwxNi41MjUgMjAuNTk1QzE2LjcwMTUgMjAuNTU5NyAxNi43ODk4IDIwLjU0MiAxNi44NzIxIDIwLjUwOTdDMTYuOTQ1MiAyMC40ODExIDE3LjAxNDcgMjAuNDQzOSAxNy4wNzkgMjAuMzk5QzE3LjE1MTYgMjAuMzQ4NCAxNy4yMTUyIDIwLjI4NDggMTcuMzQyNiAyMC4xNTc0TDIxLjUgMTZDMjIuMDUyMyAxNS40NDc3IDIyLjA1MjMgMTQuNTUyMyAyMS41IDE0QzIwLjk0NzcgMTMuNDQ3NyAyMC4wNTIzIDEzLjQ0NzcgMTkuNSAxNEwxNS4zNDI2IDE4LjE1NzRDMTUuMjE1MiAxOC4yODQ4IDE1LjE1MTYgMTguMzQ4NCAxNS4xMDEgMTguNDIxQzE1LjA1NjEgMTguNDg1MyAxNS4wMTg5IDE4LjU1NDggMTQuOTkwMyAxOC42Mjc5QzE0Ljk1OCAxOC43MTAyIDE0Ljk0MDMgMTguNzk4NSAxNC45MDUgMTguOTc1TDE0LjUgMjFaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const CreditCardEditIcon = React.forwardRef<
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
        d="M2 10H22V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5H5.2C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.0799 2 8.2V15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.0799 19 5.2 19H11M14.5 21L16.525 20.595C16.7015 20.5597 16.7898 20.542 16.8721 20.5097C16.9452 20.4811 17.0147 20.4439 17.079 20.399C17.1516 20.3484 17.2152 20.2848 17.3426 20.1574L21.5 16C22.0523 15.4477 22.0523 14.5523 21.5 14C20.9477 13.4477 20.0523 13.4477 19.5 14L15.3426 18.1574C15.2152 18.2848 15.1516 18.3484 15.101 18.421C15.0561 18.4853 15.0189 18.5548 14.9903 18.6279C14.958 18.7102 14.9403 18.7985 14.905 18.975L14.5 21Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CreditCardEditIcon.displayName = "CreditCardEditIcon";
