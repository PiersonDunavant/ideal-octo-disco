import { NEWS } from '../data/dummy-data';
import NewsList from '../components/NewsList';

function SportsNewsScreen() {
  const filtered = NEWS.filter((item) => item.category === 'sports');
  return <NewsList items={filtered} />;
}

export default SportsNewsScreen;