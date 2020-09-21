import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Làm việc hiệu quả`}
      description="Công cụ giúp tối ưu hóa hiệu quả công việc <head />">
      <main>
        <div className={styles.hero}>
            <div className={styles.heroInner}>
              <h1 className={styles.heroProjectTagline}>
                <img
                  alt="Beebee with Keytar"
                  className={styles.heroLogo}
                  src={useBaseUrl('img/logo.svg')}
                />
                Hỗ trợ{' '}
                <span className={styles.heroProjectKeywords}>tập trung</span>{' '}
                và{' '}
                <span className={styles.heroProjectKeywords}>tối ưu</span> công việc một cách 
                {' '}
                <span className={styles.heroProjectKeywords}>hiệu quả.</span>
              </h1>
              <div className={styles.indexCtas}>
                <Link
                  className={styles.indexCtasGetStartedButton}
                  to={useBaseUrl('docs/')}>
                  Bắt đầu tìm hiểu
                </Link>
                {/* <span className={styles.indexCtasGitHubButtonWrapper}>
                  <iframe
                    className={styles.indexCtasGitHubButton}
                    src="https://ghbtns.com/github-btn.html?user=facebook&amp;repo=docusaurus&amp;type=star&amp;count=true&amp;size=large"
                    width={160}
                    height={30}
                    title="GitHub Stars"
                  />
                </span> */}
              </div>
            </div>
          </div>
        
          <div className={styles.section}>
          <div className="container text--center margin-bottom--xl">
            <div className="row">
              <div className="col">
                <img
                  className={styles.featureImage}
                  alt="Powered by MDX"
                  src={useBaseUrl('img/undraw_employee.svg')}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  Nhân viên
                </h2>
                <p className="padding-horiz--md">
                  Truy cập nhanh, tiết kiệm thời gian trong việc lấy thông tin liên quan đến công việc.
                </p>
              </div>
              <div className="col">
                <img
                  alt="Built Using React"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_hr.svg')}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  HR
                </h2>
                <p className="padding-horiz--md">
                  Thông báo về hoạt động bên trong, bên ngoài và tạo kết nối giữa các thành viên trong công ty.
                </p>
              </div>
              <div className="col">
                <img
                  alt="Ready for Translations"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_manager.svg')}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  Quản lý
                </h2>
                <p className="padding-horiz--md">
                  Theo dỗi được hoạt động của cá nhân hoặc tổ chức. Đưa ra định hướng phù hợp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
