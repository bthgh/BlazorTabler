using BlazorTabler.Utilities;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlazorTabler.Base;

public class TablerComponentBase: ComponentBase, IDisposable, IAsyncDisposable
{
    [Parameter(CaptureUnmatchedValues = true)] 
    public Dictionary<string, object> AdditionalAttributes { get; set; } = default!;
    
    [Parameter] 
    public string? CssClass { get; set; }
    
    [Parameter] 
    public string? CssStyle { get; set; }
    
    [Parameter] 
    public string? Id { get; set; }
    
    public ElementReference Element { get; protected internal set;}
    
    [Inject] 
    protected IJSRuntime JsRuntime { get; set; } = default!;
    
    [Parameter]
    public EventCallback<ElementReference> MouseEnter { get; set; }
    
    [Parameter]
    public EventCallback<ElementReference> MouseLeave { get; set; }
    
    
    
    protected bool IsRenderComplete { get; private set; }
    private bool _isAsyncDisposed;
    private bool _isDisposed;

    
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        IsRenderComplete = true;

        await base.OnAfterRenderAsync(firstRender);
    }
    
    protected override void OnInitialized()
    {
        Id ??= IdUtility.GetNextId();

        base.OnInitialized();
    }
    
    public async Task OnMouseEnter()
    {
        await MouseEnter.InvokeAsync(Element);
    }

    public async Task OnMouseLeave()
    {
        await MouseLeave.InvokeAsync(Element);
    }
    
    

    /// <inheritdoc />
    /// <see href="https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0" />
    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    /// <inheritdoc />
    /// <see href="https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-disposeasync#implement-both-dispose-and-async-dispose-patterns" />
    public async ValueTask DisposeAsync()
    {
        await DisposeAsyncCore(true).ConfigureAwait(false);

        Dispose(false);
        GC.SuppressFinalize(this);
    }

    protected virtual void Dispose(bool disposing)
    {
        if (!_isDisposed)
        {
            if (disposing)
            {
                // cleanup
            }

            _isDisposed = true;
        }
    }

    protected virtual ValueTask DisposeAsyncCore(bool disposing)
    {
        if (!_isAsyncDisposed)
        {
            if (disposing)
            {
                // cleanup
            }

            _isAsyncDisposed = true;
        }

        return ValueTask.CompletedTask;
    }

    ~TablerComponentBase()
    {
        Dispose(false);
    } 
}