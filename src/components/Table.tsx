const Table = () => {
  return (
    <table className="text-black border-2 w-[100%]">
      <tbody>
        <tr>
          <th className="w-[10%]">Task Id</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>01</td>
          <td>Eat</td>
          <td>Done</td>
          <td>Edit</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
