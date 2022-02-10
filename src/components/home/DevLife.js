import Image from 'next/image';
import { Collapsible } from '..';
import { GridColumn, GridContainer } from '../layout';
import { Heading, Icon, Paragraph, SubHeading2 } from '../typography';
import { HiOutlineSparkles } from 'react-icons/hi';

const DevLife = () => {
  return (
    <>
      <Collapsible color="blue" title="life as a developer">
        <GridContainer flowCol>
          <GridColumn col="span-4" start="start-9">
            <div className="text-center my-4 md:my-0 w-full md:grid">
              <Image
                src="/images/des_dev_duality.svg"
                alt="duality illustration"
                width={250}
                height={250}
              />
            </div>
          </GridColumn>
          <GridColumn col="span-8" start="start-1">
            <Heading variant="sm" align="autoL">
              Designer<span className="em-dash-title">---</span>Developer
              Duality
            </Heading>
            <SubHeading2 align="autoL">The good and the bad</SubHeading2>
            <Paragraph>
              During planning and development, I tend to spend <em>extra </em>
              time deciding on the right font, colours and branding for my
              project. Perhaps, that is the downside of having this duality. But
              on the other hand, I enjoy problem-solving, translating subject
              matters by integrating the technical and the visual aspects of
              achieving a well-presented UI and effective UX in every project.
            </Paragraph>
            <Paragraph>
              Having experience working in a team and independently, I work
              better when all my folders and files are well organised and named
              (including variables!). In addition, I carefully evaluate how I
              write my codes so that others may easily pick them up afterwards.
            </Paragraph>
            <Paragraph>
              I am also driven by curiosity, eager to learn new things. Somehow,
              I find it enjoyable to read other people&apos;s source code to
              figure out how things work. Especially if it would help me code
              better and improve productivity. Hence, I value other
              people&apos;s constructive feedback and critiques
              <span className="em-dash">---</span>they are precious!
              <Icon nudgeTop>
                <HiOutlineSparkles />
              </Icon>
            </Paragraph>
          </GridColumn>
        </GridContainer>
      </Collapsible>
    </>
  );
};

export default DevLife;
