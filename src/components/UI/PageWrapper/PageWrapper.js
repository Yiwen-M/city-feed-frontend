import { WrapperDiv } from './PageWrapperStyles';

const PageWrapper = (props) => {
  return <WrapperDiv>{props.children}</WrapperDiv>;
};

export default PageWrapper;
