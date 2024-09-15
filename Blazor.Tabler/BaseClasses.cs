using Microsoft.AspNetCore.Components;

namespace Blazor.Tabler;

public class BaseClasses : ComponentBase
{
    [Parameter]
    public string Classes { get; set; } = "";
}