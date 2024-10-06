using System.ComponentModel;

namespace BlazorTabler;

public enum ModalSizes
{
    [Description("")] Normal,
    [Description("modal-sm")] Small,
    [Description("modal-lg")] Large,
    [Description("modal-full-width")] Full_Width
}