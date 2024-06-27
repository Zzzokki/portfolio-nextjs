export const Drawer = ({ isOpen, closeDrawer }) => {
  return (
    <div
      className={`fixed top-0 left-[100%] ${
        isOpen ? "translate-x-[-400px]" : "translate-x-[0px]"
      } h-screen w-[400px] p-6 shadow-md bg-[#fff] dark:bg-[#000] duration-300 z-50`}
    >
      <button onClick={closeDrawer}>Close</button>
    </div>
  );
};
