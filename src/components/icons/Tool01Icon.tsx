import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjYzMTQgNy42MzEzN0MxNS4yMzUzIDcuMjM1MzUgMTUuMDM3MyA3LjAzNzM1IDE0Ljk2MzEgNi44MDkwMkMxNC44OTc5IDYuNjA4MTcgMTQuODk3OSA2LjM5MTgzIDE0Ljk2MzEgNi4xOTA5OEMxNS4wMzczIDUuOTYyNjUgMTUuMjM1MyA1Ljc2NDY1IDE1LjYzMTQgNS4zNjg2M0wxOC40Njk3IDIuNTMwMjZDMTcuNzE2NSAyLjE4OTYyIDE2Ljg4MDQgMiAxNiAyQzEyLjY4NjMgMiA5Ljk5OTk4IDQuNjg2MjkgOS45OTk5OCA4QzkuOTk5OTggOC40OTEwNCAxMC4wNTkgOC45NjgzIDEwLjE3MDIgOS40MjUwOUMxMC4yODk0IDkuOTE0MjQgMTAuMzQ5IDEwLjE1ODggMTAuMzM4NCAxMC4zMTMzQzEwLjMyNzMgMTAuNDc1MSAxMC4zMDMyIDEwLjU2MTIgMTAuMjI4NiAxMC43MDUxQzEwLjE1NzQgMTAuODQyNiAxMC4wMjA4IDEwLjk3OTEgOS43NDc4IDExLjI1MjJMMy40OTk5OCAxNy41QzIuNjcxNTYgMTguMzI4NCAyLjY3MTU2IDE5LjY3MTYgMy40OTk5OCAyMC41QzQuMzI4NDEgMjEuMzI4NCA1LjY3MTU2IDIxLjMyODQgNi40OTk5OCAyMC41TDEyLjc0NzggMTQuMjUyMkMxMy4wMjA4IDEzLjk3OTEgMTMuMTU3NCAxMy44NDI2IDEzLjI5NDkgMTMuNzcxNEMxMy40Mzg4IDEzLjY5NjggMTMuNTI0OSAxMy42NzI3IDEzLjY4NjcgMTMuNjYxNkMxMy44NDEyIDEzLjY1MSAxNC4wODU3IDEzLjcxMDYgMTQuNTc0OSAxMy44Mjk3QzE1LjAzMTcgMTMuOTQxIDE1LjUwODkgMTQgMTYgMTRDMTkuMzEzNyAxNCAyMiAxMS4zMTM3IDIyIDhDMjIgNy4xMTk1OSAyMS44MTA0IDYuMjgzNDcgMjEuNDY5NyA1LjUzMDI2TDE4LjYzMTQgOC4zNjg2M0MxOC4yMzUzIDguNzY0NjUgMTguMDM3MyA4Ljk2MjY1IDE3LjgwOSA5LjAzNjg0QzE3LjYwODIgOS4xMDIxIDE3LjM5MTggOS4xMDIxIDE3LjE5MSA5LjAzNjg0QzE2Ljk2MjYgOC45NjI2NSAxNi43NjQ2IDguNzY0NjUgMTYuMzY4NiA4LjM2ODYzTDE1LjYzMTQgNy42MzEzN1oiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const Tool01Icon = React.forwardRef<
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
        d="M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Tool01Icon.displayName = "Tool01Icon";
