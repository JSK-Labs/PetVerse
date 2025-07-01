import React, { useState } from "react";
import {
  Star,
  MapPin,
  Clock,
  Phone,
  Globe,
  Calendar,
  MessageCircle,
  Award,
  Users,
  Heart,
} from "lucide-react";
import { BusinessCover } from "../components/business/BusinessCover";
import { BusinessLogo } from "../components/business/BusinessLogo";
import { BusinessHeader } from "../components/business/BusinessHeader";
import { BusinessTabs } from "../components/business/BusinessTabs";
import { BusinessServices } from "../components/business/BusinessServices";
import { BusinessTeam } from "../components/business/BusinessTeam";
import { BusinessReviews } from "../components/business/BusinessReviews";
import { BusinessPosts } from "../components/business/BusinessPosts";

export const BusinessProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const businessInfo = {
    name: "Paws & Claws Veterinary Clinic",
    type: "Veterinary Clinic",
    rating: 4.8,
    reviews: 156,
    verified: true,
    acceptsTokens: true,
    cover:
      "https://images.pexels.com/photos/6235244/pexels-photo-6235244.jpeg?auto=compress&cs=tinysrgb&w=1200",
    logo: "https://images.pexels.com/photos/6235193/pexels-photo-6235193.jpeg?auto=compress&cs=tinysrgb&w=200",
    address: "123 Main Street, Downtown, City 12345",
    phone: "(555) 123-4567",
    website: "www.pawsandclaws.com",
    hours: {
      "Monday - Friday": "8:00 AM - 8:00 PM",
      Saturday: "9:00 AM - 6:00 PM",
      Sunday: "10:00 AM - 4:00 PM",
    },
    specialties: [
      "Surgery",
      "Dental Care",
      "Emergency Services",
      "Wellness Exams",
      "Vaccinations",
    ],
    description:
      "At Paws & Claws Veterinary Clinic, we provide comprehensive veterinary care with a focus on preventive medicine and compassionate treatment. Our experienced team of veterinarians and staff are dedicated to keeping your pets healthy and happy.",
    reputationScore: 4.8,
    pawTokensEarned: 2847,
  };

  const services = [
    {
      name: "Wellness Exam",
      price: "75 PAWT",
      duration: "30 min",
      popular: true,
    },
    {
      name: "Dental Cleaning",
      price: "200 PAWT",
      duration: "90 min",
      popular: false,
    },
    {
      name: "Surgery Consultation",
      price: "150 PAWT",
      duration: "45 min",
      popular: true,
    },
    {
      name: "Emergency Visit",
      price: "300 PAWT",
      duration: "60 min",
      popular: false,
    },
    {
      name: "Vaccination Package",
      price: "120 PAWT",
      duration: "20 min",
      popular: true,
    },
    {
      name: "Spay/Neuter",
      price: "400 PAWT",
      duration: "120 min",
      popular: false,
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Lead Veterinarian",
      specialties: ["Surgery", "Internal Medicine"],
      experience: "12 years",
      avatar: "👩‍⚕️",
    },
    {
      name: "Dr. James Wilson",
      role: "Veterinarian",
      specialties: ["Dental Care", "Emergency Medicine"],
      experience: "8 years",
      avatar: "👨‍⚕️",
    },
    {
      name: "Lisa Rodriguez",
      role: "Veterinary Technician",
      specialties: ["Patient Care", "Laboratory"],
      experience: "6 years",
      avatar: "👩‍⚕️",
    },
  ];

  const reviews = [
    {
      id: 1,
      author: "Mike Thompson",
      rating: 5,
      date: "2 days ago",
      content:
        "Excellent care for my dog Max. Dr. Mitchell was thorough and caring. The staff made us feel welcome.",
      helpful: 12,
      avatar: "👨",
    },
    {
      id: 2,
      author: "Jennifer Lee",
      rating: 5,
      date: "1 week ago",
      content:
        "Emergency visit went smoothly. Quick response time and professional service. Highly recommend!",
      helpful: 8,
      avatar: "👩",
    },
    {
      id: 3,
      author: "Carlos Rivera",
      rating: 4,
      date: "2 weeks ago",
      content:
        "Great facility and knowledgeable staff. Pricing is fair and they accept PAWT tokens which is convenient.",
      helpful: 15,
      avatar: "👨‍🦱",
    },
  ];

  const posts = [
    {
      id: 1,
      content:
        "Reminder: Spring is tick and flea season! Make sure your pets are protected with proper preventive treatments. 🌸",
      image:
        "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 45,
      comments: 8,
      timestamp: "2 days ago",
    },
    {
      id: 2,
      content:
        "Congratulations to Luna on a successful surgery! She's recovering beautifully and will be back to playing soon. 🐕💙",
      likes: 67,
      comments: 12,
      timestamp: "5 days ago",
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Services" },
    { id: "team", label: "Team" },
    { id: "reviews", label: "Reviews" },
    { id: "posts", label: "Posts" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BusinessCover cover={businessInfo.cover} />

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <BusinessLogo
            logo={businessInfo.logo}
            verified={businessInfo.verified}
          />
          <BusinessHeader businessInfo={businessInfo} />
        </div>
      </div>

      <BusinessTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Tab Content */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                About Us
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {businessInfo.description}
              </p>
            </div>

            {/* Specialties */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Specialties
              </h3>
              <div className="flex flex-wrap gap-3">
                {businessInfo.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Hours
              </h3>
              <div className="space-y-2">
                {Object.entries(businessInfo.hours).map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex justify-between items-center py-2 border-b border-gray-100"
                  >
                    <span className="font-medium text-gray-900">{day}</span>
                    <span className="text-gray-600">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "services" && <BusinessServices services={services} />}

        {activeTab === "team" && <BusinessTeam teamMembers={teamMembers} />}

        {activeTab === "reviews" && <BusinessReviews reviews={reviews} />}

        {activeTab === "posts" && <BusinessPosts posts={posts} />}
      </div>
    </div>
  );
};
