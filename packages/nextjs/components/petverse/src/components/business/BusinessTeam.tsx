import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  specialties: string[];
  experience: string;
  avatar: string;
}

interface BusinessTeamProps {
  teamMembers: TeamMember[];
}

export const BusinessTeam: React.FC<BusinessTeamProps> = ({ teamMembers }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="text-center p-6 border border-gray-200 rounded-xl"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
            {member.avatar}
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
          <p className="text-gray-600 mb-2">{member.role}</p>
          <div className="space-y-1">
            {member.specialties.map((specialty, i) => (
              <span
                key={i}
                className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
          <p className="text-gray-500 mt-2">{member.experience}</p>
        </div>
      ))}
    </div>
  );
};
