import React from 'react';
import ReactDOM from 'react-dom';

function Button({ link, children }) {
  return <a href={link}>{children}</a>;
}

function CardHeader({ image, category }) {
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt="" />
    </header>
  );
}

function CardBody({ date, title, content, link }) {
  return (
    <div>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button link={link}>Find out more</Button>
    </div>
  );
}

function Card({ image, category, date, title, content, link }) {
  return (
    <article>
      <CardHeader image={image} category={category} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
}

function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

function News() {
  const someNews = [
    {
      title: 'CNN Acquire BEME',
      date: 'December 31 2023',
      content: "CNN purchased Casey Neistat's Beme app for $25 million.",
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'December 30 2023',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'December 30 2023',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'Travel',
      link: '#'
    }
  ];

  return (
    <div>
      <Header title="Latest News" subtitle="Covering November & December 2023" />
      {someNews.map((news, index) => (
        <Card {...news} key={index} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<News />, rootElement);
