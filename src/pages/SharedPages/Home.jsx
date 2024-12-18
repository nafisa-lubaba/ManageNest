import FeaturesSection from '../../components/HomeComponents/FeaturesSection'
import TestimonialsSection from '../../components/HomeComponents/TestimonialsSection'
import StatisticsSection from '../../components/HomeComponents/StatisticsSection'
import CTASection from '../../components/HomeComponents/CTASection'
import Slider from '../../components/HomeComponents/Slider'
import Cards from '../../components/HomeComponents/Cards'
import Maps from '../../components/HomeComponents/Maps'
import Coupons from '../../components/HomeComponents/Coupons'
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Cards></Cards>
            <Coupons></Coupons>
            <FeaturesSection />
            {/* <TestimonialsSection /> */}
            <StatisticsSection />
            <Maps></Maps>
            <CTASection />
        </div>
    );
};

export default Home;