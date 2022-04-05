import TableRowStyle from './TableRow.module.scss'

function getDate(date){
  const year = date.substring(0, 4);
  const month = date.substring(4, 6);
  const day = date.substring(6, 8);
  return `${day}/${month}/${year}`;
}

function TableRow(props) {
  const {
    name, 
    department,
    created,
    updated
  } = props;

  return (
    <tr>
      <td className={TableRowStyle.name}>{name}</td>
      <td>{department}</td>
      <td>{getDate(created)}</td>
      <td>{getDate(updated)}</td>
      <td>
        <button className={TableRowStyle.edit}>Edit</button>
      </td>
      <td>
        <button className={TableRowStyle.delete}>Delete</button>
      </td>
    </tr>
  );
}

export default TableRow;