import React, { useState } from "react";
import {
  Search,
  Car,
  CreditCard,
  CalendarDays,
  UserRound,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  MessageCircle,
  Mail,
  Phone,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    {
      title: "Booking a Car",
      description: "Learn how to find and book the right car.",
      icon: Car,
    },
    {
      title: "Payments",
      description: "Learn about payments, pricing and refunds.",
      icon: CreditCard,
    },
    {
      title: "Managing Bookings",
      description: "Change, cancel or manage your bookings.",
      icon: CalendarDays,
    },
    {
      title: "Your Account",
      description: "Manage your profile and account settings.",
      icon: UserRound,
    },
    {
      title: "Safety & Security",
      description: "Learn about our safety and security policies.",
      icon: ShieldCheck,
    },
    {
      title: "General Help",
      description: "Find answers to other common questions.",
      icon: HelpCircle,
    },
  ];

  const faqs = [
    {
      question: "How do I book a car?",
      answer:
        "Browse the available cars, select the vehicle you want, choose your rental dates and location, then continue to checkout to complete your booking.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes. You can cancel a booking from your My Bookings section. Cancellation policies may vary depending on the vehicle and booking.",
    },
    {
      question: "How do I pay for my rental?",
      answer:
        "You can select the available payment method during checkout. Your total rental cost will be displayed before you confirm your booking.",
    },
    {
      question: "Can I change my booking dates?",
      answer:
        "Yes, if the vehicle is still available for your new dates. Open your booking and select the option to modify your reservation.",
    },
    {
      question: "What documents do I need to rent a car?",
      answer:
        "You will generally need a valid driving licence and an accepted form of identification. Additional requirements may depend on the vehicle and rental provider.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our support team using the phone, email or live chat options provided below.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className=" bg-black px-4 py-16 text-white sm:px-6 lg:py-20">
        <div className="mx-auto max-w-5xl text-center">

          <button
            onClick={() => navigate(-1)}
            className="mb-8 inline-flex items-center cursor-pointer gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back
          </button>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            How can we help?
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Find answers to common questions about booking, payments,
            cancellations and renting a car.
          </p>

          {/* Search */}
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md bg-white py-3 pl-14 pr-5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:ring-4 focus:ring-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          <div className="mb-7">
            <h2 className="text-2xl font-bold text-gray-900">
              Browse help topics
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Find the information you need.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.title}
                  className="group rounded-md border border-gray-200 bg-white p-6 text-left transition hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-gray-100 transition group-hover:bg-black group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="font-semibold text-gray-900">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {category.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">

          <div className="mb-7 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Frequently asked questions
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Quick answers to questions our customers ask most.
            </p>
          </div>

          <div className="overflow-hidden rounded-md border border-gray-200 bg-white">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-sm font-semibold text-gray-900">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-gray-500 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openFaq === index && (
                    <div className="px-5 pb-5 sm:px-6">
                      <p className="text-sm leading-6 text-gray-500">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="px-6 py-12 text-center">
                <HelpCircle
                  size={35}
                  className="mx-auto mb-3 text-gray-300"
                />

                <h3 className="font-semibold text-gray-900">
                  No results found
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Try searching with different keywords.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-md bg-gray-900 px-6 py-10 text-white sm:px-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>
                <h2 className="text-2xl font-bold">
                  Still need help?
                </h2>

                <p className="mt-2 max-w-lg text-sm leading-6 text-gray-400">
                  Our support team is ready to help you with your booking
                  or answer any questions you may have.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                <button className="flex items-center gap-3 cursor-pointer rounded-md border border-gray-700 px-4 py-3 text-left transition hover:bg-gray-800">
                  <MessageCircle size={19} />

                  <div>
                    <p className="text-xs text-gray-400">
                      Chat
                    </p>
                    <p className="text-sm font-medium">
                      Live Chat
                    </p>
                  </div>
                </button>

                <button className="flex items-center gap-3 cursor-pointer rounded-md border border-gray-700 px-4 py-3 text-left transition hover:bg-gray-800">
                  <Mail size={19} />

                  <div>
                    <p className="text-xs text-gray-400">
                      Email
                    </p>
                    <p className="text-sm font-medium">
                      Support
                    </p>
                  </div>
                </button>

                <button className="flex items-center gap-3 cursor-pointer rounded-md border border-gray-700 px-4 py-3 text-left transition hover:bg-gray-800">
                  <Phone size={19} />

                  <div>
                    <p className="text-xs text-gray-400">
                      Phone
                    </p>
                    <p className="text-sm font-medium">
                      Call Us
                    </p>
                  </div>
                </button>

              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Support;