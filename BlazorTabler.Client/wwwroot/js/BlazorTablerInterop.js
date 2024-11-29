//////////////////
// Main Functions
/////////////////
function InitTooltips() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
}

//////////////////
// Common Functions
/////////////////
function LoadCss(url) {
    return new Promise((resolve, reject) => {
        if (!document.querySelector(`link[href="${url}"]`)) {
            var link = document.createElement('link');
            link.rel = "stylesheet";
            link.href = url;

            link.onload = () => resolve();  
            link.onerror = () => reject(new Error(`Failed to load CSS: ${url}`));

            var firstCssLink = document.head.querySelector('link[rel="stylesheet"]');
            if (firstCssLink) {
                document.head.insertBefore(link, firstCssLink);
            } else {
                document.head.appendChild(link);
            }
        } else {
            resolve();
        }
    });
}

function LoadJs(url) {
    return new Promise((resolve, reject) => {
        if (!document.querySelector(`script[src="${url}"]`)) {
            var script = document.createElement('script');
            script.src = url;
            script.async = false;
            script.onload = () => resolve(); 
            script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
            document.body.appendChild(script);
        } else {
            resolve();
        }
    });
}


//////////////////////
// Components Functions
//////////////////////
function InitColorPicker(pickerId, swatches) {
    Coloris({
        el: `#${pickerId}`,
        swatches: swatches
    });
}

function InitVideoPlayer(id) {
        new Plyr(`#${id}`);
}

//////////////////////
// Demo Functions
//////////////////////

