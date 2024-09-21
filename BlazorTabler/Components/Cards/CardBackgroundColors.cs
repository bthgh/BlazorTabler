using System.ComponentModel;

namespace BlazorTabler;

public enum CardBackgroundColors
{
    [Description("bg-primary-lt")] PrimaryLt,
    [Description("bg-primary text-primary-fg")] Primary,
    [Description("bg-secondary-lt")] SecondaryLt,
    [Description("bg-secondary text-secondary-fg")] Secondary,
    [Description("bg-success-lt")] SuccessLt,
    [Description("bg-success text-success-fg")] Success,
    [Description("bg-info-lt")] InfoLt,
    [Description("bg-info text-info-fg")] Info,
    [Description("bg-warning-lt")] WarningLt,
    [Description("bg-warning text-warning-fg")] Warning,
    [Description("bg-danger-lt")] DangerLt,
    [Description("bg-danger text-danger-fg")] Danger,
    [Description("bg-light-lt")] LightLt,
    [Description("bg-light text-light-fg")] Light,
    [Description("bg-dark-lt")] DarkLt,
    [Description("bg-dark text-dark-fg")] Dark,
    [Description("bg-muted-lt")] MutedLt,
    [Description("bg-muted text-muted-fg")] Muted,
    [Description("bg-blue-lt")] BlueLt,
    [Description("bg-blue text-blue-fg")] Blue,
    [Description("bg-azure-lt")] AzureLt,
    [Description("bg-azure text-azure-fg")] Azure,
    [Description("bg-indigo-lt")] IndigoLt,
    [Description("bg-indigo text-indigo-fg")] Indigo,
    [Description("bg-purple-lt")] PurpleLt,
    [Description("bg-purple text-purple-fg")] Purple,
    [Description("bg-pink-lt")] PinkLt,
    [Description("bg-pink text-pink-fg")] Pink,
    [Description("bg-red-lt")] RedLt,
    [Description("bg-red text-red-fg")] Red,
    [Description("bg-orange-lt")] OrangeLt,
    [Description("bg-orange text-orange-fg")] Orange,
    [Description("bg-yellow-lt")] YellowLt,
    [Description("bg-yellow text-yellow-fg")] Yellow,
    [Description("bg-lime-lt")] LimeLt,
    [Description("bg-lime text-lime-fg")] Lime,
    [Description("bg-green-lt")] GreenLt,
    [Description("bg-green text-green-fg")] Green,
    [Description("bg-teal-lt")] TealLt,
    [Description("bg-teal text-teal-fg")] Teal,
    [Description("bg-cyan-lt")] CyanLt,
    [Description("bg-cyan text-cyan-fg")] Cyan,
    [Description("bg-black-lt")] BlackLt,
    [Description("bg-black text-black-fg")] Black,
    [Description("bg-white-lt")] WhiteLt,
    [Description("bg-white text-white-fg")] White,
    [Description("bg-transparent")] Transparent
}