FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["BlazorTabler.Client/BlazorTabler.Client.csproj", "BlazorTabler.Client/"]
COPY ["BlazorTabler/BlazorTabler.csproj", "BlazorTabler/"]
RUN dotnet restore "BlazorTabler.Client/BlazorTabler.Client.csproj"
COPY . .
WORKDIR "/src/BlazorTabler.Client"
RUN dotnet build "BlazorTabler.Client.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "BlazorTabler.Client.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BlazorTabler.Client.dll"]
