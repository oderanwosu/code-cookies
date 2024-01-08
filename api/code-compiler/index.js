import axios from "axios";

/**
 *
 * @param {string} codeString
 * @param {string} language
 */
export const getCodeOutputfromAPI = async (codeString, language) => {
  console.log(codeString, language.toLowerCase());
  const codeCompilerAPIBaseUrl =
    "https://online-code-compiler.p.rapidapi.com/v1/";
  console.log(process.env.EXPO_PUBLIC_CODE_COMPILER_API_KEY);
  const options = {
    method: "POST",
    url: codeCompilerAPIBaseUrl,
    headers: {
      "content-type": "application/json",
      "x-compile": "rapidapi",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": process.env.EXPO_PUBLIC_CODE_COMPILER_API_KEY,
      "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
    },

    data: {
      language: language.toLowerCase(),
      version: "latest",
      code: codeString,
      input: null,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.output)
    return response.data.output;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
