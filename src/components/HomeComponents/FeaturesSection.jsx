import { FaBell, FaUsers, FaRegCreditCard, FaUserCheck } from "react-icons/fa";

const FeaturesSection = () => {
    const features = [
        { icon: FaBell, title: 'Smart Maintenance Alerts', description: 'Stay informed about upcoming and completed maintenance activities effortlessly.' },
        { icon: FaUsers, title: 'Tenant and Resident Portals', description: 'Empower tenants and residents with easy-to-use self-service portals.' },
        { icon: FaRegCreditCard, title: 'Automated Billing and Payments', description: 'Streamline payments and billing processes for everyone.' },
        { icon: FaUserCheck, title: 'Visitor Tracking and Access Control', description: 'Ensure security with robust visitor tracking and access management.' },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-5xl font-extrabold text-gray-800 mb-12">
                    Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 shadow-lg rounded-xl transition transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-md">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 hover:text-white transition">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
