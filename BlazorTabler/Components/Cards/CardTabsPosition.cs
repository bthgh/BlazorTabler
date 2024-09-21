using System.ComponentModel;

namespace BlazorTabler;

public enum CardTabsPosition
{
    [Description("")] Top,
    [Description("d-flex flex-column-reverse")] Bottom,
}