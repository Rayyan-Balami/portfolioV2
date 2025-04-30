
function PageTitle({title, subtitle}:{title: string, subtitle?: string}) {


  return (
    <div className="mb-16 fade-in">
      <h2 className="text-4xl md:text-5xl font-light mb-6">{title}</h2>
      <p className="text-gray-600 max-w-2xl text-lg">
        {subtitle}
      </p>
    </div>
  );
}

export default PageTitle;
