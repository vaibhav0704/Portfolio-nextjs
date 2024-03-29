import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience';
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchExperiences } from '../utils/getExperiences'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[]
}

const Home: NextPage<Props> = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin md:scrollbar scrollbar-track-gray-400 
    scrollbar-thumb-[#F7AB0A]">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials}/>

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo}/>
      </section>

    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  // reverse the projects array
  projects.reverse();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    revalidate: 60*60,
  }
}
