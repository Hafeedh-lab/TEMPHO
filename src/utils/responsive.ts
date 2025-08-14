/**
 * Responsive utility functions for consistent breakpoint handling
 */

export const breakpoints = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;

/**
 * Get responsive value based on current screen size
 */
export const getResponsiveValue = <T>(
  values: Partial<Record<Breakpoint, T>>,
  currentWidth: number,
  fallback: T
): T => {
  const sortedBreakpoints = Object.entries(breakpoints)
    .sort(([, a], [, b]) => b - a) // Sort descending
    .map(([key]) => key as Breakpoint);

  for (const breakpoint of sortedBreakpoints) {
    if (currentWidth >= breakpoints[breakpoint] && values[breakpoint] !== undefined) {
      return values[breakpoint]!;
    }
  }

  return fallback;
};

/**
 * Generate responsive classes for Tailwind CSS
 */
export const generateResponsiveClasses = (
  baseClass: string,
  responsiveValues: Partial<Record<Breakpoint, string>>
): string => {
  const classes = [baseClass];

  Object.entries(responsiveValues).forEach(([breakpoint, value]) => {
    if (value) {
      const prefix = breakpoint === 'xs' ? '' : `${breakpoint}:`;
      classes.push(`${prefix}${value}`);
    }
  });

  return classes.join(' ');
};

/**
 * Check if current width matches breakpoint
 */
export const matchesBreakpoint = (width: number, breakpoint: Breakpoint): boolean => {
  return width >= breakpoints[breakpoint];
};

/**
 * Get current breakpoint based on width
 */
export const getCurrentBreakpoint = (width: number): Breakpoint => {
  const sortedBreakpoints = Object.entries(breakpoints)
    .sort(([, a], [, b]) => b - a) // Sort descending
    .map(([key, value]) => ({ key: key as Breakpoint, value }));

  for (const { key, value } of sortedBreakpoints) {
    if (width >= value) {
      return key;
    }
  }

  return 'xs';
};

/**
 * Clamp function for responsive values
 */
export const clamp = (min: number, value: number, max: number): number => {
  return Math.min(Math.max(min, value), max);
};

/**
 * Convert px to rem
 */
export const pxToRem = (px: number, baseFontSize: number = 16): number => {
  return px / baseFontSize;
};

/**
 * Convert rem to px
 */
export const remToPx = (rem: number, baseFontSize: number = 16): number => {
  return rem * baseFontSize;
};

/**
 * Generate fluid typography scale
 */
export const fluidScale = (
  minSize: number,
  maxSize: number,
  minViewport: number = breakpoints.sm,
  maxViewport: number = breakpoints.xl
): string => {
  const slope = (maxSize - minSize) / (maxViewport - minViewport);
  const yAxisIntersection = -minViewport * slope + minSize;
  
  return `clamp(${minSize}px, ${yAxisIntersection}px + ${slope * 100}vw, ${maxSize}px)`;
};
