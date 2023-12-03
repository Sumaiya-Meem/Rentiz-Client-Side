import img from "../../../../public/faq.webp"
import { Accordion } from 'flowbite-react';

const FAQ = () => {
  return (
    <div className="my-10 ">
      <h1 className="text-4xl text-center text-[#f38654] ">Frequently Asked Questions</h1>
      <div className="flex gap-3 mt-6">
        <div className="hidden lg:block">
          <img src={img} alt="" className="h-[400px] w-[500px]  rounded-tr-[120px] rounded-bl-[120px]" />

        </div>
        <div className="pl-4 flex-1">
          <h1 className="text-3xl mb-3 text-left text-[#2292a7]">Explore Our Services</h1>
          <h4 className="text-slate-600 text-left my-4">Unfold the Details with Our Comprehensive Accordion Menu.Answers to Your Queries in a Click!</h4>
          <div>
            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title>How do I search for properties on your platform?</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">
                    Searching for your dream property is easy! Simply use our user-friendly search bar on the All Properties page. You can
                    filter results based on  property name, price range, and more. Explore a variety of listings tailored
                    to your preferences.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    For a step-by-step guide on using our search features, check out our
                    <a
                      href="/help/search-guide"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Search Guide
                    </a>
                    .
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>What types of properties are listed on your platform?</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-left text-gray-500 dark:text-gray-400">
                    Our platform features a diverse range of properties, including residential homes, apartments, commercial
                    spaces, and vacant land. Explore our
                    <a href="/property-types" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Property Types
                    </a>
                    section to learn more about the options available and find the perfect property for your needs.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>What should I consider before buying a property?</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-left text-gray-500 dark:text-gray-400">
                    Purchasing a property is a significant decision. Our
                    <a href="/buying-guide" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Buying Guide
                    </a>
                    provides valuable insights. Consider factors such as location, budget, amenities, and potential for future
                    growth. If you have specific questions, our team is here to assist you.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;