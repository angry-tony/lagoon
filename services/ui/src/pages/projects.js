import React from 'react';
import Head from 'next/head';
import { Query } from 'react-apollo';
import MainLayout from 'layouts/main';
import AllProjectsQuery from 'lib/query/AllProjects';
import LoadingPage from 'pages/_loading';
import ErrorPage from 'pages/_error';
import Projects from 'components/Projects';
import { bp, color, fontSize } from 'lib/variables';

const ProjectsPage = () => (
  <>
    <Head>
      <title>Projects</title>
    </Head>
    <Query query={AllProjectsQuery} displayName="AllProjectsQuery">
      {({ loading, error, data }) => {
        if (loading) {
          return <LoadingPage />;
        }

        if (error) {
          return <ErrorPage statusCode={500} errorMessage={error.toString()} />;
        }

        return (
          <MainLayout>
            <div className="content-wrapper">
              <h2>Projects</h2>
              <div className="content">
                <Projects projects={data.allProjects} />
              </div>
            </div>
            <style jsx>{`
              .content-wrapper {
                h2 {
                  margin: 38px calc((100vw / 16) * 1) 0;
                  @media ${bp.wideUp} {
                    margin: 62px calc((100vw / 16) * 2) 0;
                  }
                  @media ${bp.extraWideUp} {
                    margin: 62px calc((100vw / 16) * 3) 0;
                  }
                }
                .content {
                  margin: 38px calc((100vw / 16) * 1);
                  @media ${bp.wideUp} {
                    margin: 38px calc((100vw / 16) * 2);
                  }
                  @media ${bp.extraWideUp} {
                    margin: 38px calc((100vw / 16) * 3);
                  }
                }
              }
            `}</style>
          </MainLayout>
        );
      }}
    </Query>
  </>
);

export default ProjectsPage;
