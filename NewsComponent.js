import React, { useEffect, useState } from 'react';
import './NewsComponent.css'; // Add CSS for styling

const NewsComponent = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchNews = async () => {
        const apiKey = process.env.REACT_APP_NEWS_API_KEY; // Access your API key
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            // Log the articles to inspect their structure
            console.log(data.articles);

            // Filter out articles that are marked as removed
            const filteredArticles = data.articles.filter(article => !article.removed); // Adjust based on your data structure

            setArticles(filteredArticles);
        } catch (error) {
            console.error("Error fetching the news:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <div className="news-container">
            <h1>Top News Articles</h1>
            <div className="news-grid">
                {articles.length === 0 ? (
                    <p>No articles available.</p> // Message when no articles are left
                ) : (
                    articles.map((article) => (
                        <div className="news-card" key={article.url}>
                            {article.urlToImage && ( // Check if image exists
                                <img src={article.urlToImage} alt={article.title} className="news-image" />
                            )}
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
                                Read more
                            </a>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default NewsComponent;
