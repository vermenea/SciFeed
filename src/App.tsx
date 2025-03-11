import useFetchNews from './hooks/useFetchNews';
import styles from './App.module.css';
import { Article } from './types/types';

function App() {
  const { data, error, isLoading } = useFetchNews();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>SciFeed</h1>
      <ul className={styles.list}>
        {data.articles?.map((article: Article, index: number) => (
          <li key={index} className={styles.listItem}>
            <h2 className={styles.title}>{article.title}</h2>
            <a
              className={styles.link}
              href={article.url}  
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className={styles.image}
                src={article.image}  
                alt={article.title}
              />
            </a>
            <p className={styles.snippet}>{article.description}</p> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
