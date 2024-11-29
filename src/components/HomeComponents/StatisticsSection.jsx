
import { FaBuilding, FaUsers, FaClipboardCheck } from 'react-icons/fa';


const statistics = [
    { icon: FaBuilding, value: '150+', label: 'Buildings Managed' },
    { icon: FaUsers, value: '5000+', label: 'Active Residents' },
    { icon: FaClipboardCheck, value: '25,000+', label: 'Maintenance Requests Completed' },
];

const StatisticsSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8">Our Impact in Numbers</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {statistics.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
                            <stat.icon className="w-12 h-12 text-blue-500 mb-4" />
                            <h3 className="text-3xl font-bold">{stat.value}</h3>
                            <p className="text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatisticsSection;

