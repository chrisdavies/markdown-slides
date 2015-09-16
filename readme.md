# Markdown Slides

Markdown slides is a Chrome extension that allows you to view any markdown file as a slideshow directly in your Chrome browser (Provided it follows a few [Remark](https://github.com/gnab/remark) conventions).

Download: [Chrome Webstore](https://chrome.google.com/webstore/detail/markdown-slides/ndpkdbdonkcnidnnmdgphflfcojnhoaa)

# Launching a slideshow

1. Open a markdown file in a browser tab. You can use [this](https://raw.githubusercontent.com/tiy-durham-fe-cohort4/resources/master/lessons/advanced-css.md) file as an example. 
2. Press `Ctrl+Shift+M` or `Cmd+Shift+M`, or just click the slideshow icon to render the markdown file directly in your browser.

# Styling

The one deviation from remarkjs is that the extension will look for CSS files by convention, allowing you to customize your presentations. These CSS files are optional.

It looks for `slides.css` in the same directory as the markdown file.

Also, it looks for a css file that matches the name of your markdown file. For example, if you have a markdown file called `foo.md`, Markdown Slides will look for a `foo.css` in the same directory.

This allows you to have multiple markdown files in a directory, each sharing a default theme `slides.css`, and each optionally able to have its own theme.
