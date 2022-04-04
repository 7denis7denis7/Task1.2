import Title from './components/Title/Title';
import TableHead from './components/TableHead/TableHead'
import TableRow from './components/TableRow/TableRow'
import AppStyle from './App.module.css';

//Имитация получения данных 

const data = [
  {
    name: 'Elon Musk',
    department: 'Technology',
    created: '02.04.2022',
    updated: '03.04.2022',
    key: 1
  },
  {
    name: 'Bill Gates',
    department: 'Technology',
    created: '03.04.2022',
    updated: '04.04.2022',
    key: 2
  }, {
    name: 'Pavel Durov',
    department: 'Technology',
    created: '04.04.2022',
    updated: '04.04.2022',
    key: 3
  }, {
    name: 'Will Smith',
    department: 'Art',
    created: '02.04.2022',
    updated: '03.04.2022',
    key: 4
  }, {
    name: 'Kanye West',
    department: 'Art',
    created: '03.04.2022',
    updated: '03.04.2022',
    key: 5
  },
]


function App() {
  return (
    <div className="App"> 
      <Title></Title>
      <table className={AppStyle.table}>
        <TableHead />
        <tbody>
          {data.map(item => {
            return(
              <TableRow
                name={item.name}
                department={item.department}
                created={item.created}
                updated={item.updated}
                key={item.key}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
