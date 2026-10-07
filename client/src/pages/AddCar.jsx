import React, { useState } from "react";
import {
  ArrowLeft,
  Upload,
  X,
  Car,
  DollarSign,
  MapPin,
  Settings,
  ImagePlus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const navigate = useNavigate();

  const [images, setImages] = useState([]);

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    category: "",
    seats: "",
    transmission: "",
    fuelType: "",
    pricePerDay: "",
    location: "",
    description: "",
    features: [],
  });

  const features = [
    "Air Conditioning",
    "Bluetooth",
    "GPS Navigation",
    "Sunroof",
    "USB Port",
    "Leather Seats",
    "Backup Camera",
    "Cruise Control",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFeatureChange = (feature) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((item) => item !== feature)
        : [...prev.features, feature],
    }));
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    setImages((prev) => [...prev, ...selectedFiles]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Car data:", formData);
    console.log("Images:", images);

    // Later:
    // send formData + images to your backend API

    alert("Car added successfully!");

    navigate("/owner/listing");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <button
              onClick={() => navigate("/owner/listing")}
              className="mb-3 flex items-center gap-2 text-sm text-gray-500 hover:text-black"
            >
              <ArrowLeft size={18} />
              Back to listings
            </button>

            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Add New Car
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Add a vehicle to your rental fleet.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">

            {/* Vehicle Information */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-md bg-gray-100 p-2">
                  <Car size={20} />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900">
                    Vehicle Information
                  </h2>
                  <p className="text-sm text-gray-500">
                    Enter the basic details of your vehicle.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* Brand */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Brand
                  </label>

                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="e.g. Toyota"
                    required
                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-black"
                  />
                </div>

                {/* Model */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Model
                  </label>

                  <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    placeholder="e.g. Corolla"
                    required
                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-black"
                  />
                </div>

                {/* Year */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Year
                  </label>

                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    placeholder="2024"
                    min="1990"
                    max="2030"
                    required
                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Category
                  </label>

                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-black"
                  >
                    <option value="">Select category</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Van">Van</option>
                  </select>
                </div>

                {/* Seats */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Number of Seats
                  </label>

                  <select
                    name="seats"
                    value={formData.seats}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-black"
                  >
                    <option value="">Select seats</option>
                    <option value="2">2 Seats</option>
                    <option value="4">4 Seats</option>
                    <option value="5">5 Seats</option>
                    <option value="7">7 Seats</option>
                    <option value="8">8 Seats</option>
                  </select>
                </div>

                {/* Transmission */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Transmission
                  </label>

                  <select
                    name="transmission"
                    value={formData.transmission}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-black"
                  >
                    <option value="">Select transmission</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>

                {/* Fuel */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Fuel Type
                  </label>

                  <select
                    name="fuelType"
                    value={formData.fuelType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-black"
                  >
                    <option value="">Select fuel type</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Electric">Electric</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Pricing & Location */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-gray-100 p-2">
                  <DollarSign size={20} />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900">
                    Pricing & Location
                  </h2>
                  <p className="text-sm text-gray-500">
                    Set your rental price and vehicle location.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Price per Day
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                      $
                    </span>

                    <input
                      type="number"
                      name="pricePerDay"
                      value={formData.pricePerDay}
                      onChange={handleChange}
                      placeholder="100"
                      min="0"
                      required
                      className="w-full rounded-xl border border-gray-200 py-3 pl-8 pr-4 text-sm outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Location
                  </label>

                  <div className="relative">
                    <MapPin
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Nairobi, Kenya"
                      required
                      className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-black"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Images */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-gray-100 p-2">
                  <ImagePlus size={20} />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900">
                    Car Images
                  </h2>
                  <p className="text-sm text-gray-500">
                    Upload clear images of your vehicle.
                  </p>
                </div>
              </div>

              <label
                htmlFor="car-images"
                className="flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-5 text-center transition hover:border-gray-400 hover:bg-gray-100"
              >
                <Upload size={30} className="mb-3 text-gray-400" />

                <p className="text-sm font-medium text-gray-700">
                  Click to upload car images
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  PNG, JPG or WEBP
                </p>

                <input
                  id="car-images"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>

              {/* Image Preview */}
              {images.length > 0 && (
                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Car ${index + 1}`}
                        className="h-32 w-full object-cover"
                      />

                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute right-2 top-2 rounded-full bg-black/70 p-1.5 text-white opacity-0 transition group-hover:opacity-100"
                      >
                        <X size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Features */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-gray-100 p-2">
                  <Settings size={20} />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900">
                    Features
                  </h2>

                  <p className="text-sm text-gray-500">
                    Select the features available in this vehicle.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => (
                  <label
                    key={feature}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-3 hover:bg-gray-50"
                  >
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature)}
                      onChange={() => handleFeatureChange(feature)}
                      className="h-4 w-4 accent-black"
                    />

                    <span className="text-sm text-gray-700">
                      {feature}
                    </span>
                  </label>
                ))}
              </div>
            </section>

            {/* Description */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="mb-2 font-semibold text-gray-900">
                Vehicle Description
              </h2>

              <p className="mb-5 text-sm text-gray-500">
                Give customers a short description of the vehicle.
              </p>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                placeholder="Describe your car, its condition, comfort, performance..."
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </section>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => navigate("/owner/listing")}
                className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-lg bg-black px-7 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Add Car
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;