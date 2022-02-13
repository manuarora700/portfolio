import tw, { styled } from 'twin.macro';
import { Section } from '../layout';
import ProjectCard from './ProjectCard';

const Wrapper = styled.div(() => [
  tw`
  
  `,
]);

const ProjectList = () => {
  return (
    <Section>
      <ProjectCard>EACH PROJECT</ProjectCard>
    </Section>
  );
};

export default ProjectList;
