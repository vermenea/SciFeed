import useFetchNews from './hooks/useFetchNews';
import styles from './App.module.css';
import { Article } from './types/types';

function App() {
  const { data, error, isLoading } = useFetchNews();

  if (isLoading) return <div className={styles.loading}>Fetching the latest news for you...</div>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src='/icon.svg' alt='SciFeed Logo' />
          <h1 className={styles.header}>
            <span className={styles.sci}>Sci</span>
            <span className={styles.feed}>Feed</span>
          </h1>
        </div>
        <h3 className={styles.subheader}>
          Stay Updated with the Latest in Health & Science
        </h3>
      </div>

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

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2025 SciFeed. All rights reserved.</p>
          <p>
            Follow us on
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              Twitter
            </a>
            ,
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              Facebook
            </a>
            , and
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              Instagram
            </a>
            .
          </p>
          <p>
            Contact us at{' '}
            <a href='mailto:contact@scifeed.com'>contact@scifeed.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;