import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyIDEyQzIyIDE3LjUyMjggMTcuNTIyOCAyMiAxMiAyMk0yMiAxMkMyMiA2LjQ3NzE1IDE3LjUyMjggMiAxMiAyTTIyIDEySDIwTTEyIDIyQzYuNDc3MTUgMjIgMiAxNy41MjI4IDIgMTJNMTIgMjJWMjBNMiAxMkMyIDYuNDc3MTUgNi40NzcxNSAyIDEyIDJNMiAxMkg0TTEyIDJWNE0xOS4wNzExIDE5LjA3MTFMMTcuNjU2OSAxNy42NTY5TTYuMzQzMTUgNi4zNDMxNUw0LjkyODkzIDQuOTI4OTNNMTcuNjU2OSA2LjM0MzE1TDE5LjA3MTEgNC45Mjg5M000LjkyODkzIDE5LjA3MTFMNi4zNDMxNSAxNy42NTY5TTggMTJMMTAuNSAxMC41TDEyIDhMMTMuNSAxMC41TDE2IDEyTDEzLjUgMTMuNUwxMiAxNkwxMC41IDEzLjVMOCAxMloiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const Compass01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H20M12 22C6.47715 22 2 17.5228 2 12M12 22V20M2 12C2 6.47715 6.47715 2 12 2M2 12H4M12 2V4M19.0711 19.0711L17.6569 17.6569M6.34315 6.34315L4.92893 4.92893M17.6569 6.34315L19.0711 4.92893M4.92893 19.0711L6.34315 17.6569M8 12L10.5 10.5L12 8L13.5 10.5L16 12L13.5 13.5L12 16L10.5 13.5L8 12Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Compass01Icon.displayName = 'Compass01Icon';
