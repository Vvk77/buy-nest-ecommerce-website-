

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Rohan Kumar",
      feedback: "Amazing products! Fast delivery and great customer service.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sneha Sharma",
      feedback: "I love the quality of the items. Will definitely shop again.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Amit Singh",
      feedback: "Best ecommerce store I have used so far. Highly recommended!",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-6 mt-16 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {reviews.map(({ id, name, feedback, avatar }) => (
          <div key={id} className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center max-w-sm mx-auto">
            <img
              src={avatar}
              alt={name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <p className="italic text-gray-700 mb-4">"{feedback}"</p>
            <h4 className="font-semibold">{name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
