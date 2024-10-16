import React, { useEffect, useState } from 'react';
import { Spinner } from '../../UI/Spinner/Spinner';
import axios from 'axios';
import "./ContentData.css";
import Content from '../../components/Content/Content';
import { TData } from '../../interfaces/data';
import { useNavigate } from 'react-router';
import { parseData } from '../../components/helpers/parseData';

export const ContentData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [contentData, setContentData] = useState<TData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://laba-833e4-default-rtdb.firebaseio.com/posts.json');
        setContentData(parseData(response.data));
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const onEditHandler = (id: string) => {
    navigate({
      pathname: `/edit/${id}` 
    });
  }; 

  const onDeleteHandler = async (id: string) => {
    navigate({
      pathname: `/delete/${id}` 
    });
  };

  const onReadMoreHandler = async (id: string) => {
    navigate({
      pathname: `/readmore/${id}`
    });
  };

  return (
    <>
      <Spinner show={isLoading} />
      {contentData.map(content => (
        <Content
          key={content.id}
          onEdit={() => onEditHandler(content.id)}
          onDelete={() => onDeleteHandler(content.id)}
          onReadMore={() => onReadMoreHandler(content.id)}
          title={content.title}
        />
      ))}
    </>
  );
};
