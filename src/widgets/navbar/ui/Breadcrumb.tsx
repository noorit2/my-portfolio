interface BreadcrumbProps {
  title: string;
}

function Breadcrumb({ title }: BreadcrumbProps) {
  return (
    <span className="text-sm text-secondary-text mt-4 mb-4  capitalize flex gap-4 justify-center items-center">
      <div className="w-14 h-[1px] bg-secondary-text" /> 
      <span> {title}</span>{" "}
      <div className="w-14 h-[1px] bg-secondary-text" />
    </span>
  );
}

export default Breadcrumb;
