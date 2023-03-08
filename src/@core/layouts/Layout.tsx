import {LayoutProps} from "./types";
import HorizontalLayout from "./HorizontalLayout";
import VerticalLayout from "./VerticalLayout";

const Layout = (props: LayoutProps) => {
  const {config} = props;

  if (config.layout === 'horizontal') {
    return <HorizontalLayout {...props} />;
  }

  return <VerticalLayout {...props} />;
}

export default Layout;
