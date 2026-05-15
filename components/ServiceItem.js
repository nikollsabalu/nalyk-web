const ServiceItem = ({
  title,
  description,
  open,
}) => {
  return (
    <div className="border-b border-white/10 last:border-0 px-6 md:px-8 py-6">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-medium">{title}</h4>
        <span className="text-2xl">{open ? "×" : "+"}</span>
      </div>

      {open && <p className="mt-5 max-w-4xl text-zinc-300 leading-relaxed">{description}</p>}
    </div>
  );
}

export default ServiceItem;