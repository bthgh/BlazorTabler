using System.Dynamic;
using System.Text.Json.Nodes;

namespace BlazorTabler.Data;

public static class Repository
{
    private static List<dynamic> LoadJson(string filename)
    {
        var path = Path.Combine(AppContext.BaseDirectory, "data", $"{filename}.json");

        if (!File.Exists(path))
            throw new FileNotFoundException($"JSON file not found: {path}");

        var json = File.ReadAllText(path);
        var jsonArray = JsonNode.Parse(json)?.AsArray() ?? new JsonArray();

        var list = new List<dynamic>();

        foreach (var node in jsonArray)
        {
            IDictionary<string, object?> expando = new ExpandoObject();
            foreach (var prop in node.AsObject())
            {
                expando[prop.Key] = prop.Value?.GetValue<string>();
            }
            list.Add(expando);
        }

        return list;
    }


    public static List<dynamic> GetActivity()
    {
        return LoadJson("activity");
    }
    
    public static List<dynamic> GetAlerts()
    {
        return LoadJson("alerts");
    }
    
    public static List<dynamic> GetArticles()
    {
        return LoadJson("articles");
    }
    
    public static List<dynamic> GetBrands()
    {
        return LoadJson("brands");
    }
    
    public static List<dynamic> GetCharts()
    {
        return LoadJson("charts");
    }
    
    public static List<dynamic> GetChats()
    {
        return LoadJson("chats");
    }
    
    public static List<dynamic> GetColors()
    {
        return LoadJson("colors");
    }
    
    public static List<dynamic> GetComments()
    {
        return LoadJson("comments");
    }
    
    public static List<dynamic> GetCommits()
    {
        return LoadJson("commits");
    }
    
    public static List<dynamic> GetCryptoCurrencies()
    {
        return LoadJson("crypto-currencies");
    }
    
    public static List<dynamic> GetDocs()
    {
        return LoadJson("docs");
    }
    
    public static List<dynamic> GetEmails()
    {
        return LoadJson("emails");
    }
    
    public static List<dynamic> GetErrors()
    {
        return LoadJson("errors");
    }
    
    public static List<dynamic> GetFaq()
    {
        return LoadJson("faq");
    }
    
    public static List<dynamic> GetFiles()
    {
        return LoadJson("files");
    }
    
    public static List<dynamic> GetFlags()
    {
        return LoadJson("flags");
    }
    
    public static List<dynamic> GetFreeIllustrations()
    {
        return LoadJson("free-illustrations");
    }
    
    public static List<dynamic> GetIcons()
    {
        return LoadJson("icons");
    }
    
    public static List<dynamic> GetIconsInfo()
    {
        return LoadJson("icons-info");
    }
    
    public static List<dynamic> GetIllustrations()
    {
        return LoadJson("illustrations");
    }
    
    public static List<dynamic> GetInlinePlayers()
    {
        return LoadJson("inline-players");
    }
    
    public static List<dynamic> GetInvoices()
    {
        return LoadJson("invoices");
    }
    
    public static List<dynamic> GetJobs()
    {
        return LoadJson("jobs");
    }
    
    public static List<dynamic> GetLanguages()
    {
        return LoadJson("languages");
    }
    
    public static List<dynamic> GetLayouts()
    {
        return LoadJson("layouts");
    }
    
    public static List<dynamic> GetMaps()
    {
        return LoadJson("maps");
    }
    
    public static List<dynamic> GetMapsVector()
    {
        return LoadJson("maps-vector");
    }
    
    public static List<dynamic> GetMenu()
    {
        return LoadJson("menu");
    }
    
    public static List<dynamic> GetMenuSample()
    {
        return LoadJson("menu-sample");
    }
    
    public static List<dynamic> GetOpenSource()
    {
        return LoadJson("open-source");
    }
    
    public static List<dynamic> GetOrders()
    {
        return LoadJson("orders");
    }
    
    public static List<dynamic> GetPackageManagers()
    {
        return LoadJson("package-managers");
    }
    
    public static List<dynamic> GetPayments()
    {
        return LoadJson("payments");
    }
    
    public static List<dynamic> GetPeople()
    {
        return LoadJson("people");
    }
    
    public static List<dynamic> GetPhotos()
    {
        return LoadJson("photos");
    }
    
    public static List<dynamic> GetProducts()
    {
        return LoadJson("products");
    }
    
    public static List<dynamic> GetProjects()
    {
        return LoadJson("projects");
    }
    
    public static List<dynamic> GetQuestions()
    {
        return LoadJson("questions");
    }
    
    public static List<dynamic> GetRealEstate()
    {
        return LoadJson("real-estate");
    }
    
    public static List<dynamic> GetRollercoasters()
    {
        return LoadJson("rollercoasters");
    }
    
    public static List<dynamic> GetSelects()
    {
        return LoadJson("selects");
    }
    
    public static List<dynamic> GetSettings()
    {
        return LoadJson("settings");
    }
    
    public static List<dynamic> GetSite()
    {
        return LoadJson("site");
    }
    
    public static List<dynamic> GetSocialTiles()
    {
        return LoadJson("social-tiles");
    }
    
    public static List<dynamic> GetSocials()
    {
        return LoadJson("socials");
    }
    
    public static List<dynamic> GetSri()
    {
        return LoadJson("sri");
    }
    
    public static List<dynamic> GetTableProperties()
    {
        return LoadJson("table-properties");
    }
    
    public static List<dynamic> GetTasks()
    {
        return LoadJson("tasks");
    }
    
    public static List<dynamic> GetTasksList()
    {
        return LoadJson("tasks-list");
    }
    
    public static List<dynamic> GetTestimonials()
    {
        return LoadJson("testimonials");
    }
    
    public static List<dynamic> GetTimeline()
    {
        return LoadJson("timeline");
    }
    
    public static List<dynamic> GetTimezones()
    {
        return LoadJson("timezones");
    }
    
    public static List<dynamic> GetTracks()
    {
        return LoadJson("tracks");
    }
    
    public static List<dynamic> GetUrls()
    {
        return LoadJson("urls");
    }
}