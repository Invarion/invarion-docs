# How to write a document

1. Markdown is your primary language.
1. Create an .md file in an appropriate folder within ``/docs/`` directory.
1. File header is used as document name.
1. Images should be stored in ``static/img`` folder and can be later referenced <br/> ![Image from static assets folder](/img/docusaurus.png)
1. Images and other static assets could be also placed in the same folder and use relative path ``./assets/image-name.jpg``.
![Image from static assets folder](./assets/lorem-ipsum-generator-custom-placeholder-text.jpg)
<!-- markdownlint-disable MD013 -->
1. Here's an [article](https://golightlyplus.com/blog/embed-youtube-docusaurus/) on how to embed video from YouTube. <br/> <iframe width="560" height="315" src="https://www.youtube.com/embed/T5fWox2DBwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
1. The source code of this document can be found [here](https://github.com/Invarion/invarion-docs/blob/master/docs/how-to-write-the-documenation.md)
1. When editing this project in VSCode use [MarkdownLint extension](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) to keep your markdown clean and consistent.
If the document has style errors, the build will fail. Therefore one must make sure that the document is linted before committing using command ``yarn lint`` in your console.
1. Sometimes it's not possible to avoid styling errors. In such cases, you can disable the rule for the specific line using ``<!-- markdownlint-disable MD013 -->``. In the previous line, we disabled the rule for line length.
1. Do not forget to add spellcheck extension to your VSCode. [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) is a good choice.
