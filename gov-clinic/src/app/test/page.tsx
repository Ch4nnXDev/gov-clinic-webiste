'use client';

import { useEffect, useState } from 'react';

export default function TestPage() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/articles')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <h1>Articles</h1>

      {articles.map((article) => (
        <div key={article.sys.id}>
          <h2>
            {article.fields.title.content[0].content[0].value}
          </h2>
        </div>
      ))}
    </div>
  );
}