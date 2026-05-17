import React from 'react'
import ReactDOM from 'react-dom/client'
import { motion } from 'framer-motion'
import './styles.css'

const postLinks = [
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthesilhouettesillawitnhs%2Fposts%2Fpfbid02LFMCdo8xWK2Xcj4UwSxE7xWLqVyLYMUZSZD7cifSUY7izTQQS1eiJmftMpcULaq9l&show_text=true&width=500',

  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthesilhouettesillawitnhs%2Fposts%2Fpfbid024KRz7E5cVxHMXsL799DvT2Pq7vt2dS2rxvfAYS7iR2cX1FfDNysu6Taw5CtYzATQl&show_text=true&width=500',

  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthesilhouettesillawitnhs%2Fposts%2Fpfbid02euczEEZWeUZYykhzza3GzYCgK1dBRxG9MDWFPoU9tth82T4yfhFGiqKiCNoaA4Bul&show_text=true&width=500',

  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthesilhouettesillawitnhs%2Fposts%2Fpfbid02cbBbzkUwpgpbVijRQ9Rw7g6mxGxR4X3Y1QQL3a3CLdiHCnhVwCFCPKFXVKgGgFgQl&show_text=true&width=500',

  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthesilhouettesillawitnhs%2Fposts%2Fpfbid02b7LxYguBy1wZMdZNHrJiHN4WpEanWuWnoUJ22kX6Lu9dLX1DskvF3VHM9A3Jnmojl&show_text=true&width=500',

  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D1396787072235026%26set%3Da.570181411562267%26type%3D3&show_text=true&width=500',

  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D1366970705216663%26set%3Da.570181411562267%26type%3D3&show_text=true&width=500',
]

function FacebookPost({ url, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, rotateX: -6 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="article-card"
    >
      <div className="paper-noise" />

      <header className="article-head">
        Archive Leaf {String(index + 1).padStart(2, '0')}
      </header>

      <iframe
        src={url}
        width="100%"
        height="700"
        style={{
          border: 'none',
          overflow: 'hidden',
          background: '#f5ecd8',
        }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </motion.article>
  )
}

function App() {
  return (
    <div className="site-shell">
      <div className="paper-overlay" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="loader"
      >
        <span>Opening Archive...</span>
      </motion.div>

      <section className="cover" id="top">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="cover-card"
        >
          <p className="typewriter">
            The Silhouette 	
          </p>

          <h1>MY ARCHIVE</h1>

          <p className="subtitle">
            Official publication Facebook:
            thesilhouettesillawitnhs
          </p>

          <a href="#archive" className="enter-btn">
            Enter Lucky's Vault
          </a>
        </motion.div>
      </section>

      <main id="archive" className="archive-wrap">
        <h2>Lucky’s Published Works	</h2>

        <p>
          Personal archive of Lucky’s published articles and written
  works featured under The Silhouette publication.
        </p>

        <section className="columns">
          {postLinks.map((url, index) => (
            <FacebookPost
              url={url}
              index={index}
              key={index}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

ReactDOM.createRoot(
  document.getElementById('root')
).render(<App />)