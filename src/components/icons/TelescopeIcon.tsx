import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjEyMTggMTQuODQ0NkwxOC4wMDA0IDIxLjk5OTlNMTAuODc5IDE0Ljg0NDZMNi4wMDA0MSAyMS45OTk5TTE0LjAwMDQgMTMuMkMxNC4wMDA0IDE0LjMwNDUgMTMuMTA1IDE1LjIgMTIuMDAwNCAxNS4yQzEwLjg5NTggMTUuMiAxMC4wMDA0IDE0LjMwNDUgMTAuMDAwNCAxMy4yQzEwLjAwMDQgMTIuMDk1NCAxMC44OTU4IDExLjIgMTIuMDAwNCAxMS4yQzEzLjEwNSAxMS4yIDE0LjAwMDQgMTIuMDk1NCAxNC4wMDA0IDEzLjJaTTE3LjE0ODkgNC41MzIyNUw1LjM2NDYyIDcuNjg5ODRDNS4wOTQxNCA3Ljc2MjMyIDQuOTU4ODkgNy43OTg1NSA0Ljg2OTY5IDcuODc4ODhDNC43OTEyMiA3Ljk0OTUzIDQuNzM3MTMgOC4wNDMyMSA0LjcxNTE4IDguMTQ2NDlDNC42OTAyMiA4LjI2MzkxIDQuNzI2NDYgOC4zOTkxNSA0Ljc5ODkzIDguNjY5NjRMNS42Nzg5MiAxMS45NTM4QzUuNzUxNCAxMi4yMjQzIDUuNzg3NjMgMTIuMzU5NSA1Ljg2Nzk2IDEyLjQ0ODdDNS45Mzg2MSAxMi41MjcyIDYuMDMyMjkgMTIuNTgxMyA2LjEzNTU3IDEyLjYwMzJDNi4yNTI5OSAxMi42MjgyIDYuMzg4MjMgMTIuNTkxOSA2LjY1ODcxIDEyLjUxOTVMMTguNDQzIDkuMzYxODhMMTcuMTQ4OSA0LjUzMjI1Wk0yMS43OTI4IDkuNDk5NThDMjAuNzEwOSA5Ljc4OTQ5IDIwLjE2OTkgOS45MzQ0NCAxOS43MDAyIDkuODM0NjFDMTkuMjg3MSA5Ljc0Njc5IDE4LjkxMjQgOS41MzA0NSAxOC42Mjk4IDkuMjE2NTdDMTguMzA4NSA4Ljg1OTc1IDE4LjE2MzUgOC4zMTg3OCAxNy44NzM2IDcuMjM2ODRMMTcuNzE4MyA2LjY1NzI4QzE3LjQyODQgNS41NzUzNSAxNy4yODM1IDUuMDM0MzggMTcuMzgzMyA0LjU2NDcxQzE3LjQ3MTEgNC4xNTE1OCAxNy42ODc1IDMuNzc2ODYgMTguMDAxMyAzLjQ5NDI1QzE4LjM1ODIgMy4xNzI5NiAxOC44OTkxIDMuMDI4MDEgMTkuOTgxMSAyLjczODFDMjAuMjUxNSAyLjY2NTYyIDIwLjM4NjggMi42MjkzOSAyMC41MDQyIDIuNjU0MzRDMjAuNjA3NSAyLjY3NjMgMjAuNzAxMiAyLjczMDM4IDIwLjc3MTggMi44MDg4NUMyMC44NTIxIDIuODk4MDYgMjAuODg4NCAzLjAzMzMgMjAuOTYwOSAzLjMwMzc5TDIyLjM1ODUgOC41MTk3OUMyMi40MzEgOC43OTAyNyAyMi40NjcyIDguOTI1NTEgMjIuNDQyMiA5LjA0MjkzQzIyLjQyMDMgOS4xNDYyMSAyMi4zNjYyIDkuMjM5ODkgMjIuMjg3NyA5LjMxMDU1QzIyLjE5ODUgOS4zOTA4NyAyMi4wNjMzIDkuNDI3MTEgMjEuNzkyOCA5LjQ5OTU4Wk0zLjUwMjEyIDEyLjMzTDQuODU0NDEgMTEuOTY3N0M1LjEyNDkgMTEuODk1MiA1LjI2MDE0IDExLjg1ODkgNS4zNDkzNSAxMS43Nzg2QzUuNDI3ODIgMTEuNzA4IDUuNDgxOSAxMS42MTQzIDUuNTAzODYgMTEuNTExQzUuNTI4ODEgMTEuMzkzNiA1LjQ5MjU4IDExLjI1ODMgNS40MjAxIDEwLjk4NzlMNS4wNTc3NSA5LjYzNTU2QzQuOTg1MjggOS4zNjUwOCA0Ljk0OTA0IDkuMjI5ODMgNC44Njg3MiA5LjE0MDYzQzQuNzk4MDYgOS4wNjIxNiA0LjcwNDM4IDkuMDA4MDcgNC42MDExIDguOTg2MTJDNC40ODM2OCA4Ljk2MTE2IDQuMzQ4NDQgOC45OTc0IDQuMDc3OTYgOS4wNjk4OEwyLjcyNTY2IDkuNDMyMjJDMi40NTUxOCA5LjUwNDcgMi4zMTk5MyA5LjU0MDk0IDIuMjMwNzMgOS42MjEyNkMyLjE1MjI2IDkuNjkxOTEgMi4wOTgxNyA5Ljc4NTU5IDIuMDc2MjIgOS44ODg4OEMyLjA1MTI2IDEwLjAwNjMgMi4wODc1IDEwLjE0MTUgMi4xNTk5OCAxMC40MTJMMi41MjIzMiAxMS43NjQzQzIuNTk0OCAxMi4wMzQ4IDIuNjMxMDQgMTIuMTcgMi43MTEzNiAxMi4yNTkyQzIuNzgyMDEgMTIuMzM3NyAyLjg3NTY5IDEyLjM5MTggMi45Nzg5OCAxMi40MTM4QzMuMDk2MzkgMTIuNDM4NyAzLjIzMTYzIDEyLjQwMjUgMy41MDIxMiAxMi4zM1oiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const TelescopeIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M13.1218 14.8446L18.0004 21.9999M10.879 14.8446L6.00041 21.9999M14.0004 13.2C14.0004 14.3045 13.105 15.2 12.0004 15.2C10.8958 15.2 10.0004 14.3045 10.0004 13.2C10.0004 12.0954 10.8958 11.2 12.0004 11.2C13.105 11.2 14.0004 12.0954 14.0004 13.2ZM17.1489 4.53225L5.36462 7.68984C5.09414 7.76232 4.95889 7.79855 4.86969 7.87888C4.79122 7.94953 4.73713 8.04321 4.71518 8.14649C4.69022 8.26391 4.72646 8.39915 4.79893 8.66964L5.67892 11.9538C5.7514 12.2243 5.78763 12.3595 5.86796 12.4487C5.93861 12.5272 6.03229 12.5813 6.13557 12.6032C6.25299 12.6282 6.38823 12.5919 6.65871 12.5195L18.443 9.36188L17.1489 4.53225ZM21.7928 9.49958C20.7109 9.78949 20.1699 9.93444 19.7002 9.83461C19.2871 9.74679 18.9124 9.53045 18.6298 9.21657C18.3085 8.85975 18.1635 8.31878 17.8736 7.23684L17.7183 6.65728C17.4284 5.57535 17.2835 5.03438 17.3833 4.56471C17.4711 4.15158 17.6875 3.77686 18.0013 3.49425C18.3582 3.17296 18.8991 3.02801 19.9811 2.7381C20.2515 2.66562 20.3868 2.62939 20.5042 2.65434C20.6075 2.6763 20.7012 2.73038 20.7718 2.80885C20.8521 2.89806 20.8884 3.0333 20.9609 3.30379L22.3585 8.51979C22.431 8.79027 22.4672 8.92551 22.4422 9.04293C22.4203 9.14621 22.3662 9.23989 22.2877 9.31055C22.1985 9.39087 22.0633 9.42711 21.7928 9.49958ZM3.50212 12.33L4.85441 11.9677C5.1249 11.8952 5.26014 11.8589 5.34935 11.7786C5.42782 11.708 5.4819 11.6143 5.50386 11.511C5.52881 11.3936 5.49258 11.2583 5.4201 10.9879L5.05775 9.63556C4.98528 9.36508 4.94904 9.22983 4.86872 9.14063C4.79806 9.06216 4.70438 9.00807 4.6011 8.98612C4.48368 8.96116 4.34844 8.9974 4.07796 9.06988L2.72566 9.43222C2.45518 9.5047 2.31993 9.54094 2.23073 9.62126C2.15226 9.69191 2.09817 9.78559 2.07622 9.88888C2.05126 10.0063 2.0875 10.1415 2.15998 10.412L2.52232 11.7643C2.5948 12.0348 2.63104 12.17 2.71136 12.2592C2.78201 12.3377 2.87569 12.3918 2.97898 12.4138C3.09639 12.4387 3.23163 12.4025 3.50212 12.33Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

TelescopeIcon.displayName = 'TelescopeIcon';
