using System.ComponentModel;

namespace BlazorTabler;

public enum AvatarSizes
{
    [Description("")] Standard,
    [Description("avatar-xxs")] xxs,
    [Description("avatar-xs")] xs,
    [Description("avatar-sm")] sm,
    [Description("avatar-md")] md,
    [Description("avatar-lg")] lg,
    [Description("avatar-xl")] xl,
    [Description("avatar-2xl")] xxl
}