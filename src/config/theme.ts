/**
 * Theme Configuration
 * Centralized theme settings for consistent styling across the application
 */

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeConfig {
  mode: ThemeMode;
  autoDetect: boolean;
  persistPreference: boolean;
}

export const DEFAULT_THEME_CONFIG: ThemeConfig = {
  mode: 'dark',
  autoDetect: true,
  persistPreference: true
};

/**
 * Color Palette
 * Comprehensive color system for both light and dark modes
 */
export const COLORS = {
  // Brand Colors
  brand: {
    50: '#fff0f2',
    100: '#ffe4e8',
    200: '#ffc9d5',
    300: '#ffa1ad',
    400: '#ff6d85',
    500: '#fb3a5d',
    600: '#e91546',
    700: '#d10f3c',
    800: '#b90c32',
    900: '#9a0a28'
  },

  // Neutral Colors
  neutral: {
    0: '#ffffff',
    50: '#f9fafb',
    100: '#f3f4f6',
    150: '#ecedf0',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    850: '#1a202c',
    900: '#111827',
    950: '#030712'
  },

  // Semantic Colors
  semantic: {
    success: '#10b981',
    successLight: '#d1fae5',
    warning: '#f59e0b',
    warningLight: '#fef3c7',
    error: '#ef4444',
    errorLight: '#fee2e2',
    info: '#3b82f6',
    infoLight: '#dbeafe'
  },

  // Dark Mode Specific
  dark: {
    bgPrimary: '#0f1419',
    bgSecondary: '#16202d',
    bgTertiary: '#1f2d42',
    border: '#2d3e5f',
    textPrimary: '#f5f7fa',
    textSecondary: '#b8c5d6',
    textTertiary: '#7d8fa3'
  }
};

/**
 * Shadow Elevations
 * Consistent shadow system for depth and layering
 */
export const SHADOWS = {
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  
  // Dark mode shadows
  darkSm: '0 1px 3px 0 rgb(0 0 0 / 0.3)',
  darkMd: '0 4px 6px -1px rgb(0 0 0 / 0.4)',
  darkLg: '0 10px 15px -3px rgb(0 0 0 / 0.5)',
  darkXl: '0 20px 25px -5px rgb(0 0 0 / 0.6)'
};

/**
 * Spacing Scale
 * Consistent spacing system
 */
export const SPACING = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem'
};

/**
 * Typography Scale
 * Font sizes and line heights
 */
export const TYPOGRAPHY = {
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem'
  },
  lineHeights: {
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2'
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  }
};

/**
 * Border Radius Scale
 */
export const BORDER_RADIUS = {
  none: '0',
  xs: '0.125rem',
  sm: '0.25rem',
  base: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  full: '9999px'
};

/**
 * Transition Configuration
 */
export const TRANSITIONS = {
  fast: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  slower: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',

  // Individual transitions
  color: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  opacity: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  transform: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)'
};

/**
 * Animations
 */
export const ANIMATIONS = {
  fadeIn: 'fadeIn 0.3s ease-out',
  slideUp: 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  slideDown: 'slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  slideLeft: 'slideLeft 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  slideRight: 'slideRight 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  pulseSoft: 'pulseSoft 2s ease-in-out infinite',
  shimmer: 'shimmer 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  bounce: 'bounce 1s infinite'
};

/**
 * Z-index Scale
 * For consistent layering
 */
export const Z_INDEX = {
  hide: -1,
  auto: 'auto',
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1060,
  tooltip: 1070,
  notification: 1080,
  maximum: 2147483647
};

/**
 * Breakpoints
 * Responsive design breakpoints
 */
export const BREAKPOINTS = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

/**
 * Component Sizes
 */
export const COMPONENT_SIZES = {
  xs: {
    padding: '0.25rem 0.5rem',
    fontSize: '0.75rem',
    height: '1.5rem'
  },
  sm: {
    padding: '0.375rem 0.75rem',
    fontSize: '0.875rem',
    height: '2rem'
  },
  md: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    height: '2.5rem'
  },
  lg: {
    padding: '0.75rem 1.5rem',
    fontSize: '1.125rem',
    height: '3rem'
  },
  xl: {
    padding: '1rem 2rem',
    fontSize: '1.25rem',
    height: '3.5rem'
  }
};

/**
 * Focus Styles
 */
export const FOCUS_STYLES = {
  light: {
    outline: 'none',
    ringColor: '#fb3a5d',
    ringWidth: '2px',
    ringOffset: '2px',
    ringOffsetColor: '#ffffff'
  },
  dark: {
    outline: 'none',
    ringColor: '#ff6d85',
    ringWidth: '2px',
    ringOffset: '2px',
    ringOffsetColor: '#030712'
  }
};

/**
 * Utility: Get theme-specific value
 */
export const getThemeValue = (lightValue: string, darkValue: string, isDark: boolean): string => {
  return isDark ? darkValue : lightValue;
};

/**
 * Utility: Get semantic color
 */
export const getSemanticColor = (
  status: 'success' | 'error' | 'warning' | 'info',
  variant: 'default' | 'light' = 'default'
): string => {
  const colorMap = {
    success: COLORS.semantic.success,
    successLight: COLORS.semantic.successLight,
    error: COLORS.semantic.error,
    errorLight: COLORS.semantic.errorLight,
    warning: COLORS.semantic.warning,
    warningLight: COLORS.semantic.warningLight,
    info: COLORS.semantic.info,
    infoLight: COLORS.semantic.infoLight
  };

  if (variant === 'light') {
    return colorMap[`${status}Light` as keyof typeof colorMap];
  }
  return colorMap[status];
};
