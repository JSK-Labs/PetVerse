"use client";
import React, { useState } from "react";
import {
  ServicesHeader,
  ServiceTypeFilters,
  ServiceSearch,
  InteractiveMap,
  QuickStats,
  ServiceList,
} from "../../../components/petverse/src/components/services";

export const ServiceSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const serviceTypes = [
    { id: "all", name: "All Services", icon: "🏪", count: 156 },
    { id: "veterinary", name: "Veterinary", icon: "🏥", count: 42 },
    { id: "grooming", name: "Grooming", icon: "✂️", count: 28 },
    { id: "training", name: "Training", icon: "🎾", count: 18 },
    { id: "boarding", name: "Boarding", icon: "🏠", count: 15 },
    { id: "pet-store", name: "Pet Store", icon: "🛍️", count: 35 },
    { id: "emergency", name: "Emergency", icon: "🚨", count: 8 },
  ];

  const nearbyServices = [
    {
      id: 1,
      name: "Paws & Claws Veterinary Clinic",
      type: "Veterinary",
      rating: 4.8,
      distance: "0.3 miles",
      address: "123 Main Street, Downtown",
      phone: "(555) 123-4567",
      hours: "Open until 8:00 PM",
      image:
        "https://images.pexels.com/photos/6235244/pexels-photo-6235244.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["Surgery", "Dental", "Emergency"],
      verified: true,
      acceptsTokens: true,
    },
    {
      id: 2,
      name: "Furry Friends Grooming Spa",
      type: "Grooming",
      rating: 4.9,
      distance: "0.5 miles",
      address: "456 Oak Avenue, Uptown",
      phone: "(555) 987-6543",
      hours: "Open until 6:00 PM",
      image:
        "https://images.pexels.com/photos/6235193/pexels-photo-6235193.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["Full Service", "Nail Trimming", "Dental Cleaning"],
      verified: true,
      acceptsTokens: true,
    },
    {
      id: 3,
      name: "Happy Tails Training Center",
      type: "Training",
      rating: 4.7,
      distance: "0.8 miles",
      address: "789 Pine Street, Midtown",
      phone: "(555) 456-7890",
      hours: "Open until 7:00 PM",
      image:
        "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["Puppy Classes", "Behavioral Training", "Agility"],
      verified: false,
      acceptsTokens: true,
    },
    {
      id: 4,
      name: "PetMart Superstore",
      type: "Pet Store",
      rating: 4.5,
      distance: "1.2 miles",
      address: "321 Commerce Blvd, Shopping District",
      phone: "(555) 234-5678",
      hours: "Open until 9:00 PM",
      image:
        "https://images.pexels.com/photos/1336896/pexels-photo-1336896.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["Pet Food", "Toys", "Supplies"],
      verified: true,
      acceptsTokens: false,
    },
  ];

  const filteredServices = nearbyServices.filter((service) => {
    const matchesType =
      selectedService === "all" ||
      service.type.toLowerCase() === selectedService;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.specialties.some((specialty) =>
        specialty.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesType && matchesSearch;
  });

  return (
    <section className="w-full h-full  bg-gradient-to-br from-amber-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        <ServicesHeader />
        <ServiceTypeFilters
          serviceTypes={serviceTypes}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden">
              <ServiceSearch
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <InteractiveMap />
              <QuickStats filteredServicesCount={filteredServices.length} />
            </div>
          </div>
          <ServiceList services={filteredServices} />
        </div>
      </div>
    </section>
  );
};
