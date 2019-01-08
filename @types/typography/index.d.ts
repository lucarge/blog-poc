type TGoogleFonts = {
  name: string,
  styles: string[],
}

type TOptions = {
  baseFontSize?: string,
  baseLineHeight?: number,
  blockMarginBottom?: number,
  bodyColor?: string,
  bodyFontFamily?: string[],
  bodyWeight?: number | string,
  boldWeight?: number | string,
  googleFonts?: TGoogleFonts[],
  headerColor?: string,
  headerFontFamily?: string[],
  headerWeight?: number | string,
  includeNormalize?: boolean,
  overrideStyles?: (verticalRhythm: TVerticalRhythm, options: TOptions, styles: any) => Object,
  overrideThemeStyles?: (verticalRhythm: TVerticalRhythm, options: TOptions, styles: any) => Object,
  plugins?: any[],
  scaleRatio?: number,
  title: string,
}

type TScale = {
  fontSize: string,
  lineHeight: string,
}

type TVerticalRhythm = {
  adjustFontSizeTo: (value?: number | string) => Object,
  rhythm: (value: number) => string,
  scale: (value: number) => TScale,
}

declare module 'typography' {
  class Typography {
    constructor(options?: TOptions)
    adjustFontSizeTo: (value?: number | string) => Object
    injectStyles: () => void
    rhythm: (value: number) => string
    scale: (value: number) => TScale
  }

  export = Typography
}
