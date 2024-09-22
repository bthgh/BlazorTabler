using System.ComponentModel;

namespace BlazorTabler;

public enum ButtonColors
{
    [Description("primary")] primary,
    [Description("secondary")] secondary,
    [Description("success")] success,
    [Description("info")] info,
    [Description("warning")] warning,
    [Description("danger")] danger,
    [Description("light")] light,
    [Description("dark")] dark,
    [Description("muted")] muted,
    [Description("blue")] blue,
    [Description("azure")] azure,
    [Description("indigo")] indigo,
    [Description("purple")] purple,
    [Description("pink")] pink,
    [Description("red")] red,
    [Description("orange")] orange,
    [Description("yellow")] yellow,
    [Description("lime")] lime,
    [Description("green")]green,
    [Description("teal")] teal,
    [Description("cyan")] cyan,
    [Description("facebook")] facebook,
    [Description("twitter")] twitter,
    [Description("linkedin")] linkedin,
    [Description("google")] google,
    [Description("youtube")] youtube,
    [Description("vimeo")] vimeo,
    [Description("dribbble")] dribbble,
    [Description("github")] github,
    [Description("instagram")] instagram,
    [Description("pinterest")] pinterest,
    [Description("vk")] vk,
    [Description("rss")] rss,
    [Description("flickr")] flickr,
    [Description("bitbucket")] bitbucket,
    [Description("tabler")] tabler
}