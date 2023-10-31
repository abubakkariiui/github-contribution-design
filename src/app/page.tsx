"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ThemeSelector from "../components/themes";

export default function Home() {
  const inputRef = useRef(null);
  const canvasRef = useRef(null);
  const contentRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [theme, setTheme] = useState("standard");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const _renderForm = () => {
    return (
      <form>
        <input
          ref={inputRef}
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your Github Username"
          autoComplete="off"
          autoCapitalize="none"
          autoFocus
        />
        <button type="submit" disabled={username.length <= 0 || loading}>
          <span role="img" aria-label="Stars">
            ✨
          </span>{" "}
          {loading ? "Generating..." : "Generate!"}
        </button>
      </form>
    );
  };

  return (
    <>
      <div className="App">
        <div className="App-header">
          <div className="App-logo">
            <Image
              src="/topguntocat.png"
              width={200}
              height={100}
              alt="Topguntocat"
            />
            <h1>GitHub Contributions Chart Generator</h1>
            <h4>All your contributions in one image!</h4>
          </div>
          {_renderForm()}
          <ThemeSelector
            currentTheme={theme}
            onChangeTheme={(themeName) => setTheme(themeName)}
          />
        </div>
      </div>
    </>
  );
}
