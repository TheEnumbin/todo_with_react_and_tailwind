const Table = () => {
  return (
    <table className="text-black border-2 w-[100%]">
      <tr>
        <th>Task Id</th>
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
    </table>
  );
};

export default Table;
