import TableHeadStyle from './TableHead.module.scss';

function TableHead() {
  return (
    <thead className={TableHeadStyle.thead}> 
      <tr>
        <th className={TableHeadStyle.title}>Имя</th>
        <th className={TableHeadStyle.title}>Отдел</th>
        <th className={TableHeadStyle.title}>Создано</th>
        <th className={TableHeadStyle.title}>Обновлено</th>
        <th className={TableHeadStyle.title}>Редактировать</th>
        <th className={TableHeadStyle.title}>Удалить</th>
      </tr>
    </thead>
  );
}

export default TableHead;