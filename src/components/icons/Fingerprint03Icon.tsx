import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMTAwMDggMjEuMjIxQzYuNzEwMjEgMTkuMjM3NSA1Ljg5MjU4IDE2LjgyNDMgNS44OTI1OCAxNC4yMTg3QzUuODkyNTggMTAuODQ0MyA4LjYyNjUgOC4xMDkzOCAxMS45OTg5IDguMTA5MzhDMTUuMzcxMiA4LjEwOTM4IDE4LjEwNTEgMTAuODQ0MyAxOC4xMDUxIDE0LjIxODciIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjEwMDA4IDIxLjIyMUM2LjcxMDIxIDE5LjIzNzUgNS44OTI1OCAxNi44MjQzIDUuODkyNTggMTQuMjE4N0M1Ljg5MjU4IDEwLjg0NDMgOC42MjY1IDguMTA5MzggMTEuOTk4OSA4LjEwOTM4QzE1LjM3MTIgOC4xMDkzOCAxOC4xMDUxIDEwLjg0NDMgMTguMTA1MSAxNC4yMTg3IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTguNDM1OSAyMC4zMTE4QzE4LjMyNTkgMjAuMzE3OSAxOC4yMTggMjAuMzI4MSAxOC4xMDcgMjAuMzI4MUMxNC43MzQ3IDIwLjMyODEgMTIuMDAwNyAxNy41OTMxIDEyLjAwMDcgMTQuMjE4OCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE4LjQzNjEgMjAuMzExOEMxOC4zMjYyIDIwLjMxNzkgMTguMjE4MiAyMC4zMjgxIDE4LjEwNzMgMjAuMzI4MUMxNC43MzQ5IDIwLjMyODEgMTIuMDAxIDE3LjU5MzEgMTIuMDAxIDE0LjIxODgiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy4yNjk0IDIxLjk5OTlDMTAuNjc1IDIwLjM4MiA4Ljk0NzA1IDE3LjUwMjQgOC45NDcwNSAxNC4yMTg3QzguOTQ3MDUgMTIuNTMxNSAxMC4zMTQ1IDExLjE2NCAxMi4wMDA3IDExLjE2NEMxMy42ODY5IDExLjE2NCAxNS4wNTQzIDEyLjUzMTUgMTUuMDU0MyAxNC4yMTg3QzE1LjA1NDMgMTUuOTA1OSAxNi40MjE4IDE3LjI3MzMgMTguMTA4IDE3LjI3MzNDMTkuNzk0MiAxNy4yNzMzIDIxLjE2MTYgMTUuOTA1OSAyMS4xNjE2IDE0LjIxODdDMjEuMTYxNiA5LjE1NzEgMTcuMDYwMiA1LjA1NDY5IDEyLjAwMTcgNS4wNTQ2OUM2Ljk0MzE5IDUuMDU0NjkgMi44NDE4IDkuMTU3MSAyLjg0MTggMTQuMjE4N0MyLjg0MTggMTUuMzQ2OSAyLjk2ODA2IDE2LjQ0NTUgMy4yMDAyMSAxNy41MDQ1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMuMjY5NCAyMS45OTk5QzEwLjY3NSAyMC4zODIgOC45NDcwNSAxNy41MDI0IDguOTQ3MDUgMTQuMjE4N0M4Ljk0NzA1IDEyLjUzMTUgMTAuMzE0NSAxMS4xNjQgMTIuMDAwNyAxMS4xNjRDMTMuNjg2OSAxMS4xNjQgMTUuMDU0MyAxMi41MzE1IDE1LjA1NDMgMTQuMjE4N0MxNS4wNTQzIDE1LjkwNTkgMTYuNDIxOCAxNy4yNzMzIDE4LjEwOCAxNy4yNzMzQzE5Ljc5NDIgMTcuMjczMyAyMS4xNjE2IDE1LjkwNTkgMjEuMTYxNiAxNC4yMTg3QzIxLjE2MTYgOS4xNTcxIDE3LjA2MDIgNS4wNTQ2OSAxMi4wMDE3IDUuMDU0NjlDNi45NDMxOSA1LjA1NDY5IDIuODQxOCA5LjE1NzEgMi44NDE4IDE0LjIxODdDMi44NDE4IDE1LjM0NjkgMi45NjgwNiAxNi40NDU1IDMuMjAwMjEgMTcuNTA0NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIwLjUyNTcgNS44NjMxM0MxOC40NDM1IDMuNDk3OCAxNS4zOTkgMiAxMi4wMDAyIDJDOC42MDEzNiAyIDUuNTU2ODcgMy40OTc4IDMuNDc0NjEgNS44NjMxMyIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIwLjUyNTcgNS44NjMxM0MxOC40NDM1IDMuNDk3OCAxNS4zOTkgMiAxMi4wMDAyIDJDOC42MDEzNiAyIDUuNTU2ODcgMy40OTc4IDMuNDc0NjEgNS44NjMxMyIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 *
 */
export const Fingerprint03Icon = React.forwardRef<
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
        d="M8.10008 21.221C6.71021 19.2375 5.89258 16.8243 5.89258 14.2187C5.89258 10.8443 8.6265 8.10938 11.9989 8.10938C15.3712 8.10938 18.1051 10.8443 18.1051 14.2187"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.10008 21.221C6.71021 19.2375 5.89258 16.8243 5.89258 14.2187C5.89258 10.8443 8.6265 8.10938 11.9989 8.10938C15.3712 8.10938 18.1051 10.8443 18.1051 14.2187"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.4359 20.3118C18.3259 20.3179 18.218 20.3281 18.107 20.3281C14.7347 20.3281 12.0007 17.5931 12.0007 14.2188"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.4361 20.3118C18.3262 20.3179 18.2182 20.3281 18.1073 20.3281C14.7349 20.3281 12.001 17.5931 12.001 14.2188"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2694 21.9999C10.675 20.382 8.94705 17.5024 8.94705 14.2187C8.94705 12.5315 10.3145 11.164 12.0007 11.164C13.6869 11.164 15.0543 12.5315 15.0543 14.2187C15.0543 15.9059 16.4218 17.2733 18.108 17.2733C19.7942 17.2733 21.1616 15.9059 21.1616 14.2187C21.1616 9.1571 17.0602 5.05469 12.0017 5.05469C6.94319 5.05469 2.8418 9.1571 2.8418 14.2187C2.8418 15.3469 2.96806 16.4455 3.20021 17.5045"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2694 21.9999C10.675 20.382 8.94705 17.5024 8.94705 14.2187C8.94705 12.5315 10.3145 11.164 12.0007 11.164C13.6869 11.164 15.0543 12.5315 15.0543 14.2187C15.0543 15.9059 16.4218 17.2733 18.108 17.2733C19.7942 17.2733 21.1616 15.9059 21.1616 14.2187C21.1616 9.1571 17.0602 5.05469 12.0017 5.05469C6.94319 5.05469 2.8418 9.1571 2.8418 14.2187C2.8418 15.3469 2.96806 16.4455 3.20021 17.5045"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5257 5.86313C18.4435 3.4978 15.399 2 12.0002 2C8.60136 2 5.55687 3.4978 3.47461 5.86313"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5257 5.86313C18.4435 3.4978 15.399 2 12.0002 2C8.60136 2 5.55687 3.4978 3.47461 5.86313"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Fingerprint03Icon.displayName = "Fingerprint03Icon";
