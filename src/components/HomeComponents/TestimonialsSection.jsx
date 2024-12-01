import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SharedTitle from '../Shared/SharedTitle';

const testimonials = [
    { name: 'John Doe', feedback: 'Amazing management service, highly responsive!', image: 'https://i.ibb.co/fHjQqNp/3551911.jpg' },
    { name: 'Jane Smith', feedback: 'Billing and payments are so simple now, love it!', image: 'https://i.ibb.co/fHjQqNp/3551911.jpg' },
    { name: 'Alice Johnson', feedback: 'The tenant portal is a game-changer. Highly recommend!', image: 'https://i.ibb.co/fHjQqNp/3551911.jpg' },
    { name: 'Bob Brown', feedback: 'Visitor tracking and access control are flawless!', image: 'https://i.ibb.co/fHjQqNp/3551911.jpg' },
    { name: 'Emily Davis', feedback: 'Maintenance alerts are super helpful and timely.', image: 'https://i.ibb.co/fHjQqNp/3551911.jpg' },
];

const TestimonialsSection = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Display 3 cards at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // Tablets and small desktops
                settings: {
                    slidesToShow: 2, // Show 2 cards
                },
            },
            {
                breakpoint: 768, // Mobile devices
                settings: {
                    slidesToShow: 1, // Show 1 card
                },
            },
        ],
    };

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <SharedTitle heading="What Our Residents Say" />
                <Slider {...sliderSettings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-cyan-500 p-8 shadow-lg rounded-xl">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-6 shadow-md"
                                />
                                <p className="text-white italic mb-4">
                                    "{testimonial.feedback}"
                                </p>
                                <h3 className="text-lg font-semibold text-white">
                                    {testimonial.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialsSection;
