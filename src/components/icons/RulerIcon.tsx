import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjUgNS40OTk4OUwxNiA2Ljk5OTg5TTExLjUgOC40OTk4OUwxMyA5Ljk5OTg5TTguNDk5OTYgMTEuNDk5OUw5Ljk5OTk2IDEyLjk5OTlNNS40OTk5NiAxNC40OTk5TDYuOTk5OTYgMTUuOTk5OU0yLjU2NTYxIDE3LjU2NTZMNi40MzQyNCAyMS40MzQyQzYuNjMyMjUgMjEuNjMyMiA2LjczMTI1IDIxLjczMTMgNi44NDU0MiAyMS43NjgzQzYuOTQ1ODQgMjEuODAxIDcuMDU0MDEgMjEuODAxIDcuMTU0NDMgMjEuNzY4M0M3LjI2ODYgMjEuNzMxMyA3LjM2NzYgMjEuNjMyMiA3LjU2NTYxIDIxLjQzNDJMMjEuNDM0MiA3LjU2NTYxQzIxLjYzMjIgNy4zNjc2IDIxLjczMTMgNy4yNjg2IDIxLjc2ODMgNy4xNTQ0M0MyMS44MDEgNy4wNTQwMSAyMS44MDEgNi45NDU4NCAyMS43NjgzIDYuODQ1NDJDMjEuNzMxMyA2LjczMTI1IDIxLjYzMjIgNi42MzIyNSAyMS40MzQyIDYuNDM0MjRMMTcuNTY1NiAyLjU2NTYxQzE3LjM2NzYgMi4zNjc2IDE3LjI2ODYgMi4yNjg2IDE3LjE1NDQgMi4yMzE1QzE3LjA1NCAyLjE5ODg3IDE2Ljk0NTggMi4xOTg4NyAxNi44NDU0IDIuMjMxNUMxNi43MzEzIDIuMjY4NiAxNi42MzIyIDIuMzY3NiAxNi40MzQyIDIuNTY1NjFMMi41NjU2MSAxNi40MzQyQzIuMzY3NiAxNi42MzIyIDIuMjY4NiAxNi43MzEzIDIuMjMxNSAxNi44NDU0QzIuMTk4ODcgMTYuOTQ1OCAyLjE5ODg3IDE3LjA1NCAyLjIzMTUgMTcuMTU0NEMyLjI2ODYgMTcuMjY4NiAyLjM2NzYgMTcuMzY3NiAyLjU2NTYxIDE3LjU2NTZaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const RulerIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M14.5 5.49989L16 6.99989M11.5 8.49989L13 9.99989M8.49996 11.4999L9.99996 12.9999M5.49996 14.4999L6.99996 15.9999M2.56561 17.5656L6.43424 21.4342C6.63225 21.6322 6.73125 21.7313 6.84542 21.7683C6.94584 21.801 7.05401 21.801 7.15443 21.7683C7.2686 21.7313 7.3676 21.6322 7.56561 21.4342L21.4342 7.56561C21.6322 7.3676 21.7313 7.2686 21.7683 7.15443C21.801 7.05401 21.801 6.94584 21.7683 6.84542C21.7313 6.73125 21.6322 6.63225 21.4342 6.43424L17.5656 2.56561C17.3676 2.3676 17.2686 2.2686 17.1544 2.2315C17.054 2.19887 16.9458 2.19887 16.8454 2.2315C16.7313 2.2686 16.6322 2.3676 16.4342 2.56561L2.56561 16.4342C2.3676 16.6322 2.2686 16.7313 2.2315 16.8454C2.19887 16.9458 2.19887 17.054 2.2315 17.1544C2.2686 17.2686 2.3676 17.3676 2.56561 17.5656Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

RulerIcon.displayName = 'RulerIcon';
