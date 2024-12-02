

const Coupons = () => {
    const coupons = [
        { id: 1, title: "10% Off Your First Purchase", code: "WELCOME10", expiry: "Expires: 31 Dec 2024" },
        { id: 2, title: "Free Shipping on Orders Over $50", code: "SHIPFREE", expiry: "Expires: 31 Jan 2025" },
        { id: 3, title: "Buy One Get One Free", code: "BOGO", expiry: "Expires: 15 Feb 2025" },
      ];
    return (
        <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Exclusive Coupons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coupons.map((coupon) => (
              <div
                key={coupon.id}
                className="card bg-white shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105 border border-gray-200"
              >
                <div className="card-body">
                  <h3 className="card-title text-lg font-semibold text-gray-800">{coupon.title}</h3>
                  <p className="text-gray-600">{coupon.expiry}</p>
                  <div className="mt-4">
                    <span className="badge badge-primary badge-lg py-2 px-4">
                      Code: <span className="font-bold ml-1">{coupon.code}</span>
                    </span>
                  </div>
                  <button className="btn btn-outline btn-primary mt-4 w-full">Redeem Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Coupons;