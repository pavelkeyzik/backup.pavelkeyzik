import { SVGProps } from 'react';

function PartialEllipse(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="23"
      height="12"
      viewBox="0 0 23 12"
      fill="none"
      transform="rotate(-45, 0, 0)"
      {...props}
    >
      <path
        d="M23 11.5C23 8.45001 21.7884 5.52494 19.6317 3.36827C17.4751 1.2116 14.55 2.30268e-07 11.5 0C8.45001 -2.30268e-07 5.52494 1.2116 3.36827 3.36827C1.2116 5.52494 4.60536e-07 8.45001 0 11.5L4.6 11.5C4.6 9.67001 5.32696 7.91496 6.62096 6.62096C7.91496 5.32696 9.67001 4.6 11.5 4.6C13.33 4.6 15.085 5.32696 16.379 6.62096C17.673 7.91496 18.4 9.67001 18.4 11.5H23Z"
        fill="currentColor"
      />
    </svg>
  );
}

export { PartialEllipse };