function initializeHomePage() {
    window.ApexCharts && (new ApexCharts(document.getElementById('chart-revenue-bg'), {
        chart: {
            type: "area",
            fontFamily: 'inherit',
            height: 40.0,
            sparkline: {
                enabled: true
            },
            animations: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: .16,
            type: 'solid'
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "Profits",
            data: [37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 39, 62, 51, 35, 41, 67]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19'
        ],
        colors: [tabler.getColor("primary")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-new-clients'), {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 40.0,
            sparkline: {
                enabled: true
            },
            animations: {
                enabled: false
            },
        },
        fill: {
            opacity: 1,
        },
        stroke: {
            width: [2, 1],
            dashArray: [0, 3],
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "May",
            data: [37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 4, 46, 39, 62, 51, 35, 41, 67]
        },{
            name: "April",
            data: [93, 54, 51, 24, 35, 35, 31, 67, 19, 43, 28, 36, 62, 61, 27, 39, 35, 41, 27, 35, 51, 46, 62, 37, 44, 53, 41, 65, 39, 37]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19'
        ],
        colors: [tabler.getColor("primary"), tabler.getColor("gray-600")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-active-users'), {
        chart: {
            type: "bar",
            fontFamily: 'inherit',
            height: 40.0,
            sparkline: {
                enabled: true
            },
            animations: {
                enabled: false
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 1,
        },
        series: [{
            name: "Profits",
            data: [37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 39, 62, 51, 35, 41, 67]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19'
        ],
        colors: [tabler.getColor("primary")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-mentions'), {
        chart: {
            type: "bar",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
            stacked: true,
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 1,
        },
        series: [{
            name: "Web",
            data: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 12, 5, 8, 22, 6, 8, 6, 4, 1, 8, 24, 29, 51, 40, 47, 23, 26, 50, 26, 41, 22, 46, 47, 81, 46, 6]
        },{
            name: "Social",
            data: [2, 5, 4, 3, 3, 1, 4, 7, 5, 1, 2, 5, 3, 2, 6, 7, 7, 1, 5, 5, 2, 12, 4, 6, 18, 3, 5, 2, 13, 15, 20, 47, 18, 15, 11, 10, 0]
        },{
            name: "Other",
            data: [2, 9, 1, 7, 8, 3, 6, 5, 5, 4, 6, 4, 1, 9, 3, 6, 7, 5, 2, 8, 4, 9, 1, 2, 6, 7, 5, 1, 8, 3, 2, 3, 4, 9, 7, 1, 6]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
            xaxis: {
                lines: {
                    show: true
                }
            },
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19', '2020-07-20', '2020-07-21', '2020-07-22', '2020-07-23', '2020-07-24', '2020-07-25', '2020-07-26'
        ],
        colors: [tabler.getColor("primary"), tabler.getColor("primary", 0.8), tabler.getColor("green", 0.8)],
        legend: {
            show: false,
        },
    })).render();

    const map = new jsVectorMap({
        selector: '#map-world',
        map: 'world',
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: tabler.getColor('body-bg'),
                stroke: tabler.getColor('border-color'),
                strokeWidth: 2,
            }
        },
        zoomOnScroll: false,
        zoomButtons: false,
        // -------- Series --------
        visualizeData: {
            scale: [tabler.getColor('bg-surface'), tabler.getColor('primary')],
            values: { "AF": 16, "AL": 11, "DZ": 158, "AO": 85, "AG": 1, "AR": 351, "AM": 8, "AU": 1219, "AT": 366, "AZ": 52, "BS": 7, "BH": 21, "BD": 105, "BB": 3, "BY": 52, "BE": 461, "BZ": 1, "BJ": 6, "BT": 1, "BO": 19, "BA": 16, "BW": 12, "BR": 2023, "BN": 11, "BG": 44, "BF": 8, "BI": 1, "KH": 11, "CM": 21, "CA": 1563, "CV": 1, "CF": 2, "TD": 7, "CL": 199, "CN": 5745, "CO": 283, "KM": 0, "CD": 12, "CG": 11, "CR": 35, "CI": 22, "HR": 59, "CY": 22, "CZ": 195, "DK": 304, "DJ": 1, "DM": 0, "DO": 50, "EC": 61, "EG": 216, "SV": 21, "GQ": 14, "ER": 2, "EE": 19, "ET": 30, "FJ": 3, "FI": 231, "FR": 2555, "GA": 12, "GM": 1, "GE": 11, "DE": 3305, "GH": 18, "GR": 305, "GD": 0, "GT": 40, "GN": 4, "GW": 0, "GY": 2, "HT": 6, "HN": 15, "HK": 226, "HU": 132, "IS": 12, "IN": 1430, "ID": 695, "IR": 337, "IQ": 84, "IE": 204, "IL": 201, "IT": 2036, "JM": 13, "JP": 5390, "JO": 27, "KZ": 129, "KE": 32, "KI": 0, "KR": 986, "KW": 117, "KG": 4, "LA": 6, "LV": 23, "LB": 39, "LS": 1, "LR": 0, "LY": 77, "LT": 35, "LU": 52, "MK": 9, "MG": 8, "MW": 5, "MY": 218, "MV": 1, "ML": 9, "MT": 7, "MR": 3, "MU": 9, "MX": 1004, "MD": 5, "MN": 5, "ME": 3, "MA": 91, "MZ": 10, "MM": 35, "NA": 11, "NP": 15, "NL": 770, "NZ": 138, "NI": 6, "NE": 5, "NG": 206, "NO": 413, "OM": 53, "PK": 174, "PA": 27, "PG": 8, "PY": 17, "PE": 153, "PH": 189, "PL": 438, "PT": 223, "QA": 126, "RO": 158, "RU": 1476, "RW": 5, "WS": 0, "ST": 0, "SA": 434, "SN": 12, "RS": 38, "SC": 0, "SL": 1, "SG": 217, "SK": 86, "SI": 46, "SB": 0, "ZA": 354, "ES": 1374, "LK": 48, "KN": 0, "LC": 1, "VC": 0, "SD": 65, "SR": 3, "SZ": 3, "SE": 444, "CH": 522, "SY": 59, "TW": 426, "TJ": 5, "TZ": 22, "TH": 312, "TL": 0, "TG": 3, "TO": 0, "TT": 21, "TN": 43, "TR": 729, "TM": 0, "UG": 17, "UA": 136, "AE": 239, "GB": 2258, "US": 4624, "UY": 40, "UZ": 37, "VU": 0, "VE": 285, "VN": 101, "YE": 30, "ZM": 15, "ZW": 5 },
        },
    });
    window.addEventListener("resize", () => {
        map.updateSize();
    });

    window.ApexCharts && (new ApexCharts(document.getElementById('sparkline-activity'), {
        chart: {
            type: "radialBar",
            fontFamily: 'inherit',
            height: 40,
            width: 40,
            animations: {
                enabled: false
            },
            sparkline: {
                enabled: true
            },
        },
        tooltip: {
            enabled: false,
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '75%'
                },
                track: {
                    margin: 0
                },
                dataLabels: {
                    show: false
                }
            }
        },
        colors: [tabler.getColor("blue")],
        series: [35],
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-development-activity'), {
        chart: {
            type: "area",
            fontFamily: 'inherit',
            height: 192,
            sparkline: {
                enabled: true
            },
            animations: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: .16,
            type: 'solid'
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "Purchases",
            data: [3, 5, 4, 6, 7, 5, 6, 8, 24, 7, 12, 5, 6, 3, 8, 4, 14, 30, 17, 19, 15, 14, 25, 32, 40, 55, 60, 48, 52, 70]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19'
        ],
        colors: [tabler.getColor("primary")],
        legend: {
            show: false,
        },
        point: {
            show: false
        },
    })).render();
    
    
}


