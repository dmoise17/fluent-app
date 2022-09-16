import './App.css';
import { FundPicker, IFund } from './FundPicker';

const funds: IFund[] = [
  {id: 'F1', name: 'Fund 1'},
  {id: 'F2', name: 'Fund 2'},
  {id: 'F3', name: 'Fund 3'},
  {id: 'F4', name: 'Fund 4'},
  {id: 'F5', name: 'Fund 5'},
  {id: 'F6', name: 'Fund 6'},
  {id: 'F7', name: 'Fund 7'},
];

const onFilterChanged = (
  filterText?: string,
  currentFunds?: IFund[],
  limitResults?: number,
): IFund[] | Promise<IFund[]> => {
  const results = filterText ? funds.filter(fund => fund.name.includes(filterText)) : [];
  return new Promise<IFund[]>((resolve) => setTimeout(() => resolve(results), 2000));
};

function App() {
  return (
    <div className="App">
      <FundPicker
        onResolveSuggestions={onFilterChanged}
        itemLimit={1}
      />
    </div>
  );
}

export default App;
