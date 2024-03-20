From: https://www.udemy.com/course/learn-to-build-an-e-commerce-store-with-dotnet-react-redux  
Source code: https://github.com/TryCatchLearn/Restore/

run API with:

```bash
dotnet watch --non-interactive run --urls http://*:5000
```

# Setup

```bash
git init
dotnet new gitignore
git add . && git commit -m "Add README.md and .gitignore"
```

# Section 2: API Basics

## 2.6. Creating the .Net solution and API project

```bash
dotnet new list

dotnet new sln
dotnet new webapi -o API --use-controllers
dotnet sln add API
code . # open the project in Visual Studio Code
```

## 2.7. Adding VS Code extensions

VS Code extensions:

1. C#
2. C# Extensions
3. Material Icon Theme
4. NuGet Gallery
5. SQLite
6. Auto Rename Tag

`>reload` -> Developer: Reload Window

Required assets to build and debug are missing from 'ReStore'. Add them? `Yes`
(if this prompt disappears, then reload the window)

enable `File -> Auto Save`

## 2.8. What’s in the Web API template

Settings -> exclude -> `Files: Exclude` -> `Add Pattern:` -> `**/obj` & `**/bin`

## 2.12. Creating an Entity Framework Migration

```bash
dotnet tool install --global dotnet-ef
dotnet tool list -g
dotnet tool update --global dotnet-ef

dotnet ef migrations add InitialCreate -o Data/Migrations
dotnet ef database update
```

## 2.14. Using the Program.cs class to migrate and seed the data on app startup

```bash
dotnet ef database drop

dotnet watch --no-hot-reload
```

## 2.16. Using async methods when querying a database.

Extensions -> C# Extensions -> Extension Settings -> Csharpextensions ->
> Private Member Prefix -> `_`  
> [ ] Use This For Ctor Assignments
