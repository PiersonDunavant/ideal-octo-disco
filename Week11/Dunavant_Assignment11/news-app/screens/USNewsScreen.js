import { NEWS } from '../data/dummy-data';
import NewsList from '../components/NewsList';

function USNewsScreen() {
  const filtered = NEWS.filter((item) => item.category === 'us');
  return <NewsList items={filtered} />;
}

export default USNewsScreen;