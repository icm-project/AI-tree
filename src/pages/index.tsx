import Step from "components/molecules/Step";
import React, { Fragment, useEffect } from "react";
import steps from 'components/molecules/StepsData';

function Home() {

  useEffect(() => {
    const impress = (window as any).impress();
    if (impress) {
      impress.init();
    }
  }, [])

  return (
    <Fragment>
      <div id="impress" data-transition-duration="1000">
        {steps.map(step =>
          <Step {...step} />
        )}
      </div>
      <script type="text/javascript" src="/js/impress.js" />
    </Fragment >
  )
}

export default Home;
