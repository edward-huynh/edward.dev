const stast = [
  {
    title: "Projects",
    description: "14+",
  },
  {
    title: "Done",
    description: "14+",
  },
  {
    title: "Experience",
    description: "1.5+",
  },
  {
    title: "Happy Clients",
    description: "14+",
  },
];
export const CTAProfile = () => {
  return (
    <section
      id="stats"
      className="w-full  bg-primary/20   rounded-lg grid grid-cols-1 lg:grid-cols-4 gap-5 items-center p-5  backdrop-blur-2xl "
    >
      {stast.map((item, index) => (
        <div
          key={index}
          className="w-full  flex flex-col items-center justify-center"
        >
          <span className="text-3xl font-bold">{item.description}</span>
          <h3 className="text-xl font-medium">{item.title}</h3>
        </div>
      ))}
    </section>
  );
};
