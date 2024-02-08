import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDdINS4yQzQuMDc5OSA3IDMuNTE5ODQgNyAzLjA5MjAyIDcuMjE3OTlDMi43MTU2OSA3LjQwOTczIDIuNDA5NzMgNy43MTU2OSAyLjIxNzk5IDguMDkyMDJDMiA4LjUxOTg0IDIgOS4wNzk5IDIgMTAuMlYxMy44QzIgMTQuOTIwMSAyIDE1LjQ4MDIgMi4yMTc5OSAxNS45MDhDMi40MDk3MyAxNi4yODQzIDIuNzE1NjkgMTYuNTkwMyAzLjA5MjAyIDE2Ljc4MkMzLjUxOTg0IDE3IDQuMDc5ODkgMTcgNS4yIDE3SDEzTTE3IDdIMTguOEMxOS45MjAxIDcgMjAuNDgwMiA3IDIwLjkwOCA3LjIxNzk5QzIxLjI4NDMgNy40MDk3MyAyMS41OTAzIDcuNzE1NjkgMjEuNzgyIDguMDkyMDJDMjIgOC41MTk4NCAyMiA5LjA3OTkgMjIgMTAuMlYxMy44QzIyIDE0LjkyMDEgMjIgMTUuNDgwMiAyMS43ODIgMTUuOTA4QzIxLjU5MDMgMTYuMjg0MyAyMS4yODQzIDE2LjU5MDMgMjAuOTA4IDE2Ljc4MkMyMC40ODAyIDE3IDE5LjkyMDEgMTcgMTguOCAxN0gxN00xNyAyMUwxNyAzTTE5LjUgMy4wMDAwMUwxNC41IDNNMTkuNSAyMUwxNC41IDIxIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const TextInputIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M13 7H5.2C4.0799 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.0799 2 10.2V13.8C2 14.9201 2 15.4802 2.21799 15.908C2.40973 16.2843 2.71569 16.5903 3.09202 16.782C3.51984 17 4.07989 17 5.2 17H13M17 7H18.8C19.9201 7 20.4802 7 20.908 7.21799C21.2843 7.40973 21.5903 7.71569 21.782 8.09202C22 8.51984 22 9.0799 22 10.2V13.8C22 14.9201 22 15.4802 21.782 15.908C21.5903 16.2843 21.2843 16.5903 20.908 16.782C20.4802 17 19.9201 17 18.8 17H17M17 21L17 3M19.5 3.00001L14.5 3M19.5 21L14.5 21"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

TextInputIcon.displayName = 'TextInputIcon';
