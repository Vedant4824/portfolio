import React from 'react'
import AmazonLogo from '../assets/amazon-logo.png'
import AWSLogo from '../assets/aws.png'
import GTRILogo from '../assets/gtri-logo.png'
import KemNuLogo from '../assets/kemnu-logo.png'

const Work = () => {
  const experiences = [
    {
      company: 'Amazon',
      role: 'Software Development Engineer',
      period: 'March 2025 – Present',
      location: 'Seattle, WA',
      logo: AmazonLogo,
      technologies: ['AWS', 'ECS', 'S3', 'DynamoDB', 'API Gateway', 'CloudWatch', 'IaC'],
      summary: 'Developed and maintained highly available AWS infrastructure using Infrastructure as Code. Migrated Tier-1 payment processing APIs to AWS-managed services, reducing latency by 40% and eliminating 30+ days of manual effort. Led the implementation of Amazon Shipping\'s General Rate Increase, driving over $25M in incremental annual revenue. Implemented stress testing and chaos experiments to validate system resilience and improve production reliability.'
    },
    {
      company: 'Amazon Web Services',
      team: 'S3',
      role: 'Software Development Engineer Intern',
      period: 'June 2024 – August 2024',
      location: 'Seattle, WA',
      logo: AWSLogo,
      technologies: ['AWS Step Functions', 'CloudWatch', 'Python', 'Integration Testing'],
      summary: 'Designed and implemented automated integration testing workflows for large-scale decommissioning processes, reducing manual effort by 70%. Enhanced backend workflows using AWS Step Functions, cutting test setup time from 2-3 days to under 4 hours. Developed internal tooling to orchestrate multi-step infrastructure workflows and implemented CloudWatch alarms to detect failures during pre-production testing.'
    },
    {
      company: 'Georgia Tech Research Institute',
      team: 'Automotive LiDAR Team',
      role: 'Undergraduate Student Researcher',
      period: 'August 2021 – May 2023',
      location: 'Atlanta, GA',
      logo: GTRILogo,
      technologies: ['ROS 2.0', 'Python', 'SLAM', 'LiDAR', 'Computer Vision'],
      summary: 'Developed an automotive LiDAR perception system enabling real-time sensor data processing, obstacle detection, and collision avoidance. Implemented SLAM algorithms for autonomous navigation, achieving 65% mapping accuracy with localization precision within 2 cm. Optimized sensor configurations to reduce signal interference by 45% and collaborated across teams to improve vehicle responsiveness by 15%.'
    },
    {
      company: 'KemNu Inc.',
      role: 'Software Engineer Intern',
      period: 'June 2021 – August 2021',
      location: 'Atlanta, GA',
      logo: KemNuLogo,
      technologies: ['React Native', 'React.js', 'Firebase', 'MaterialUI'],
      summary: 'Developed React Native and React.js frontend for an event-driven mobile and web application. Integrated Firebase Realtime Database, reducing response latency by 38% and supporting hundreds of users. Implemented event registration and group chat features used by 50+ organizations and 800+ users.'
    }
  ]

  return (
    <div name='work' className='w-full text-gray-300 bg-[#0a192f] py-20'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Experience</p>
          <p className='py-6'>My professional work experience</p>
        </div>

        <div className='flex flex-col gap-8'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='bg-[#112240] rounded-lg p-6 shadow-lg shadow-[#040c16] hover:shadow-pink-600/20 transition-shadow duration-300'
            >
              <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4'>
                <div className='flex items-start gap-4'>
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className='w-12 h-12 object-contain rounded'
                    />
                  )}
                  <div>
                    <h3 className='text-2xl font-bold text-[#ccd6f6]'>{exp.company}</h3>
                    {exp.team && <p className='text-pink-600 text-sm'>{exp.team}</p>}
                    <p className='text-[#8892b0] text-lg'>{exp.role}</p>
                  </div>
                </div>
                <div className='text-left sm:text-right mt-2 sm:mt-0'>
                  <p className='text-pink-600 font-semibold'>{exp.period}</p>
                  <p className='text-[#8892b0] text-sm'>{exp.location}</p>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 mb-4'>
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='px-3 py-1 text-sm bg-cyan-900/30 text-cyan-400 rounded-full border border-cyan-400/30'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className='text-[#8892b0] leading-relaxed'>
                {exp.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
