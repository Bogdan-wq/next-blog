import styled from 'styled-components';
import Link from 'next/link';
import Container from './Container';

const HeaderWrapper = styled.div`
    padding:25px 0;
`

const HeaderNav = styled.nav`
    display:flex;
`

const HeaderLink = styled.a`
    color:#393939;
    font-size:25px;
    transition:all .2s;
    &:not(:first-child) {
        margin-left:25px;
    }
    &:hover {
        color:rgb(140,140,140);
    }
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderNav>
                    <Link href="/">
                        <HeaderLink>
                            Home
                        </HeaderLink>
                    </Link>
                    <Link href="/posts/new">
                        <HeaderLink>
                            New post
                        </HeaderLink>
                    </Link>
                </HeaderNav>
            </Container>
        </HeaderWrapper>
    )
}

export default Header;