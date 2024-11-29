import FeaturesSection from '../components/HomeComponents/FeaturesSection'
import TestimonialsSection from '../components/HomeComponents/TestimonialsSection'
import StatisticsSection from '../components/HomeComponents/StatisticsSection'
import CTASection from '../components/HomeComponents/CTASection'
import NewsletterSubscription from '../components/HomeComponents/NewsletterSubscription'
import Slider from '../components/Slider/Slider'
const Home = () => {
    return (
        <div>
            <Slider></Slider>
           <FeaturesSection/>
            <TestimonialsSection/>
            <StatisticsSection/>
            <CTASection />
            <NewsletterSubscription/>
            
        </div>
    );
};

export default Home;