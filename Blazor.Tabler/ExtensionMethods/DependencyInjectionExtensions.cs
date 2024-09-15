using System.Reflection;
using Microsoft.Extensions.DependencyInjection;

namespace Blazor.Tabler.ExtensionMethods;

public static class DependencyInjectionExtensions
{
    public static IServiceCollection AddTabler(this IServiceCollection services)
    {
        return services;
    }
}