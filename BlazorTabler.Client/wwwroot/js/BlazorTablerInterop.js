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

function LoadJs(url) {
    if (!document.querySelector(`script[src="${url}"]`)) {
        var script = document.createElement('script');
        script.src = url;
        script.async = false;
        document.body.appendChild(script);
    }
}

function InitColorPicker(pickerId, swatches) {
    Coloris({
        el: `#${pickerId}`,
        swatches: swatches
    });
}
 
 

function InitVideoPlayer(id) {
    if (window.Plyr) {
        new Plyr(`#${id}`);
    }
}

