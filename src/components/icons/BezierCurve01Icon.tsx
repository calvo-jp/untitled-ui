import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDdMMyA3TTIxIDdMMTQgN00xNCA3LjI1MTk1QzE3LjQ1MDUgOC4xNDAwNCAyMCAxMS4yNzIyIDIwIDE0Ljk5OTlNNCAxNC45OTk5QzQgMTEuMjcyMiA2LjU0OTU1IDguMTQwMDQgMTAgNy4yNTE5NU0zLjYgMTlINC40QzQuOTYwMDUgMTkgNS4yNDAwOCAxOSA1LjQ1Mzk5IDE4Ljg5MUM1LjY0MjE1IDE4Ljc5NTEgNS43OTUxMyAxOC42NDIyIDUuODkxMDEgMTguNDU0QzYgMTguMjQwMSA2IDE3Ljk2MDEgNiAxNy40VjE2LjZDNiAxNi4wMzk5IDYgMTUuNzU5OSA1Ljg5MTAxIDE1LjU0NkM1Ljc5NTEzIDE1LjM1NzggNS42NDIxNSAxNS4yMDQ5IDUuNDUzOTkgMTUuMTA5QzUuMjQwMDggMTUgNC45NjAwNSAxNSA0LjQgMTVIMy42QzMuMDM5OTUgMTUgMi43NTk5MiAxNSAyLjU0NjAxIDE1LjEwOUMyLjM1Nzg1IDE1LjIwNDkgMi4yMDQ4NyAxNS4zNTc4IDIuMTA4OTkgMTUuNTQ2QzIgMTUuNzU5OSAyIDE2LjAzOTkgMiAxNi42VjE3LjRDMiAxNy45NjAxIDIgMTguMjQwMSAyLjEwODk5IDE4LjQ1NEMyLjIwNDg3IDE4LjY0MjIgMi4zNTc4NSAxOC43OTUxIDIuNTQ2MDEgMTguODkxQzIuNzU5OTIgMTkgMy4wMzk5NSAxOSAzLjYgMTlaTTExLjYgOUgxMi40QzEyLjk2MDEgOSAxMy4yNDAxIDkgMTMuNDU0IDguODkxMDFDMTMuNjQyMiA4Ljc5NTEzIDEzLjc5NTEgOC42NDIxNSAxMy44OTEgOC40NTM5OUMxNCA4LjI0MDA4IDE0IDcuOTYwMDUgMTQgNy40VjYuNkMxNCA2LjAzOTk1IDE0IDUuNzU5OTIgMTMuODkxIDUuNTQ2MDFDMTMuNzk1MSA1LjM1Nzg1IDEzLjY0MjIgNS4yMDQ4NyAxMy40NTQgNS4xMDg5OUMxMy4yNDAxIDUgMTIuOTYwMSA1IDEyLjQgNUgxMS42QzExLjAzOTkgNSAxMC43NTk5IDUgMTAuNTQ2IDUuMTA4OTlDMTAuMzU3OCA1LjIwNDg3IDEwLjIwNDkgNS4zNTc4NSAxMC4xMDkgNS41NDYwMUMxMCA1Ljc1OTkyIDEwIDYuMDM5OTUgMTAgNi42VjcuNEMxMCA3Ljk2MDA1IDEwIDguMjQwMDggMTAuMTA5IDguNDUzOTlDMTAuMjA0OSA4LjY0MjE1IDEwLjM1NzggOC43OTUxMyAxMC41NDYgOC44OTEwMUMxMC43NTk5IDkgMTEuMDM5OSA5IDExLjYgOVpNMTkuNiAxOUgyMC40QzIwLjk2MDEgMTkgMjEuMjQwMSAxOSAyMS40NTQgMTguODkxQzIxLjY0MjIgMTguNzk1MSAyMS43OTUxIDE4LjY0MjIgMjEuODkxIDE4LjQ1NEMyMiAxOC4yNDAxIDIyIDE3Ljk2MDEgMjIgMTcuNFYxNi42QzIyIDE2LjAzOTkgMjIgMTUuNzU5OSAyMS44OTEgMTUuNTQ2QzIxLjc5NTEgMTUuMzU3OCAyMS42NDIyIDE1LjIwNDkgMjEuNDU0IDE1LjEwOUMyMS4yNDAxIDE1IDIwLjk2MDEgMTUgMjAuNCAxNUgxOS42QzE5LjAzOTkgMTUgMTguNzU5OSAxNSAxOC41NDYgMTUuMTA5QzE4LjM1NzggMTUuMjA0OSAxOC4yMDQ5IDE1LjM1NzggMTguMTA5IDE1LjU0NkMxOCAxNS43NTk5IDE4IDE2LjAzOTkgMTggMTYuNlYxNy40QzE4IDE3Ljk2MDEgMTggMTguMjQwMSAxOC4xMDkgMTguNDU0QzE4LjIwNDkgMTguNjQyMiAxOC4zNTc4IDE4Ljc5NTEgMTguNTQ2IDE4Ljg5MUMxOC43NTk5IDE5IDE5LjAzOTkgMTkgMTkuNiAxOVpNMjIgN0MyMiA3LjU1MjI4IDIxLjU1MjMgOCAyMSA4QzIwLjQ0NzcgOCAyMCA3LjU1MjI4IDIwIDdDMjAgNi40NDc3MiAyMC40NDc3IDYgMjEgNkMyMS41NTIzIDYgMjIgNi40NDc3MiAyMiA3Wk00IDdDNCA3LjU1MjI4IDMuNTUyMjggOCAzIDhDMi40NDc3MiA4IDIgNy41NTIyOCAyIDdDMiA2LjQ0NzcyIDIuNDQ3NzIgNiAzIDZDMy41NTIyOCA2IDQgNi40NDc3MiA0IDdaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const BezierCurve01Icon = React.forwardRef<
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
        d="M10 7L3 7M21 7L14 7M14 7.25195C17.4505 8.14004 20 11.2722 20 14.9999M4 14.9999C4 11.2722 6.54955 8.14004 10 7.25195M3.6 19H4.4C4.96005 19 5.24008 19 5.45399 18.891C5.64215 18.7951 5.79513 18.6422 5.89101 18.454C6 18.2401 6 17.9601 6 17.4V16.6C6 16.0399 6 15.7599 5.89101 15.546C5.79513 15.3578 5.64215 15.2049 5.45399 15.109C5.24008 15 4.96005 15 4.4 15H3.6C3.03995 15 2.75992 15 2.54601 15.109C2.35785 15.2049 2.20487 15.3578 2.10899 15.546C2 15.7599 2 16.0399 2 16.6V17.4C2 17.9601 2 18.2401 2.10899 18.454C2.20487 18.6422 2.35785 18.7951 2.54601 18.891C2.75992 19 3.03995 19 3.6 19ZM11.6 9H12.4C12.9601 9 13.2401 9 13.454 8.89101C13.6422 8.79513 13.7951 8.64215 13.891 8.45399C14 8.24008 14 7.96005 14 7.4V6.6C14 6.03995 14 5.75992 13.891 5.54601C13.7951 5.35785 13.6422 5.20487 13.454 5.10899C13.2401 5 12.9601 5 12.4 5H11.6C11.0399 5 10.7599 5 10.546 5.10899C10.3578 5.20487 10.2049 5.35785 10.109 5.54601C10 5.75992 10 6.03995 10 6.6V7.4C10 7.96005 10 8.24008 10.109 8.45399C10.2049 8.64215 10.3578 8.79513 10.546 8.89101C10.7599 9 11.0399 9 11.6 9ZM19.6 19H20.4C20.9601 19 21.2401 19 21.454 18.891C21.6422 18.7951 21.7951 18.6422 21.891 18.454C22 18.2401 22 17.9601 22 17.4V16.6C22 16.0399 22 15.7599 21.891 15.546C21.7951 15.3578 21.6422 15.2049 21.454 15.109C21.2401 15 20.9601 15 20.4 15H19.6C19.0399 15 18.7599 15 18.546 15.109C18.3578 15.2049 18.2049 15.3578 18.109 15.546C18 15.7599 18 16.0399 18 16.6V17.4C18 17.9601 18 18.2401 18.109 18.454C18.2049 18.6422 18.3578 18.7951 18.546 18.891C18.7599 19 19.0399 19 19.6 19ZM22 7C22 7.55228 21.5523 8 21 8C20.4477 8 20 7.55228 20 7C20 6.44772 20.4477 6 21 6C21.5523 6 22 6.44772 22 7ZM4 7C4 7.55228 3.55228 8 3 8C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6C3.55228 6 4 6.44772 4 7Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BezierCurve01Icon.displayName = "BezierCurve01Icon";
