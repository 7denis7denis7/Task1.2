import TableRowStyle from './TableRow.module.css'

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
      <td>{created}</td>
      <td>{updated}</td>
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