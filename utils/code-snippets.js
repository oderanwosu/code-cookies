export const jsCodeSnippets = [
  `var`,
  `function exampleName(){\n
    }`,
  `if (condition) {\n
    }`,
  `while (condition) {\n
    }`,
  `for (condition) {\n
    }`,
  `const`,
].sort();

export const searchCodeSnippets = (text, snippetArray) => {
  const query = [];
  if (text === undefined || text === "") {
    return [];
  }
  snippetArray.forEach((snippet) => {
    let comparedSnippet =
      snippet.length > text.length
        ? snippet.substring(0, text.length)
        : snippet;
    if (text === comparedSnippet) {
      query.push(snippet);
    }
  });

  return query;
};

export const getSnippetText = (text, snippet) => {
    return snippet.substring(text.length, snippet.length)
};