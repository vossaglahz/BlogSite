import React, { useState, useEffect } from "react";
import "./Delete.css";
import baseURL from "../../config/axiosData";
import { useNavigate, useParams } from "react-router-dom";

export const Delete = () => {
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

  const deleteHandler = async () => {
    try {
      await baseURL.delete(`posts/${id}.json`);
      alert("Content deleted successfully!");
      onBasePage();
    } catch (error) {
      console.error('Error deleting data:', error);
      alert("Failed to delete content. Please try again.");
    }
  };

  return (
    <div className="select-container">
      <h1>Delete</h1>
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

      <button className="deleteButton" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
};
