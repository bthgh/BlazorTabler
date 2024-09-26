using BlazorTabler.Utilities;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlazorTabler;

public abstract class TablerComponentBase : ComponentBase, IDisposable, IAsyncDisposable
{
    [Parameter(CaptureUnmatchedValues = true)] public Dictionary<string, object> AdditionalAttributes { get; set; } = default!;
    [Parameter] public string? CssClass { get; set; }
    [Parameter] public string? CssStyle { get; set; }
    [Parameter] public string? Id { get; set; }
    [Inject] protected IJSRuntime JsRuntime { get; set; } = default!;
    
    public ElementReference Element { get; set; }
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

    /// <inheritdoc />
    /// <see href="https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-8.0" />
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