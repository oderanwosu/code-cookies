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

export function searchCodeSnippets(text, snippetArray) {
  const query = [];

  if (text === undefined || text === "") {
    return [];
  }
  const words = text.trim().split(" ");
  const lastWord = words[words.length - 1];

  snippetArray.forEach((snippet) => {
    let comparedSnippet =
      snippet.length > lastWord.length
        ? snippet.substring(0, lastWord.length)
        : snippet;
    if (lastWord == comparedSnippet) {
      query.push(snippet);
    }
  });

  return query;
}

export function getSnippetText(text, snippet) {
  if (text == undefined || text == "") {
    return [];
  }
  const words = text.trim().split(" ");
  const lastWord = words[words.length - 1];

  return snippet.substring(lastWord.length, snippet.length);
}
