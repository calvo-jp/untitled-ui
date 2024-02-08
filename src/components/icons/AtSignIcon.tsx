import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDcuOTk5OTlWMTNDMTYgMTMuNzk1NiAxNi4zMTYxIDE0LjU1ODcgMTYuODc4NyAxNS4xMjEzQzE3LjQ0MTMgMTUuNjgzOSAxOC4yMDQzIDE2IDE5IDE2QzE5Ljc5NTYgMTYgMjAuNTU4NyAxNS42ODM5IDIxLjEyMTMgMTUuMTIxM0MyMS42ODM5IDE0LjU1ODcgMjIgMTMuNzk1NiAyMiAxM1YxMkMyMS45OTk5IDkuNzQzMDIgMjEuMjM2MiA3LjU1MjQ3IDE5LjgzMzMgNS43ODQ1MkMxOC40MzAzIDQuMDE2NTggMTYuNDcwNSAyLjc3NTIxIDE0LjI3MjYgMi4yNjIyOUMxMi4wNzQ3IDEuNzQ5MzYgOS43Njc5MyAxLjk5NTAzIDcuNzI3MzQgMi45NTkzNkM1LjY4Njc2IDMuOTIzNjggNC4wMzIzOSA1LjU0OTk1IDMuMDMzMjUgNy41NzM3MUMyLjAzNDExIDkuNTk3NDggMS43NDg5NiAxMS44OTk3IDIuMjI0MTYgMTQuMTA2MUMyLjY5OTM2IDE2LjMxMjUgMy45MDY5NyAxOC4yOTMyIDUuNjUwNjIgMTkuNzI2M0M3LjM5NDI4IDIxLjE1OTMgOS41NzE0MyAyMS45NjAzIDExLjgyODEgMjEuOTk5MUMxNC4wODQ3IDIyLjAzNzkgMTYuMjg4MSAyMS4zMTIyIDE4LjA4IDE5Ljk0TTE2IDEyQzE2IDE0LjIwOTEgMTQuMjA5MSAxNiAxMiAxNkM5Ljc5MDg2IDE2IDggMTQuMjA5MSA4IDEyQzggOS43OTA4NSA5Ljc5MDg2IDcuOTk5OTkgMTIgNy45OTk5OUMxNC4yMDkxIDcuOTk5OTkgMTYgOS43OTA4NSAxNiAxMloiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const AtSignIcon = React.forwardRef<
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
        d="M16 7.99999V13C16 13.7956 16.3161 14.5587 16.8787 15.1213C17.4413 15.6839 18.2043 16 19 16C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V12C21.9999 9.74302 21.2362 7.55247 19.8333 5.78452C18.4303 4.01658 16.4705 2.77521 14.2726 2.26229C12.0747 1.74936 9.76793 1.99503 7.72734 2.95936C5.68676 3.92368 4.03239 5.54995 3.03325 7.57371C2.03411 9.59748 1.74896 11.8997 2.22416 14.1061C2.69936 16.3125 3.90697 18.2932 5.65062 19.7263C7.39428 21.1593 9.57143 21.9603 11.8281 21.9991C14.0847 22.0379 16.2881 21.3122 18.08 19.94M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79085 9.79086 7.99999 12 7.99999C14.2091 7.99999 16 9.79085 16 12Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AtSignIcon.displayName = "AtSignIcon";
