import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMThDMy4zNDMxNSAxOCAyIDE2LjY1NjkgMiAxNVY3LjhDMiA2LjExOTg0IDIgNS4yNzk3NiAyLjMyNjk4IDQuNjM4MDNDMi42MTQ2IDQuMDczNTQgMy4wNzM1NCAzLjYxNDYgMy42MzgwMyAzLjMyNjk4QzQuMjc5NzYgMyA1LjExOTg0IDMgNi44IDNIMTcuMkMxOC44ODAyIDMgMTkuNzIwMiAzIDIwLjM2MiAzLjMyNjk4QzIwLjkyNjUgMy42MTQ2IDIxLjM4NTQgNC4wNzM1NCAyMS42NzMgNC42MzgwM0MyMiA1LjI3OTc2IDIyIDYuMTE5ODQgMjIgNy44VjE1QzIyIDE2LjY1NjkgMjAuNjU2OSAxOCAxOSAxOE04LjcwODAzIDIxSDE1LjI5MkMxNS44MzY4IDIxIDE2LjEwOTMgMjEgMTYuMjQ2NyAyMC44ODg5QzE2LjM2NjMgMjAuNzkyMyAxNi40MzQ3IDIwLjY0NjEgMTYuNDMyNCAyMC40OTI1QzE2LjQyOTggMjAuMzE1NyAxNi4yNTU0IDIwLjEwNjQgMTUuOTA2NSAxOS42ODc5TDEyLjYxNDYgMTUuNzM3NUMxMi40MDM1IDE1LjQ4NDIgMTIuMjk4IDE1LjM1NzYgMTIuMTcxNiAxNS4zMTE0QzEyLjA2MDggMTUuMjcwOSAxMS45MzkyIDE1LjI3MDkgMTEuODI4NCAxNS4zMTE0QzExLjcwMiAxNS4zNTc2IDExLjU5NjUgMTUuNDg0MiAxMS4zODU0IDE1LjczNzVMOC4wOTM0NiAxOS42ODc5QzcuNzQ0NjUgMjAuMTA2NCA3LjU3MDI0IDIwLjMxNTcgNy41Njc1OCAyMC40OTI1QzcuNTY1MjYgMjAuNjQ2MSA3LjYzMzczIDIwLjc5MjMgNy43NTMyNiAyMC44ODg5QzcuODkwNzUgMjEgOC4xNjMxOCAyMSA4LjcwODAzIDIxWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 *
 */
export const AirplayIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M5 18C3.34315 18 2 16.6569 2 15V7.8C2 6.11984 2 5.27976 2.32698 4.63803C2.6146 4.07354 3.07354 3.6146 3.63803 3.32698C4.27976 3 5.11984 3 6.8 3H17.2C18.8802 3 19.7202 3 20.362 3.32698C20.9265 3.6146 21.3854 4.07354 21.673 4.63803C22 5.27976 22 6.11984 22 7.8V15C22 16.6569 20.6569 18 19 18M8.70803 21H15.292C15.8368 21 16.1093 21 16.2467 20.8889C16.3663 20.7923 16.4347 20.6461 16.4324 20.4925C16.4298 20.3157 16.2554 20.1064 15.9065 19.6879L12.6146 15.7375C12.4035 15.4842 12.298 15.3576 12.1716 15.3114C12.0608 15.2709 11.9392 15.2709 11.8284 15.3114C11.702 15.3576 11.5965 15.4842 11.3854 15.7375L8.09346 19.6879C7.74465 20.1064 7.57024 20.3157 7.56758 20.4925C7.56526 20.6461 7.63373 20.7923 7.75326 20.8889C7.89075 21 8.16318 21 8.70803 21Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

AirplayIcon.displayName = 'AirplayIcon';
