import React, { useState, useEffect } from "react";
import "./ReadMore.css";
import { Spinner } from "../../UI/Spinner/Spinner";
import baseURL from "../../config/axiosData";
import { useNavigate, useParams } from "react-router-dom";

export const ReadMore = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("");
  const [discription, setDiscription] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const formatDateTime = (isoString: string) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(date);
  };

  useEffect(() => {
    async function fetchContentData() {
      try {
        setIsLoading(true);
        const { data } = await baseURL.get(`posts/${id}.json`);
        if (data) {
          setTitle(data.title || "");
          setDiscription(data.discription || "");
          setTime(formatDateTime(data.time) || "");
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchContentData();
  }, [id]);


  const onGoBackHandler = () => {
    navigate({
        pathname: "/"
    });
  };

  return (
    <>
      <Spinner show={isLoading} />
      <div className="container">
        <h1 className="readmore-title">{title}</h1>
        <p className="readmore-time">{time}</p>
        <p className="readmore-discription">{discription}</p>
        <button className="goBackButton" onClick={onGoBackHandler}>Go back</button>
      </div>
    </>
  );
};
