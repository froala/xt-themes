/**
 * Froala theme
 */
var themeObject = {
    name: 'froala',
    theme: {
        base: {
            chart: {
                paletteColors: "#007BFF, #FFC107, #DC3545, #28A745, #6C757D, #6F42C1, #FD7E14, #17A2B8",
                canvasBorderColor: '#ffffff',
                bgColor: "#ffffff",
                // base font styling
                baseFontColor: "#8892A0",
                baseFontSize: '22.4',
                baseFont: 'Lato',
                // caption styling
                captionFontColor: "#444444",
                captionFontSize: '44',
                captionFont: 'Lato',
                //subcaption styling
                subCaptionFontColor: "#444444",
                subCaptionFontSize: '32',
                subCaptionFont: 'Lato',
                // tooltip styling
                toolTipBgColor: '#222222',
                toolTipColor: '#FFFFFF',
                toolTipBorderColor: '#000000',
                // axis line styling
                xAxisLineColor: '#000000',
                yAxisLineColor: '#000000'
            }
        }
    }
}

export default {
    extension: themeObject,
    name: "froalaTheme",
    type: "theme"
};