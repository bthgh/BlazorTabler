using System.ComponentModel;

namespace BlazorTabler;

public enum CarouselIndicatorTypes
{
    [Description("")]None,
    [Description("carousel-indicators")]Dash,
    [Description("carousel-indicators carousel-indicators-dot")]Dot,
    [Description("carousel-indicators carousel-indicators-vertical carousel-indicators-dot")]VerticalDot,
    [Description("carousel-indicators carousel-indicators-thumb")]Thumbnail,
    [Description("carousel-indicators carousel-indicators-vertical carousel-indicators-thumb")]VerticalThumbnail
}