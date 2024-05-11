const TaskList = (items) => {
  console.log(items);
  return <>{items.map((item, index) => ({ item }))}</>;
  //   return [];
};

export default TaskList;
