import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTk5OTMgMTNDNC45OTk5MyAxNC42NDg0IDUuNjY0NjYgMTYuMTQxNSA2Ljc0MDY3IDE3LjIyNkM2Ljg0NDQ1IDE3LjMzMDUgNi44OTYzMyAxNy4zODI4IDYuOTI2OTYgMTcuNDMzMUM2Ljk1NjE5IDE3LjQ4MTEgNi45NzMyIDE3LjUyMjQgNi45ODYyNSAxNy41NzcxQzYuOTk5OTMgMTcuNjM0MyA2Ljk5OTkzIDE3LjY5OTUgNi45OTk5MyAxNy44Mjk4VjIwLjJDNi45OTk5MyAyMC40OCA2Ljk5OTkzIDIwLjYyIDcuMDU0NDMgMjAuNzI3QzcuMTAyMzYgMjAuODIxMSA3LjE3ODg1IDIwLjg5NzYgNy4yNzI5MyAyMC45NDU1QzcuMzc5ODkgMjEgNy41MTk5IDIxIDcuNzk5OTMgMjFIOS42OTk5M0M5Ljk3OTk2IDIxIDEwLjEyIDIxIDEwLjIyNjkgMjAuOTQ1NUMxMC4zMjEgMjAuODk3NiAxMC4zOTc1IDIwLjgyMTEgMTAuNDQ1NCAyMC43MjdDMTAuNDk5OSAyMC42MiAxMC40OTk5IDIwLjQ4IDEwLjQ5OTkgMjAuMlYxOS44QzEwLjQ5OTkgMTkuNTIgMTAuNDk5OSAxOS4zOCAxMC41NTQ0IDE5LjI3M0MxMC42MDI0IDE5LjE3ODkgMTAuNjc4OSAxOS4xMDI0IDEwLjc3MjkgMTkuMDU0NUMxMC44Nzk5IDE5IDExLjAxOTkgMTkgMTEuMjk5OSAxOUgxMi42OTk5QzEyLjk4IDE5IDEzLjEyIDE5IDEzLjIyNjkgMTkuMDU0NUMxMy4zMjEgMTkuMTAyNCAxMy4zOTc1IDE5LjE3ODkgMTMuNDQ1NCAxOS4yNzNDMTMuNDk5OSAxOS4zOCAxMy40OTk5IDE5LjUyIDEzLjQ5OTkgMTkuOFYyMC4yQzEzLjQ5OTkgMjAuNDggMTMuNDk5OSAyMC42MiAxMy41NTQ0IDIwLjcyN0MxMy42MDI0IDIwLjgyMTEgMTMuNjc4OSAyMC44OTc2IDEzLjc3MjkgMjAuOTQ1NUMxMy44Nzk5IDIxIDE0LjAxOTkgMjEgMTQuMjk5OSAyMUgxNi4yQzE2LjQ4IDIxIDE2LjYyIDIxIDE2LjcyNyAyMC45NDU1QzE2LjgyMTEgMjAuODk3NiAxNi44OTc2IDIwLjgyMTEgMTYuOTQ1NSAyMC43MjdDMTcgMjAuNjIgMTcgMjAuNDggMTcgMjAuMlYxOS4yMjQzQzE3IDE5LjAyMjMgMTcgMTguOTIxMiAxNy4wMjg4IDE4Ljg0MDFDMTcuMDU2MyAxOC43NjI0IDE3LjA5MTEgMTguNzA4IDE3LjE1IDE4LjY1MDJDMTcuMjExNCAxOC41OSAxNy4zMTU1IDE4LjU0MTcgMTcuNTIzNyAxOC40NDVDMTguNTA1OSAxNy45ODkgMTkuMzQ0IDE3LjI3NTEgMTkuOTUxMSAxNi4zOTAyQzIwLjA1NzkgMTYuMjM0NiAyMC4xMTEyIDE2LjE1NjggMjAuMTY4MyAxNi4xMTA4QzIwLjIyMjggMTYuMDY2OCAyMC4yNzE3IDE2LjA0MTEgMjAuMzM4NyAxNi4wMjFDMjAuNDA4OSAxNiAyMC40OTIyIDE2IDIwLjY1ODcgMTZIMjEuMkMyMS40OCAxNiAyMS42MiAxNiAyMS43MjcgMTUuOTQ1NUMyMS44MjExIDE1Ljg5NzYgMjEuODk3NiAxNS44MjExIDIxLjk0NTUgMTUuNzI3QzIyIDE1LjYyIDIyIDE1LjQ4IDIyIDE1LjJWMTEuNzg1N0MyMiAxMS41MTkyIDIyIDExLjM4NTkgMjEuOTUwNSAxMS4yODNDMjEuOTAxMyAxMS4xODEgMjEuODE5IDExLjA5ODcgMjEuNzE3IDExLjA0OTVDMjEuNjE0MSAxMSAyMS40ODA4IDExIDIxLjIxNDMgMTFDMjEuMDIxMyAxMSAyMC45MjQ4IDExIDIwLjg0NzEgMTAuOTczOEMyMC43NjMzIDEwLjk0NTYgMjAuNzA0NSAxMC45MDggMjAuNjQzNyAxMC44NDM4QzIwLjU4NzQgMTAuNzg0MiAyMC41NDEzIDEwLjY4NDYgMjAuNDQ5MyAxMC40ODU1QzIwLjE1MzggOS44NDYyMiAxOS43NDkyIDkuMjY3NzcgMTkuMjU5MyA4Ljc3NDA0QzE5LjE1NTUgOC42Njk0NSAxOS4xMDM2IDguNjE3MTYgMTkuMDczIDguNTY2ODdDMTkuMDQzNyA4LjUxODg5IDE5LjAyNjcgOC40Nzc1OSAxOS4wMTM3IDguNDIyOTRDMTkgOC4zNjU2NyAxOSA4LjMwMDUxIDE5IDguMTcwMThWNy4wNjA1OEMxOSA2LjcwMDUzIDE5IDYuNTIwNTEgMTguOTI1IDYuMzk5NTFDMTguODU5MyA2LjI5MzUxIDE4Ljc1NjQgNi4yMTU4OCAxOC42MzY1IDYuMTgxODRDMTguNDk5NSA2LjE0Mjk5IDE4LjMyNjQgNi4xOTI0NSAxNy45ODAyIDYuMjkxMzZMMTUuNjA3NyA2Ljk2OTIyQzE1LjU2NzMgNi45ODA3NCAxNS41NDcyIDYuOTg2NSAxNS41MjY3IDYuOTkwNTRDMTUuNTA4NSA2Ljk5NDE0IDE1LjQ5MDEgNi45OTY3MSAxNS40NzE2IDYuOTk4MjZDMTUuNDUwOCA3IDE1LjQyOTggNyAxNS4zODc5IDdIMTQuOTU5TTQuOTk5OTMgMTNDNC45OTk5MyAxMC42OTU5IDYuMjk4NjQgOC42OTUyIDguMjAzOTcgNy42ODk5TTQuOTk5OTMgMTNINEMyLjg5NTQzIDEzIDIgMTIuMTA0NiAyIDExQzIgMTAuMjU5NyAyLjQwMjIgOS42MTMzNyAzIDkuMjY3NTZNMTUgNi41QzE1IDguNDMzIDEzLjQzMyAxMCAxMS41IDEwQzkuNTY3IDEwIDggOC40MzMgOCA2LjVDOCA0LjU2NyA5LjU2NyAzIDExLjUgM0MxMy40MzMgMyAxNSA0LjU2NyAxNSA2LjVaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const PiggyBank01Icon = React.forwardRef<
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
        d="M4.99993 13C4.99993 14.6484 5.66466 16.1415 6.74067 17.226C6.84445 17.3305 6.89633 17.3828 6.92696 17.4331C6.95619 17.4811 6.9732 17.5224 6.98625 17.5771C6.99993 17.6343 6.99993 17.6995 6.99993 17.8298V20.2C6.99993 20.48 6.99993 20.62 7.05443 20.727C7.10236 20.8211 7.17885 20.8976 7.27293 20.9455C7.37989 21 7.5199 21 7.79993 21H9.69993C9.97996 21 10.12 21 10.2269 20.9455C10.321 20.8976 10.3975 20.8211 10.4454 20.727C10.4999 20.62 10.4999 20.48 10.4999 20.2V19.8C10.4999 19.52 10.4999 19.38 10.5544 19.273C10.6024 19.1789 10.6789 19.1024 10.7729 19.0545C10.8799 19 11.0199 19 11.2999 19H12.6999C12.98 19 13.12 19 13.2269 19.0545C13.321 19.1024 13.3975 19.1789 13.4454 19.273C13.4999 19.38 13.4999 19.52 13.4999 19.8V20.2C13.4999 20.48 13.4999 20.62 13.5544 20.727C13.6024 20.8211 13.6789 20.8976 13.7729 20.9455C13.8799 21 14.0199 21 14.2999 21H16.2C16.48 21 16.62 21 16.727 20.9455C16.8211 20.8976 16.8976 20.8211 16.9455 20.727C17 20.62 17 20.48 17 20.2V19.2243C17 19.0223 17 18.9212 17.0288 18.8401C17.0563 18.7624 17.0911 18.708 17.15 18.6502C17.2114 18.59 17.3155 18.5417 17.5237 18.445C18.5059 17.989 19.344 17.2751 19.9511 16.3902C20.0579 16.2346 20.1112 16.1568 20.1683 16.1108C20.2228 16.0668 20.2717 16.0411 20.3387 16.021C20.4089 16 20.4922 16 20.6587 16H21.2C21.48 16 21.62 16 21.727 15.9455C21.8211 15.8976 21.8976 15.8211 21.9455 15.727C22 15.62 22 15.48 22 15.2V11.7857C22 11.5192 22 11.3859 21.9505 11.283C21.9013 11.181 21.819 11.0987 21.717 11.0495C21.6141 11 21.4808 11 21.2143 11C21.0213 11 20.9248 11 20.8471 10.9738C20.7633 10.9456 20.7045 10.908 20.6437 10.8438C20.5874 10.7842 20.5413 10.6846 20.4493 10.4855C20.1538 9.84622 19.7492 9.26777 19.2593 8.77404C19.1555 8.66945 19.1036 8.61716 19.073 8.56687C19.0437 8.51889 19.0267 8.47759 19.0137 8.42294C19 8.36567 19 8.30051 19 8.17018V7.06058C19 6.70053 19 6.52051 18.925 6.39951C18.8593 6.29351 18.7564 6.21588 18.6365 6.18184C18.4995 6.14299 18.3264 6.19245 17.9802 6.29136L15.6077 6.96922C15.5673 6.98074 15.5472 6.9865 15.5267 6.99054C15.5085 6.99414 15.4901 6.99671 15.4716 6.99826C15.4508 7 15.4298 7 15.3879 7H14.959M4.99993 13C4.99993 10.6959 6.29864 8.6952 8.20397 7.6899M4.99993 13H4C2.89543 13 2 12.1046 2 11C2 10.2597 2.4022 9.61337 3 9.26756M15 6.5C15 8.433 13.433 10 11.5 10C9.567 10 8 8.433 8 6.5C8 4.567 9.567 3 11.5 3C13.433 3 15 4.567 15 6.5Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PiggyBank01Icon.displayName = "PiggyBank01Icon";
