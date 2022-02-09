import tw, { styled } from 'twin.macro';
import { headingVariants, textAlignVariants } from '../../../styles/stylesData';

const StyledHeading = styled.h1(({ noGutter }) => [
  tw`
    text-primary-dark
    font-extrabold
    tracking-tight
    md:mb-4
  `,
  noGutter && tw`mb-0 md:mb-0`,
  ({ align = 'left' }) => textAlignVariants[align],
  ({ variant = 'page' }) => headingVariants[variant],
]);

const Heading = ({ noGutter, align, variant, children }) => {
  return (
    <StyledHeading align={align} variant={variant} {...{ noGutter }}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
