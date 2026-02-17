import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
export const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "What payment methods are accepted?",
      content:
        "We accept UPI, debit cards, credit cards, net banking, and popular digital wallets."
    },
    {
      title: "How long does delivery take?",
      content:
        "Orders are usually delivered within 3–7 business days depending on your location."
    },
    {
      title: "Can I return a product?",
      content:
        "Yes, products can be returned within 7 days of delivery if they meet our return policy conditions."
    },
    {
      title: "Do you offer cash on delivery?",
      content:
        "Cash on Delivery is available in selected locations and depends on the product category."
    },
    {
      title: "How do I track my order?",
      content:
        "Once your order is shipped, you’ll receive a tracking link via email and SMS."
    }
  ];


  useGSAP(() => {
    gsap.fromTo('#text', { x: '100%' }, {
      x: '-100%',
      repeat: -1,
      duration: 4,
      ease: 'linear'
    })
  }, [])

  return (
    <>
      <div className="w-full">

        <div className="w-full my-5 px-4 sm:px-5">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl border-b-2">
            ASHOPSTOPPER
          </h1>
        </div>

        <div className="w-full my-5 px-4 sm:p-10 md:p-20">
          <div className="flex w-full justify-end">
            <div className="w-full md:w-1/2">
              <p className="text-xl sm:text-3xl md:text-5xl text-base-content/90">
                Discover a refined way of living with <b>Ashopstopper</b>. Rooted in thoughtful design and modern aesthetics, our collections celebrate crafted simplicity and timeless style.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full my-5 px-4 md:p-20 gap-10 md:justify-between">
          <div className="w-full md:w-1/3 text-3xl md:text-5xl text-base-content">
            INSIDE ASHOPSTOPPER
          </div>

          <div className="w-full md:w-1/2">
            <div className="border-t-2 border-base-content/20 p-5 flex flex-col sm:flex-row gap-5 sm:gap-10 text-base-content/70">
              <div>01</div>
              <div className="text-xl sm:text-3xl font-bold text-base-content">Our Vision</div>
              <div>
                We see design as more than aesthetics—it’s a way of living with intention,
                comfort, and connection.
              </div>
            </div>

            <div className="border-t-2 border-base-content/20 p-5 flex flex-col sm:flex-row gap-5 sm:gap-10 text-base-content/80">
              <div>02</div>
              <div className="text-xl sm:text-3xl font-bold text-base-content">Our Mission</div>
              <div>
                Our mission is to craft thoughtfully designed furniture that blends
                Italian precision with human-centered values.
              </div>
            </div>
          </div>
        </div>

        <div className="my-5 relative flex w-full overflow-x-hidden overflow-y-hidden justify-center items-center">
          <div id="text" className="flex w-full text-4xl sm:text-6xl md:text-8xl lg:text-9xl italic whitespace-nowrap">
            DESIGN • CRAFTMANSHIP
          </div>
        </div>

        <div className="w-full px-4 md:px-20">
          <div className="flex flex-col md:flex-row w-full gap-10">
            <div className="w-full md:w-1/2 text-3xl md:text-5xl italic">
              FASHION&MORE
            </div>

            <div className="w-full md:w-1/2">
              <div className="max-w-md text-base-content/80">
                Rooted in Italian craftsmanship, our values lie in thoughtful design that connects people to spaces-creating harmony. comfort, and a quiet sense of belonging.
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-10 mt-10">
            <div className="w-full md:w-1/2">
              <img
                className="w-full h-auto object-cover rounded-xl"
                src="https://i.pinimg.com/736x/99/e2/00/99e2004f0a0f2710aa16ad0033fc2bf7.jpg"
                alt=""
              />
            </div>

            <div className="w-full md:w-1/2 pt-5 space-y-2">
              {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={index} className="py-2 border-t-2 border-base-content/20">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="flex justify-between items-center w-full px-4 py-2 font-medium text-base-content"
                    >
                      <span>{item.title}</span>
                      <span className="text-xl">{isOpen ? "−" : "+"}</span>
                    </button>

                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-in-out text-base-content/70
                  ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden px-4 pb-2">
                        {item.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full my-10 gap-10">
            <div className="w-full md:w-1/2 text-2xl md:text-5xl text-base-content">
              DEVELOPERS BEHIND THE VISION
            </div>

            <div className="w-full md:w-1/2 text-lg md:text-2xl text-base-content/80">
              Each member of our team brings a unique perspective, bound by a shared passion for thoughtful design and timeless quality. Together, we shape spaces that feel personal, purposeful, and beautifully made.
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full my-5">
            <div className="w-full md:w-1/2"></div>
            <div className="w-full md:w-1/2 max-w-md text-base-content/70">
              Founded in Italy, Lapalma grew from the belief that true beauty lies in simplicity—shaped with precision and purpose. Every design reflects a commitment to essential forms.
            </div>
          </div>
        </div>
      </div>
    </>

  )
}


