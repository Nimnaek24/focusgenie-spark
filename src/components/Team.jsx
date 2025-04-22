
const teamMembers = [
  {
    name: "Nimna Ekanayake",
    role: "Founder and Developer",
    image: "images/Nimna2.jpg",
    github: "https://github.com/Nimnaek24",
    linkedin: "https://www.linkedin.com/in/nimna-ekanayake-b07181310/",
    email: "mailto:nimna.20230081@iit.ac.lk",
  },
  {
    name: "Ashinshanee Indrachapa",
    role: "Founder and Developer",
    image: "images/Ashi.jpg",
    github: "https://github.com/Ashinshanee02",
    linkedin: "https://www.linkedin.com/in/ashiathukorala",
    email: "mailto:ashinshanee.20230006@iit.ac.lk",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-16 bg-gray-50 dark:bg-gray-900 lg:pt-[330px]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-8 dark:text-white">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden"
            >
              {/* Image Section */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[340px] object-cover"
              />
              {/* Content Section */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold dark:text-white">
                  {member.name}
                </h3>
                <p className="text-gray-500 mb-4 dark:text-gray-70">
                  {member.role}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-white hover:text-black"
                  >
                    <i className="ri-github-fill text-2xl"></i>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <i className="ri-linkedin-box-fill text-2xl"></i>
                  </a>
                  <a
                    href={member.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800"
                  >
                    <i className="ri-mail-fill text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
