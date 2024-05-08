export const TotalItems = () => {
  return 10;
};

export const DoneItems = () => {
  return 5;
};

export const Undone = () => {
  return TotalItems() - DoneItems();
};
