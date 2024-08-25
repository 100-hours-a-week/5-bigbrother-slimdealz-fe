import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OutLetContainer from './pages';
import ScrollToTop from './components/utils/scrollToTop/scrollToTop';
import { SearchProvider } from './components/utils/context/searchContext';
import { HeaderHeightProvider } from './components/utils/context/headerHeightContext';
import MainPage from './pages/main';

// 동적 import()를 사용한 페이지 컴포넌트 로드
const CategoryPage = React.lazy(() => import('./pages/category'));
const DetailPage = React.lazy(() => import('./pages/detail'));
const SearchInitialPage = React.lazy(() => import('./pages/search/initial'));
const SearchResultsPage = React.lazy(() => import('./pages/search/results'));
const SignInPage = React.lazy(() => import('./pages/signIn'));
const SignUpPage = React.lazy(() => import('./pages/signUp'));
const UserAlarmPage = React.lazy(() => import('./pages/user/alarm'));
const UserBookmarkPage = React.lazy(() => import('./pages/user/bookmark'));
const UserRecentlyViewPage = React.lazy(
  () => import('./pages/user/recentlyView')
);
const MyMainPage = React.lazy(() => import('./pages/user/myMain'));
const ComingSoon = React.lazy(() => import('./components/utils/comingSoon'));
// const UserInformationPage = React.lazy(() => import('./pages/user/information'));

const Loading = () => (
  <div className="loading-container">
    <video
      src="/assets/loadingmain.webm"
      autoPlay
      loop
      muted
      className="loading-video"
    />
  </div>
);

const Router = () => {
  return (
    <SearchProvider>
      <HeaderHeightProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<OutLetContainer />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/product/:productName" element={<DetailPage />} />
                <Route path="/searchInitial" element={<SearchInitialPage />} />
                <Route
                  path="/searchResults/:keyword"
                  element={<SearchResultsPage />}
                />
                <Route path="/signIn" element={<SignInPage />} />
                <Route path="/signUp" element={<SignUpPage />} />
                <Route path="/myPage" element={<MyMainPage />} />
                <Route path="/alarm" element={<UserAlarmPage />} />
                <Route path="/bookmark" element={<UserBookmarkPage />} />
                {/* <Route path="/information" element={<UserInformationPage />} /> */}
                <Route
                  path="/recentlyView"
                  element={<UserRecentlyViewPage />}
                />
                <Route path="/comingSoon" element={<ComingSoon />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </HeaderHeightProvider>
    </SearchProvider>
  );
};

export default Router;
