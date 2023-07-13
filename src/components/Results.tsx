export function Results() {
  return (
    <section className="text-light-lavender text-center bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-b-[2rem] px-8 sm:rounded-[2rem]">
      <div className="w-full max-w-xs mx-auto pt-7 pb-10 sm:max-w-[250px] sm:py-10">
        <h2>Your Results</h2>
        <p className="w-36 h-36 bg-gradient-to-b from-violet-blue to-persian-blue rounded-full mx-auto my-6 flex flex-col justify-center sm:w-48 sm:h-48">
          <span className="text-white text-6xl font-bold">76</span> of 100
        </p>
        <h3 className="text-white text-3xl font-bold mb-4 sm:mb-6">Great</h3>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
}
