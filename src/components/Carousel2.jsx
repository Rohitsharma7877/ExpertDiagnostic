import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel2.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Carousel2 = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          "z-index": 10000,
          "margin-left": "-7% ",
          display: "block",
          background: "red",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Set autoplay to true
    autoplaySpeed: 2000, // Adjust autoplay speed in milliseconds
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          container.style.animation = "fadeInUp 1s forwards";
        } else {
          container.style.animation = "none";
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div className="coursel-main1">
      <div
        ref={containerRef}
        style={{
          whiteSpace: "pre-line",
          height: "150px",
          display: "block",
          
          opacity: 0,
          transform: "translateY(40px)",
          animation: "none",
        }}
      >
        <h1 className="happy">Happy words from our valuable clients!</h1>
      </div>
      <div className="coursel-tag">
      <h2>Testimonials</h2>
      </div>
      <div className=" mt-6 coursel-main ">
        <div className="w-full m-auto ">
          <div className="  ">
            <Slider {...settings}>
              {data.map((d) => (
                <div className="  bg-white h-auto text-black   rounded-xl ">
                  <div className="  h-auto rounded-t-xl flex justify-center items-center ">
                    <img
                      src={d.img}
                      alt=""
                      className="h-35 w-35 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-10 ">
                    <p className="text-sm font-semibold rounded-full bg-gray-100 flex justify-center items-center w-auto px-4 py-2 font-el-messiri">
                      {d.name}
                    </p>
                    <p className="text-[15px] font-semibold  text-gray-500 leading-7 text-left font-el-messiri">
                      {d.review}
                    </p>
                    <p className="text-xl font-semibold font-el-messiri">{d.position}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    name: `Innovative`,
    img: `https://thebrandbee.com/assets/imgs/home/test/LeasePlan.webp`,
    review: `
        "The Brand Bee's Space Branding service for our new LeasePlan office has revolutionized our workplace environment. Their innovative ideas have successfully engaged our employees, fostering a strong connection with our brand. We are truly impressed by The Brand Bee's ability to create a dynamic and engaging brand experience. Their expertise in crafting captivating internal branding elements has made a remarkable impact on our overall new brand identity. “
       `,
    position: `Shalini Baveja, Head of Marketing`,
  },
  {
    name: `Impactful`,
    img: `https://thebrandbee.com/assets/imgs/home/test/Vert.webp`,
    review: `“Influencer Marketing at The Brand Bee is unparalleled to what Hi Life Wellness has witnessed before with other agencies. With their strategic expertise and dynamic approach, we have successfully established connections with influential figures in our target market, resulting in a remarkable expansion of our brand's visibility and influence. The Brand Bee's unwavering guidance and inventive strategies have paved the way for impactful collaborations that have significantly enhanced our brand's reach and resonance.`,
    position: `Sanjiv Nishchal, Founder`,
  },
  {
    name: `Catalytic`,
    img: `https://thebrandbee.com/assets/imgs/home/test/Miraggio.webp`,
    review: `“The content services provided by The Brand Bee deserves nothing short of a perfect 5-star rating. Their team's exceptional talent and dedication have made a profound impact on our brand. From captivating website content to engaging blog articles, topical campaigns and persuasive social media copy, The Brand Bee consistently delivered content that exceeded our expectations. Without a doubt, we enthusiastically endorse The Brand Bee for their talented content team, as they have proven to be an indispensable catalyst in enhancing our brand engagement in India.”`,
    position: `Shivam Shrivastav, Head of Marketing`,
  },
  {
    name: `Trasparency`,
    img: `https://thebrandbee.com/assets/imgs/home/test/Urbanbed.webp`,
    review: `Patience is key and most Business Owners go in thinking they will see immediate results when transparently it takes 3-6 months for a campaign to even begin to mature. Very happy with The Brand Bee and looking forward to a long relationship over the years!  Will be referring all my friends and family over to them for any web/marketing related needs.`,
    position: `Meenal Nath, Director`,
  },
  {
    name: `Innovative`,
    img: `https://thebrandbee.com/assets/imgs/home/test/Odd-Coffee.webp`,
    review: `
        "The Brand Bee's Space Branding service for our new LeasePlan office has revolutionized our workplace environment. Their innovative ideas have successfully engaged our employees, fostering a strong connection with our brand. We are truly impressed by The Brand Bee's ability to create a dynamic and engaging brand experience. Their expertise in crafting captivating internal branding elements has made a remarkable impact on our overall new brand identity. “
       `,
    position: `Shalini Baveja, Head of Marketing`,
  },
  {
    name: `Impactful`,
    img: `https://thebrandbee.com/assets/imgs/home/test-1.webp `,
    review: `“Influencer Marketing at The Brand Bee is unparalleled to what Hi Life Wellness has witnessed before with other agencies. With their strategic expertise and dynamic approach, we have successfully established connections with influential figures in our target market, resulting in a remarkable expansion of our brand's visibility and influence. The Brand Bee's unwavering guidance and inventive strategies have paved the way for impactful collaborations that have significantly enhanced our brand's reach and resonance.`,
    position: `Sanjiv Nishchal, Founder`,
  },
  {
    name: `Catalytic`,
    img: `https://thebrandbee.com/assets/imgs/home/test-2.webp`,
    review: `“The content services provided by The Brand Bee deserves nothing short of a perfect 5-star rating. Their team's exceptional talent and dedication have made a profound impact on our brand. From captivating website content to engaging blog articles, topical campaigns and persuasive social media copy, The Brand Bee consistently delivered content that exceeded our expectations. Without a doubt, we enthusiastically endorse The Brand Bee for their talented content team, as they have proven to be an indispensable catalyst in enhancing our brand engagement in India.”`,
    position: `Shivam Shrivastav, Head of Marketing`,
  },
  {
    name: `Trasparency`,
    img: `https://thebrandbee.com/assets/imgs/home/test/Mania.webp`,
    review: `Patience is key and most Business Owners go in thinking they will see immediate results when transparently it takes 3-6 months for a campaign to even begin to mature. Very happy with The Brand Bee and looking forward to a long relationship over the years!  Will be referring all my friends and family over to them for any web/marketing related needs.`,
    position: `Meenal Nath, Director`,
  },
];

export default Carousel2;
