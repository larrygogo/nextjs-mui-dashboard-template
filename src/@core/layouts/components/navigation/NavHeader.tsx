import {styled} from "@mui/material/styles";
import Box, {BoxProps} from "@mui/material/Box";
import Link from "next/link";
import {Settings} from "../../../context/types";

const NavHeaderWrapper = styled(Box)<BoxProps>((theme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  minHeight: '64px',
  width: '100%',
  padding: '16px 20px',
})

type Props = {
  hidden: boolean
  settings: Settings
  saveSettings: (values: Settings) => void
}

const NavHeader = (props: Props) => {
  const {settings} = props;

  const {logo} = settings;

  return <NavHeaderWrapper>
    <Link href="/" passHref>
      <StyledLink>
        <img src={logo} alt="logo" width="100" height="32"/>
      </StyledLink>
    </Link>
  </NavHeaderWrapper>
}

export default NavHeader
