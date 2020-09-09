function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');";
styleInject(css);

/**
 * Froala theme
 */
var themeObject = {
    name: 'froala',
    theme: {
        base: {
            chart: {
                // canvas
                showBorder: 0,
                showCanvasBorder: 0,
                canvasBgAlpha: 0,
                bgColor: "#FFFFFF",
                // text
                baseFont: "Lato",
                baseFontSize: 14,
                baseFontColor: "#8892a0",
                outCnvBaseFont: "Lato",
                outCnvBaseFontSize: 14,
                outCnvbaseFontColor: "#8892a0",
                captionFontSize: 20,
                captionFontBold: 0,
                captionFontColor: "#444444",
                subCaptionFontSize: 18,
                subCaptionFontBold: 0,
                subCaptionFontColor: "#444444",
                xAxisNameFontSize: 16,
                yAxisNameFontSize: 16,
                xAxisNameFontColor: "#444444",
                yAxisNameFontColor: "#444444",
                valueFontSize: 14,
                // data plot
                showValues: 0,
                showPlotBorder: 0,
                usePlotGradientColor: 0,
                showAlternateHGridColor: 0,
                showAlternateVGridColor: 0,
                paletteColors:
                  "#007bff, #ffc107, #dc3545, #28a745, #6c757d, #6f42c1, #fd7e14, #17a2b8",
                plothighlighteffect: "fadeout",
                // grid lines
                divLineColor: "#000000",
                divLineAlpha: 10,
                // tooltip and crossline
                tooltipBgColor: "#222222",
                tooltipColor: "#ffffff",
                tooltipPadding: 6,
                tooltipBorderThickness: 0,
                crossLineAnimation: 1,
                crossLineAlpha: 10,
                crossLineColor: "#000000",
                // shadow
                showShadow: 0,
                // legend
                legendBorderAlpha: 0,
                LegendShadow: 0,
                legendItemFontSize: 14,
                drawCustomLegendIcon: 1,
                // hover effect
                showHoverEffect: 1,
                plotHoverEffect: 1,
                plotFillHoverAlpha: "90",
                barHoverAlpha: "90",
                anchorHoverEffect: "1",
                anchorHoverRadius: "4",
                anchorBorderHoverThickness: "1.5",
                anchorBgHoverColor: "#FFFFFF",
                // padding and margins
                yAxisNamePadding: 10,
                sYAxisNamePadding: 10,
                xAxisNamePadding: 10,
                captionPadding: 10,
                canvasPadding: 10,
                // scroll
                flatScrollBars: "1",
                scrollShowButtons: "0",
                scrollheight: "10",
                scrollColor: "#e3e3e3",
            }
        },
         // pie
        pie: {
            chart: {
            smartLineColor: "#000000",
            smartLineAlpha: 10,
            use3DLighting: "0",
            showPercentValues: "1",
            showValues: "1",
            showPercentInTooltip: "0",
            showLegend: 1,
            legendIconSides: "1",
            }
        },
        // doughnut
        doughnut: {
            chart: {
            use3DLighting: "0",
            showPercentValues: "1",
            showValues: "1",
            showPercentInTooltip: "0",
            showLegend: 1,
            legendIconSides: "1",
            }
        },
        // column
        column: {
            chart: {
                drawCrossLine: 1,
                legendPosition: "top-right"
            }
        },
        // bar
        bar: {
            chart: {
                drawCrossLine: 1,
                legendPosition: "top-right"
            }
        },
        // area
        area: {
                chart: {
                drawCrossLine: "1",
                showLegend: "1",
                legendIconSides: "1",
                drawCrossLine: 1,
                legendPosition: "top-right"
            }
        },
        // line
        line: {
            chart: {
                lineThickness: 2,
                drawCrossLine: "1",
                showLegend: "1",
                legendIconSides: "1",
                drawCrossLine: 1,
                legendPosition: "top-right"
            }
        },
        // stackedcolumn
        stackedcolumn: {
            chart: {
                drawCrossLine: 1,
                legendPosition: "top-right"
            }
        },
        // stackedbar
        stackedbar: {
            chart: {
                drawCrossLine: 1,
                legendPosition: "top-right"
            }
        },
        // stackedarea
        stackedarea: {
            chart: {
                drawCrossLine: "1",
                showLegend: "1",
                legendIconSides: "1",
                drawCrossLine: 1,
                legendPosition: "top-right"
            }
        },
        // combination
        combination: {
            chart: {
                drawCrossLine: "1",
                legendIconSides: "1",
                legendPosition: "top-right"
            }
        },
        // scatter
        scatter: {
            chart: {
                drawCustomLegendIcon: 0,
                legendPosition: "top-right",
                anchorRadius: 4,
                anchorHoverRadius: 6
            },
        },
        // bubble
        bubble: {
            chart: {
                use3DLighting: "0",
                legendIconSides: "2",
                plotFillAlpha: "80",
                legendPosition: "top-right"
            },
        },
        // angulargauge
        angulargauge: {
            chart: {
                setAdaptiveMin: "1",
                adjustTM: "1",
                tickvaluedistance: "10",
                placeTicksInside: "0",
                autoAlignTickValues: "1",
                showGaugeBorder: "0",
                minortmnumber: "0",
                majorTMHeight: "8",
                gaugeFillMix: "{light-0}",
                pivotbgcolor: "#000000",
                pivotfillmix: "0",
                showpivotborder: "1",
                pivotBorderColor: "#FFFFFF",
                showValue: "0",
                valueBelowPivot: "1"
            },
            dials: {
            dial: [
                {
                    bgColor: "#000000",
                    borderThickness: "0"
                }
            ]
            }
        },
        // funnel
        funnel: {
            chart: {
                is2D: "1",
                streamlinedData: "1",
                useSameSlantAngle: "1",
                alignCaptionWithCanvas: "1",
                smartLineColor: "#000000",
                smartLineAlpha: 10,
                legendPosition: "right"
            }
        },
        // pyramid
        pyramid: {
            chart: {
                use3dlighting: "0",
                is2D: "1",
                streamlinedData: "1",
                useSameSlantAngle: "1",
                alignCaptionWithCanvas: "1",
                smartLineColor: "#000000",
                smartLineAlpha: 10,
                legendPosition: "right"
            }
        },
        // heatmap
        heatmap: {
            chart: {
                showPlotBorder: "1",
                plotBorderAlpha: "100",
                plotBorderThickness: "0.5",
                plotBorderColor: "#000000",
                plotBorderAlpha: 10,
                valueFontColor: "#FFFFFF",
                tlFontColor: "#FDFDFD",
                tlFont: "Lato",
                tlFontSize: "12",
                trFontColor: "#FDFDFD",
                trFont: "Lato",
                trFontSize: "12",
                blFontColor: "#FDFDFD",
                blFont: "Lato",
                blFontSize: "12",
                brFontColor: "#FDFDFD",
                brFont: "Lato",
                brFontSize: "12",
                captionPadding: "20",
                legendScaleLineThickness: "0",
                legendaxisborderalpha: "0"
            }
        },
        // sankey
        sankey: {
            chart: {
                nodeLabelFontColor: "#8892a0",
                nodeLabelFontSize: 14,
                nodeLabelPosition: "inside",
                nodeHoverAlpha: 65,
                legendPosition: "bottom",
                linkColor: "source",
                linkHoverAlpha: 65,
                linkAlpha: 40,
                enableDrag: 0,
                showLegend: 0,
                legendPosition: "right"
            }
        },
        // chord
        chord: {
            chart: {
                legendPosition: "right",
                nodeThickness: 10,
                nodeLabelColor: "#8892a0",
                nodeLabelFontSize: 14,
                nodeLabelPosition: "outside",
                nodeHoverAlpha: 100,
                nodeLinkPadding: 5,
                nodeBorderThickness: 0.5,
                nodeAlpha: 100,
                linkAlpha: 40,
                linkBorderAlpha: 40,
                linkHoverAlpha: 65
            }
        },
        // radar
        radar: {
            chart: {
                showLegend: "1",
                legendIconSides: "2",
                plotFillAlpha: "65",
                drawAnchors: "0"
            }
        },
        // timeseries
        timeseries: {
            caption: {
            style: {
                text: {
                    "font-size": 20,
                    "font-family": "Lato",
                    fill: "#444444"
                }
            }
            },
            subcaption: {
            style: {
                text: {
                    "font-size": 18,
                    "font-family": "Lato",
                    fill: "#444444"
                }
            }
            },
            crossline: {
            style: {
                line: {
                    stroke: "#000000",
                    "stroke-width": 1,
                    opacity: 0.1
                }
            }
            },
            chart: {
                paletteColors:
                    "#007bff, #ffc107, #dc3545, #28a745, #6c757d, #6f42c1, #fd7e14, #17a2b8",
                baseFont: "Lato",
                multiCanvasTooltip: 1,
            style: {
                text: { "font-family": "Lato", "font-size": 14 },
                canvas: { stroke: "##000000", "stroke-width": 1, opacity: 0.1 },
            },
            },
            tooltip: {
            style: {
                container: {
                    "background-color": "#222222",
                    border: "none",
                    padding: "6px",
                    },
                    text: { "font-size": "14px", color: "#FFFFFF" },
                    header: {
                    color: "#FFFFFF",
                    "font-family": "Lato",
                    padding: "0px"
                },
                body: { padding: "0px" },
            },
            },
            navigator: {
            scrollbar: {
                style: {
                button: { fill: "#E3E3E3" },
                track: {
                    fill: "#FFFFFF",
                    stroke: "#000000",
                    "stroke-width": 1,
                    opacity: 0.1,
                },
                scroller: { fill: "#E3E3E3" },
                },
            },
            window: { style: { handle: { fill: "#E3E3E3" } } },
            },
            legend: {
            style: {
                text: {
                    fill: "#8892a0",
                    "font-size": 14,
                    "font-family": "Lato"
                }
            }
            },
            xaxis: {
            style: {
                title: {
                    "font-size": 16,
                    "font-family": "Lato",
                    fill: "#444444"
                },
                "grid-line": {
                    stroke: "#000000",
                    "stroke-width": 0.55,
                    opacity: 0.1
                },
                "tick-mark-major": {
                    stroke: "#000000",
                    "stroke-width": 0.5,
                    opacity: 0.1
                },
                "tick-mark-minor": {
                    stroke: "#000000",
                    "stroke-width": 0.25,
                    opacity: 0.1
                },
                "label-major": { color: "#8892a0" },
                "label-minor": { color: "#8892a0" },
                "label-context": {
                color: "#8892a0",
                "font-family": "Lato",
                },
            },
            },
            plotconfig: {
            column: {
                style: {
                "plot:hover": { opacity: 0.4 },
                "plot:highlight": { opacity: 0.65 },
                },
            },
            line: {
                style: { plot: { "stroke-width": 2 }, anchor: { "stroke-width": 0 } },
            },
            area: { style: { anchor: { "stroke-width": 0 } } },
            candlestick: {
                style: {
                bear: { stroke: "#dc3545", fill: "#dc3545" },
                bull: { stroke: "#28a745", fill: "#28a745" },
                "bear:hover": { opacity: 0.4 },
                "bear:highlight": { opacity: 0.65 },
                "bull:hover": { opacity: 0.4 },
                "bull:highlight": { opacity: 0.65 },
                },
            },
            ohlc: {
                style: {
                bear: { stroke: "#dc3545", fill: "#dc3545" },
                bull: { stroke: "#28a745", fill: "#28a745" },
                "bear:hover": { opacity: 0.4 },
                "bear:highlight": { opacity: 0.65 },
                "bull:hover": { opacity: 0.4 },
                "bull:highlight": { opacity: 0.65 },
                },
            },
            },
            yaxis: [
            {
                style: {
                title: {
                    "font-size": 16,
                    "font-family": "Lato",
                    fill: "#444444",
                },
                "tick-mark": {
                    stroke: "#000000",
                    "stroke-width": 0.5,
                    opacity: 0.1,
                },
                "grid-line": {
                    stroke: "#000000",
                    "stroke-width": 0.5,
                    opacity: 0.1,
                },
                label: { color: "#8892a0" },
                },
            },
            ],
            extensions: {
            customRangeSelector: {
                style: {
                "title-text": { "font-family": "Lato", fill: "#007bff" },
                "title-icon": { "font-family": "Lato", fill: "#007bff" },
                label: {
                    color: "#8892a0",
                    "font-family": "Lato",
                    "font-size": "12px",
                },
                input: {
                    "font-family": "Lato",
                    "font-size": "12px",
                },
                "button-apply": {
                    color: "#FFFFFF",
                    "background-color": "#007bff",
                    border: "none",
                },
                "button-apply:hover": { "font-family": "Lato" },
                "button-cancel": {
                    color: "#8892a0",
                    "background-color": "#FFFFFF",
                    border: "none",
                },
                "button-cancel:hover": {
                    color: "#007bff",
                    "font-family": "Lato",
                },
                "cal-navprev": {
                    "font-family": "Lato",
                    "font-weight": 400,
                },
                "cal-navnext": {
                    "font-family": "Lato",
                    "font-weight": 400,
                },
                "cal-header": {
                    "background-color": "#007bff",
                    "font-family": "Lato",
                },
                "cal-selecteddate": {
                    color: "#FEFEFE",
                    "background-color": "#007bff",
                    "font-family": "Lato",
                    "font-size": "12px",
                    border: "none",
                },
                "cal-date": {
                    color: "#5F5F5F",
                    "font-family": "Lato",
                    "font-size": "12px",
                    border: "none",
                },
                "cal-disableddate": {
                    color: "#CACACA",
                    "font-family": "Lato",
                    "font-size": "12px",
                    border: "none",
                },
                "cal-date:hover": {
                    "background-color": "#007bff",
                    color: "#FEFEFE",
                    "font-family": "Lato",
                    border: "none",
                },
                "cal-weekend": { "background-color": "rgba(0, 123, 255, 0.2)" },
                },
            },
            standardRangeSelector: {
                style: {
                "button-text": { fill: "#999999" },
                "button-text:hover": {
                    fill: "#007bff",
                    "font-family": "Lato",
                },
                "button-text:active": {
                    fill: "#007bff",
                    "font-family": "Lato",
                },
                separator: { stroke: "#000000", opacity: 0.1 },
                },
            },
            }
        }
    }
};

var index = {
    extension: themeObject,
    name: "froalaTheme",
    type: "theme"
};

export default index;
