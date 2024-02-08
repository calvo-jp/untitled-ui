import * as React from "react";

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTJMMTEgMTRMMTUuNSA5LjVNOS4yMDE5IDIwLjYwMDlDOS41Mjk2NSAyMC41NTc1IDkuODYwNzMgMjAuNjQ2NCAxMC4xMjE4IDIwLjg0NzVMMTEuMzI1MSAyMS43NzA4QzExLjcyMjggMjIuMDc2NCAxMi4yNzYxIDIyLjA3NjQgMTIuNjcyNyAyMS43NzA4TDEzLjkyMTUgMjAuODEyQzE0LjE1NDggMjAuNjMzMSAxNC40NDkyIDIwLjU1NDIgMTQuNzQwMyAyMC41OTMxTDE2LjMwMjQgMjAuNzk4NkMxNi43OTkgMjAuODY0MiAxNy4yNzc5IDIwLjU4NzUgMTcuNDcwMSAyMC4xMjQyTDE4LjA3MTIgMTguNjcwOUMxOC4xODM0IDE4LjM5ODcgMTguMzk4OSAxOC4xODMyIDE4LjY3MTEgMTguMDcwOUwyMC4xMjQzIDE3LjQ2OThDMjAuNTg3NiAxNy4yNzg3IDIwLjg2NDMgMTYuNzk4OCAyMC43OTg3IDE2LjMwMjFMMjAuNjAxIDE0Ljc5NjZDMjAuNTU3NiAxNC40Njg4IDIwLjY0NjUgMTQuMTM3NyAyMC44NDc2IDEzLjg3NjZMMjEuNzcwOSAxMi42NzMzQzIyLjA3NjQgMTIuMjc1NSAyMi4wNzY0IDExLjcyMjIgMjEuNzcwOSAxMS4zMjU2TDIwLjgxMiAxMC4wNzY3QzIwLjYzMzIgOS44NDMzOSAyMC41NTQzIDkuNTQ4OTYgMjAuNTkzMiA5LjI1Nzg1TDIwLjc5ODcgNy42OTU2OEMyMC44NjQzIDcuMTk5MDIgMjAuNTg3NiA2LjcyMDE1IDIwLjEyNDMgNi41Mjc5M0wxOC42NzExIDUuOTI2ODRDMTguMzk4OSA1LjgxNDYyIDE4LjE4MzQgNS41OTkwNyAxOC4wNzEyIDUuMzI2ODVMMTcuNDcwMSAzLjg3MzU2QzE3LjI3OSAzLjQxMDI0IDE2Ljc5OSAzLjEzMzU4IDE2LjMwMjQgMy4xOTkxM0wxNC43NDAzIDMuNDA0NjhDMTQuNDQ5MiAzLjQ0NDY4IDE0LjE1NDggMy4zNjU3OSAxMy45MjI2IDMuMTg4MDJMMTIuNjczOCAyLjIyOTE2QzEyLjI3NjEgMS45MjM2MSAxMS43MjI4IDEuOTIzNjEgMTEuMzI2MiAyLjIyOTE2TDEwLjA3NzQgMy4xODgwMkM5Ljg0NDA3IDMuMzY1NzkgOS41NDk2NSAzLjQ0NDY4IDkuMjU4NTYgMy40MDY5MUw3LjY5NjQ3IDMuMjAxMzZDNy4xOTk4NCAzLjEzNTggNi43MjEgMy40MTI0NiA2LjUyODc5IDMuODc1NzhMNS45Mjg4NCA1LjMyOTA3QzUuODE1NTIgNS42MDAxOCA1LjU5OTk4IDUuODE1NzMgNS4zMjg4OSA1LjkyOTA2TDMuODc1NjggNi41MjkwNEMzLjQxMjM4IDYuNzIxMjYgMy4xMzU3NCA3LjIwMDEzIDMuMjAxMjkgNy42OTY3OUwzLjQwNjgzIDkuMjU4OTdDMy40NDQ2IDkuNTUwMDcgMy4zNjU3MiA5Ljg0NDUgMy4xODc5NiAxMC4wNzY3TDIuMjI5MTUgMTEuMzI1NkMxLjkyMzYyIDExLjcyMzMgMS45MjM2MiAxMi4yNzY3IDIuMjI5MTUgMTIuNjczM0wzLjE4Nzk2IDEzLjkyMjJDMy4zNjY4MyAxNC4xNTU1IDMuNDQ1NzEgMTQuNDQ5OSAzLjQwNjgzIDE0Ljc0MUwzLjIwMTI5IDE2LjMwMzJDMy4xMzU3NCAxNi43OTk5IDMuNDEyMzggMTcuMjc4NyAzLjg3NTY4IDE3LjQ3MUw1LjMyODg5IDE4LjA3MjFDNS42MDEwOSAxOC4xODQzIDUuODE2NjMgMTguMzk5OCA1LjkyODg0IDE4LjY3Mkw2LjUyOTkgMjAuMTI1M0M2LjcyMSAyMC41ODg3IDcuMjAwOTYgMjAuODY1MyA3LjY5NzU4IDIwLjc5OThMOS4yMDE5IDIwLjYwMDlaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const CheckVerified03Icon = React.forwardRef<
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
        d="M9 12L11 14L15.5 9.5M9.2019 20.6009C9.52965 20.5575 9.86073 20.6464 10.1218 20.8475L11.3251 21.7708C11.7228 22.0764 12.2761 22.0764 12.6727 21.7708L13.9215 20.812C14.1548 20.6331 14.4492 20.5542 14.7403 20.5931L16.3024 20.7986C16.799 20.8642 17.2779 20.5875 17.4701 20.1242L18.0712 18.6709C18.1834 18.3987 18.3989 18.1832 18.6711 18.0709L20.1243 17.4698C20.5876 17.2787 20.8643 16.7988 20.7987 16.3021L20.601 14.7966C20.5576 14.4688 20.6465 14.1377 20.8476 13.8766L21.7709 12.6733C22.0764 12.2755 22.0764 11.7222 21.7709 11.3256L20.812 10.0767C20.6332 9.84339 20.5543 9.54896 20.5932 9.25785L20.7987 7.69568C20.8643 7.19902 20.5876 6.72015 20.1243 6.52793L18.6711 5.92684C18.3989 5.81462 18.1834 5.59907 18.0712 5.32685L17.4701 3.87356C17.279 3.41024 16.799 3.13358 16.3024 3.19913L14.7403 3.40468C14.4492 3.44468 14.1548 3.36579 13.9226 3.18802L12.6738 2.22916C12.2761 1.92361 11.7228 1.92361 11.3262 2.22916L10.0774 3.18802C9.84407 3.36579 9.54965 3.44468 9.25856 3.40691L7.69647 3.20136C7.19984 3.1358 6.721 3.41246 6.52879 3.87578L5.92884 5.32907C5.81552 5.60018 5.59998 5.81573 5.32889 5.92906L3.87568 6.52904C3.41238 6.72126 3.13574 7.20013 3.20129 7.69679L3.40683 9.25897C3.4446 9.55007 3.36572 9.8445 3.18796 10.0767L2.22915 11.3256C1.92362 11.7233 1.92362 12.2767 2.22915 12.6733L3.18796 13.9222C3.36683 14.1555 3.44571 14.4499 3.40683 14.741L3.20129 16.3032C3.13574 16.7999 3.41238 17.2787 3.87568 17.471L5.32889 18.0721C5.60109 18.1843 5.81663 18.3998 5.92884 18.672L6.5299 20.1253C6.721 20.5887 7.20096 20.8653 7.69758 20.7998L9.2019 20.6009Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CheckVerified03Icon.displayName = "CheckVerified03Icon";
