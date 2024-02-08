import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDhMMTYgNU0xNiA1TDE5IDJNMTYgNUwyMiA1TTEyLjUgM0g3LjhDNi4xMTk4NCAzIDUuMjc5NzYgMyA0LjYzODAzIDMuMzI2OThDNC4wNzM1NCAzLjYxNDYgMy42MTQ2IDQuMDczNTQgMy4zMjY5OCA0LjYzODAzQzMgNS4yNzk3NiAzIDYuMTE5ODQgMyA3LjhWMTYuMkMzIDE3Ljg4MDIgMyAxOC43MjAyIDMuMzI2OTggMTkuMzYyQzMuNjE0NiAxOS45MjY1IDQuMDczNTQgMjAuMzg1NCA0LjYzODAzIDIwLjY3M0M1LjI3OTc2IDIxIDYuMTE5ODQgMjEgNy44IDIxSDE3QzE3LjkzIDIxIDE4LjM5NSAyMSAxOC43NzY1IDIwLjg5NzhDMTkuODExNyAyMC42MjA0IDIwLjYyMDQgMTkuODExNyAyMC44OTc4IDE4Ljc3NjVDMjEgMTguMzk1IDIxIDE3LjkzIDIxIDE3TTEwLjUgOC41QzEwLjUgOS42MDQ1NyA5LjYwNDU3IDEwLjUgOC41IDEwLjVDNy4zOTU0MyAxMC41IDYuNSA5LjYwNDU3IDYuNSA4LjVDNi41IDcuMzk1NDMgNy4zOTU0MyA2LjUgOC41IDYuNUM5LjYwNDU3IDYuNSAxMC41IDcuMzk1NDMgMTAuNSA4LjVaTTE0Ljk5IDExLjkxODFMNi41MzExNSAxOS42MDhDNi4wNTUzNiAyMC4wNDA2IDUuODE3NDcgMjAuMjU2OCA1Ljc5NjQzIDIwLjQ0NDJDNS43NzgxOSAyMC42MDY2IDUuODQwNDUgMjAuNzY3NiA1Ljk2MzE5IDIwLjg3NTVDNi4xMDQ3OCAyMSA2LjQyNjI4IDIxIDcuMDY5MjkgMjFIMTYuNDU2QzE3Ljg5NTEgMjEgMTguNjE0NyAyMSAxOS4xNzk5IDIwLjc1ODJDMTkuODg5NCAyMC40NTQ3IDIwLjQ1NDcgMTkuODg5NCAyMC43NTgyIDE5LjE3OTlDMjEgMTguNjE0NyAyMSAxNy44OTUxIDIxIDE2LjQ1NkMyMSAxNS45NzE3IDIxIDE1LjcyOTYgMjAuOTQ3MSAxNS41MDQyQzIwLjg4MDUgMTUuMjIwOCAyMC43NTMgMTQuOTU1NCAyMC41NzMzIDE0LjcyNjRDMjAuNDMwMyAxNC41NDQyIDIwLjI0MTIgMTQuMzkyOSAxOS44NjMxIDE0LjA5MDVMMTcuMDY1OCAxMS44NTI3QzE2LjY4NzQgMTEuNTQ5OSAxNi40OTgyIDExLjM5ODUgMTYuMjg5OCAxMS4zNDUxQzE2LjEwNjEgMTEuMjk4IDE1LjkxMjkgMTEuMzA0MSAxNS43MzI1IDExLjM2MjdDMTUuNTI3OSAxMS40MjkxIDE1LjM0ODYgMTEuNTkyMSAxNC45OSAxMS45MTgxWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 *
 */
export const ImageLeftIcon = React.forwardRef<
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
        d="M19 8L16 5M16 5L19 2M16 5L22 5M12.5 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H17C17.93 21 18.395 21 18.7765 20.8978C19.8117 20.6204 20.6204 19.8117 20.8978 18.7765C21 18.395 21 17.93 21 17M10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5ZM14.99 11.9181L6.53115 19.608C6.05536 20.0406 5.81747 20.2568 5.79643 20.4442C5.77819 20.6066 5.84045 20.7676 5.96319 20.8755C6.10478 21 6.42628 21 7.06929 21H16.456C17.8951 21 18.6147 21 19.1799 20.7582C19.8894 20.4547 20.4547 19.8894 20.7582 19.1799C21 18.6147 21 17.8951 21 16.456C21 15.9717 21 15.7296 20.9471 15.5042C20.8805 15.2208 20.753 14.9554 20.5733 14.7264C20.4303 14.5442 20.2412 14.3929 19.8631 14.0905L17.0658 11.8527C16.6874 11.5499 16.4982 11.3985 16.2898 11.3451C16.1061 11.298 15.9129 11.3041 15.7325 11.3627C15.5279 11.4291 15.3486 11.5921 14.99 11.9181Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ImageLeftIcon.displayName = "ImageLeftIcon";
