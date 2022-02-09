import tw, { styled } from 'twin.macro';
import { layoutVariants } from '../../../styles/stylesData';

const Wrapper = tw.article`
  relative
`;

const Layout = styled.div(() => [
  tw`
    bg-red-300/20
  `,
  ({ layout = 'grid' }) => layoutVariants[layout],
]);

const GridContainer = ({ layout, children }) => {
  return (
    <Wrapper>
      <Layout layout={layout}>{children}</Layout>
    </Wrapper>
  );
};

export default GridContainer;
