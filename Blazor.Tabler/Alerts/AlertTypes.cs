using System.ComponentModel;

namespace Blazor.Tabler;

public enum AlertTypes
{
    [Description("alert-danger")]
    Danger,
    [Description("alert-info")]
    Info,
    [Description("alert-warning")]
    Warning,
    [Description("alert-success")]
    Success
}