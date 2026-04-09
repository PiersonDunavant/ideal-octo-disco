import { NEWS } from '../data/dummy-data';
import NewsList from '../components/NewsList';

function WorldNewsScreen() {
  const filtered = NEWS.filter((item) => item.category === 'world');
  return <NewsList items={filtered} />;
}

export default WorldNewsScreen;