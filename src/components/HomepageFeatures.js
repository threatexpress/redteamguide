import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const categories = [
  {
    title: 'Concepts',
    description: 'Red teaming fundamentals, MITRE ATT&CK, and adversary emulation',
    link: '/docs/category/concepts',
    tag: 'LEARN',
  },
  {
    title: 'Planning',
    description: 'Goal planning, tradecraft, and engagement scoping',
    link: '/docs/category/planning',
    tag: 'PLAN',
  },
  {
    title: 'Exercises',
    description: 'Hands-on challenges and threat profiling exercises',
    link: '/docs/category/exercises',
    tag: 'EXECUTE',
  },
  {
    title: 'Threat Profiles',
    description: 'Example adversary profiles for realistic engagements',
    link: '/docs/category/threat-profiles',
    tag: 'INTEL',
  },
  {
    title: 'Templates',
    description: 'ROE, report, and operational log templates',
    link: '/docs/category/templates',
    tag: 'TOOLS',
  },
  {
    title: 'Checklists',
    description: 'Red team and ROE planning checklists',
    link: '/docs/category/checklists-and-planning',
    tag: 'OPS',
  },
];

function CategoryCard({title, description, link, tag}) {
  return (
    <Link to={link} className={clsx('glass-card', styles.categoryCard)}>
      <span className={styles.categoryTag}>{tag}</span>
      <h3 className={styles.categoryTitle}>{title}</h3>
      <p className={styles.categoryDesc}>{description}</p>
      <span className={styles.categoryArrow}>&rarr;</span>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <div className={styles.categoriesGrid}>
      {categories.map((cat) => (
        <CategoryCard key={cat.title} {...cat} />
      ))}
    </div>
  );
}
