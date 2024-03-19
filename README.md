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
