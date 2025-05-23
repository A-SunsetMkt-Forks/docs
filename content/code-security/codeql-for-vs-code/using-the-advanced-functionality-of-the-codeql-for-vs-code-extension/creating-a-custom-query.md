---
title: Creating a custom query
shortTitle: Custom query creation
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Code Security
  - Code scanning
  - CodeQL
type: reference
intro: 'You can work from a template to write your own code to create a custom query to analyze a specific language.'
---

## About custom queries

> [!NOTE]
> Creating a custom query is optional, and the [`github/codeql`](https://github.com/github/codeql) repository contains a large number of example queries you can use instead.

You create a new query file from a template for a given language, which imports the standard libraries for analyzing that language. For more information, see [About {% data variables.product.prodname_codeql %} queries](https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/) in the {% data variables.product.prodname_codeql %} documentation.

## Creating a custom query

1. In the extension sidebar, open the "Queries" view, then click the **Create query** icon.

1. In the {% data variables.product.prodname_vscode_command_palette_shortname %}, select the target language for your query. If you've chosen not to create your custom query in an existing directory, selecting a language will autogenerate a directory labeled `codeql-custom-queries-LANGUAGE`, where `LANGUAGE` is the name of the selected language. A query template labeled `example.ql` will then be added to the existing or autogenerated directory.

1. In the template, write your custom query, then save the file. Once your query is finished, you can run it from the "Queries" view.

## Further reading

You can read about how to create queries for supported languages in the {% data variables.product.prodname_codeql %} documentation:

* [{% data variables.product.prodname_codeql %} for C and C++](https://codeql.github.com/docs/codeql-language-guides/codeql-for-cpp/)
* [{% data variables.product.prodname_codeql %} for C#](https://codeql.github.com/docs/codeql-language-guides/codeql-for-csharp/)
* [{% data variables.product.prodname_codeql %} for Go](https://codeql.github.com/docs/codeql-language-guides/codeql-for-go/)
* [{% data variables.product.prodname_codeql %} for Java and Kotlin](https://codeql.github.com/docs/codeql-language-guides/codeql-for-java/)
* [{% data variables.product.prodname_codeql %} for JavaScript and TypeScript](https://codeql.github.com/docs/codeql-language-guides/codeql-for-javascript/)
* [{% data variables.product.prodname_codeql %} for Python](https://codeql.github.com/docs/codeql-language-guides/codeql-for-python/)
* [{% data variables.product.prodname_codeql %} for Ruby](https://codeql.github.com/docs/codeql-language-guides/codeql-for-ruby/)
* [{% data variables.product.prodname_codeql %} for Swift](https://codeql.github.com/docs/codeql-language-guides/codeql-for-swift/)
