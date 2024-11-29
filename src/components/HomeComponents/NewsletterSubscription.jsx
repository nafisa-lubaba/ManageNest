import  { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
  };

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        
        <h2 className="text-4xl font-bold mb-3 text-gray-900">
          Get Our Updates
        </h2>
        
       
        <p className="text-lg text-gray-600 mb-8">
          Find out about events and other news
        </p>
        
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-300 text-gray-600"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSubscription;