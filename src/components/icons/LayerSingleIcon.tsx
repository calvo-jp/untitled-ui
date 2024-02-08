import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjM1NzggNy4xNzg5NUMxMi4yMjY2IDcuMTEzMzYgMTIuMTYxIDcuMDgwNTYgMTIuMDkyMiA3LjA2NzY2QzEyLjAzMTMgNy4wNTYyMiAxMS45Njg3IDcuMDU2MjIgMTEuOTA3OCA3LjA2NzY2QzExLjgzOSA3LjA4MDU2IDExLjc3MzQgNy4xMTMzNiAxMS42NDIyIDcuMTc4OTVMMiAxMi4wMDAxTDExLjY0MjIgMTYuODIxMkMxMS43NzM0IDE2Ljg4NjggMTEuODM5IDE2LjkxOTYgMTEuOTA3OCAxNi45MzI1QzExLjk2ODcgMTYuOTQzOSAxMi4wMzEzIDE2Ljk0MzkgMTIuMDkyMiAxNi45MzI1QzEyLjE2MSAxNi45MTk2IDEyLjIyNjYgMTYuODg2OCAxMi4zNTc4IDE2LjgyMTJMMjIgMTIuMDAwMUwxMi4zNTc4IDcuMTc4OTVaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const LayerSingleIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M12.3578 7.17895C12.2266 7.11336 12.161 7.08056 12.0922 7.06766C12.0313 7.05622 11.9687 7.05622 11.9078 7.06766C11.839 7.08056 11.7734 7.11336 11.6422 7.17895L2 12.0001L11.6422 16.8212C11.7734 16.8868 11.839 16.9196 11.9078 16.9325C11.9687 16.9439 12.0313 16.9439 12.0922 16.9325C12.161 16.9196 12.2266 16.8868 12.3578 16.8212L22 12.0001L12.3578 7.17895Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

LayerSingleIcon.displayName = 'LayerSingleIcon';
