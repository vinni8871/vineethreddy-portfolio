import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string }

const base = (size: number | string = 16) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': true as const,
})

/** GitHub mark (lucide v1 removed brand icons). */
export function Github({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.5v-1.77c-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.41.36.78 1.06.78 2.14v3.17c0 .26.21.62.8.51A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

/** LinkedIn mark. */
export function Linkedin({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

/** LeetCode-ish bracket mark. */
export function LeetCode({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M13.48 0a1.4 1.4 0 0 0-.99.41L7.6 5.3 2.4 10.5a4.86 4.86 0 0 0 0 6.87l5.2 5.2a4.86 4.86 0 0 0 6.88 0l2.3-2.3a1.4 1.4 0 0 0-1.98-1.98l-2.3 2.3a2.06 2.06 0 0 1-2.92 0l-5.2-5.2a2.06 2.06 0 0 1 0-2.91l5.2-5.2L14.47 2.4a1.4 1.4 0 0 0-.99-2.4Zm2.6 7.2a1.4 1.4 0 0 0 0 2.8h6.4a1.4 1.4 0 0 0 0-2.8h-6.4Z" />
    </svg>
  )
}
