name: inverse
class: center, middle, inverse

# Markdown Slides

Markdown slides is a Chrome extension that allows you to view any markdown file as a slideshow. (Provided it follows a few Remark conventions.)

.footnote[Powered by [Remark](https://github.com/gnab/remark)]

---

## Launching slideshow

Press `Ctrl+Shift+M` or `Cmd+Shift+M`, or just click the slideshow icon.

---

## Styling

The one deviation from remarkjs is that the extension will look for CSS files by convention, allowing you to customize your presentations. These CSS files are optional.

It looks for `slides.css` in the same directory as the markdown file.

Also, it looks for a css file that matches the name of your markdown file. For example, if you have a markdown file called `foo.md`, Markdown Slides will look for a `foo.css` in the same directory.

This allows you to have multiple markdown files in a directory, each sharing a default theme `slides.css`, and each optionally able to have its own theme.
