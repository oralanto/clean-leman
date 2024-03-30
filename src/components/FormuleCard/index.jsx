const FormuleCard = ({ title, description, price }) => {
  return (
    <div className="text-left rounded-xl shadow-lg p-4 space-y-4 text-[#007EB1] flex flex-col justify-between">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <p className="text-gray-500">{description}</p>
      <div>
        {price.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </div>
  );
};

export default FormuleCard;
