import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggOEg4LjAxTTQuNTYyNzQgMi45MzcyNkwyLjkzNzI2IDQuNTYyNzRDMi41OTEzNiA0LjkwODY0IDIuNDE4NCA1LjA4MTYgMi4yOTQ3MiA1LjI4MzQzQzIuMTg1MDYgNS40NjIzNyAyLjEwNDI1IDUuNjU3NDYgMi4wNTUyNiA1Ljg2MTU0QzIgNi4wOTE3MSAyIDYuMzM2MyAyIDYuODI1NDhMMiA5LjY3NDUyQzIgMTAuMTYzNyAyIDEwLjQwODMgMi4wNTUyNiAxMC42Mzg1QzIuMTA0MjUgMTAuODQyNSAyLjE4NTA2IDExLjAzNzYgMi4yOTQ3MiAxMS4yMTY2QzIuNDE4NCAxMS40MTg0IDIuNTkxMzUgMTEuNTkxNCAyLjkzNzI2IDExLjkzNzNMMTAuNjA1OSAxOS42MDU5QzExLjc5MzkgMjAuNzkzOSAxMi4zODggMjEuMzg4IDEzLjA3MjkgMjEuNjEwNUMxMy42NzU1IDIxLjgwNjMgMTQuMzI0NSAyMS44MDYzIDE0LjkyNyAyMS42MTA1QzE1LjYxMiAyMS4zODggMTYuMjA2MSAyMC43OTM5IDE3LjM5NDEgMTkuNjA1OUwxOS42MDU5IDE3LjM5NDFDMjAuNzkzOSAxNi4yMDYxIDIxLjM4OCAxNS42MTIgMjEuNjEwNSAxNC45MjdDMjEuODA2MyAxNC4zMjQ1IDIxLjgwNjMgMTMuNjc1NSAyMS42MTA1IDEzLjA3MjlDMjEuMzg4IDEyLjM4OCAyMC43OTM5IDExLjc5MzkgMTkuNjA1OSAxMC42MDU5TDExLjkzNzMgMi45MzcyNkMxMS41OTE0IDIuNTkxMzYgMTEuNDE4NCAyLjQxODQgMTEuMjE2NiAyLjI5NDcyQzExLjAzNzYgMi4xODUwNiAxMC44NDI1IDIuMTA0MjUgMTAuNjM4NSAyLjA1NTI2QzEwLjQwODMgMiAxMC4xNjM3IDIgOS42NzQ1MiAyTDYuODI1NDggMkM2LjMzNjMgMiA2LjA5MTcxIDIgNS44NjE1NCAyLjA1NTI2QzUuNjU3NDYgMi4xMDQyNSA1LjQ2MjM3IDIuMTg1MDYgNS4yODM0MyAyLjI5NDcyQzUuMDgxNiAyLjQxODQgNC45MDg2NSAyLjU5MTM1IDQuNTYyNzQgMi45MzcyNlpNOC41IDhDOC41IDguMjc2MTQgOC4yNzYxNCA4LjUgOCA4LjVDNy43MjM4NiA4LjUgNy41IDguMjc2MTQgNy41IDhDNy41IDcuNzIzODYgNy43MjM4NiA3LjUgOCA3LjVDOC4yNzYxNCA3LjUgOC41IDcuNzIzODYgOC41IDhaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const Tag02Icon = React.forwardRef<
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
        d="M8 8H8.01M4.56274 2.93726L2.93726 4.56274C2.59136 4.90864 2.4184 5.0816 2.29472 5.28343C2.18506 5.46237 2.10425 5.65746 2.05526 5.86154C2 6.09171 2 6.3363 2 6.82548L2 9.67452C2 10.1637 2 10.4083 2.05526 10.6385C2.10425 10.8425 2.18506 11.0376 2.29472 11.2166C2.4184 11.4184 2.59135 11.5914 2.93726 11.9373L10.6059 19.6059C11.7939 20.7939 12.388 21.388 13.0729 21.6105C13.6755 21.8063 14.3245 21.8063 14.927 21.6105C15.612 21.388 16.2061 20.7939 17.3941 19.6059L19.6059 17.3941C20.7939 16.2061 21.388 15.612 21.6105 14.927C21.8063 14.3245 21.8063 13.6755 21.6105 13.0729C21.388 12.388 20.7939 11.7939 19.6059 10.6059L11.9373 2.93726C11.5914 2.59136 11.4184 2.4184 11.2166 2.29472C11.0376 2.18506 10.8425 2.10425 10.6385 2.05526C10.4083 2 10.1637 2 9.67452 2L6.82548 2C6.3363 2 6.09171 2 5.86154 2.05526C5.65746 2.10425 5.46237 2.18506 5.28343 2.29472C5.0816 2.4184 4.90865 2.59135 4.56274 2.93726ZM8.5 8C8.5 8.27614 8.27614 8.5 8 8.5C7.72386 8.5 7.5 8.27614 7.5 8C7.5 7.72386 7.72386 7.5 8 7.5C8.27614 7.5 8.5 7.72386 8.5 8Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Tag02Icon.displayName = "Tag02Icon";
