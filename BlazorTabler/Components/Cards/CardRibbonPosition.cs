using System.ComponentModel;

namespace BlazorTabler;

public enum CardRibbonPosition
{
    [Description("ribbon-top")] Top,
    [Description("ribbon-bottom")] Bottom,
    [Description("ribbon-start")] Start,
    [Description("")] End
}