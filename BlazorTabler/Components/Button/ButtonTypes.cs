using System.ComponentModel;

namespace BlazorTabler;

public enum ButtonTypes
{
    [Description("button")]Button,
    [Description("")]Link,
    [Description("submit")]Submit,
    [Description("reset")]Reset,
    [Description("")]ActionButton,
    
}