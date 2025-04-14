"use client";
import React, { useState } from "react";
import Image from "next/image";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: "Message sent successfully!", type: "success" });
        // Clear form
        setFormData({ name: "", email: "", address: "" });
      } else {
        setMessage({
          text: data.error || "Failed to send message",
          type: "error",
        });
      }
    } catch (error) {
      setMessage({ text: "Failed to send message", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg md:p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {message.text && (
          <div
            className={`p-4 rounded-lg ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm mb-2 text-[#0A2538]">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jacob"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-secondary"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-2 text-[#0A2538]">
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jacob15@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-secondary"
            required
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm mb-2 text-[#0A2538]"
          >
            Address
          </label>
          <textarea
            id="address"
            name="address"
            placeholder="Type Your address here..."
            value={formData.address}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-secondary resize-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-secondary text-white px-6 py-3 rounded-full drop-shadow-2xl cursor-pointer flex items-center gap-2 hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              Send{" "}
              <Image src="/rocket.png" alt="rocket" width={20} height={20} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default Form;
