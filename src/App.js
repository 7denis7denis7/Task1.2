import Title from './components/Title/Title';
import TableHead from './components/TableHead/TableHead'
import TableRow from './components/TableRow/TableRow'
import AppStyle from './App.module.scss';

//Имитация получения данных 

const data = [
  {
    name: 'Elon Musk',
    department: 'Technology',
    created: '20200224',
    updated: '20211012',
    id: 1
  },
  {
    name: 'Bill Gates',
    department: 'Technology',
    created: '20200224',
    updated: '20211014',
    id: 2
  }, {
    name: 'Pavel Durov',
    department: 'Technology',
    created: '20200224',
    updated: '20211014',
    id: 3
  }, {
    name: 'Will Smith',
    department: 'Art',
    created: '20200224',
    updated: '20211014',
    id: 4
  }, {
    name: 'Kanye West',
    department: 'Art',
    created: '20200224',
    updated: '20211014',
    id: 5
  },
]


function App() {
  return (
    <div> 
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
                key={item.id}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
