# Blazor server using Gulp with Tailwind CSS

This Blazor server web application demonstrates how to use Gulp to automate creating [Tailwind CSS](https://tailwindcss.com/) into wwwroot/site.css.

### Changed

- Remove the bootstrap from Pages/_Host.cshtml and wwwroot/css
- Added gulpfile.js
- Added tailwind.config.js
- Added Styles/site.css
- Changed Shared/MainLayout.razor to use Tailwind CSS
- Updated other pages.

### Using

- Visual Studio v16.8 Preview 3.1
- .NET 5.0-rc.1

### NPM

- Install [Node.js](https://nodejs.org)
- Run "npm install" inside the project.
- Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

### Task Runner Explorer

- View > Other Windows > Task Runner Explorer
- To create the development version of the wwwroot/site.css file, right click "css:dev" > Run
  - Create the full size css file for development.  Over 2MB.
- To create the production version of the wwwroot/site.css file, right click "css:prod" > Run
  - This will minify to a real small css file.
- The "watch" in task runner will start when the project is opened.  It will automatically update the wwwroot/site.css from the Styles/site.css and tailwind.config.js files during development.

### Article

- Integrating Tailwind CSS with Blazor using Gulp -[ Part 1](https://chrissainty.com/integrating-tailwind-css-with-blazor-using-gulp-part-1) and [Part 2](https://chrissainty.com/integrating-tailwind-css-with-blazor-using-gulp-part-2)
- [How to use Gulp in Visual Studio](https://www.davepaquette.com/archive/2014/10/08/how-to-use-gulp-in-visual-studio.aspx)

### Usefull links
- https://www.tailwindcss.com
- https://nodejs.org
- https://gulpjs.com
