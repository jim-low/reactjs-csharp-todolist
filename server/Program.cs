var allowSpecificOrigins = "default";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options => {
  options.AddPolicy(name: allowSpecificOrigins, policy => {
    policy.WithOrigins("*");
  });
});

var app = builder.Build();

app.MapGet("/random-numbers", Foo.GetRandomNumbers);

app.UseCors(allowSpecificOrigins);

app.Run();
