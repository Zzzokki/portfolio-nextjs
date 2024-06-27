export const Card = ({ title, description }) => {
  return (
    <div className="p-[24px] rounded-md bg-slate-200 dark:bg-slate-800 shadow-md">
      <h3 className="text-[24px] font-medium text-[#000] dark:text-[#fff]">
        {title}
      </h3>
      <p className="text-[#000] dark:text-[#fff]">{description}</p>
    </div>
  );
};
