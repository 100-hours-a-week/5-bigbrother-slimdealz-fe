import styled from 'styled-components';
import Footer from '../components/layoutWrapper/footer';
import Header from '../components/layoutWrapper/header';
import { Outlet, useLocation } from 'react-router-dom';
import { useLayoutEffect, useRef, useState } from 'react';

const Container = styled.div<{ paddingTop: number }>`
  width: 390px;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: ${({ paddingTop }) => `${paddingTop}px`};
  padding-bottom: 50px;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: var(--background-color);
`;

const OutLetContainer = () => {
  const location = useLocation();
  const [paddingTop, setPaddingTop] = useState(120);
  const headerRef = useRef<HTMLDivElement>(null);

  let pageTitle = '';

  useLayoutEffect(() => {
    if (location.pathname === '/main') {
      setPaddingTop(120);
    } else if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      setPaddingTop(headerHeight);
    }
  }, [location.pathname]);

  if (location.pathname.includes('/bookmark')) {
    pageTitle = '북마크';
  } else if (location.pathname.includes('/myPage')) {
    pageTitle = '마이페이지';
  } else if (location.pathname.includes('/alarm')) {
    pageTitle = '알람';
  } else if (location.pathname.includes('/information')) {
    pageTitle = '회원가입 추가 정보';
  }

  return (
    <>
      <Header pageTitle={pageTitle} ref={headerRef} words={[]} />
      <Container paddingTop={paddingTop}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default OutLetContainer;
