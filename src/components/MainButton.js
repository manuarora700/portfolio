import tw, { styled } from 'twin.macro';
import { uniformTransition } from '../../styles/stylesData';

const outlinedBase = tw`bg-transparent`;
const btnBase = tw`p-2 font-mono text-primary-dark capitalize text-sm cursor-pointer hover:(bg-primary-dark text-white)`;
const iconBase = tw`grid place-items-center text-lg`;

const BtnContainer = styled.button(({ outlined }) => [
  btnBase,
  tw`
    flex
    justify-center
    items-center
    border
    border-primary-dark
    rounded-sm
    px-5
    whitespace-nowrap
    bg-white
  `,
  outlined && outlinedBase,
  uniformTransition,
]);

// Only for icon buttons - without labels
const BtnIcon = styled.button(({ outlined }) => [
  btnBase,
  iconBase,
  tw`
    bg-white
    border
    border-primary-dark
    rounded-full
    flex-shrink-0
  `,
  outlined && outlinedBase,
  uniformTransition,
]);

const IconWrapper = styled.span(() => [
  iconBase,
  tw`
    pl-2
  `,
]);

const MainButton = ({ icon, outlined, label, children }) => {
  return icon ? (
    <BtnIcon {...{ outlined }} className="h-fit">
      <div className="h-fit aspect-square">{children}</div>
    </BtnIcon>
  ) : (
    <BtnContainer {...{ outlined }}>
      {label}
      <IconWrapper>{children}</IconWrapper>
    </BtnContainer>
  );
};

export default MainButton;
