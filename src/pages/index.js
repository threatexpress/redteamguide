import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const bookSchema = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'Red Team Development and Operations',
  author: [
    {'@type': 'Person', name: 'Joe Vest'},
    {'@type': 'Person', name: 'James Tubberville'},
  ],
  url: 'https://redteam.guide/docs/about_the_book',
  image: 'https://redteam.guide/img/book-cover.png',
  workExample: [
    {
      '@type': 'Book',
      isbn: 'B083XVG633',
      bookFormat: 'https://schema.org/Paperback',
      url: 'https://www.amazon.com/dp/B083XVG633/',
    },
    {
      '@type': 'Book',
      isbn: 'B0842BMMCC',
      bookFormat: 'https://schema.org/EBook',
      url: 'https://www.amazon.com/gp/product/B0842BMMCC',
    },
    {
      '@type': 'Book',
      bookFormat: 'https://schema.org/AudiobookFormat',
      url: 'https://www.audible.com/pd/Red-Team-Development-and-Operations-Audiobook/B0F22XLDXH',
    },
  ],
};

const highlights = [
  {
    title: 'What is Red Teaming?',
    description:
      'Understand the fundamentals of red team operations and adversary emulation',
    link: '/docs/Concepts/red-teaming',
  },
  {
    title: 'Red Team Checklist',
    description:
      'A comprehensive checklist for planning and executing red team engagements',
    link: '/docs/checklists/red-team-checklist',
  },
  {
    title: 'Definitions',
    description:
      'Key terms and concepts used in red team development and operations',
    link: '/docs/definitions',
  },
];

function HomepageHero() {
  const handleSearchClick = () => {
    const input = document.querySelector(
      '.navbar input[type="search"], .navbar input[placeholder="Search"]',
    );
    if (input) {
      input.focus();
      input.click();
    }
  };

  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <img
          src="/img/logo.png"
          alt=""
          aria-hidden="true"
          className={styles.heroWatermark}
        />
        <h1 className={styles.heroTitle}>
          REDTEAM<span className={styles.heroDot}>.</span>GUIDE
        </h1>
        <p className={styles.heroSubtitle}>
          A reference for red team operations
        </p>
        <div
          className={styles.searchBar}
          onClick={handleSearchClick}
          onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()}
          role="button"
          tabIndex={0}>
          <svg
            className={styles.searchIcon}
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2">
            <circle cx="8.5" cy="8.5" r="5.5" />
            <line x1="13" y1="13" x2="18" y2="18" />
          </svg>
          <span className={styles.searchText}>
            Search guides, templates, definitions...
          </span>
          <kbd className={styles.searchShortcut}>⌘K</kbd>
        </div>
      </div>
    </header>
  );
}

function HighlightCard({title, description, link}) {
  return (
    <Link to={link} className={clsx('glass-card', styles.highlightCard)}>
      <h3 className={styles.highlightTitle}>{title}</h3>
      <p className={styles.highlightDesc}>{description}</p>
      <span className={styles.highlightArrow}>&rarr;</span>
    </Link>
  );
}

function BlogSection() {
  return (
    <section className={styles.blogSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>From the Blog</h2>
        </div>
        <Link to="/blog" className={clsx('glass-card', styles.blogCard)}>
          <div>
            <h3 className={styles.blogPostTitle}>Red Team Guide Blog</h3>
            <p className={styles.blogPostDesc}>
              Tradecraft, tool reviews, lessons learned, and updates from the
              field.
            </p>
          </div>
          <span className={styles.blogPostArrow}>&rarr;</span>
        </Link>
      </div>
    </section>
  );
}

function BookSection() {
  return (
    <section className={styles.bookSection}>
      <div className="container">
        <div className={clsx('glass-card', styles.bookCard)}>
          <img
            src={require('../../static/img/book-cover.png').default}
            alt="Red Team Development and Operations"
            className={styles.bookCover}
          />
          <div className={styles.bookContent}>
            <h3 className={styles.bookTitle}>
              Red Team Development and Operations
            </h3>
            <p className={styles.bookDesc}>
              This site is a red teaming resource and companion to the book. A
              comprehensive guide to planning, executing, and managing red team
              engagements.
            </p>
            <div className={styles.bookActions}>
              <a
                href="https://www.amazon.com/dp/B083XVG633/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookLink}>
                Paperback
              </a>
              <a
                href="https://www.amazon.com/gp/product/B0842BMMCC"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookLink}>
                Kindle
              </a>
              <a
                href="https://www.audible.com/pd/Red-Team-Development-and-Operations-Audiobook/B0F22XLDXH"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookLink}>
                Audible
              </a>
            </div>
            <div className={styles.bookSecondaryLinks}>
              <a
                href="https://www.youtube.com/watch?v=SQYBwVY8g9I"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookMore}>
                Watch the overview &rarr;
              </a>
              <Link to="/docs/about_the_book" className={styles.bookMore}>
                About the Book &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Red Team Guide — Guides, Templates & Tradecraft"
      description="A reference for red team operations. Guides, templates, checklists, and tradecraft for red team development and operations.">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(bookSchema)}
        </script>
      </Head>
      <HomepageHero />
      <main>
        <section className={styles.highlightsSection}>
          <div className="container">
            <div className={styles.highlightsGrid}>
              {highlights.map((h) => (
                <HighlightCard key={h.title} {...h} />
              ))}
            </div>
          </div>
        </section>
        <BlogSection />
        <BookSection />
      </main>
    </Layout>
  );
}
