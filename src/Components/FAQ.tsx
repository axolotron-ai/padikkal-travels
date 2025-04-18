import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqdata = [
  {
    title: "What types of transportation services do you offer?",
    description:
      "We offer a range of corporate transportation services, including daily employee shuttles, transportation for corporate events and meetings, airport transfers for staff and clients, and customized transport solutions tailored to your company's specific requirements.",
  },
  {
    title: "Can you customize transportation for our companys needs?",
    description:
      "Yes, absolutely! We understand that every company has unique transportation needs. We work closely with you to develop customized routes, schedules, vehicle types, and other specific requirements to ensure a seamless and efficient transportation solution for your employees or guests.",
  },
  {
    title: "What are your safety protocols and maintenance procedures?",
    description:
      "Safety is our top priority. Our drivers are professionally trained and undergo regular safety checks. Our fleet of vehicles undergoes rigorous and regular maintenance schedules to ensure they are in optimal condition.",
  },
  {
    title: "How can we get a quote for your corporate bus services?",
    description:
      'Getting a quote is easy! You can fill out the contact form on our website detailing your transportation needs, or you can directly contact our corporate sales team via phone or email (contact details provided on the "Contact Us" page). We will get back to you promptly with a customized quote.',
  },
];

export function FAQ() {
  return (
    <div className="mt-40 font-poppins">
      <h1 className="text-3xl font-semibold text-center text-secondary">
        Your Questions Answered
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-[80%] md:w-[60%] lg:w-[50%] mx-auto mt-10"
      >
        {faqdata.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="cursor-pointer border-4 border-[#F6F4F7] bg-[#FFF5E4] mb-6 text-lg hover:none px-4"
          >
            <AccordionTrigger className="text-lg text-[#0A2538] hover:none">
              {faq.title}
            </AccordionTrigger>
            <AccordionContent className="text-[#95A5A6] text-lg text-justify">
              {faq.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
