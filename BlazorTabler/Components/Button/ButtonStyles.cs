using System.ComponentModel;

namespace BlazorTabler;

public enum ButtonStyles
{
    [Description("btn-###")] Standard,
    [Description("btn-outline-###")] Outline,
    [Description("btn-ghost-###")] Ghost,
    [Description("btn-### btn-square")] Square,
    [Description("btn-### btn-pill")] Pill,
    [Description("btn-### btn-icon")] Icon,
    [Description("btn-###")] IconText
}