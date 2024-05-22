import React, { useState } from "react";

const styleh = {
  margin: "0 auto",
  maxWidth: "1010px",
  minHeight: "calc(100vh - 100px)",
  padding: "0 25px",
  width: "100%",
};
const stylet = {
  display: "flex",
  marginTop: "70px",
  backgroundColor: "#FFFFFF",
  border: "1px solid #FFFFFF",
  justifyContent: "space-between",
  padding: "15px 30px",
  marginRight: "80px",
  color: "#9e9e9e",
  fontSize: "14px",
  fontFamily: "poupin",
};

const stylearea = {
  backgroundColor: "#fff",
  border: "1px solid #f7f7f7",
  color: "#242424",
  fontSize: "20px",
  fontWeight: 400,
  marginBottom: "20px",
  marginTop: "20px",
  minHeight: "400px",
  outline: "none",
  padding: "30px",
  width: "86%",
};
const styled = {
  backgroundColor: "#fff",
  border: "1px solid #f7f7f7",
  display: "flex",
  justifyContent: "space-around",
  padding: "20px",
  width: "88%",
};

export default function Container() {
  const [value, setValue] = useState("");
  const [word, setWord] = useState(0);
  const [Characters, setCharacters] = useState(0);
  const [Sentences, setSentences] = useState(0);
  const [Paragraphs, setParagraphs] = useState(0);
  const [Pronouns, setPronouns] = useState(0);
  const [Longestword, setLongestword] = useState("");
  const [reading, setreading] = useState("");
  const readingTime = (text) => {
    const wordsPerMinute = 200;
    const readingTim = Math.ceil(word / wordsPerMinute);
    return readingTim;
  };

  const countLongestword = (sentence) => {
    if (typeof sentence !== "string") {
      return 0;
    }
    let words = sentence.trim().split(/\s+/);

    let Longestword = words[0];
    console.log("ranna", Longestword);
    for (let index = 0; index < words.length; index++) {
      if (words[index].length > Longestword.length) {
        Longestword = words[index];
      }
    }
    return Longestword;
  };

  const countPronouns = (sentence) => {
    if (typeof sentence !== "string") {
      return 0;
    }
    const pronouns = [
      "he",
      "she",
      "it",
      "they",
      "we",
      "I",
      "you",
      "me",
      "him",
      "her",
      "us",
      "them",
      "myself",
      "yourself",
      "himself",
      "herself",
      "itself",
      "ourselves",
      "yourselves",
      "themselves",
    ];
    let count = 0;
    let sPronouns = sentence.toLowerCase();
    console.log(sPronouns);
    pronouns.forEach((pronoun) => {
      const regex = new RegExp(`\\b${pronoun}\\b`, "g");
      const matches = sPronouns.match(regex);
      if (matches) {
        count += matches.length;
      }
    });

    return count;
  };

  const countParagraphs = (sentence) => {
    if (typeof sentence !== "string") {
      return 0;
    }
    let sparagraphs = sentence.trim().split("\n\n").length;
    return sparagraphs;
  };

  const countSentences = (sentence) => {
    if (typeof sentence !== "string") {
      return 0;
    }
    let Scount = sentence
      .trim()
      .split(/[.?!]+/)
      .filter(Boolean).length;
    return Scount;
  };

  const countCharacters = (sentence) => {
    if (typeof sentence !== "string") {
      return 0;
    }
    let Characters = sentence.trim().length;
    return Characters;
  };

  const countWords = (sentence) => {
    if (typeof sentence !== "string") {
      return 0;
    }
    let words = sentence.trim().split(/\s+/).filter(Boolean);
    return words.length;
  };

  return (
    <div style={styleh}>
      <div style={stylet}>
        <p>Words: {word}</p>
        <p>Characters: {Characters}</p>
        <p>Sentences: {Sentences}</p>
        <p>Paragraphs: {Paragraphs}</p>
        <p>Pronouns: {Pronouns}</p>
      </div>
      <textarea
        onChange={(e) => {
          setValue(e.target.value);
          setWord(countWords(e.target.value));
          setCharacters(countCharacters(e.target.value));
          setSentences(countSentences(e.target.value));
          setParagraphs(countParagraphs(e.target.value));
          setPronouns(countPronouns(e.target.value));
          setLongestword(countLongestword(e.target.value));
          setreading(readingTime(e.target.value));
        }}
        style={stylearea}
        placeholder="Paste your text here..."
        cols="30"
        rows="10"
      ></textarea>
      <div style={styled}>
        <p>Average reading time: - {reading} min</p>
        <p>Longest word: - {Longestword}</p>
      </div>
    </div>
  );
}
