import * as React from 'react';
import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css"

function PageSwaggerTest(props) {
  const SwaggerUI = dynamic(import('swagger-ui-react'), {ssr: false})
  return (
    // @ts-ignore
    <SwaggerUI url="https://raw.githubusercontent.com/application-research/estuary/master/docs/swagger.json" docExpansion="list" deepLinking={true} />
  );
}

export default PageSwaggerTest;

