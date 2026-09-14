import { ListProvider } from './content/ListContext';
import { HeaderWrapper } from './components/HeaderWrapper';

export function App() {
  const fruitList = ['ვაშლი', 'ბანანი', 'ატამი', 'მსხალი'];

  return (
    <ListProvider items={fruitList}>
      <div style={{ padding: '20px' }}>
        <h1>მთავარი კომპონენტი</h1>
        <HeaderWrapper />
      </div>
    </ListProvider>
  );
}

export default App;