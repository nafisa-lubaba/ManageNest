import toast from "react-hot-toast";
import SharedTitle from "../Shared/SharedTitle";

const Coupons = () => {
  const coupons = [
    { id: 1, title: "25% Off Your First Purchase", code: "SUMMER25", expiry: "Expires: 31 Dec 2024" },
    { id: 2, title: "Free Shipping on Orders Over $50", code: "WELCOME15", expiry: "Expires: 31 Jan 2025" },
    { id: 3, title: "Discount upto 50%", code: "FLASH50", expiry: "Expires: 10 Jan 2025" },
    { id: 4, title: "Big Deal & Discount upto 25%", code: "winter25", expiry: "Expires: 15 Feb 2025" },
  ];

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      toast.success(`Coupon code "${code}" has been copied to your clipboard!`)
    }).catch((err) => {
      console.error('Failed to copy coupon code: ', err);
    });
  };

  return (
    <section className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <SharedTitle heading="Exclusive Coupons" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coupons.map((coupon) => (
            <div
              key={coupon.id}
              className="card bg-white shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105 border border-gray-200"
            >
              <div className="card-body">
                <h3 className="card-title text-lg font-semibold text-cyan-500">{coupon.title}</h3>
                <p className="text-gray-600">{coupon.expiry}</p>
                <div className="mt-4">
                  <span className="badge bg-cyan-500 text-white badge-lg py-2 px-4">
                    Code: <span className="font-bold ml-1">{coupon.code}</span>
                  </span>
                </div>
                <button
                  className="btn text-white bg-cyan-500 mt-4 w-full"
                  onClick={() => handleCopyCode(coupon.code)}
                >
                  Redeem Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coupons;
