import React, { useState } from "react";
import "./Submit.css";
import baseURL from "../../config/axiosData";
import { useNavigate } from "react-router";

export const Submit = () => {
  const [title, setTitle] = useState<string>("");
  const [discription, setDiscription] = useState<string>("");
  const navigate = useNavigate();

  const onBasePage = () => {
    navigate({
      pathname: "/"
    });
  };

  const saveHandler = async () => {
    if (!title.trim() || !discription.trim()) {
      alert("Title and discription fields cannot be empty.");
      return;
    }
    try {
      const time = new Date().toISOString();
      await baseURL.post(`posts.json`, { title, discription, time });
      alert("Content saved successfully!");
      onBasePage();
    } catch (error) {
      console.error('Error saving data:', error);
      alert("Failed to save content. Please try again.");
    }
  };

  return (
    <div className="select-container">
      <h1>Add new post</h1>
      <label htmlFor="title">Title:</label>
      <textarea
        name="title"
        id="title"
        rows={3}
        cols={4}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>

      <label htmlFor="discription">Discription:</label>
      <textarea
        name="discription"
        id="discription"
        rows={6}
        cols={4}
        value={discription}
        onChange={(e) => setDiscription(e.target.value)}
      ></textarea>

      <button className="saveButton" onClick={saveHandler}>
        Save
      </button>
    </div>
  );
};