# Markdown Slides

Markdown slides is a Chrome extension that allows you to view any markdown file as a slideshow.

---

## Launching slideshow

Press `Ctrl+Shift+M` or `Cmd+Shift+M`, or just click the slideshow icon.

## Tech

It is built using http://remarkjs.com/

---

## Styling

The one deviation from remarkjs is that the extension will look for a CSS file by convention, allowing you to customize your presentations. For example, if you have a markdown file called `foo.md`, Markdown Slides will look for a `foo.css` in the same directory. If `foo.css` is not found, the default styles will still be used.
