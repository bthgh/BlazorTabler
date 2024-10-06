using System.ComponentModel;

namespace BlazorTabler;

public enum ModalStatus
{
    [Description("")] None,
    [Description("bg-danger")] Danger,
    [Description("bg-info")] Info,
    [Description("bg-warning")] Warning,
    [Description("bg-success")] Success
}