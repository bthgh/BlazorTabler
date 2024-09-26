function LoadCss(url) {
    if (!document.querySelector(`link[href="${url}"]`)) {
        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = url;

        var firstCssLink = document.head.querySelector('link[rel="stylesheet"]');
        if (firstCssLink) {
            document.head.insertBefore(link, firstCssLink);
        } else {
            document.head.appendChild(link);
        }
    }
}

function LoadJs(url, callback) {
    if (!document.querySelector(`script[src="${url}"]`)) {
        var script = document.createElement('script');
        script.src = url;
        script.async = false;
        script.onload = callback;
        document.body.appendChild(script);
    } else {
        if (typeof callback === 'function') {
            callback();
        }
    }
}

function InitColorPicker(pickerId, swatches) {
    LoadCss("libs/melloware/coloris/dist/coloris.min.css");
    LoadJs("libs/melloware/coloris/dist/umd/coloris.min.js", function () {
         Coloris({
             el: `#${pickerId}`,
             swatches: swatches
         });
    });
}


