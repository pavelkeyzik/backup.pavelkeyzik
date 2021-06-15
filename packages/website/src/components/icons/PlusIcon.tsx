import { SVGProps } from 'react';

function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <rect x="8" width="4" height="20" rx="2" fill="currentColor" />
      <rect
        y="12"
        width="4"
        height="20"
        rx="2"
        transform="rotate(-90 0 12)"
        fill="currentColor"
      />
    </svg>
  );
}

export { PlusIcon };