function initializeChartPage()
{
    window.ApexCharts && (new ApexCharts(document.getElementById('chart-active-users-2'), {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 288,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        fill: {
            opacity: 1,
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "Mobile",
            data: [4164, 4652, 4817, 4841, 4920, 5439, 5486, 5498, 5512, 5538, 5841, 5877, 6086, 6146, 6199, 6431, 6704, 7939, 8127, 8296, 8322, 8389, 8411, 8502, 8868, 8977, 9273, 9325, 9345, 9430]
        },{
            name: "Desktop",
            data: [2164, 2292, 2386, 2430, 2528, 3045, 3255, 3295, 3481, 3604, 3688, 3840, 3932, 3949, 4003, 4298, 4424, 4869, 4922, 4973, 5155, 5267, 5566, 5689, 5692, 5758, 5773, 5799, 5960, 6000]
        },{
            name: "Tablet",
            data: [1069, 1089, 1125, 1141, 1162, 1179, 1185, 1216, 1274, 1322, 1346, 1395, 1439, 1564, 1581, 1590, 1656, 1815, 1868, 2010, 2133, 2179, 2264, 2265, 2278, 2343, 2354, 2456, 2472, 2480]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19'
        ],
        colors: [tabler.getColor("primary"), tabler.getColor("azure"), tabler.getColor("green")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-social-referrals'), {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 288,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        fill: {
            opacity: 1,
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "Facebook",
            data: [13281, 8521, 15038, 9983, 15417, 8888, 7052, 14270, 5214, 9587, 5950, 16852, 17836, 12217, 17406, 12262, 9147, 14961, 18292, 15230, 13435, 10649, 5140, 13680, 4508, 13271, 13413, 5543, 18727, 18238, 18175, 6246, 5864, 17847, 9170, 6445, 12945, 8142, 8980, 10422, 15535, 11569, 10114, 17621, 16138, 13046, 6652, 9906, 14100, 16495, 6749]
        },{
            name: "Twitter",
            data: [3680, 1862, 3070, 2252, 5348, 3091, 3000, 3984, 5176, 5325, 2420, 5474, 3098, 1893, 3748, 2879, 4197, 5186, 4213, 4334, 2807, 1594, 4863, 2030, 3752, 4856, 5341, 3954, 3461, 3097, 3404, 4949, 2283, 3227, 3630, 2360, 3477, 4675, 1901, 2252, 3347, 2954, 5029, 2079, 2830, 3292, 4578, 3401, 4104, 3749, 4457, 3734]
        },{
            name: "Dribbble",
            data: [722, 1866, 961, 1108, 1110, 561, 1753, 1815, 1985, 776, 859, 547, 1488, 766, 702, 621, 1599, 1372, 1620, 963, 759, 764, 739, 789, 1696, 1454, 1842, 734, 551, 1689, 1924, 1875, 908, 1675, 1541, 1953, 534, 502, 1524, 1867, 719, 1472, 1608, 1025, 889, 1150, 654, 1695, 1662, 1285, 1787]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
            xaxis: {
                lines: {
                    show: true
                }
            },
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19', '2020-07-20', '2020-07-21', '2020-07-22', '2020-07-23', '2020-07-24', '2020-07-25', '2020-07-26', '2020-07-27', '2020-07-28', '2020-07-29', '2020-07-30', '2020-07-31', '2020-08-01', '2020-08-02', '2020-08-03', '2020-08-04', '2020-08-05', '2020-08-06', '2020-08-07', '2020-08-08', '2020-08-09'
        ],
        colors: [tabler.getColor("facebook"), tabler.getColor("twitter"), tabler.getColor("dribbble")],
        legend: {
            show: true,
            position: 'bottom',
            offsetY: 12,
            markers: {
                width: 10,
                height: 10,
                radius: 100,
            },
            itemMargin: {
                horizontal: 8,
                vertical: 8
            },
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-tasks-overview'), {
        chart: {
            type: "bar",
            fontFamily: 'inherit',
            height: 320,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 1,
        },
        series: [{
            name: "A",
            data: [44, 32, 48, 72, 60, 16, 44, 32, 78, 50, 68, 34, 26, 48, 72, 60, 84, 64, 74, 52, 62, 50, 32, 22]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            categories: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5', 'Sprint 6', 'Sprint 7', 'Sprint 8', 'Sprint 9', 'Sprint 10', 'Sprint 11', 'Sprint 12', 'Sprint 13', 'Sprint 14', 'Sprint 15', 'Sprint 16', 'Sprint 17', 'Sprint 18', 'Sprint 19', 'Sprint 20', 'Sprint 21', 'Sprint 22', 'Sprint 23', 'Sprint 24'],
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        colors: [tabler.getColor("primary")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-demo-pie'), {
        chart: {
            type: "donut",
            fontFamily: 'inherit',
            height: 240,
            sparkline: {
                enabled: true
            },
            animations: {
                enabled: false
            },
        },
        fill: {
            opacity: 1,
        },
        series: [44, 55, 12, 2],
        labels: ["Direct", "Affilliate", "E-mail", "Other"],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            strokeDashArray: 4,
        },
        colors: [tabler.getColor("primary"), tabler.getColor("primary", 0.8), tabler.getColor("primary", 0.6), tabler.getColor("gray-300")],
        legend: {
            show: true,
            position: 'bottom',
            offsetY: 12,
            markers: {
                width: 10,
                height: 10,
                radius: 100,
            },
            itemMargin: {
                horizontal: 8,
                vertical: 8
            },
        },
        tooltip: {
            fillSeriesColor: false
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-completion-tasks'), {
        chart: {
            type: "bar",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 1,
        },
        series: [{
            name: "Tasks completion",
            data: [155, 65, 465, 265, 225, 325, 80]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26'
        ],
        colors: [tabler.getColor("primary")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-completion-tasks-2'), {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        fill: {
            opacity: 1,
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "Tasks completion",
            data: [155, 65, 465, 265, 225, 325, 80]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26'
        ],
        colors: [tabler.getColor("primary")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-completion-tasks-3'), {
        chart: {
            type: "area",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: .16,
            type: 'solid'
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "Tasks completion",
            data: [155, 65, 465, 265, 225, 325, 80]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26'
        ],
        colors: [tabler.getColor("primary")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-completion-tasks-4'), {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        fill: {
            opacity: 1,
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "straight",
        },
        series: [{
            name: "Tasks completion",
            data: [155, 65, 465, 265, 225, 325, 80]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26'
        ],
        colors: [tabler.getColor("primary")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-completion-tasks-5'), {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        fill: {
            opacity: 1,
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "stepline",
        },
        series: [{
            name: "Tasks completion",
            data: [155, 65, 465, 265, 225, 325, 80]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26'
        ],
        colors: [tabler.getColor("primary")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-completion-tasks-6'), {
        chart: {
            type: "bar",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        plotOptions: {
            bar: {
                barHeight: '50%',
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 1,
        },
        series: [{
            name: "Tasks completion",
            data: [155, 65, 465, 265, 225, 325, 80]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26'
        ],
        colors: [tabler.getColor("primary")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-completion-tasks-7'), {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        fill: {
            opacity: 1,
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "Tasks completion",
            data: [155, 65, 465, 265, 225, 325, 80]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26'
        ],
        colors: [tabler.getColor("primary")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-completion-tasks-8'), {
        chart: {
            type: "bar",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 1,
        },
        series: [{
            name: "",
            data: [155, 65, 465, 265, 225, 325, 80]
        },{
            name: "",
            data: [113, 42, 65, 54, 76, 65, 35]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26'
        ],
        colors: [tabler.getColor("primary"), tabler.getColor("red")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-completion-tasks-9'), {
        chart: {
            type: "bar",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
            stacked: true,
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 1,
        },
        series: [{
            name: "",
            data: [155, 65, 465, 265, 225, 325, 80]
        },{
            name: "",
            data: [113, 42, 65, 54, 76, 65, 35]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26'
        ],
        colors: [tabler.getColor("primary"), tabler.getColor("red")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-completion-tasks-10'), {
        chart: {
            type: "area",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: .16,
            type: 'solid'
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "",
            data: [155, 65, 465, 265, 225, 325, 80]
        },{
            name: "",
            data: [113, 42, 65, 54, 76, 65, 35]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26'
        ],
        colors: [tabler.getColor("primary"), tabler.getColor("red")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-completion-tasks-11'), {
        chart: {
            type: "area",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
            stacked: true,
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: .16,
            type: 'solid'
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "",
            data: [155, 65, 465, 265, 225, 325, 80]
        },{
            name: "",
            data: [113, 42, 65, 54, 76, 65, 35]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        labels: [
            '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26'
        ],
        colors: [tabler.getColor("primary"), tabler.getColor("red")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-tasks'), {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        fill: {
            opacity: 1,
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "New",
            data: [0, 0, 1, 2, 21, 9, 12, 10, 31, 13, 65, 10, 12, 6, 4, 3, 0]
        },{
            name: "Completed",
            data: [0, 0, 1, 2, 7, 5, 6, 8, 24, 7, 12, 5, 6, 3, 2, 2, 0]
        },{
            name: "Closed",
            data: [0, 0, 1, 0, 2, 0, 1, 0, 2, 3, 0, 2, 3, 2, 1, 0, 0]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W'],
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        colors: [tabler.getColor("primary"), tabler.getColor("lime"), tabler.getColor("orange")],
        legend: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
        point: {
            show: false
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-line-stroke'), {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        fill: {
            opacity: 1,
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "straight",
        },
        series: [{
            name: "Development",
            data: [8, 10, 11, 12, 20, 27, 30]
        },{
            name: "Marketing",
            data: [3, 16, 17, 19, 20, 30, 30]
        },{
            name: "Sales",
            data: [7, 10, 11, 18, 18, 18, 24]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            categories: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        colors: [tabler.getColor("orange"), tabler.getColor("primary"), tabler.getColor("green")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-stepline'), {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        fill: {
            opacity: 1,
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "stepline",
        },
        series: [{
            name: "Development",
            data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        colors: [tabler.getColor("orange")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-temperature'), {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        fill: {
            opacity: 1,
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "Tokyo",
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        },{
            name: "London",
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        dataLabels: {
            enabled: true,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        colors: [tabler.getColor("primary"), tabler.getColor("green")],
        legend: {
            show: false,
        },
        markers: {
            size: 2
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-area'), {
        chart: {
            type: "area",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: .16,
            type: 'solid'
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "Maximum",
            data: [11, 8, 15, 18, 19, 17]
        },{
            name: "Minimum",
            data: [7, 7, 5, 7, 9, 12]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        colors: [tabler.getColor("primary"), tabler.getColor("pink")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-area-spline'), {
        chart: {
            type: "area",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: .16,
            type: 'solid'
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "Maximum",
            data: [11, 8, 15, 18, 19, 17]
        },{
            name: "Minimum",
            data: [7, 7, 5, 7, 9, 12]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        colors: [tabler.getColor("primary"), tabler.getColor("pink")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-area-spline-stacked'), {
        chart: {
            type: "area",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
            stacked: true,
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: .16,
            type: 'solid'
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "Maximum",
            data: [11, 8, 15, 18, 19, 17]
        },{
            name: "Minimum",
            data: [7, 7, 5, 7, 9, 12]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        colors: [tabler.getColor("primary"), tabler.getColor("pink")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-spline'), {
        chart: {
            type: "line",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        fill: {
            opacity: 1,
        },
        stroke: {
            width: 2,
            lineCap: "round",
            curve: "smooth",
        },
        series: [{
            name: "Hestavollane",
            data: [0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6]
        },{
            name: "Vik",
            data: [0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        colors: [tabler.getColor("primary"), tabler.getColor("green")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-scatter'), {
        chart: {
            type: "scatter",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        fill: {
            opacity: 1,
        },
        series: [{
            name: "Maximum",
            data: [11, 8, 15, 18, 19, 17]
        },{
            name: "Minimum",
            data: [7, 7, 5, 7, 9, 12]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        colors: [tabler.getColor("primary"), tabler.getColor("pink")],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-combination'), {
        chart: {
            type: "bar",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 1,
        },
        series: [{
            name: "Development",
            data: [30, 20, 50, 40, 60, 50]
        },{
            name: "Marketing",
            data: [200, 130, 90, 240, 130, 220]
        },{
            name: "Sales",
            data: [300, 200, 160, 400, 250, 250]
        },{
            name: "Sales",
            data: [200, 130, 90, 240, 130, 220]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            categories: ['2013', '2014', '2015', '2016', '2017', '2018'],
        },
        yaxis: {
            labels: {
                padding: 4
            },
        },
        colors: [tabler.getColor("green"), tabler.getColor("pink"), tabler.getColor("green"), tabler.getColor("primary")],
        legend: {
            show: false,
        },
    })).render();
}


function initializeDropzonePage(){
    new Dropzone("#dropzone-default");
    new Dropzone("#dropzone-multiple");
    new Dropzone("#dropzone-custom");
}
 
