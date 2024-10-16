import React, { useState, useEffect } from "react";
import "./Editor.css";
import baseURL from "../../config/axiosData";
import { useNavigate, useParams } from "react-router-dom";

export const Editor = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("");
  const [discription, setDiscription] = useState<string>("");
  const navigate = useNavigate();

  const onBasePage = () => {
    navigate({
      pathname: "/"
    });
  };

  useEffect(() => {
    async function fetchContentData() {
      try {
        const { data } = await baseURL.get(`posts/${id}.json`);
        if (data) {
          setTitle(data.title || "");
          setDiscription(data.discription || "");
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchContentData();
  }, [id]);

  const saveHandler = async () => {
    if (!title.trim() || !discription.trim()) {
      alert("Text and discription fields cannot be empty.");
      return;
    }
    try {
      const time = new Date().toISOString();
      await baseURL.put(`posts/${id}.json`, { title, discription, time });
      alert("Content saved successfully!");
      onBasePage();
    } catch (error) {
      console.error('Error saving data:', error);
      alert("Failed to save content. Please try again.");
    }
  };

  return (
    <div className="select-container">
      <h1>Edit</h1>
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
