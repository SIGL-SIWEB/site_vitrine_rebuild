import { PageIntro } from '@/app/components/PageIntro'
import { ProjectDisplay } from '@/app/project/ProjectDisplay'
import acoo from '@/app/assets/projects/acoo.png'
import agile from '@/app/assets/projects/agile.png'
import cloud from '@/app/assets/projects/cloud.png'
import design from '@/app/assets/projects/design.png'
import iot from '@/app/assets/projects/iot.png'
import pae from '@/app/assets/projects/pae.png'
import pms from '@/app/assets/projects/pms.png'
import ubsi from '@/app/assets/projects/ubsi.png'
import www from '@/app/assets/projects/www.png'

export default async function Project() {
  let projects = [{ client: 'ACOO', logo: acoo, href: 'href', title: 'Object Conception Project', summary: ['From a specification provided by a client, the project is to create an object representation of a solution. This involves understanding the client\'s requirements deeply, conceptualizing the solution into an object-oriented design.'] },
                     { client: 'OPCO', logo: agile, href: 'href', title: 'Agile Methodology', summary: ['Apply the best practices of the SCRUM methodology in a group project where participants have the freedom to choose their roles. This includes fostering an environment where regular communication, iterative progress, and continuous improvement are valued. The goal is to learn and grow as a team through this experience.'] },
                     { client: 'ARCL', logo: cloud, href: 'href', title: 'Cloud Architecture', summary: ['This project involves the creation of a hybrid cloud infrastructure, utilizing the advanced capabilities of Openstack technologies. Openstack, a set of software tools for building and managing cloud computing platforms for public and private clouds, is at the heart of this operation. Complementing Openstack, we will also make use of Platform as a Service (PaaS) Services from renowned cloud service providers such as Amazon Web Services (AWS) and Microsoft Azure. These platforms offer a variety of services including computing power, storage which are fundamental to the effective functioning of the hybrid cloud.'] },
                     { client: 'DESIT/DT', logo: design, href: 'href', title: 'Design Thinking', summary: ['This activity is a practical exercise focused on the concept of innovation, in which we will have the opportunity to collaborate with students from MTI. The purpose of this exercise is to gain a deeper understanding of the innovative processes by actively participating and contributing our own ideas. It\'s a wonderful chance to learn and gain insights into their creative processes, and see how different perspectives can lead to truly exceptional ideas.'] },
                     { client: 'PIT', logo: iot, href: 'href', title: 'IoT', summary: ['The project involves the creation of an Internet of Things (IoT) object. This task is not just about the physical creation and programming of the object, but also encompasses the development of marketing and business processes. In terms of business processes, a business case needs to be created. This will involve an in-depth analysis of the market, a detailed outline of the product\'s unique selling proposition, and a thorough financial forecast. Alongside this, an advertising strategy must be developed. This strategy will need to effectively communicate the product\'s benefits to its target audience, and employ the most effective platforms and mediums to reach this audience. Finally, the project will involve the actual realization of these plans, turning concepts and strategies into tangible action and results.'] },
                     { client: 'PAE', logo: pae, href: 'href', title: 'Practice & Experiment', summary: ['The group project is a collaborative effort involving a multitude of companies. We are fortunate to be partnered with a variety of businesses, which includes the Professional Relationships of EPITA, a prominent institution known for their robust professional partnerships. We also have the privilege of working with Capgemini, a global leader in consulting, technology services and digital transformation. Other significant partnerships include Deloitte Digital, a world-renowned digital consulting company.'] },
                     { client: 'PMS', logo: pms, href: 'href', title: 'Multi-Specialty Project', summary: ['In the SIGL program, students specializing in Security and Network collaborate to devise comprehensive transformation solutions applicable to real-world contexts. This collaboration occurs in the form of a Class Project which is designed to provide students with an in-depth understanding of all possible aspects of Information System Architecture. The project not only bolsters their theoretical knowledge but also gives them practical exposure, thus preparing them for their future careers in the field.'] },
                     { client: 'UBSI', logo: ubsi, href: 'href', title: 'IS Urbanization', summary: ['The objective is to design and develop a streamlined Information System that effectively emulates the operations and behavior of a Retail company. This system will replicate the various functional areas of a typical Retail company, providing a comprehensive platform for understanding and analyzing the interactions and dependencies within such an organization.'] },
                     { client: 'SOCRA', logo: www, href: 'href', title: 'Web Technologies', summary: ['We are engaged in the realization of various web projects, each one meticulously developed using choice-based modern web technology. The technologies we use range from Ruby on Rails (RoR), to Javascript, a staple in web development for creating interactive web elements. We also utilize Golang, a statically-typed compiled language known for its scalability. Our diverse technological repertoire ensures that we can optimally cater to the unique requirements of each project.'] },
                    ]

  return (
    <>
      <PageIntro
        eyebrow="Projects - SIGL"
        title="Innovative Solutions for Practical Challenges."
      >
        <p>
        Explore our array of projects designed to address real-world challenges and push the boundaries of technological innovation.
        From cloud architecture to IoT implementation, we strive to deliver impactful solutions that drive efficiency and value.
        </p>
      </PageIntro>

      <ProjectDisplay projects={projects} />
    </>
  )
}
