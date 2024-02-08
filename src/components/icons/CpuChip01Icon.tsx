import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMlY0TTE1IDJWNE05IDIwVjIyTTE1IDIwVjIyTTIwIDlIMjJNMjAgMTRIMjJNMiA5SDRNMiAxNEg0TTguOCAyMEgxNS4yQzE2Ljg4MDIgMjAgMTcuNzIwMiAyMCAxOC4zNjIgMTkuNjczQzE4LjkyNjUgMTkuMzg1NCAxOS4zODU0IDE4LjkyNjUgMTkuNjczIDE4LjM2MkMyMCAxNy43MjAyIDIwIDE2Ljg4MDIgMjAgMTUuMlY4LjhDMjAgNy4xMTk4NCAyMCA2LjI3OTc2IDE5LjY3MyA1LjYzODAzQzE5LjM4NTQgNS4wNzM1NCAxOC45MjY1IDQuNjE0NiAxOC4zNjIgNC4zMjY5OEMxNy43MjAyIDQgMTYuODgwMiA0IDE1LjIgNEg4LjhDNy4xMTk4NCA0IDYuMjc5NzYgNCA1LjYzODAzIDQuMzI2OThDNS4wNzM1NCA0LjYxNDYgNC42MTQ2IDUuMDczNTQgNC4zMjY5OCA1LjYzODAzQzQgNi4yNzk3NiA0IDcuMTE5ODQgNCA4LjhWMTUuMkM0IDE2Ljg4MDIgNCAxNy43MjAyIDQuMzI2OTggMTguMzYyQzQuNjE0NiAxOC45MjY1IDUuMDczNTQgMTkuMzg1NCA1LjYzODAzIDE5LjY3M0M2LjI3OTc2IDIwIDcuMTE5ODQgMjAgOC44IDIwWk0xMC42IDE1SDEzLjRDMTMuOTYwMSAxNSAxNC4yNDAxIDE1IDE0LjQ1NCAxNC44OTFDMTQuNjQyMiAxNC43OTUxIDE0Ljc5NTEgMTQuNjQyMiAxNC44OTEgMTQuNDU0QzE1IDE0LjI0MDEgMTUgMTMuOTYwMSAxNSAxMy40VjEwLjZDMTUgMTAuMDM5OSAxNSA5Ljc1OTkyIDE0Ljg5MSA5LjU0NjAxQzE0Ljc5NTEgOS4zNTc4NSAxNC42NDIyIDkuMjA0ODcgMTQuNDU0IDkuMTA4OTlDMTQuMjQwMSA5IDEzLjk2MDEgOSAxMy40IDlIMTAuNkMxMC4wMzk5IDkgOS43NTk5MiA5IDkuNTQ2MDEgOS4xMDg5OUM5LjM1Nzg1IDkuMjA0ODcgOS4yMDQ4NyA5LjM1Nzg1IDkuMTA4OTkgOS41NDYwMUM5IDkuNzU5OTIgOSAxMC4wMzk5IDkgMTAuNlYxMy40QzkgMTMuOTYwMSA5IDE0LjI0MDEgOS4xMDg5OSAxNC40NTRDOS4yMDQ4NyAxNC42NDIyIDkuMzU3ODUgMTQuNzk1MSA5LjU0NjAxIDE0Ljg5MUM5Ljc1OTkyIDE1IDEwLjAzOTkgMTUgMTAuNiAxNVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const CpuChip01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M9 2V4M15 2V4M9 20V22M15 20V22M20 9H22M20 14H22M2 9H4M2 14H4M8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V8.8C20 7.11984 20 6.27976 19.673 5.63803C19.3854 5.07354 18.9265 4.6146 18.362 4.32698C17.7202 4 16.8802 4 15.2 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20ZM10.6 15H13.4C13.9601 15 14.2401 15 14.454 14.891C14.6422 14.7951 14.7951 14.6422 14.891 14.454C15 14.2401 15 13.9601 15 13.4V10.6C15 10.0399 15 9.75992 14.891 9.54601C14.7951 9.35785 14.6422 9.20487 14.454 9.10899C14.2401 9 13.9601 9 13.4 9H10.6C10.0399 9 9.75992 9 9.54601 9.10899C9.35785 9.20487 9.20487 9.35785 9.10899 9.54601C9 9.75992 9 10.0399 9 10.6V13.4C9 13.9601 9 14.2401 9.10899 14.454C9.20487 14.6422 9.35785 14.7951 9.54601 14.891C9.75992 15 10.0399 15 10.6 15Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

CpuChip01Icon.displayName = 'CpuChip01Icon';
