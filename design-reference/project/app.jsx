// App entry — design canvas with the final home (mobile) + desktop home
// + detail pages for both. Each home artboard is interactive: clicking
// the in-page nav swaps to the matching detail page within that artboard.

const { useState, useEffect } = React;

// ---------- Mobile interactive shell ----------
function MobileShell() {
  const [page, setPage] = useState('home');
  const [openProject, setOpenProject] = useState(null);
  const ref = React.useRef(null);
  useEffect(() => { if (ref.current) ref.current.scrollTop = 0; }, [page]);

  const goHome = () => setPage('home');
  const onNav = (key) => setPage(key);
  const openCase = (id) => { setOpenProject(id); setPage('case'); };

  let content;
  if (page === 'home') content = <HomeA onNav={onNav} />;
  else if (page === 'projects') content = <ProjectsPage onBack={goHome} onOpenProject={openCase} />;
  else if (page === 'gallery') content = <GalleryPage onBack={goHome} />;
  else if (page === 'blog') content = <BlogPage onBack={goHome} />;
  else if (page === 'case') content = <CaseStudyPage onBack={() => setPage('projects')} projectId={openProject} />;

  return (
    <div ref={ref} key={page} className="nb-page-enter"
      style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      {content}
    </div>
  );
}

// ---------- Desktop interactive shell ----------
function DesktopShell() {
  const [page, setPage] = useState('home');
  const [openProject, setOpenProject] = useState(null);
  const ref = React.useRef(null);
  useEffect(() => { if (ref.current) ref.current.scrollTop = 0; }, [page]);

  const goHome = () => setPage('home');
  const onNav = (key) => setPage(key);
  const openCase = (id) => { setOpenProject(id); setPage('case'); };

  let content;
  if (page === 'home') content = <DesktopHome onNav={onNav} />;
  else if (page === 'projects') content = <DesktopProjects onBack={goHome} onOpenProject={openCase} />;
  else if (page === 'gallery') content = <DesktopGallery onBack={goHome} />;
  else if (page === 'blog') content = <DesktopBlog onBack={goHome} />;
  else if (page === 'case') content = <DesktopCaseStudy onBack={() => setPage('projects')} projectId={openProject} />;

  return (
    <div ref={ref} key={page} className="nb-page-enter"
      style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      {content}
    </div>
  );
}

function App() {
  return (
    <DesignCanvas>
      <DCSection id="desktop" title="Desktop" subtitle="1280 wide · click in-page links to navigate to detail pages">
        <DCArtboard id="d-home" label="Home" width={1280} height={2900}>
          <DesktopShell />
        </DCArtboard>
        <DCArtboard id="d-projects" label="Projects" width={1280} height={970}>
          <DesktopProjects onBack={() => {}} onOpenProject={() => {}} />
        </DCArtboard>
        <DCArtboard id="d-gallery" label="Gallery" width={1280} height={1400}>
          <DesktopGallery onBack={() => {}} />
        </DCArtboard>
        <DCArtboard id="d-blog" label="Blog" width={1280} height={1400}>
          <DesktopBlog onBack={() => {}} />
        </DCArtboard>
        <DCArtboard id="d-case" label="Case study" width={1280} height={1900}>
          <DesktopCaseStudy onBack={() => {}} />
        </DCArtboard>
      </DCSection>

      <DCSection id="mobile" title="Mobile" subtitle="390 wide · same content, single column · in-page nav still works">
        <DCArtboard id="m-home" label="Home" width={390} height={2920}>
          <MobileShell />
        </DCArtboard>
        <DCArtboard id="m-projects" label="Projects" width={390} height={1220}>
          <ProjectsPage onBack={() => {}} onOpenProject={() => {}} />
        </DCArtboard>
        <DCArtboard id="m-gallery" label="Gallery" width={390} height={1520}>
          <GalleryPage onBack={() => {}} />
        </DCArtboard>
        <DCArtboard id="m-blog" label="Blog" width={390} height={1820}>
          <BlogPage onBack={() => {}} />
        </DCArtboard>
        <DCArtboard id="m-case" label="Case study" width={390} height={2240}>
          <CaseStudyPage onBack={() => {}} />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
