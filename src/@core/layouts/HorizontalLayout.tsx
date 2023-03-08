import {LayoutProps} from "./types";
import {Box, styled} from "@mui/material";
import {BoxProps} from "@mui/material/Box";
import HorizontalLayoutAppBar from "./components/horizontal/appbar";
import Navigation from "./components/horizontal/navigation";

const HorizontalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex',
})

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))


const HorizontalLayout = (props: LayoutProps) => {
  const {children} = props;
  return (
    <HorizontalLayoutWrapper>
      <MainContentWrapper>
        <HorizontalLayoutAppBar {...props} />
        <ContentWrapper>
          <Navigation {...props} navMenu={props.menu || []} />
          {children}
        </ContentWrapper>
      </MainContentWrapper>
    </HorizontalLayoutWrapper>
  )
}

export default HorizontalLayout;
