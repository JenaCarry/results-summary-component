import items from "../../data.json";

export function Summary() {
  return (
    <section className="font-bold p-7 sm:p-10">
      <h2 className="text-dark-gray-blue mb-6 sm:mb-7">Summary</h2>
      <div className="flex flex-col gap-4 mb-6 sm:mb-10">
        {items.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: `${item.color}1a` }}
            className="flex justify-between items-center px-5 py-3.5 rounded-xl"
          >
            <h3 style={{ color: `${item.color}` }} className="flex gap-4">
              <img src={item.icon} alt={item.category} />
              {item.category}
            </h3>
            <p className="text-dark-gray-blue/40">
              <span className="text-dark-gray-blue">{item.score}</span> / 100
            </p>
          </div>
        ))}
      </div>
      <button className="w-full text-white bg-dark-gray-blue py-3.5 rounded-full cursor-pointer relative isolate overflow-hidden transition-all duration-500 ease-in-out after:content-normal after:absolute after:inset-0 after:-z-10 after:opacity-0 after:bg-gradient-to-b after:from-light-slate-blue after:to-light-royal-blue after:transition-all after:duration-500 after:ease-in-out after:hover:opacity-100">
        Continue
      </button>
    </section>
  );
}
