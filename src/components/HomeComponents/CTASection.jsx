const CTASection = () => {
  return (
    <section className="py-20 bg-blue-500 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Building Management?</h2>
        <p className="text-lg mb-8">
          Join hundreds of buildings already benefiting from our innovative solutions.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-bold shadow-md hover:bg-gray-200">
            Sign Up Now
          </button>
          <button className="bg-blue-700 px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-800">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
