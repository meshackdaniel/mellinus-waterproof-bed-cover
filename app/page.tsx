"use client";
import React, { useState } from "react";
import Image from "next/image";
import AccordionItem from "./components/AccordionItem";

const productImages = [
  "/images/product-4.jpg",
  "/images/product-1.jpg",
  "/images/product-2.jpg",
  "/images/product-3.jpg",
];

const faqs = [
  {
    question: "What is the delivery time?",
    answer: "Delivery takes 2-5 business days nationwide.",
  },
  {
    question: "Is there a warranty?",
    answer: "Yes, 30 days replacement or money back guarantee.",
  },
  {
    question: "How do I place an order?",
    answer: "Click 'Order Now' and fill the form.",
  },
];

export default function ProductPage() {
  const prices = [
    {
      value: 1,
      price: 98500,
    },
    {
      value: 2,
      price: 182000,
    },
    {
      value: 3,
      price: 275000,
    },
    {
      value: 4,
      price: 364000,
    },
    {
      value: 5,
      price: 452500,
    },
    {
      value: 10,
      price: 895000,
    },
  ];
  const closeModal = () => { 
    setModalOpen(false);
    setQuantity(0)
   };
  const [mainImage, setMainImage] = useState(productImages[0]);
  const [quantity, setQuantity] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    phone: "",
    whatsapp: "",
    email: "",
    state: "",
  });
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrderForm = (e: any) => {
    e.preventDefault();

    document.getElementById("warning")?.classList.add("hidden");

    // Hide the form container with a smooth transition
    const formContainer = document.getElementById("formContainer");
    const successMessage = document.getElementById("successMessage");

    formContainer!.style.opacity = "0";
    formContainer!.style.transform = "translateY(-20px)";

    setTimeout(() => {
      formContainer!.style.display = "none";
      successMessage!.classList.remove("hidden");
      successMessage!.style.opacity = "0";
      successMessage!.style.transform = "translateY(20px)";

      // Animate in the success message
      setTimeout(() => {
        successMessage!.style.transition = "all 0.5s ease-out";
        successMessage!.style.opacity = "1";
        successMessage!.style.transform = "translateY(0)";
      }, 50);
    }, 300);
  }

  return (
    <div>
      <div className="text-center mt-10 mb-7">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Premium Waterproof Bed Cover
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ultimate protection meets uncompromising comfort
        </p>
      </div>
      <div className="max-w-6xl mx-auto p-4">
        {/* Product Images & Details */}
        <div className="flex flex-col md:flex-row gap-10 bg-white rounded-xl p-6 mb-10">
          {/* Images */}
          <div className="flex flex-col md:w-1/2">
            <div className="border-2 border-blue-200 rounded-xl overflow-hidden w-full lg:h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white shadow">
              <Image
                src={mainImage}
                alt="Product"
                width={400}
                height={320}
                className="object-contain transition-transform duration-300 hover:scale-105 w-full"
              />
            </div>
            <div className="flex gap-3 mt-4">
              {productImages.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setMainImage(img)}
                  className={`rounded-xl border-2 ${
                    mainImage === img ? "border-blue-500" : "border-gray-200"
                  } p-1 transition-all duration-200`}
                >
                  <Image
                    src={img}
                    alt={`Product ${idx + 1}`}
                    width={70}
                    height={70}
                    className="rounded-xl object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          {/* Details */}
          <div className="md:w-1/2 flex flex-col gap-3">
            <h1 className="text-3xl font-bold mb-2">Mellitus Waterproof Bed</h1>
            <p className="text-gray-700 text-lg mb-2">
              Soft and noiseless Waterproof bed that protects your mattress from
              urine, spills and stains. perfect for kids, adults, eldery, and
              pet lovers.
            </p>
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-truck-electric-icon lucide-truck-electric"
              >
                <path d="M14 19V7a2 2 0 0 0-2-2H9" />
                <path d="M15 19H9" />
                <path d="M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14" />
                <path d="M2 13v5a1 1 0 0 0 1 1h2" />
                <path d="M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02" />
                <circle cx="17" cy="19" r="2" />
                <circle cx="7" cy="19" r="2" />
              </svg>
              <span className="font-semibold mt-1">
                Free delivery nation wide
              </span>
            </div>
            <p className="text-2xl font-semibold">
              ₦{prices[quantity].price.toLocaleString()}
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center border-2 h-15 border-red-600 py-2 px-2">
                <button
                  className="px-3 py-1 text-xl font-bold text-red-700"
                  onClick={() => {
                    if (quantity >= 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  -
                </button>
                <span className="px-4 text-lg font-semibold">
                  {prices[quantity].value}
                </span>
                <button
                  className="px-3 py-1 text-xl font-bold text-red-700"
                  onClick={() => {
                    if (quantity < prices.length - 1) {
                      setQuantity(quantity + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="bg-red-600 text-white px-8 py-3 h-15 text-lg hover:bg-red-700 transition-transform"
                onClick={() => setModalOpen(true)}
              >
                Order Now
              </button>
            </div>
            <Image
              src="/images/cashondelivery.png"
              width={150}
              height={150}
              alt="cash on delivery icon"
              className="w-20"
            />
          </div>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="bg-white w-screen min-h-screen fixed max-h-screen overflow-y-scroll  p-2 left-0 right-0 top-0 z-50 shadow-lg">
            <div className="max-w-xl mx-auto">
              <button
                className="absolute right-0 text-gray-500 text-2xl"
                onClick={() => setModalOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-x-icon lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
              <div className=" py-10">
                <div
                  id="warning"
                  className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6 rounded-r-lg shadow-sm"
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-amber-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-amber-700 font-medium">
                        Please do not submit form if you don't have the cash to
                        make purchase now. Thank you.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6" id="formContainer">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Place Your Order
                  </h2>

                  <form
                    id="orderForm"
                    onSubmit={handleOrderForm}
                    className="space-y-4"
                  >
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white shadow-inner"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="whatsapp"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        WhatsApp Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="whatsapp"
                          name="whatsapp"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white shadow-inner"
                          placeholder="Enter your WhatsApp number"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white shadow-inner"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        State
                      </label>
                      <div className="relative">
                        <select
                          id="state"
                          name="state"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white shadow-inner appearance-none"
                        >
                          <option value="">Select your state</option>
                          <option value="Abia">Abia</option>
                          <option value="Adamawa">Adamawa</option>
                          <option value="Akwa Ibom">Akwa Ibom</option>
                          <option value="Anambra">Anambra</option>
                          <option value="Bauchi">Bauchi</option>
                          <option value="Bayelsa">Bayelsa</option>
                          <option value="Benue">Benue</option>
                          <option value="Borno">Borno</option>
                          <option value="Cross River">Cross River</option>
                          <option value="Delta">Delta</option>
                          <option value="Ebonyi">Ebonyi</option>
                          <option value="Edo">Edo</option>
                          <option value="Ekiti">Ekiti</option>
                          <option value="Enugu">Enugu</option>
                          <option value="FCT">Federal Capital Territory</option>
                          <option value="Gombe">Gombe</option>
                          <option value="Imo">Imo</option>
                          <option value="Jigawa">Jigawa</option>
                          <option value="Kaduna">Kaduna</option>
                          <option value="Kano">Kano</option>
                          <option value="Katsina">Katsina</option>
                          <option value="Kebbi">Kebbi</option>
                          <option value="Kogi">Kogi</option>
                          <option value="Kwara">Kwara</option>
                          <option value="Lagos">Lagos</option>
                          <option value="Nasarawa">Nasarawa</option>
                          <option value="Niger">Niger</option>
                          <option value="Ogun">Ogun</option>
                          <option value="Ondo">Ondo</option>
                          <option value="Osun">Osun</option>
                          <option value="Oyo">Oyo</option>
                          <option value="Plateau">Plateau</option>
                          <option value="Rivers">Rivers</option>
                          <option value="Sokoto">Sokoto</option>
                          <option value="Taraba">Taraba</option>
                          <option value="Yobe">Yobe</option>
                          <option value="Zamfara">Zamfara</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl mt-6"
                    >
                      Submit Order
                    </button>
                  </form>
                </div>

                <div
                  id="successMessage"
                  className="bg-white rounded-xl shadow-lg p-8 text-center hidden"
                >
                  <div className="mb-4">
                    <svg
                      className="mx-auto h-16 w-16 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Order Received!
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We have received your message and our customer care
                    representative will get back to you to confirm your order.
                  </p>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-green-700 text-sm font-medium">
                      Thank you for your order. Please keep your phone nearby
                      for our call.
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="bg-red-700 px-2 py-1 mt-3 text-white rounded-lg text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  🛡️ Advanced Protection
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our premium waterproof bed cover features a revolutionary
                  3-layer protection system. The top layer is crafted from
                  ultra-soft bamboo fiber that's naturally hypoallergenic and
                  temperature-regulating, ensuring you stay comfortable all
                  night long.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  💧 100% Waterproof Guarantee
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The middle layer contains our patented TPU membrane that
                  blocks 100% of liquids while remaining completely breathable.
                  No more worrying about spills, accidents, or moisture damage
                  to your expensive mattress.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  🌙 Sleep Comfort
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Unlike traditional plastic covers, our design is whisper-quiet
                  and maintains optimal airflow. The deep pocket design fits
                  mattresses up to 18 inches thick with a secure elastic band
                  that won't slip or bunch up during sleep.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">
                    100% waterproof & breathable
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">
                    Hypoallergenic bamboo surface
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">
                    Machine washable & dryer safe
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">
                    15-year warranty included
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">
                    Fits mattresses up to 18" deep
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">
                    Noiseless & temperature neutral
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                See It In Action
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Watch how our waterproof bed cover provides ultimate protection
                while maintaining comfort
              </p>
            </div>

            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/2OQp1KzkSjY?si=H9WHHK72iVgjsLtl"
                  title="Waterproof Bed Cover Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 italic">
                "This 1-minute demo shows real water tests and comfort
                comparisons"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-gray-600">
                Over 50,000 happy customers trust our waterproof protection
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="star-rating text-xl mb-4 text-yellow-400">
                  ★★★★★
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "I was skeptical about waterproof covers being comfortable,
                  but this one is amazing! My toddler had an accident and not a
                  drop got through. I couldn't even tell it was waterproof when
                  sleeping."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    SM
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Daniel</p>
                    <p className="text-gray-500 text-sm">Mother of 2, Lagos</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="star-rating text-xl mb-4 text-yellow-400">
                  ★★★★★
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "After our elderly dog started having accidents, this cover
                  saved our expensive memory foam mattress. It's been 8 months
                  and it still looks and feels brand new. Worth every penny!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                    JR
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Chinelo Ogudi</p>
                    <p className="text-gray-500 text-sm">Pet Owner, Benue</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="star-rating text-xl mb-4 text-yellow-400">
                  ★★★★★
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "I'm a night shift nurse and sometimes eat in bed. Spilled
                  coffee twice and both times cleanup was effortless. The bamboo
                  surface is so soft and breathable - I sleep better than ever!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold">
                    AL
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Amanda Chukwueze
                    </p>
                    <p className="text-gray-500 text-sm">
                      Healthcare Worker, Lagos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-4 md:space-x-8 bg-white px-8 py-4 rounded-full shadow-lg">
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-blue-600">
                    50,000+
                  </p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-green-600">
                    4.9/5
                  </p>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-purple-600">
                    15 Years
                  </p>
                  <p className="text-sm text-gray-600">Warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Frequently Asked Questions
        </h3>
        <div className="bg-white p-4 rounded-b-lg shadow">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
