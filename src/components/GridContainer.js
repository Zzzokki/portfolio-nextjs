export const GridContainer = (props) => {
  return (
    <div className="w-full lg:w-[1100px] grid grid-cols-3 py-10 gap-[24px] m-auto">
      {props.children}
    </div>
  );
};
