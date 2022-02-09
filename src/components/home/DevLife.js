import Image from 'next/image';
import { Accordion } from '..';
import { GridColumn, GridContainer } from '../layout';
import { Heading, Paragraph } from '../typography';

const DevLife = () => {
  return (
    <>
      <Accordion color="blue" title="life as a developer">
        <GridContainer>
          <GridColumn col="span-4">
            <div className="text-center">
              <Image
                src="/images/ash_profile_smile.svg"
                alt="a-sh profile illustration"
                width={250}
                height={250}
              />
            </div>
          </GridColumn>
          <GridColumn col="span-8">
            <div className="hidden md:block">
              <Heading variant="sm">The story of a-sh.</Heading>
            </div>
            <div className="my-4 md:hidden">
              <Heading variant="sm">
                The story of <br />
                a-sh.
              </Heading>
            </div>
            <Paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate eius sunt praesentium voluptates pariatur, ipsa maiores
              nesciunt adipisci incidunt ipsum repudiandae corporis perspiciatis
              sequi assumenda dolores accusamus repellendus deleniti eveniet?
            </Paragraph>
          </GridColumn>
        </GridContainer>
      </Accordion>
    </>
  );
};

export default DevLife;